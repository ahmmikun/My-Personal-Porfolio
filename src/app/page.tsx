import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Certificates } from "@/components/sections/Certificates";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { BackgroundScene } from "@/components/3d/BackgroundScene";
import Link from "next/link";
import { Code, Cpu, BookOpen, Shield, ExternalLink, Network, Terminal, Layers, Zap, Bot, Database } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col relative" aria-label="Salman Ahmad Portfolio">
      <BackgroundScene />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />

      {/* Agent & Developer Capabilities Section */}
      <section id="Developer" className="relative py-24 bg-cyber-black z-10 border-t border-cyber-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
                // 06_AGENT_CAPABILITIES
              </span>
              <div className="glow-line h-[1px] w-24" />
            </div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-white uppercase tracking-wider">
              Developer <span className="text-cyber-gray">&amp; Agent</span> Resources
            </h2>
            <p className="text-cyber-gray text-base md:text-lg mt-4 max-w-3xl font-light">
              This portfolio is built to be 100% agent-ready. AI crawlers, LLMs, autonomous reasoning engines, and Model Context Protocol (MCP) clients can query structured knowledge, execute live tools, and inspect OpenAPI specifications directly without requiring client-side JavaScript execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-cyber-surface border border-cyber-border clip-corner-br space-y-4">
              <Cpu className="w-8 h-8 text-cyber-yellow" />
              <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                Model Context Protocol (MCP)
              </h3>
              <p className="text-cyber-gray text-sm leading-relaxed font-light">
                First-party MCP server exposing live tools to Claude Desktop, ChatGPT, and AI agents via Streamable HTTP and SSE transports at <code className="text-cyber-yellow text-xs">/api/mcp</code>.
              </p>
              <div className="pt-2">
                <Link
                  href="/docs"
                  className="text-xs font-orbitron font-bold text-cyber-yellow hover:text-cyber-white uppercase tracking-wider flex items-center gap-1"
                >
                  View MCP Docs &amp; Tools <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-8 bg-cyber-surface border border-cyber-border clip-corner-br space-y-4">
              <Code className="w-8 h-8 text-cyber-yellow" />
              <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                OpenAPI 3.1.0 Specification
              </h3>
              <p className="text-cyber-gray text-sm leading-relaxed font-light">
                Strictly typed REST API schemas with RFC 9457 Problem Details error models, RFC RateLimit headers, and versioned URL paths (<code className="text-cyber-yellow text-xs">/api/v1/</code>).
              </p>
              <div className="pt-2">
                <a
                  href="/openapi.json"
                  target="_blank"
                  className="text-xs font-orbitron font-bold text-cyber-yellow hover:text-cyber-white uppercase tracking-wider flex items-center gap-1"
                >
                  Inspect OpenAPI JSON <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="p-8 bg-cyber-surface border border-cyber-border clip-corner-br space-y-4">
              <Terminal className="w-8 h-8 text-cyber-yellow" />
              <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                Official CLI Tool (npx)
              </h3>
              <p className="text-cyber-gray text-sm leading-relaxed font-light">
                Script portfolio interactions, query skills, list repositories, and launch stdio MCP servers via <code className="text-cyber-yellow text-xs">npx salmanahmad</code> with structured JSON modes.
              </p>
              <div className="pt-2">
                <Link
                  href="/docs#cli"
                  className="text-xs font-orbitron font-bold text-cyber-yellow hover:text-cyber-white uppercase tracking-wider flex items-center gap-1"
                >
                  CLI Documentation <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-8 bg-cyber-surface border border-cyber-border clip-corner-br space-y-4">
              <BookOpen className="w-8 h-8 text-cyber-yellow" />
              <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                acceptmarkdown.com Standard
              </h3>
              <p className="text-cyber-gray text-sm leading-relaxed font-light">
                Send <code className="text-cyber-yellow text-xs">Accept: text/markdown</code> to any route on salmanahmad.tech for pure structured markdown responses optimized for LLM ingestion.
              </p>
              <div className="pt-2">
                <a
                  href="/llms.txt"
                  target="_blank"
                  className="text-xs font-orbitron font-bold text-cyber-yellow hover:text-cyber-white uppercase tracking-wider flex items-center gap-1"
                >
                  Read llms.txt Index <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Engineering Principles Section */}
      <section id="Architecture" className="relative py-24 bg-cyber-surface z-10 border-t border-cyber-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
                // 07_ENGINEERING_ARCHITECTURE
              </span>
              <div className="glow-line h-[1px] w-24" />
            </div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-white uppercase tracking-wider">
              Engineering <span className="text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,211,0,0.4)]">Architecture</span> &amp; Systems Design
            </h2>
            <p className="text-cyber-gray text-base md:text-lg mt-4 max-w-3xl font-light">
              A comprehensive technical overview of software engineering methodologies, architectural decisions, and production standards maintained by Salman Ahmad (ahmmikun).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-cyber-black border border-cyber-border clip-corner-tl space-y-4">
              <div className="flex items-center gap-3">
                <Layers className="w-6 h-6 text-cyber-yellow" />
                <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                  Full-Stack Next.js 16 &amp; React 19 Engineering
                </h3>
              </div>
              <p className="text-cyber-gray text-sm leading-relaxed font-light">
                Leveraging the latest Next.js 16 App Router paradigms, React 19 Server Components (RSC), and Turbopack for optimal bundling efficiency. Server-side rendering (SSR) guarantees that all critical text content, structured metadata, and semantic markup are immediately parseable without requiring client-side JavaScript execution. Client interactivity is progressively layered using Framer Motion micro-animations, Tailwind CSS 4 styling tokens, and accessible WCAG-compliant elements.
              </p>
            </div>

            <div className="p-8 bg-cyber-black border border-cyber-border clip-corner-tl space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-cyber-yellow" />
                <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                  High-Throughput Microservices &amp; REST APIs
                </h3>
              </div>
              <p className="text-cyber-gray text-sm leading-relaxed font-light">
                Engineering modular backend services in Node.js, Express, and Python with strict schema contracts. All API surfaces feature URL path versioning (<code className="text-cyber-yellow text-xs">/api/v1/</code>), RFC 9457 Problem Details error models (<code className="text-cyber-yellow text-xs">application/problem+json</code>), and standard RFC RateLimit headers with proactive self-throttling signals (<code className="text-cyber-yellow text-xs">RateLimit-Limit</code>, <code className="text-cyber-yellow text-xs">RateLimit-Remaining</code>, <code className="text-cyber-yellow text-xs">Retry-After</code>).
              </p>
            </div>

            <div className="p-8 bg-cyber-black border border-cyber-border clip-corner-tl space-y-4">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6 text-cyber-yellow" />
                <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                  Autonomous Bots &amp; Real-Time Messaging Protocols
                </h3>
              </div>
              <p className="text-cyber-gray text-sm leading-relaxed font-light">
                Architecting resilient multi-device automation agents and messaging bots utilizing Baileys, WebSocket protocols, and event-driven architectures. Featuring distributed session persistence, automatic reconnection backoff, rate-limited queuing, media stream transcoding, and MongoDB multi-tenant storage models for mission-critical operations.
              </p>
            </div>

            <div className="p-8 bg-cyber-black border border-cyber-border clip-corner-tl space-y-4">
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-cyber-yellow" />
                <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                  3D Interactive Graphics &amp; WebGL Acceleration
                </h3>
              </div>
              <p className="text-cyber-gray text-sm leading-relaxed font-light">
                Creating immersive interactive experiences using Three.js and React Three Fiber. Utilizing custom GLSL vertex and fragment shaders, optimized geometry buffers, instanced rendering pipelines, and responsive canvas viewports that maintain 60 FPS performance across desktop and mobile devices while gracefully degrading in low-power environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
