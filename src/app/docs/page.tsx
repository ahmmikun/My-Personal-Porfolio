import type { Metadata } from "next";
import Link from "next/link";
import { Terminal, Code, Cpu, Shield, ExternalLink, BookOpen, Send, CheckCircle2, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Salman Ahmad Portfolio - Developer Resources, OpenAPI & Agent Documentation",
  description:
    "Official developer documentation for Salman Ahmad Portfolio (ahmmikun). Explore REST API v1 endpoints, official CLI tool (npx salmanahmad), Model Context Protocol (MCP) server, OpenAPI 3.1.0 specifications, RFC 9457 error models, and RFC RateLimit headers.",
  alternates: {
    canonical: "https://salmanahmad.tech/docs",
  },
  openGraph: {
    title: "Salman Ahmad Portfolio - Developer Resources & API Documentation",
    description: "REST API v1, CLI tool, MCP server, and machine-readable resources for Salman Ahmad Portfolio.",
    url: "https://salmanahmad.tech/docs",
    siteName: "Salman Ahmad Portfolio",
  },
};

export default function DocsPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
            // DEVELOPER_PROTOCOL
          </span>
          <div className="glow-line h-[1px] w-24" />
        </div>
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-white uppercase tracking-wider">
          Salman Ahmad Portfolio Developer Documentation &amp; Agent Hub
        </h1>
        <p className="text-cyber-gray text-base md:text-lg mt-4 max-w-3xl font-light">
          Welcome to the official developer portal for Salman Ahmad&apos;s (ahmmikun) portfolio platform. Discover programmatically accessible REST APIs (v1), first-party Model Context Protocol (MCP) servers, official CLI tooling (<code className="text-cyber-yellow">npx salmanahmad</code>), OpenAPI 3.1.0 specifications, RFC 9457 error schemas, and RFC rate-limiting headers.
        </p>
      </div>

      {/* Quick Resource Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <a
          href="/openapi.json"
          target="_blank"
          className="p-6 bg-cyber-surface border border-cyber-border hover:border-cyber-yellow transition-all clip-corner-br group"
        >
          <Code className="w-8 h-8 text-cyber-yellow mb-4 group-hover:scale-110 transition-transform" />
          <h2 className="text-lg font-orbitron font-bold text-cyber-white mb-2">OpenAPI 3.1.0 Spec</h2>
          <p className="text-xs text-cyber-gray leading-relaxed mb-3">
            Fully typed OpenAPI schema with RFC 9457 error models and function-calling definitions.
          </p>
          <span className="text-xs text-cyber-yellow font-bold uppercase tracking-wider flex items-center gap-1">
            View JSON <ExternalLink className="w-3 h-3" />
          </span>
        </a>

        <a
          href="/.well-known/mcp.json"
          target="_blank"
          className="p-6 bg-cyber-surface border border-cyber-border hover:border-cyber-yellow transition-all clip-corner-br group"
        >
          <Cpu className="w-8 h-8 text-cyber-yellow mb-4 group-hover:scale-110 transition-transform" />
          <h2 className="text-lg font-orbitron font-bold text-cyber-white mb-2">MCP Manifest</h2>
          <p className="text-xs text-cyber-gray leading-relaxed mb-3">
            Streamable HTTP discovery manifest for Model Context Protocol AI agents.
          </p>
          <span className="text-xs text-cyber-yellow font-bold uppercase tracking-wider flex items-center gap-1">
            View Manifest <ExternalLink className="w-3 h-3" />
          </span>
        </a>

        <a
          href="/llms.txt"
          target="_blank"
          className="p-6 bg-cyber-surface border border-cyber-border hover:border-cyber-yellow transition-all clip-corner-br group"
        >
          <BookOpen className="w-8 h-8 text-cyber-yellow mb-4 group-hover:scale-110 transition-transform" />
          <h2 className="text-lg font-orbitron font-bold text-cyber-white mb-2">llms.txt Index</h2>
          <p className="text-xs text-cyber-gray leading-relaxed mb-3">
            Standard machine index with &apos;When to use this&apos; agent guidance and NAP.
          </p>
          <span className="text-xs text-cyber-yellow font-bold uppercase tracking-wider flex items-center gap-1">
            View llms.txt <ExternalLink className="w-3 h-3" />
          </span>
        </a>

        <a
          href="/sitemap.xml"
          target="_blank"
          className="p-6 bg-cyber-surface border border-cyber-border hover:border-cyber-yellow transition-all clip-corner-br group"
        >
          <Network className="w-8 h-8 text-cyber-yellow mb-4 group-hover:scale-110 transition-transform" />
          <h2 className="text-lg font-orbitron font-bold text-cyber-white mb-2">XML Sitemap</h2>
          <p className="text-xs text-cyber-gray leading-relaxed mb-3">
            Standard Sitemaps protocol indexing all canonical routes on salmanahmad.tech.
          </p>
          <span className="text-xs text-cyber-yellow font-bold uppercase tracking-wider flex items-center gap-1">
            View Sitemap <ExternalLink className="w-3 h-3" />
          </span>
        </a>
      </div>

      {/* Section 0: Official CLI Tool */}
      <section className="mb-20">
        <div className="border-l-2 border-cyber-yellow pl-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
            1. Official CLI Tool (npx salmanahmad)
          </h2>
          <p className="text-cyber-gray text-sm mt-1">
            Zero-install terminal access for human developers, shell automations, and AI agents.
          </p>
        </div>

        <div className="bg-cyber-surface border border-cyber-border p-6 md:p-8 space-y-6">
          <p className="text-cyber-gray text-sm leading-relaxed">
            Salman Ahmad Portfolio provides an official CLI tool published under <code className="text-cyber-yellow">salmanahmad</code> and <code className="text-cyber-yellow">ahmmikun</code>. Run with zero installation via <code className="text-cyber-yellow">npx</code>:
          </p>

          <pre className="p-4 bg-cyber-black border border-cyber-border text-xs text-cyber-gray overflow-x-auto font-mono">
{`# Print interactive portfolio summary
npx salmanahmad bio

# Retrieve skills matrix as JSON for automated parsing
npx salmanahmad skills --category Backend --json

# Query software projects catalog matching a keyword
npx salmanahmad projects --filter ai --json

# Dispatch a verified contact message
npx salmanahmad contact --name "Jane Doe" --email "jane@example.com" --message "Project inquiry"

# Launch lightweight stdio Model Context Protocol (MCP) server
npx salmanahmad mcp`}
          </pre>
        </div>
      </section>

      {/* Section 1: MCP Server */}
      <section className="mb-20">
        <div className="border-l-2 border-cyber-yellow pl-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
            2. Model Context Protocol (MCP) Server
          </h2>
          <p className="text-cyber-gray text-sm mt-1">
            First-party tools exposed natively to Claude Desktop, Cursor, ChatGPT, and autonomous agents.
          </p>
        </div>

        <div className="bg-cyber-surface border border-cyber-border p-6 md:p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-orbitron font-bold text-cyber-yellow mb-2">Connection Details</h3>
              <ul className="space-y-2 text-cyber-gray">
                <li><strong className="text-cyber-white">Streamable HTTP Endpoint:</strong> <code className="text-cyber-yellow bg-cyber-black px-2 py-1 rounded">https://salmanahmad.tech/api/mcp</code></li>
                <li><strong className="text-cyber-white">Versioned Endpoint:</strong> <code className="text-cyber-yellow bg-cyber-black px-2 py-1 rounded">https://salmanahmad.tech/api/v1/mcp</code></li>
                <li><strong className="text-cyber-white">Discovery Manifest:</strong> <code className="text-cyber-yellow bg-cyber-black px-2 py-1 rounded">/.well-known/mcp.json</code></li>
                <li><strong className="text-cyber-white">Protocol Version:</strong> <code className="text-cyber-yellow bg-cyber-black px-2 py-1 rounded">2024-11-05</code></li>
                <li><strong className="text-cyber-white">Transport Support:</strong> Streamable HTTP, Server-Sent Events (SSE), JSON-RPC 2.0</li>
              </ul>
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-cyber-yellow mb-2">Available MCP Tools</h3>
              <ul className="space-y-2 text-cyber-gray">
                <li><code className="text-cyber-yellow">get_portfolio_summary</code>: Returns professional bio, roles, metrics, and links.</li>
                <li><code className="text-cyber-yellow">get_skills</code>: Returns categorized taxonomy of software engineering proficiencies.</li>
                <li><code className="text-cyber-yellow">get_projects</code>: Returns software projects catalog with repository URLs and tech stacks.</li>
                <li><code className="text-cyber-yellow">get_developer_resources</code>: Returns all machine-readable URLs and OpenAPI schemas.</li>
                <li><code className="text-cyber-yellow">send_contact_message</code>: Submits a direct contact message to Salman Ahmad.</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyber-border pt-4">
            <h3 className="font-orbitron font-bold text-cyber-white text-sm mb-2">Example Claude Desktop Configuration</h3>
            <pre className="p-4 bg-cyber-black border border-cyber-border text-xs text-cyber-gray overflow-x-auto font-mono">
{`{
  "mcpServers": {
    "salman-ahmad-portfolio": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-everything", "https://salmanahmad.tech/api/mcp"]
    }
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Section 2: REST API v1 */}
      <section className="mb-20">
        <div className="border-l-2 border-cyber-yellow pl-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
            3. Versioned REST API (v1)
          </h2>
          <p className="text-cyber-gray text-sm mt-1">
            Programmatic HTTP endpoints with URL path versioning, RFC 9457 error model, and RFC rate limits.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-cyber-surface border border-cyber-border p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-1 bg-cyber-green/20 text-cyber-green text-xs font-mono font-bold">POST</span>
              <code className="text-sm font-mono text-cyber-white">/api/v1/contact</code>
            </div>
            <p className="text-xs text-cyber-gray mb-4">
              Dispatches a contact inquiry. Requires <code className="text-cyber-yellow">username</code>, <code className="text-cyber-yellow">email</code>, and <code className="text-cyber-yellow">contact_message</code>.
            </p>
          </div>

          <div className="bg-cyber-surface border border-cyber-border p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-1 bg-cyber-yellow/20 text-cyber-yellow text-xs font-mono font-bold">GET</span>
              <code className="text-sm font-mono text-cyber-white">/api/v1/skills?category=Backend</code>
            </div>
            <p className="text-xs text-cyber-gray mb-4">
              Returns categorized skills matrix with optional query filtering.
            </p>
          </div>

          <div className="bg-cyber-surface border border-cyber-border p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-1 bg-cyber-yellow/20 text-cyber-yellow text-xs font-mono font-bold">GET</span>
              <code className="text-sm font-mono text-cyber-white">/api/v1/projects?filter=bot</code>
            </div>
            <p className="text-xs text-cyber-gray mb-4">
              Queries software projects catalog with keyword filtering.
            </p>
          </div>

          <div className="bg-cyber-surface border border-cyber-border p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-1 bg-cyber-yellow/20 text-cyber-yellow text-xs font-mono font-bold">GET</span>
              <code className="text-sm font-mono text-cyber-white">/api/v1/health</code>
            </div>
            <p className="text-xs text-cyber-gray mb-4">
              Uptime status and canonical discovery endpoint listing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: RFC 9457 Typed Error Model & RFC Rate Limits */}
      <section className="mb-20">
        <div className="border-l-2 border-cyber-yellow pl-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
            4. RFC 9457 Error Model &amp; Rate Limits
          </h2>
          <p className="text-cyber-gray text-sm mt-1">
            Machine-readable error contracts and self-throttling headers for autonomous agents.
          </p>
        </div>

        <div className="bg-cyber-surface border border-cyber-border p-6 md:p-8 space-y-6">
          <div>
            <h3 className="font-orbitron font-bold text-cyber-yellow mb-2">Standard Problem Details Schema</h3>
            <pre className="p-4 bg-cyber-black border border-cyber-border text-xs text-cyber-gray overflow-x-auto font-mono">
{`{
  "type": "https://salmanahmad.tech/docs/errors#validation-error",
  "title": "Validation Error",
  "status": 400,
  "code": "VALIDATION_ERROR",
  "message": "Missing required fields: username, email, and contact_message are required.",
  "resolution": "Supply username, email, and contact_message conforming to /openapi.json.",
  "instance": "/api/v1/contact"
}`}
            </pre>
          </div>

          <div>
            <h3 className="font-orbitron font-bold text-cyber-yellow mb-2">RFC RateLimit Headers</h3>
            <ul className="space-y-2 text-cyber-gray text-xs">
              <li><code className="text-cyber-white">RateLimit-Limit</code>: Max requests allowed in sliding window (default: 60)</li>
              <li><code className="text-cyber-white">RateLimit-Remaining</code>: Remaining requests in current window</li>
              <li><code className="text-cyber-white">RateLimit-Reset</code>: Seconds until the rate limit resets</li>
              <li><code className="text-cyber-white">RateLimit-Policy</code>: Policy directive (<code className="text-cyber-yellow">60;w=60</code>)</li>
              <li><code className="text-cyber-white">Retry-After</code>: Returned on HTTP 429 to signal required backoff seconds</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
