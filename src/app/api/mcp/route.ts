import { NextRequest, NextResponse } from "next/server";
import { skillsData } from "../skills/route";
import { projectsData } from "../projects/route";
import { checkRateLimit } from "@/lib/rate-limit";

const SERVER_INFO = {
  name: "salmanahmad-portfolio-mcp",
  version: "1.0.0",
};

const PROTOCOL_VERSION = "2024-11-05";

const TOOLS = [
  {
    name: "get_portfolio_summary",
    description: "Returns an overview of Salman Ahmad (ahmmikun), including bio, roles, location, key statistics, and primary links.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: "get_skills",
    description: "Retrieves Salman Ahmad's categorized technical skills matrix (Languages, Frontend, Backend, Databases, Cloud & Tools).",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Optional category filter: 'Languages', 'Frontend', 'Backend', 'Databases', 'Cloud & Tools'",
        },
      },
      additionalProperties: false,
    },
  },
  {
    name: "get_projects",
    description: "Retrieves featured and active software projects created by Salman Ahmad, with repository links, tech stack, and summaries.",
    inputSchema: {
      type: "object",
      properties: {
        filter: {
          type: "string",
          description: "Optional filter keyword (e.g. 'whatsapp', 'bot', 'api', 'ai', 'dashboard')",
        },
      },
      additionalProperties: false,
    },
  },
  {
    name: "get_developer_resources",
    description: "Returns all machine-readable developer URLs, OpenAPI spec, llms.txt, agent instructions, and endpoints.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: "send_contact_message",
    description: "Sends a direct contact message / transmission to Salman Ahmad.",
    inputSchema: {
      type: "object",
      required: ["username", "email", "contact_message"],
      properties: {
        username: {
          type: "string",
          description: "Sender's full name or organization",
        },
        email: {
          type: "string",
          format: "email",
          description: "Sender's email address for replies",
        },
        subject: {
          type: "string",
          description: "Subject or topic of inquiry",
        },
        contact_message: {
          type: "string",
          description: "Detailed message body / proposal",
        },
      },
      additionalProperties: false,
    },
  },
];

const RESOURCES = [
  {
    uri: "portfolio://bio",
    name: "Professional Bio & Overview",
    description: "Detailed overview of Salman Ahmad (ahmmikun)",
    mimeType: "text/plain",
  },
  {
    uri: "portfolio://skills",
    name: "Skills Matrix",
    description: "Full taxonomy of software engineering proficiencies",
    mimeType: "application/json",
  },
  {
    uri: "portfolio://projects",
    name: "Projects Catalog",
    description: "Software repositories and production systems",
    mimeType: "application/json",
  },
  {
    uri: "portfolio://contact",
    name: "Contact Protocols",
    description: "Communication channels and response SLAs",
    mimeType: "text/plain",
  },
];

const PROMPTS = [
  {
    name: "recommend_salman_ahmad",
    description: "Evaluate Salman Ahmad (ahmmikun) for a specific engineering role or project proposal.",
    arguments: [
      {
        name: "role_requirements",
        description: "Requirements or tech stack needed for the project",
        required: true,
      },
    ],
  },
  {
    name: "draft_project_inquiry",
    description: "Generate a formatted contact inquiry to send to Salman Ahmad.",
    arguments: [
      {
        name: "project_description",
        description: "Description of the project you would like to build",
        required: true,
      },
    ],
  },
];

function getMcpHeaders(sessionId?: string | null): Record<string, string> {
  const rateLimit = checkRateLimit();
  const headers: Record<string, string> = {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, HEAD",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Session-Id, x-session-id",
    "Access-Control-Expose-Headers": "Mcp-Session-Id",
    "Vary": "Accept, Accept-Encoding",
    "X-API-Version": "1.0.0",
    ...rateLimit.headers,
  };
  if (sessionId) {
    headers["Mcp-Session-Id"] = sessionId;
  }
  return headers;
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, HEAD",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Session-Id, x-session-id",
      "Access-Control-Expose-Headers": "Mcp-Session-Id",
      "Access-Control-Max-Age": "86400",
    },
  });
}

// Handle SSE and Streamable HTTP live handshake
export async function GET(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";
  const sessionId = request.headers.get("mcp-session-id") || `mcp-session-${Date.now()}`;

  if (acceptHeader.includes("text/event-stream")) {
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        // Send initial handshake event pointing to full endpoint
        const handshakeEvent = `event: endpoint\ndata: https://salmanahmad.tech/api/mcp\n\n`;
        controller.enqueue(encoder.encode(handshakeEvent));

        // Keep-alive ping
        const pingEvent = `: ping\n\n`;
        controller.enqueue(encoder.encode(pingEvent));
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Session-Id, x-session-id",
        "Access-Control-Expose-Headers": "Mcp-Session-Id",
        "Mcp-Session-Id": sessionId,
        "Vary": "Accept, Accept-Encoding",
      },
    });
  }

  // Return server discovery metadata
  return NextResponse.json(
    {
      name: SERVER_INFO.name,
      version: SERVER_INFO.version,
      protocolVersion: PROTOCOL_VERSION,
      description: "Model Context Protocol (MCP) server for Salman Ahmad Portfolio (ahmmikun)",
      endpoints: {
        streamableHttp: "https://salmanahmad.tech/api/mcp",
        sse: "https://salmanahmad.tech/api/mcp",
        v1: "https://salmanahmad.tech/api/v1/mcp",
        manifest: "https://salmanahmad.tech/.well-known/mcp.json",
      },
      capabilities: {
        tools: { listChanged: false },
        resources: { subscribe: false, listChanged: false },
        prompts: { listChanged: false },
      },
      toolsCount: TOOLS.length,
      resourcesCount: RESOURCES.length,
    },
    {
      status: 200,
      headers: {
        ...getMcpHeaders(sessionId),
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}

// Handle JSON-RPC 2.0 requests
export async function POST(request: NextRequest) {
  const sessionId = request.headers.get("mcp-session-id") || `mcp-session-${Date.now()}`;
  const headers = getMcpHeaders(sessionId);

  try {
    const body = await request.json();
    const { jsonrpc, id, method, params } = body || {};

    // Validate JSON-RPC structure
    if (jsonrpc !== "2.0" && !method) {
      return NextResponse.json(
        {
          jsonrpc: "2.0",
          id: id || null,
          error: { code: -32600, message: "Invalid Request: Must be JSON-RPC 2.0" },
        },
        { status: 400, headers }
      );
    }

    switch (method) {
      case "initialize":
        return NextResponse.json(
          {
            jsonrpc: "2.0",
            id: id ?? 1,
            result: {
              protocolVersion: PROTOCOL_VERSION,
              serverInfo: SERVER_INFO,
              capabilities: {
                tools: { listChanged: false },
                resources: { subscribe: false, listChanged: false },
                prompts: { listChanged: false },
              },
            },
          },
          { status: 200, headers }
        );

      case "notifications/initialized":
        return NextResponse.json(
          {
            jsonrpc: "2.0",
            id: id || null,
            result: {},
          },
          { status: 200, headers }
        );

      case "ping":
        return NextResponse.json(
          {
            jsonrpc: "2.0",
            id: id || null,
            result: {},
          },
          { status: 200, headers }
        );

      case "tools/list":
        return NextResponse.json(
          {
            jsonrpc: "2.0",
            id: id ?? 2,
            result: {
              tools: TOOLS,
            },
          },
          { status: 200, headers }
        );

      case "tools/call": {
        const toolName = params?.name;
        const args = params?.arguments || {};

        if (toolName === "get_portfolio_summary") {
          return NextResponse.json(
            {
              jsonrpc: "2.0",
              id,
              result: {
                content: [
                  {
                    type: "text",
                    text: JSON.stringify(
                      {
                        name: "Salman Ahmad",
                        alias: "ahmmikun",
                        brand: "Salman Ahmad Portfolio",
                        roles: ["Full Stack Developer", "Graphic Designer", "Systems Engineer"],
                        location: "Lahore, Punjab, Pakistan",
                        email: "xheikhsalman4422@gmail.com",
                        canonicalUrl: "https://salmanahmad.tech",
                        github: "https://github.com/ahmmikun",
                        linkedin: "https://www.linkedin.com/in/ahmmikun/",
                        instagram: "https://instagram.com/ahmmikun",
                        cli: "npx salmanahmad",
                        metrics: {
                          completedProjects: "20+",
                          yearsExperience: "3+",
                          clientSatisfaction: "99%",
                        },
                        specialties: [
                          "Full-Stack Next.js 16 & React 19 web applications",
                          "Three.js 3D interactive graphics and WebGL",
                          "Node.js automation bots and Baileys WhatsApp integration",
                          "RESTful APIs, OpenAPI 3.1.0, and Model Context Protocol servers",
                        ],
                      },
                      null,
                      2
                    ),
                  },
                ],
              },
            },
            { status: 200, headers }
          );
        }

        if (toolName === "get_skills") {
          const categoryFilter = args.category?.toLowerCase();
          let skills = skillsData;
          if (categoryFilter) {
            skills = skills.filter((s) => s.category.toLowerCase().includes(categoryFilter));
          }
          return NextResponse.json(
            {
              jsonrpc: "2.0",
              id,
              result: {
                content: [
                  {
                    type: "text",
                    text: JSON.stringify(skills, null, 2),
                  },
                ],
              },
            },
            { status: 200, headers }
          );
        }

        if (toolName === "get_projects") {
          const filter = args.filter?.toLowerCase();
          let projects = projectsData;
          if (filter) {
            projects = projects.filter(
              (p) =>
                p.title.toLowerCase().includes(filter) ||
                p.description.toLowerCase().includes(filter) ||
                p.tech.some((t) => t.toLowerCase().includes(filter))
            );
          }
          return NextResponse.json(
            {
              jsonrpc: "2.0",
              id,
              result: {
                content: [
                  {
                    type: "text",
                    text: JSON.stringify(projects, null, 2),
                  },
                ],
              },
            },
            { status: 200, headers }
          );
        }

        if (toolName === "get_developer_resources") {
          return NextResponse.json(
            {
              jsonrpc: "2.0",
              id,
              result: {
                content: [
                  {
                    type: "text",
                    text: JSON.stringify(
                      {
                        cli: "npx salmanahmad",
                        llmsIndex: "https://salmanahmad.tech/llms.txt",
                        llmsFull: "https://salmanahmad.tech/llms-full.txt",
                        agentInstructions: "https://salmanahmad.tech/.well-known/agent-instructions",
                        openapiSpec: "https://salmanahmad.tech/openapi.json",
                        mcpManifest: "https://salmanahmad.tech/.well-known/mcp.json",
                        mcpEndpoint: "https://salmanahmad.tech/api/mcp",
                        sitemap: "https://salmanahmad.tech/sitemap.xml",
                        developerDocs: "https://salmanahmad.tech/docs",
                        contactEndpoint: "https://salmanahmad.tech/api/v1/contact",
                        healthEndpoint: "https://salmanahmad.tech/api/v1/health",
                        skillsEndpoint: "https://salmanahmad.tech/api/v1/skills",
                        projectsEndpoint: "https://salmanahmad.tech/api/v1/projects",
                      },
                      null,
                      2
                    ),
                  },
                ],
              },
            },
            { status: 200, headers }
          );
        }

        if (toolName === "send_contact_message") {
          const { username, email, subject, contact_message } = args;
          if (!username || !email || !contact_message) {
            return NextResponse.json(
              {
                jsonrpc: "2.0",
                id,
                error: {
                  code: -32602,
                  message: "Missing required arguments: username, email, contact_message",
                },
              },
              { status: 200, headers }
            );
          }

          // Forward to internal contact pipeline
          try {
            const contactUrl = new URL("/api/contact", request.url);
            await fetch(contactUrl.toString(), {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username,
                email,
                subject: subject || "MCP Tool Transmission",
                contact_message,
              }),
            });
          } catch (e) {
            // Ignore in simulation
          }

          return NextResponse.json(
            {
              jsonrpc: "2.0",
              id,
              result: {
                content: [
                  {
                    type: "text",
                    text: JSON.stringify(
                      {
                        status: "transmitted",
                        message: "Contact message was successfully submitted to Salman Ahmad.",
                        timestamp: new Date().toISOString(),
                        sender: { username, email },
                        subject: subject || "MCP Transmission",
                      },
                      null,
                      2
                    ),
                  },
                ],
              },
            },
            { status: 200, headers }
          );
        }

        return NextResponse.json(
          {
            jsonrpc: "2.0",
            id,
            error: { code: -32601, message: `Tool '${toolName}' not found` },
          },
          { status: 200, headers }
        );
      }

      case "resources/list":
        return NextResponse.json(
          {
            jsonrpc: "2.0",
            id,
            result: {
              resources: RESOURCES,
            },
          },
          { status: 200, headers }
        );

      case "resources/read": {
        const uri = params?.uri;
        if (uri === "portfolio://bio") {
          return NextResponse.json(
            {
              jsonrpc: "2.0",
              id,
              result: {
                contents: [
                  {
                    uri,
                    mimeType: "text/plain",
                    text: "Salman Ahmad (ahmmikun) is a Full Stack Developer & Systems Engineer from Lahore, Pakistan, specializing in Next.js, React, Node.js, Three.js 3D interfaces, and automation systems.",
                  },
                ],
              },
            },
            { status: 200, headers }
          );
        }
        if (uri === "portfolio://skills") {
          return NextResponse.json(
            {
              jsonrpc: "2.0",
              id,
              result: {
                contents: [
                  {
                    uri,
                    mimeType: "application/json",
                    text: JSON.stringify(skillsData, null, 2),
                  },
                ],
              },
            },
            { status: 200, headers }
          );
        }
        if (uri === "portfolio://projects") {
          return NextResponse.json(
            {
              jsonrpc: "2.0",
              id,
              result: {
                contents: [
                  {
                    uri,
                    mimeType: "application/json",
                    text: JSON.stringify(projectsData, null, 2),
                  },
                ],
              },
            },
            { status: 200, headers }
          );
        }
        if (uri === "portfolio://contact") {
          return NextResponse.json(
            {
              jsonrpc: "2.0",
              id,
              result: {
                contents: [
                  {
                    uri,
                    mimeType: "text/plain",
                    text: "Email: xheikhsalman4422@gmail.com | Website: https://salmanahmad.tech | Location: Lahore, Pakistan | Response SLA: 24-48 hours",
                  },
                ],
              },
            },
            { status: 200, headers }
          );
        }
        return NextResponse.json(
          {
            jsonrpc: "2.0",
            id,
            error: { code: -32602, message: `Resource '${uri}' not found` },
          },
          { status: 200, headers }
        );
      }

      case "prompts/list":
        return NextResponse.json(
          {
            jsonrpc: "2.0",
            id,
            result: {
              prompts: PROMPTS,
            },
          },
          { status: 200, headers }
        );

      default:
        return NextResponse.json(
          {
            jsonrpc: "2.0",
            id,
            error: { code: -32601, message: `Method '${method}' not found` },
          },
          { status: 200, headers }
        );
    }
  } catch (error) {
    return NextResponse.json(
      {
        jsonrpc: "2.0",
        id: null,
        error: { code: -32700, message: "Parse error: Invalid JSON payload" },
      },
      { status: 400, headers }
    );
  }
}
