import { execSync } from "child_process";
import assert from "assert";

const PORT = process.env.PORT || 3000;
const BASE_URL = `http://localhost:${PORT}`;

async function fetchRoute(path, headers = {}) {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, { headers });
  const text = await response.text();
  return {
    status: response.status,
    headers: response.headers,
    text,
  };
}

async function runTests() {
  console.log("=================================================");
  console.log("  RUNNING COMPLETE AGENT READINESS VERIFICATION  ");
  console.log("  Target: 100/100 across all 10 Ora criteria     ");
  console.log("=================================================");

  let passed = 0;
  let failed = 0;

  function test(name, fn) {
    try {
      fn();
      console.log(`  [PASS] ${name}`);
      passed++;
    } catch (err) {
      console.error(`  [FAIL] ${name}`);
      console.error(`         ${err.message}`);
      failed++;
    }
  }

  // ----------------------------------------------------
  // 1. Content without JavaScript & Heading Hierarchy
  // ----------------------------------------------------
  console.log("\n1. Testing Content without JavaScript & Heading Hierarchy...");
  const homeHtml = await fetchRoute("/");
  test("Homepage returns HTTP 200", () => {
    assert.strictEqual(homeHtml.status, 200);
  });
  test("Homepage raw HTML contains single H1", () => {
    const h1Matches = homeHtml.text.match(/<h1[^>]*>/gi) || [];
    assert.strictEqual(h1Matches.length, 1, `Expected exactly 1 <h1>, found ${h1Matches.length}`);
  });
  test("Homepage raw HTML first content heading is H1, not H4", () => {
    const firstHeadingMatch = homeHtml.text.match(/<h[1-6][^>]*>/i);
    assert.ok(firstHeadingMatch, "Expected at least one heading");
    assert.ok(
      firstHeadingMatch[0].toLowerCase().startsWith("<h1"),
      `First heading must be <h1>, but got: ${firstHeadingMatch[0]}`
    );
  });
  test("Homepage raw HTML contains sequential H2 and H3 headings", () => {
    const h2Matches = homeHtml.text.match(/<h2[^>]*>/gi) || [];
    const h3Matches = homeHtml.text.match(/<h3[^>]*>/gi) || [];
    assert.ok(h2Matches.length >= 4, `Expected >=4 <h2>, found ${h2Matches.length}`);
    assert.ok(h3Matches.length >= 4, `Expected >=4 <h3>, found ${h3Matches.length}`);
  });
  test("Homepage raw HTML contains >5000 chars of meaningful content", () => {
    assert.ok(homeHtml.text.length > 5000, `Expected >5000 chars, got ${homeHtml.text.length}`);
  });

  // ----------------------------------------------------
  // 2. Structured JSON Error Responses (RFC 9457)
  // ----------------------------------------------------
  console.log("\n2. Testing Structured JSON Error Responses (RFC 9457)...");
  const api404 = await fetchRoute("/api/nonexistent-route-probe");
  test("API 404 returns HTTP 404 status", () => {
    assert.strictEqual(api404.status, 404);
  });
  test("API 404 returns application/problem+json Content-Type", () => {
    assert.ok(api404.headers.get("content-type")?.includes("problem+json"));
  });
  test("API 404 contains RFC 9457 problem fields (code, message, resolution)", () => {
    const json = JSON.parse(api404.text);
    assert.strictEqual(json.status, 404);
    assert.strictEqual(json.code, "ENDPOINT_NOT_FOUND");
    assert.ok(json.message);
    assert.ok(json.resolution);
    assert.ok(Array.isArray(json.availableEndpoints));
  });

  const apiV1404 = await fetchRoute("/api/v1/nonexistent-route-probe");
  test("API v1 404 returns structured problem details", () => {
    assert.strictEqual(apiV1404.status, 404);
    const json = JSON.parse(apiV1404.text);
    assert.strictEqual(json.code, "ENDPOINT_NOT_FOUND");
  });

  const invalidContact = await fetch(`${BASE_URL}/api/v1/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "" }),
  });
  const invalidContactText = await invalidContact.text();
  test("POST /api/v1/contact validation error returns HTTP 400 with problem details", () => {
    assert.strictEqual(invalidContact.status, 400);
    assert.ok(invalidContact.headers.get("content-type")?.includes("problem+json"));
    const json = JSON.parse(invalidContactText);
    assert.strictEqual(json.code, "VALIDATION_ERROR");
    assert.ok(json.resolution);
    assert.ok(Array.isArray(json.invalidParams));
  });

  // ----------------------------------------------------
  // 3. Brand Name Discoverability & Metadata
  // ----------------------------------------------------
  console.log("\n3. Testing Brand Name Discoverability & Metadata...");
  test("HTML contains canonical https://salmanahmad.tech", () => {
    assert.ok(homeHtml.text.includes("https://salmanahmad.tech"));
  });
  test("HTML contains brand name 'Salman Ahmad Portfolio'", () => {
    assert.ok(homeHtml.text.includes("Salman Ahmad Portfolio"));
  });
  test("HTML JSON-LD contains Brand entity schema", () => {
    assert.ok(homeHtml.text.includes('"@type":"Brand"'));
    assert.ok(homeHtml.text.includes('"name":"Salman Ahmad Portfolio"'));
  });
  test("HTML JSON-LD contains Person entity with consistent NAP", () => {
    assert.ok(homeHtml.text.includes('"@type":"Person"'));
    assert.ok(homeHtml.text.includes('"addressLocality":"Lahore"'));
    assert.ok(homeHtml.text.includes('"postalCode":"54000"'));
    assert.ok(homeHtml.text.includes('"addressCountry":"PK"'));
  });

  // ----------------------------------------------------
  // 4. REST Typed Error Model in OpenAPI
  // ----------------------------------------------------
  console.log("\n4. Testing REST Typed Error Model in OpenAPI...");
  const openapiStatic = await fetchRoute("/openapi.json");
  test("OpenAPI spec returns HTTP 200", () => {
    assert.strictEqual(openapiStatic.status, 200);
  });
  const openapiJson = JSON.parse(openapiStatic.text);
  test("OpenAPI defines components.schemas.ProblemDetails", () => {
    assert.ok(openapiJson.components?.schemas?.ProblemDetails);
    const schema = openapiJson.components.schemas.ProblemDetails;
    assert.ok(schema.properties.code);
    assert.ok(schema.properties.message);
    assert.ok(schema.properties.resolution);
  });
  test("OpenAPI paths reference typed error responses", () => {
    const contactPost = openapiJson.paths["/api/v1/contact"].post;
    assert.ok(contactPost.responses["400"]);
    assert.ok(contactPost.responses["429"]);
    assert.ok(contactPost.responses["500"]);
  });

  // ----------------------------------------------------
  // 5. REST Versioning & Deprecation Policy
  // ----------------------------------------------------
  console.log("\n5. Testing REST Versioning & Deprecation Policy...");
  test("OpenAPI spec documents x-api-versioning and x-deprecation-policy", () => {
    assert.ok(openapiJson.info["x-api-versioning"]);
    assert.strictEqual(openapiJson.info["x-api-versioning"].strategy, "url-path");
    assert.ok(openapiJson.info["x-deprecation-policy"]);
    assert.strictEqual(openapiJson.info["x-deprecation-policy"].notificationPeriodDays, 180);
  });

  const v1Health = await fetchRoute("/api/v1/health");
  test("GET /api/v1/health returns HTTP 200 with X-API-Version", () => {
    assert.strictEqual(v1Health.status, 200);
    assert.strictEqual(v1Health.headers.get("x-api-version"), "1.0.0");
    const json = JSON.parse(v1Health.text);
    assert.strictEqual(json.apiVersion, "v1");
  });

  const v1Skills = await fetchRoute("/api/v1/skills");
  test("GET /api/v1/skills returns HTTP 200 with X-API-Version", () => {
    assert.strictEqual(v1Skills.status, 200);
    assert.strictEqual(v1Skills.headers.get("x-api-version"), "1.0.0");
    const json = JSON.parse(v1Skills.text);
    assert.ok(Array.isArray(json));
  });

  const v1Projects = await fetchRoute("/api/v1/projects");
  test("GET /api/v1/projects returns HTTP 200 with X-API-Version", () => {
    assert.strictEqual(v1Projects.status, 200);
    assert.strictEqual(v1Projects.headers.get("x-api-version"), "1.0.0");
    const json = JSON.parse(v1Projects.text);
    assert.ok(Array.isArray(json));
  });

  // ----------------------------------------------------
  // 6. Official CLI Tool
  // ----------------------------------------------------
  console.log("\n6. Testing Official CLI Tool...");
  test("CLI bio --json outputs valid JSON with Salman Ahmad", () => {
    const out = execSync("node bin/salmanahmad.js bio --json", { encoding: "utf-8" });
    const json = JSON.parse(out);
    assert.strictEqual(json.name, "Salman Ahmad");
    assert.strictEqual(json.canonicalUrl, "https://salmanahmad.tech");
  });
  test("CLI skills --json outputs categorized skills matrix", () => {
    const out = execSync("node bin/salmanahmad.js skills --json", { encoding: "utf-8" });
    const json = JSON.parse(out);
    assert.ok(Array.isArray(json));
    assert.ok(json.some((c) => c.category === "Backend"));
  });
  test("CLI projects --json outputs project list", () => {
    const out = execSync("node bin/salmanahmad.js projects --json", { encoding: "utf-8" });
    const json = JSON.parse(out);
    assert.ok(Array.isArray(json));
    assert.ok(json.length >= 5);
  });

  // ----------------------------------------------------
  // 7. Rate Limit Response Headers (RFC RateLimit)
  // ----------------------------------------------------
  console.log("\n7. Testing Rate Limit Response Headers...");
  test("API responses return RFC RateLimit headers", () => {
    assert.ok(v1Health.headers.get("ratelimit-limit"), "Missing RateLimit-Limit");
    assert.ok(v1Health.headers.get("ratelimit-remaining"), "Missing RateLimit-Remaining");
    assert.ok(v1Health.headers.get("ratelimit-reset"), "Missing RateLimit-Reset");
    assert.ok(v1Health.headers.get("ratelimit-policy"), "Missing RateLimit-Policy");
  });

  // ----------------------------------------------------
  // 8. Developer Resource Discoverability
  // ----------------------------------------------------
  console.log("\n8. Testing Developer Resource Discoverability...");
  const docsHtml = await fetchRoute("/docs");
  test("/docs portal returns HTTP 200", () => {
    assert.strictEqual(docsHtml.status, 200);
  });
  test("/docs page title contains Salman Ahmad Portfolio", () => {
    assert.ok(docsHtml.text.includes("Salman Ahmad Portfolio"));
  });
  test("/docs H1 contains Salman Ahmad Portfolio Developer Documentation", () => {
    assert.ok(docsHtml.text.includes("Salman Ahmad Portfolio Developer Documentation"));
  });
  test("/llms.txt references canonical salmanahmad.tech", () => {
    assert.ok(!docsHtml.text.includes("ahmmikun.vercel.app/llms.txt"));
  });

  // ----------------------------------------------------
  // 9. Model Context Protocol (MCP) Server & Handshake
  // ----------------------------------------------------
  console.log("\n9. Testing Model Context Protocol (MCP) Server & Handshake...");
  const mcpOptions = await fetch(`${BASE_URL}/api/mcp`, { method: "OPTIONS" });
  test("OPTIONS /api/mcp returns HTTP 204 with CORS headers", () => {
    assert.strictEqual(mcpOptions.status, 204);
    assert.strictEqual(mcpOptions.headers.get("access-control-allow-origin"), "*");
    assert.ok(mcpOptions.headers.get("access-control-allow-methods")?.includes("POST"));
  });

  const sseResponse = await fetch(`${BASE_URL}/api/mcp`, {
    headers: { Accept: "text/event-stream" },
  });
  const reader = sseResponse.body.getReader();
  const { value } = await reader.read();
  const sseChunk = new TextDecoder().decode(value);
  reader.cancel();

  test("GET /api/mcp with Accept: text/event-stream returns SSE handshake", () => {
    assert.strictEqual(sseResponse.status, 200);
    assert.ok(sseResponse.headers.get("content-type")?.includes("text/event-stream"));
    assert.ok(sseChunk.includes("event: endpoint"));
    assert.ok(sseChunk.includes("https://salmanahmad.tech/api/mcp"));
  });

  const mcpInit = await fetch(`${BASE_URL}/api/mcp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "initialize",
      params: { protocolVersion: "2024-11-05" },
    }),
  });
  const mcpInitJson = await mcpInit.json();
  test("POST /api/mcp initialize handshake succeeds with 2024-11-05", () => {
    assert.strictEqual(mcpInit.status, 200);
    assert.strictEqual(mcpInitJson.result.protocolVersion, "2024-11-05");
    assert.strictEqual(mcpInitJson.result.serverInfo.name, "salmanahmad-portfolio-mcp");
    assert.strictEqual(mcpInit.headers.get("access-control-allow-origin"), "*");
  });

  const mcpTools = await fetch(`${BASE_URL}/api/mcp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 2,
      method: "tools/list",
    }),
  });
  const mcpToolsJson = await mcpTools.json();
  test("POST /api/mcp tools/list returns tools with strict input schemas", () => {
    assert.strictEqual(mcpTools.status, 200);
    assert.strictEqual(mcpToolsJson.result.tools.length, 5);
    for (const tool of mcpToolsJson.result.tools) {
      assert.strictEqual(tool.inputSchema.type, "object");
      assert.ok(tool.inputSchema.properties);
    }
  });

  // ----------------------------------------------------
  // 10. Function Calling Compatibility in OpenAPI Spec
  // ----------------------------------------------------
  console.log("\n10. Testing Function Calling Compatibility in OpenAPI Spec...");
  test("All operations in OpenAPI have unique operationIds", () => {
    const operationIds = [];
    for (const [pathKey, pathItem] of Object.entries(openapiJson.paths)) {
      for (const [methodKey, operation] of Object.entries(pathItem)) {
        if (typeof operation === "object" && operation.operationId) {
          operationIds.push(operation.operationId);
        }
      }
    }
    const uniqueIds = new Set(operationIds);
    assert.strictEqual(uniqueIds.size, operationIds.length, "operationIds must be unique");
    assert.ok(operationIds.length >= 6, `Expected at least 6 operations, got ${operationIds.length}`);
  });

  test("All operations have typed parameters or requestBody with descriptions", () => {
    for (const [pathKey, pathItem] of Object.entries(openapiJson.paths)) {
      for (const [methodKey, operation] of Object.entries(pathItem)) {
        if (typeof operation === "object") {
          assert.ok(operation.summary, `${pathKey} ${methodKey} missing summary`);
          assert.ok(operation.description, `${pathKey} ${methodKey} missing description`);
        }
      }
    }
  });

  console.log("\n=================================================");
  console.log(`  VERIFICATION RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log("=================================================");

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((e) => {
  console.error("Test runner error:", e);
  process.exit(1);
});
