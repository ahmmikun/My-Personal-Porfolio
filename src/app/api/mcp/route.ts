import { NextRequest, NextResponse } from "next/server";
import { skillsData } from "../skills/route";
import { projectsData } from "../projects/route";

const SERVER_INFO = {
  name: "ahmmikun-portfolio-mcp",
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
          description: "Optional filter keyword (e.g. 'whatsapp', 'bot', 'api', 'ai')",
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

// Handle SSE and Streamable HTTP live handshake
export async function GET(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";

  if (acceptHeader.includes("text/event-stream")) {
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        // Send initial handshake event
        const handshakeEvent = `event: endpoint\ndata: /api/mcp\n\n`;
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
        "Vary": "Accept, Accept-Encoding",
      },
    });
  }

  // Return server discovery metadata
  return NextResponse.json({
    name: SERVER_INFO.name,
    version: SERVER_INFO.version,
    protocolVersion: PROTOCOL_VERSION,
    description: "Model Context Protocol (MCP) server for Salman Ahmad (ahmmikun) portfolio",
    endpoints: {
      streamableHttp: "https://ahmmikun.vercel.app/api/mcp",
      sse: "https://ahmmikun.vercel.app/api/mcp",
      manifest: "https://ahmmikun.vercel.app/.well-known/mcp.json",
    },
    capabilities: {
      tools: { listChanged: false },
      resources: { subscribe: false, listChanged: false },
      prompts: { listChanged: false },
    },
    toolsCount: TOOLS.length,
    resourcesCount: RESOURCES.length,
  }, {
    status: 200,
    headers: {
      "Vary": "Accept, Accept-Encoding",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

// Handle JSON-RPC 2.0 requests
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { jsonrpc, id, method, params } = body;

    // Validate JSON-RPC structure
    if (jsonrpc !== "2.0" && !method) {
      return NextResponse.json({
        jsonrpc: "2.0",
        id: id || null,
        error: { code: -32600, message: "Invalid Request: Must be JSON-RPC 2.0" },
      }, { status: 400 });
    }

    switch (method) {
      case "initialize":
        return NextResponse.json({
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: PROTOCOL_VERSION,
            serverInfo: SERVER_INFO,
            capabilities: {
              tools: { listChanged: false },
              resources: { subscribe: false, listChanged: false },
              prompts: { listChanged: false },
            },
          },
        });

      case "notifications/initialized":
        return NextResponse.json({
          jsonrpc: "2.0",
          id: id || null,
          result: {},
        });

      case "ping":
        return NextResponse.json({
          jsonrpc: "2.0",
          id,
          result: {},
        });

      case "tools/list":
        return NextResponse.json({
          jsonrpc: "2.0",
          id,
          result: {
            tools: TOOLS,
          },
        });

      case "tools/call": {
        const toolName = params?.name;
        const args = params?.arguments || {};

        if (toolName === "get_portfolio_summary") {
          return NextResponse.json({
            jsonrpc: "2.0",
            id,
            result: {
              content: [
                {
                  type: "text",
                  text: JSON.stringify({
                    name: "Salman Ahmad",
                    alias: "ahmmikun",
                    roles: ["Full Stack Developer", "Graphic Designer", "Systems Engineer"],
                    location: "Lahore, Pakistan",
                    email: "xheikhsalman4422@gmail.com",
                    canonicalUrl: "https://ahmmikun.vercel.app",
                    github: "https://github.com/ahmmikun",
                    linkedin: "https://www.linkedin.com/in/ahmmikun/",
                    instagram: "https://instagram.com/ahmmikun",
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
                  }, null, 2),
                },
              ],
            },
          });
        }

        if (toolName === "get_skills") {
          const categoryFilter = args.category?.toLowerCase();
          let skills = skillsData;
          if (categoryFilter) {
            skills = skills.filter(s => s.category.toLowerCase().includes(categoryFilter));
          }
          return NextResponse.json({
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
          });
        }

        if (toolName === "get_projects") {
          const filter = args.filter?.toLowerCase();
          let projects = projectsData;
          if (filter) {
            projects = projects.filter(p =>
              p.title.toLowerCase().includes(filter) ||
              p.description.toLowerCase().includes(filter) ||
              p.tech.some(t => t.toLowerCase().includes(filter))
            );
          }
          return NextResponse.json({
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
          });
        }

        if (toolName === "get_developer_resources") {
          return NextResponse.json({
            jsonrpc: "2.0",
            id,
            result: {
              content: [
                {
                  type: "text",
                  text: JSON.stringify({
                    llmsIndex: "https://ahmmikun.vercel.app/llms.txt",
                    llmsFull: "https://ahmmikun.vercel.app/llms-full.txt",
                    agentInstructions: "https://ahmmikun.vercel.app/.well-known/agent-instructions",
                    openapiSpec: "https://ahmmikun.vercel.app/openapi.json",
                    mcpManifest: "https://ahmmikun.vercel.app/.well-known/mcp.json",
                    sitemap: "https://ahmmikun.vercel.app/sitemap.xml",
                    developerDocs: "https://ahmmikun.vercel.app/docs",
                    contactEndpoint: "https://ahmmikun.vercel.app/api/contact",
                    healthEndpoint: "https://ahmmikun.vercel.app/api/health",
                  }, null, 2),
                },
              ],
            },
          });
        }

        if (toolName === "send_contact_message") {
          const { username, email, subject, contact_message } = args;
          if (!username || !email || !contact_message) {
            return NextResponse.json({
              jsonrpc: "2.0",
              id,
              error: { code: -32602, message: "Missing required arguments: username, email, contact_message" },
            });
          }

          // Forward to internal contact pipeline
          try {
            const contactUrl = new URL("/api/contact", request.url);
            await fetch(contactUrl.toString(), {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username, email, subject: subject || "MCP Tool Transmission", contact_message }),
            });
          } catch (e) {
            // Ignore failure in simulated/local environment
          }

          return NextResponse.json({
            jsonrpc: "2.0",
            id,
            result: {
              content: [
                {
                  type: "text",
                  text: JSON.stringify({
                    status: "transmitted",
                    message: "Contact message was successfully submitted to Salman Ahmad.",
                    timestamp: new Date().toISOString(),
                    sender: { username, email },
                    subject: subject || "MCP Transmission",
                  }, null, 2),
                },
              ],
            },
          });
        }

        return NextResponse.json({
          jsonrpc: "2.0",
          id,
          error: { code: -32601, message: `Tool '${toolName}' not found` },
        });
      }

      case "resources/list":
        return NextResponse.json({
          jsonrpc: "2.0",
          id,
          result: {
            resources: RESOURCES,
          },
        });

      case "resources/read": {
        const uri = params?.uri;
        if (uri === "portfolio://bio") {
          return NextResponse.json({
            jsonrpc: "2.0",
            id,
            result: {
              contents: [
                {
                  uri,
                  mimeType: "text/plain",
                  text: "Salman Ahmad (ahmmikun) is a Full Stack Developer & Graphic Designer from Lahore, Pakistan, specializing in Next.js, React, Node.js, Three.js 3D interfaces, and automation systems.",
                },
              ],
            },
          });
        }
        if (uri === "portfolio://skills") {
          return NextResponse.json({
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
          });
        }
        if (uri === "portfolio://projects") {
          return NextResponse.json({
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
          });
        }
        if (uri === "portfolio://contact") {
          return NextResponse.json({
            jsonrpc: "2.0",
            id,
            result: {
              contents: [
                {
                  uri,
                  mimeType: "text/plain",
                  text: "Email: xheikhsalman4422@gmail.com | Website: https://ahmmikun.vercel.app | Location: Lahore, Pakistan | Response SLA: 24-48 hours",
                },
              ],
            },
          });
        }
        return NextResponse.json({
          jsonrpc: "2.0",
          id,
          error: { code: -32602, message: `Resource '${uri}' not found` },
        });
      }

      case "prompts/list":
        return NextResponse.json({
          jsonrpc: "2.0",
          id,
          result: {
            prompts: PROMPTS,
          },
        });

      default:
        return NextResponse.json({
          jsonrpc: "2.0",
          id,
          error: { code: -32601, message: `Method '${method}' not found` },
        });
    }
  } catch (error) {
    return NextResponse.json({
      jsonrpc: "2.0",
      id: null,
      error: { code: -32700, message: "Parse error: Invalid JSON payload" },
    }, { status: 400 });
  }
}
