import http from "http";
import assert from "assert";

const PORT = 3000;
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
  console.log("  RUNNING AGENT READINESS & ORA AUDIT VERIFICATION");
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

  // 1. Agent-friendly 404s
  console.log("\n1. Testing Agent-Friendly 404s...");
  const html404 = await fetchRoute("/sector-unknown-404-check");
  test("HTML 404 returns real HTTP 404 status", () => {
    assert.strictEqual(html404.status, 404, `Expected status 404, got ${html404.status}`);
  });

  const md404 = await fetchRoute("/sector-unknown-404-check", { Accept: "text/markdown" });
  test("Markdown 404 returns HTTP 404 status", () => {
    assert.strictEqual(md404.status, 404, `Expected status 404, got ${md404.status}`);
  });
  test("Markdown 404 Content-Type is text/markdown", () => {
    assert.ok(md404.headers.get("content-type")?.includes("text/markdown"), `Got ${md404.headers.get("content-type")}`);
  });
  test("Markdown 404 contains Vary: Accept header", () => {
    const vary = md404.headers.get("vary") || "";
    assert.ok(vary.toLowerCase().includes("accept"), `Vary header must include Accept, got: "${vary}"`);
  });
  test("Markdown 404 body contains agent recovery links", () => {
    assert.ok(md404.text.includes("/sitemap.xml"), "Missing /sitemap.xml link");
    assert.ok(md404.text.includes("/llms.txt"), "Missing /llms.txt link");
    assert.ok(md404.text.includes("/openapi.json"), "Missing /openapi.json link");
  });

  // 2. Content without JavaScript & Heading Hierarchy
  console.log("\n2. Testing SSR Content & Heading Hierarchy...");
  const homeHtml = await fetchRoute("/");
  test("Homepage returns HTTP 200", () => {
    assert.strictEqual(homeHtml.status, 200);
  });
  test("Homepage raw HTML contains single H1", () => {
    const h1Matches = homeHtml.text.match(/<h1[^>]*>/gi) || [];
    assert.strictEqual(h1Matches.length, 1, `Expected 1 <h1>, found ${h1Matches.length}`);
  });
  test("Homepage raw HTML contains structured H2 headings", () => {
    const h2Matches = homeHtml.text.match(/<h2[^>]*>/gi) || [];
    assert.ok(h2Matches.length >= 4, `Expected at least 4 <h2>, found ${h2Matches.length}`);
  });
  test("Homepage raw HTML contains H3 headings", () => {
    const h3Matches = homeHtml.text.match(/<h3[^>]*>/gi) || [];
    assert.ok(h3Matches.length >= 3, `Expected at least 3 <h3>, found ${h3Matches.length}`);
  });
  test("Homepage raw HTML contains >2500 characters", () => {
    assert.ok(homeHtml.text.length > 2500, `Expected >2500 chars, got ${homeHtml.text.length}`);
  });

  // 3. Markdown Content Negotiation (acceptmarkdown.com)
  console.log("\n3. Testing Markdown Content Negotiation (acceptmarkdown.com)...");
  const homeMd = await fetchRoute("/", { Accept: "text/markdown" });
  test("Accept: text/markdown on / returns HTTP 200", () => {
    assert.strictEqual(homeMd.status, 200);
  });
  test("Accept: text/markdown on / returns Content-Type text/markdown", () => {
    assert.ok(homeMd.headers.get("content-type")?.includes("text/markdown"));
  });
  test("Accept: text/markdown on / returns Vary: Accept, Accept-Encoding", () => {
    const vary = homeMd.headers.get("vary") || "";
    assert.ok(vary.toLowerCase().includes("accept"), `Vary must include Accept, got: "${vary}"`);
  });
  test("Accept: text/markdown on / returns clean markdown text", () => {
    assert.ok(homeMd.text.startsWith("# Salman Ahmad") || homeMd.text.includes("# Salman Ahmad"));
  });

  const aboutMd = await fetchRoute("/about", { Accept: "text/markdown" });
  test("Accept: text/markdown on /about returns markdown", () => {
    assert.strictEqual(aboutMd.status, 200);
    assert.ok(aboutMd.headers.get("content-type")?.includes("text/markdown"));
    assert.ok(aboutMd.text.includes("About Salman Ahmad"));
  });

  // 4. Developer Resource Discoverability
  console.log("\n4. Testing Developer Resource Discoverability...");
  const docsHtml = await fetchRoute("/docs");
  test("/docs Developer Portal returns HTTP 200", () => {
    assert.strictEqual(docsHtml.status, 200);
  });

  const openapiStatic = await fetchRoute("/openapi.json");
  test("/openapi.json returns valid OpenAPI 3.1.0", () => {
    assert.strictEqual(openapiStatic.status, 200);
    const json = JSON.parse(openapiStatic.text);
    assert.strictEqual(json.openapi, "3.1.0");
    assert.ok(json.paths["/api/contact"]);
    assert.ok(json.paths["/api/mcp"]);
  });

  const openapiApi = await fetchRoute("/api/openapi.json");
  test("/api/openapi.json returns valid JSON", () => {
    assert.strictEqual(openapiApi.status, 200);
    const json = JSON.parse(openapiApi.text);
    assert.strictEqual(json.openapi, "3.1.0");
  });

  const mcpManifest = await fetchRoute("/.well-known/mcp.json");
  test("/.well-known/mcp.json returns valid MCP manifest", () => {
    assert.strictEqual(mcpManifest.status, 200);
    const json = JSON.parse(mcpManifest.text);
    assert.strictEqual(json.name, "ahmmikun-portfolio-mcp");
    assert.strictEqual(json.protocolVersion, "2024-11-05");
  });

  const mcpRoute = await fetchRoute("/.well-known/mcp");
  test("/.well-known/mcp returns valid MCP discovery", () => {
    assert.strictEqual(mcpRoute.status, 200);
    const json = JSON.parse(mcpRoute.text);
    assert.strictEqual(json.name, "ahmmikun-portfolio-mcp");
  });

  // 5. Brand Name Discoverability & Metadata
  console.log("\n5. Testing Brand Name Discoverability & Metadata...");
  test("HTML title contains 'Salman Ahmad'", () => {
    assert.ok(homeHtml.text.includes("Salman Ahmad"));
  });
  test("HTML contains canonical link", () => {
    assert.ok(homeHtml.text.includes('rel="canonical"') || homeHtml.text.includes('https://ahmmikun.vercel.app'));
  });
  test("HTML contains <html lang=\"en\">", () => {
    assert.ok(homeHtml.text.includes('lang="en"'));
  });
  test("HTML contains og:image meta tag", () => {
    assert.ok(homeHtml.text.includes('property="og:image"') || homeHtml.text.includes('og-image'));
  });
  test("HTML contains og:type meta tag", () => {
    assert.ok(homeHtml.text.includes('property="og:type"') || homeHtml.text.includes('website'));
  });

  // 6. Agent Instruction / When-to-Use
  console.log("\n6. Testing Agent Instructions & When-To-Use Guidance...");
  const llmsTxt = await fetchRoute("/llms.txt");
  test("/llms.txt contains 'When to Use This / Agent Guidance'", () => {
    assert.strictEqual(llmsTxt.status, 200);
    assert.ok(llmsTxt.text.includes("When to Use This / Agent Guidance") || llmsTxt.text.includes("Agent Guidance"));
    assert.ok(llmsTxt.text.includes("Next.js"));
  });

  const llmsFullTxt = await fetchRoute("/llms-full.txt");
  test("/llms-full.txt contains full knowledge base", () => {
    assert.strictEqual(llmsFullTxt.status, 200);
    assert.ok(llmsFullTxt.text.includes("Model Context Protocol"));
  });

  const agentInstructions = await fetchRoute("/.well-known/agent-instructions");
  test("/.well-known/agent-instructions exists and returns directives", () => {
    assert.strictEqual(agentInstructions.status, 200);
    assert.ok(agentInstructions.text.includes("Agent Instructions"));
  });

  // 7. Sitemap & Robots
  console.log("\n7. Testing Sitemap & Robots...");
  const sitemapXml = await fetchRoute("/sitemap.xml");
  test("/sitemap.xml returns valid XML with all indexable routes", () => {
    assert.strictEqual(sitemapXml.status, 200);
    assert.ok(sitemapXml.text.includes("<urlset") || sitemapXml.text.includes("xmlns"));
    assert.ok(sitemapXml.text.includes("/about"));
    assert.ok(sitemapXml.text.includes("/projects"));
    assert.ok(sitemapXml.text.includes("/skills"));
    assert.ok(sitemapXml.text.includes("/docs"));
    assert.ok(sitemapXml.text.includes("/contact"));
    assert.ok(sitemapXml.text.includes("/privacy"));
  });

  const robotsTxt = await fetchRoute("/robots.txt");
  test("/robots.txt points to sitemap.xml", () => {
    assert.strictEqual(robotsTxt.status, 200);
    assert.ok(robotsTxt.text.includes("sitemap.xml"));
  });

  // 8. JSON-LD Structured Data
  console.log("\n8. Testing JSON-LD Structured Data...");
  test("HTML contains valid JSON-LD Person schema with name, description, sameAs", () => {
    assert.ok(homeHtml.text.includes('"@type":"Person"'));
    assert.ok(homeHtml.text.includes('"name":"Salman Ahmad"'));
    assert.ok(homeHtml.text.includes('"description":'));
    assert.ok(homeHtml.text.includes('"sameAs":'));
    assert.ok(homeHtml.text.includes('"knowsAbout":'));
  });

  // 9. Trust Anchor Pages
  console.log("\n9. Testing Trust Anchor Pages...");
  const aboutHtml = await fetchRoute("/about");
  test("/about page renders >1500 chars of content", () => {
    assert.strictEqual(aboutHtml.status, 200);
    assert.ok(aboutHtml.text.length > 1500, `Expected >1500 chars, got ${aboutHtml.text.length}`);
  });

  const contactHtml = await fetchRoute("/contact");
  test("/contact page renders >1000 chars of content", () => {
    assert.strictEqual(contactHtml.status, 200);
    assert.ok(contactHtml.text.length > 1000, `Expected >1000 chars, got ${contactHtml.text.length}`);
  });

  const privacyHtml = await fetchRoute("/privacy");
  test("/privacy page renders >2000 chars of content", () => {
    assert.strictEqual(privacyHtml.status, 200);
    assert.ok(privacyHtml.text.length > 2000, `Expected >2000 chars, got ${privacyHtml.text.length}`);
  });

  // 10. Model Context Protocol (MCP) Server & Live Handshake
  console.log("\n10. Testing Model Context Protocol (MCP) Server...");
  const mcpGet = await fetchRoute("/api/mcp");
  test("GET /api/mcp returns discovery metadata", () => {
    assert.strictEqual(mcpGet.status, 200);
    const json = JSON.parse(mcpGet.text);
    assert.strictEqual(json.name, "ahmmikun-portfolio-mcp");
    assert.strictEqual(json.protocolVersion, "2024-11-05");
    assert.ok(json.capabilities.tools);
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
  test("POST /api/mcp initialize handshake succeeds", () => {
    assert.strictEqual(mcpInit.status, 200);
    assert.strictEqual(mcpInitJson.result.protocolVersion, "2024-11-05");
    assert.strictEqual(mcpInitJson.result.serverInfo.name, "ahmmikun-portfolio-mcp");
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
  test("POST /api/mcp tools/list returns 5 portfolio tools", () => {
    assert.strictEqual(mcpTools.status, 200);
    assert.strictEqual(mcpToolsJson.result.tools.length, 5);
    const toolNames = mcpToolsJson.result.tools.map((t) => t.name);
    assert.ok(toolNames.includes("get_portfolio_summary"));
    assert.ok(toolNames.includes("get_skills"));
    assert.ok(toolNames.includes("get_projects"));
    assert.ok(toolNames.includes("get_developer_resources"));
    assert.ok(toolNames.includes("send_contact_message"));
  });

  const mcpCallSummary = await fetch(`${BASE_URL}/api/mcp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 3,
      method: "tools/call",
      params: {
        name: "get_portfolio_summary",
        arguments: {},
      },
    }),
  });
  const mcpCallSummaryJson = await mcpCallSummary.json();
  test("POST /api/mcp tools/call get_portfolio_summary returns summary", () => {
    assert.strictEqual(mcpCallSummary.status, 200);
    const text = mcpCallSummaryJson.result.content[0].text;
    assert.ok(text.includes("Salman Ahmad"));
    assert.ok(text.includes("ahmmikun"));
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
