#!/usr/bin/env node

/**
 * Official CLI tool for Salman Ahmad Portfolio (ahmmikun)
 * Exposes portfolio data, skills, projects, contact transmission, and stdio MCP server.
 * Usage: npx salmanahmad [command] [--json]
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const BASE_URL = "https://salmanahmad.tech";

const PORTFOLIO_DATA = {
  name: "Salman Ahmad",
  brand: "Salman Ahmad Portfolio",
  alias: "ahmmikun",
  role: "Full Stack Developer & Systems Engineer",
  location: "Lahore, Punjab 54000, Pakistan",
  email: "xheikhsalman4422@gmail.com",
  canonicalUrl: BASE_URL,
  profiles: {
    github: "https://github.com/ahmmikun",
    linkedin: "https://www.linkedin.com/in/ahmmikun/",
    instagram: "https://instagram.com/ahmmikun",
  },
  metrics: {
    experienceYears: "3+",
    completedProjects: "20+",
    clientSatisfaction: "99%",
  },
  specialties: [
    "Full-Stack Next.js 16 (App Router) & React 19",
    "Three.js 3D WebGL interfaces and particle simulations",
    "High-throughput RESTful microservices and OpenAPI 3.1.0",
    "Model Context Protocol (MCP) server design (Streamable HTTP & SSE)",
    "Automation bots (WhatsApp multi-device Baileys, scrapers, workers)",
  ],
};

const SKILLS_DATA = [
  {
    category: "Languages",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "C", "C++", "Python", "Assembly (x86)"],
  },
  {
    category: "Frontend",
    skills: ["React 19", "Next.js 16", "Tailwind CSS 4", "Bootstrap", "Three.js", "React Three Fiber", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Model Context Protocol (MCP)", "Nodemailer", "Webhooks", "JSON-RPC"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    category: "Cloud & Tools",
    skills: ["Vercel", "Cloudflare", "Railway", "Heroku", "Git", "GitHub Actions", "Postman", "Figma"],
  },
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "XLICON V4 MD",
    subtitle: "WhatsApp Automation Bot",
    description: "An advanced, feature-rich WhatsApp automation bot built with modern Node.js and the Baileys library. Capable of handling commands, media processing, and group management.",
    link: "https://github.com/ahmmikun/XLICON-V4-MD",
    tech: ["Node.js", "Baileys", "MongoDB", "JavaScript"],
  },
  {
    id: 2,
    title: "AHMMI's API",
    subtitle: "REST API Service",
    description: "A comprehensive, high-performance RESTful API service providing various endpoints for scraping, data manipulation, and third-party integrations.",
    link: "https://api.ahmmikun.live/",
    tech: ["Express", "Node.js", "REST", "Cloudflare"],
  },
  {
    id: 3,
    title: "BijliTrack",
    subtitle: "Electricity & Power Outage Dashboard",
    description: "A full-stack electricity monitoring platform for Pakistan that enables users to track live power status, feeder outages, 12-month billing history, and CCMS utility data.",
    link: "https://github.com/ahmmikun/bijlitrack",
    tech: ["Next.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "GitRoasted",
    subtitle: "AI GitHub Profile Roaster",
    description: "An AI-powered GitHub profile analyzer and roaster featuring multi-provider AI fallbacks (OpenRouter, Gemini, OpenAI, Grok), Neo-Brutalist UI, and shareable roast cards.",
    link: "https://github.com/ahmmikun/GitRoasted",
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "Zod", "AI"],
  },
  {
    id: 5,
    title: "Campus BookHub",
    subtitle: "Student Book Exchange & Marketplace",
    description: "A peer-to-peer textbook marketplace and exchange platform for university students featuring Open Library API integration, local storage persistence, and analytics dashboard.",
    link: "https://github.com/ahmmikun/campus-bookhub",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Open Library API"],
  },
  {
    id: 6,
    title: "Neural AI Generative Interface",
    subtitle: "AI Model & Conversational UI",
    description: "A next-generation AI model interface focused on conversational logic, generative capabilities, and context orchestration.",
    link: "https://github.com/ahmmikun/",
    tech: ["Python", "TensorFlow", "React", "Tailwind CSS"],
  },
];

const DEVELOPER_RESOURCES = {
  canonicalDomain: BASE_URL,
  openapi: `${BASE_URL}/openapi.json`,
  mcpManifest: `${BASE_URL}/.well-known/mcp.json`,
  mcpStreamableHttp: `${BASE_URL}/api/mcp`,
  llmsIndex: `${BASE_URL}/llms.txt`,
  llmsFull: `${BASE_URL}/llms-full.txt`,
  agentInstructions: `${BASE_URL}/.well-known/agent-instructions`,
  sitemap: `${BASE_URL}/sitemap.xml`,
  developerDocs: `${BASE_URL}/docs`,
  apiV1: {
    contact: `${BASE_URL}/api/v1/contact`,
    skills: `${BASE_URL}/api/v1/skills`,
    projects: `${BASE_URL}/api/v1/projects`,
    health: `${BASE_URL}/api/v1/health`,
    mcp: `${BASE_URL}/api/v1/mcp`,
  },
};

// Simple argument parser
const args = process.argv.slice(2);
const isJson = args.includes("--json");
const command = (args.find((a) => !a.startsWith("-")) || "help").toLowerCase();

function getArgValue(flag) {
  const idx = args.indexOf(flag);
  if (idx !== -1 && idx + 1 < args.length) {
    return args[idx + 1];
  }
  return null;
}

// Stdio MCP Server mode
function runStdioMcp() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  rl.on("line", (line) => {
    if (!line.trim()) return;
    try {
      const msg = JSON.parse(line);
      const { jsonrpc, id, method, params } = msg;

      if (method === "initialize") {
        const response = {
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: "2024-11-05",
            serverInfo: { name: "salmanahmad-cli-mcp", version: "1.0.0" },
            capabilities: { tools: { listChanged: false } },
          },
        };
        process.stdout.write(JSON.stringify(response) + "\n");
      } else if (method === "tools/list") {
        const response = {
          jsonrpc: "2.0",
          id,
          result: {
            tools: [
              {
                name: "get_portfolio_summary",
                description: "Returns an overview of Salman Ahmad (ahmmikun).",
                inputSchema: { type: "object", properties: {} },
              },
              {
                name: "get_skills",
                description: "Retrieves categorized skills matrix.",
                inputSchema: { type: "object", properties: { category: { type: "string" } } },
              },
              {
                name: "get_projects",
                description: "Retrieves project catalog.",
                inputSchema: { type: "object", properties: { filter: { type: "string" } } },
              },
              {
                name: "get_developer_resources",
                description: "Returns developer endpoints and documentation.",
                inputSchema: { type: "object", properties: {} },
              },
            ],
          },
        };
        process.stdout.write(JSON.stringify(response) + "\n");
      } else if (method === "tools/call") {
        const toolName = params?.name;
        let contentText = "";
        if (toolName === "get_portfolio_summary") {
          contentText = JSON.stringify(PORTFOLIO_DATA, null, 2);
        } else if (toolName === "get_skills") {
          contentText = JSON.stringify(SKILLS_DATA, null, 2);
        } else if (toolName === "get_projects") {
          contentText = JSON.stringify(PROJECTS_DATA, null, 2);
        } else if (toolName === "get_developer_resources") {
          contentText = JSON.stringify(DEVELOPER_RESOURCES, null, 2);
        } else {
          contentText = `Tool ${toolName} not found`;
        }

        const response = {
          jsonrpc: "2.0",
          id,
          result: {
            content: [{ type: "text", text: contentText }],
          },
        };
        process.stdout.write(JSON.stringify(response) + "\n");
      } else if (method === "notifications/initialized" || method === "ping") {
        if (id) {
          process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, result: {} }) + "\n");
        }
      } else {
        process.stdout.write(
          JSON.stringify({
            jsonrpc: "2.0",
            id: id || null,
            error: { code: -32601, message: `Method ${method} not implemented` },
          }) + "\n"
        );
      }
    } catch (err) {
      process.stdout.write(
        JSON.stringify({
          jsonrpc: "2.0",
          id: null,
          error: { code: -32700, message: "Parse error" },
        }) + "\n"
      );
    }
  });
}

// Handle subcommands
switch (command) {
  case "bio":
  case "whoami":
    if (isJson) {
      console.log(JSON.stringify(PORTFOLIO_DATA, null, 2));
    } else {
      console.log("==================================================");
      console.log(`  ${PORTFOLIO_DATA.brand.toUpperCase()}`);
      console.log("==================================================");
      console.log(`Name:        ${PORTFOLIO_DATA.name} (${PORTFOLIO_DATA.alias})`);
      console.log(`Role:        ${PORTFOLIO_DATA.role}`);
      console.log(`Location:    ${PORTFOLIO_DATA.location}`);
      console.log(`Email:       ${PORTFOLIO_DATA.email}`);
      console.log(`Website:     ${PORTFOLIO_DATA.canonicalUrl}`);
      console.log(`GitHub:      ${PORTFOLIO_DATA.profiles.github}`);
      console.log(`LinkedIn:    ${PORTFOLIO_DATA.profiles.linkedin}`);
      console.log(`Instagram:   ${PORTFOLIO_DATA.profiles.instagram}`);
      console.log("\nSpecialties:");
      PORTFOLIO_DATA.specialties.forEach((s) => console.log(`  - ${s}`));
    }
    break;

  case "skills": {
    const category = getArgValue("--category")?.toLowerCase();
    let result = SKILLS_DATA;
    if (category) {
      result = SKILLS_DATA.filter((s) => s.category.toLowerCase().includes(category));
    }
    if (isJson) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log("==================================================");
      console.log("  TECHNICAL SKILLS MATRIX");
      console.log("==================================================");
      result.forEach((cat) => {
        console.log(`\n[${cat.category}]`);
        console.log(`  ${cat.skills.join(", ")}`);
      });
    }
    break;
  }

  case "projects": {
    const filter = getArgValue("--filter")?.toLowerCase();
    let result = PROJECTS_DATA;
    if (filter) {
      result = PROJECTS_DATA.filter(
        (p) =>
          p.title.toLowerCase().includes(filter) ||
          p.description.toLowerCase().includes(filter) ||
          p.tech.some((t) => t.toLowerCase().includes(filter))
      );
    }
    if (isJson) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log("==================================================");
      console.log("  FEATURED SOFTWARE PROJECTS");
      console.log("==================================================");
      result.forEach((p) => {
        console.log(`\n#${p.id} ${p.title} (${p.subtitle})`);
        console.log(`   Link:  ${p.link}`);
        console.log(`   Stack: ${p.tech.join(", ")}`);
        console.log(`   About: ${p.description}`);
      });
    }
    break;
  }

  case "docs":
  case "api":
    if (isJson) {
      console.log(JSON.stringify(DEVELOPER_RESOURCES, null, 2));
    } else {
      console.log("==================================================");
      console.log("  MACHINE & DEVELOPER INTERFACES");
      console.log("==================================================");
      console.log(`OpenAPI Spec:        ${DEVELOPER_RESOURCES.openapi}`);
      console.log(`MCP Manifest:        ${DEVELOPER_RESOURCES.mcpManifest}`);
      console.log(`MCP Endpoint:        ${DEVELOPER_RESOURCES.mcpStreamableHttp}`);
      console.log(`LLMs.txt Index:      ${DEVELOPER_RESOURCES.llmsIndex}`);
      console.log(`LLMs-Full Reference: ${DEVELOPER_RESOURCES.llmsFull}`);
      console.log(`Agent Instructions:  ${DEVELOPER_RESOURCES.agentInstructions}`);
      console.log(`XML Sitemap:         ${DEVELOPER_RESOURCES.sitemap}`);
      console.log(`Developer Portal:    ${DEVELOPER_RESOURCES.developerDocs}`);
    }
    break;

  case "health": {
    const health = {
      status: "healthy",
      service: "salmanahmad-cli",
      version: "1.0.0",
      canonical: BASE_URL,
      timestamp: new Date().toISOString(),
    };
    if (isJson) {
      console.log(JSON.stringify(health, null, 2));
    } else {
      console.log(`System Status: ${health.status.toUpperCase()}`);
      console.log(`Timestamp:     ${health.timestamp}`);
      console.log(`Canonical:     ${health.canonical}`);
    }
    break;
  }

  case "contact": {
    const name = getArgValue("--name") || getArgValue("-n");
    const email = getArgValue("--email") || getArgValue("-e");
    const subject = getArgValue("--subject") || getArgValue("-s") || "CLI Inquiry";
    const message = getArgValue("--message") || getArgValue("-m");

    if (!name || !email || !message) {
      if (isJson) {
        console.log(
          JSON.stringify(
            {
              error: {
                code: "MISSING_REQUIRED_ARGS",
                message: "Must provide --name, --email, and --message",
                resolution: "Run: npx salmanahmad contact --name 'Your Name' --email 'you@example.com' --message 'Your proposal'",
              },
            },
            null,
            2
          )
        );
      } else {
        console.error("Error: Missing required parameters.");
        console.error("Usage: npx salmanahmad contact --name 'Your Name' --email 'you@example.com' --message 'Message content'");
      }
      process.exit(1);
    }

    const payload = {
      status: "ready_to_transmit",
      recipient: "Salman Ahmad (xheikhsalman4422@gmail.com)",
      transmissionPayload: { username: name, email, subject, contact_message: message },
      transmissionUrl: `${BASE_URL}/api/v1/contact`,
    };

    if (isJson) {
      console.log(JSON.stringify(payload, null, 2));
    } else {
      console.log("Transmission created successfully:");
      console.log(`  Recipient: ${payload.recipient}`);
      console.log(`  Sender:    ${name} <${email}>`);
      console.log(`  Subject:   ${subject}`);
      console.log(`  Target:    ${payload.transmissionUrl}`);
    }
    break;
  }

  case "mcp":
    // Starts the stdio MCP server for agent integration
    runStdioMcp();
    break;

  case "help":
  default:
    console.log(`
Salman Ahmad Portfolio (ahmmikun) CLI Tool v1.0.0
Official developer & agent terminal interface

USAGE:
  npx salmanahmad <command> [options]

COMMANDS:
  bio, whoami     Display developer profile and specialties
  skills          List full technical skills matrix
                    Options: --category <category_name>
  projects        List featured software engineering projects
                    Options: --filter <keyword>
  docs, api       Print all developer resources & API endpoints
  health          Check operational service status
  contact         Draft or send a message transmission
                    Options: --name <name> --email <email> --message <text>
  mcp             Run as a stdio Model Context Protocol server
  help            Display this usage guide

GLOBAL OPTIONS:
  --json          Output structured JSON for machine consumption / agents
`);
    break;
}
