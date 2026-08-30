import type { Metadata } from "next";
import Link from "next/link";
import { Terminal, Code, Cpu, Shield, ExternalLink, BookOpen, Send, CheckCircle2, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Developer Portal & API Docs | Salman Ahmad (ahmmikun) Portfolio",
  description: "Comprehensive developer documentation for REST APIs, Model Context Protocol (MCP) server, OpenAPI 3.1.0 specifications, and AI agent integration.",
  alternates: {
    canonical: "/docs",
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
          Developer <span className="text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,211,0,0.4)]">Portal</span> &amp; API Docs
        </h1>
        <p className="text-cyber-gray text-base md:text-lg mt-4 max-w-3xl font-light">
          Welcome to the official developer documentation for Salman Ahmad&apos;s (ahmmikun) portfolio system. Discover programmatically accessible REST APIs, first-party Model Context Protocol (MCP) servers, OpenAPI specifications, and machine-readable LLM indexes.
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
            Fully validated machine-readable OpenAPI schema for all endpoints.
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
            Live discovery manifest for Model Context Protocol agents.
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
            Standard machine index with &apos;When to use this&apos; agent guidance.
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
            Standard Sitemaps protocol indexing all public routes.
          </p>
          <span className="text-xs text-cyber-yellow font-bold uppercase tracking-wider flex items-center gap-1">
            View Sitemap <ExternalLink className="w-3 h-3" />
          </span>
        </a>
      </div>

      {/* Section 1: MCP Server */}
      <section className="mb-20">
        <div className="border-l-2 border-cyber-yellow pl-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
            1. Model Context Protocol (MCP) Server
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
                <li><strong className="text-cyber-white">Streamable HTTP / SSE Endpoint:</strong> <code className="text-cyber-yellow bg-cyber-black px-2 py-1 rounded">https://ahmmikun.vercel.app/api/mcp</code></li>
                <li><strong className="text-cyber-white">Discovery Manifest:</strong> <code className="text-cyber-yellow bg-cyber-black px-2 py-1 rounded">/.well-known/mcp.json</code></li>
                <li><strong className="text-cyber-white">Protocol Version:</strong> <code className="text-cyber-yellow bg-cyber-black px-2 py-1 rounded">2024-11-05</code></li>
                <li><strong className="text-cyber-white">Transport Support:</strong> Server-Sent Events (SSE), Streamable HTTP, JSON-RPC 2.0</li>
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
      "args": ["-y", "@modelcontextprotocol/server-everything", "https://ahmmikun.vercel.app/api/mcp"]
    }
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Section 2: REST Endpoints */}
      <section className="mb-20">
        <div className="border-l-2 border-cyber-yellow pl-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
            2. REST API Reference
          </h2>
          <p className="text-cyber-gray text-sm mt-1">
            Programmatic HTTP endpoints for data queries and contact transmissions.
          </p>
        </div>

        <div className="space-y-6">
          {/* Endpoint 1 */}
          <div className="bg-cyber-surface border border-cyber-border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-cyber-green/10 border border-cyber-green text-cyber-green font-orbitron text-xs font-bold">
                  POST
                </span>
                <code className="font-mono text-base text-cyber-white font-bold">/api/contact</code>
              </div>
              <span className="text-xs text-cyber-gray">Public Endpoint (Encrypted Transmission)</span>
            </div>
            <p className="text-cyber-gray text-sm mb-4">
              Sends an encrypted transmission / contact message to Salman Ahmad&apos;s verified inbox.
            </p>
            <h3 className="text-xs font-orbitron font-bold text-cyber-yellow uppercase mb-2">Request Payload</h3>
            <pre className="p-4 bg-cyber-black border border-cyber-border text-xs text-cyber-gray overflow-x-auto font-mono mb-4">
{`{
  "username": "Jane Developer",
  "email": "jane@example.com",
  "subject": "Full Stack Next.js Contract Opportunity",
  "contact_message": "Hello Salman, we would like to hire you for a web application project."
}`}
            </pre>
            <h3 className="text-xs font-orbitron font-bold text-cyber-yellow uppercase mb-2">Success Response (200 OK)</h3>
            <pre className="p-4 bg-cyber-black border border-cyber-border text-xs text-cyber-gray overflow-x-auto font-mono">
{`{
  "message": "Email sent successfully"
}`}
            </pre>
          </div>

          {/* Endpoint 2 */}
          <div className="bg-cyber-surface border border-cyber-border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-cyber-yellow/10 border border-cyber-yellow text-cyber-yellow font-orbitron text-xs font-bold">
                  GET
                </span>
                <code className="font-mono text-base text-cyber-white font-bold">/api/skills</code>
              </div>
              <span className="text-xs text-cyber-gray">Public Endpoint</span>
            </div>
            <p className="text-cyber-gray text-sm mb-4">
              Returns the full categorized matrix of programming languages, frontend frameworks, backend technologies, databases, and DevOps tools.
            </p>
          </div>

          {/* Endpoint 3 */}
          <div className="bg-cyber-surface border border-cyber-border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-cyber-yellow/10 border border-cyber-yellow text-cyber-yellow font-orbitron text-xs font-bold">
                  GET
                </span>
                <code className="font-mono text-base text-cyber-white font-bold">/api/projects</code>
              </div>
              <span className="text-xs text-cyber-gray">Public Endpoint</span>
            </div>
            <p className="text-cyber-gray text-sm mb-4">
              Returns the catalog of active software projects including WhatsApp bot frameworks, REST microservices, and AI models.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Markdown Content Negotiation */}
      <section className="mb-16">
        <div className="border-l-2 border-cyber-yellow pl-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
            3. Markdown Content Negotiation (acceptmarkdown.com)
          </h2>
          <p className="text-cyber-gray text-sm mt-1">
            Standard content negotiation for AI crawlers and terminal clients.
          </p>
        </div>

        <div className="bg-cyber-surface border border-cyber-border p-6 md:p-8 space-y-4 text-sm text-cyber-gray">
          <p>
            All public pages on this domain adhere strictly to the <strong className="text-cyber-white">acceptmarkdown.com</strong> standard. When an HTTP request includes the <code className="text-cyber-yellow">Accept: text/markdown</code> header, our server returns pure, structured Markdown with full semantic hierarchy and headers:
          </p>
          <pre className="p-4 bg-cyber-black border border-cyber-border text-xs text-cyber-gray overflow-x-auto font-mono">
{`# Fetch Markdown representation of homepage
curl -H "Accept: text/markdown" https://ahmmikun.vercel.app/

# Fetch Markdown representation of About page
curl -H "Accept: text/markdown" https://ahmmikun.vercel.app/about

# Fetch Markdown representation of Projects
curl -H "Accept: text/markdown" https://ahmmikun.vercel.app/projects`}
          </pre>
          <p>
            Responses include the mandatory <code className="text-cyber-yellow">Vary: Accept, Accept-Encoding</code> header to ensure edge CDNs cache HTML and Markdown variants separately.
          </p>
        </div>
      </section>
    </main>
  );
}
