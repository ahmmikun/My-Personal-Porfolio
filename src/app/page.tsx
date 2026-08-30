import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Certificates } from "@/components/sections/Certificates";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { BackgroundScene } from "@/components/3d/BackgroundScene";
import Link from "next/link";
import { Code, Cpu, BookOpen, Shield, ExternalLink, Network, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col relative" aria-label="Portfolio of Salman Ahmad">
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
              This portfolio is built to be 100% agent-ready. AI crawlers, LLMs, and Model Context Protocol (MCP) clients can query structured knowledge, execute tools, and inspect OpenAPI specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-cyber-surface border border-cyber-border clip-corner-br space-y-4">
              <Cpu className="w-8 h-8 text-cyber-yellow" />
              <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                Model Context Protocol (MCP)
              </h3>
              <p className="text-cyber-gray text-sm leading-relaxed font-light">
                First-party MCP server exposing live tools to Claude Desktop, ChatGPT, and AI agents via Streamable HTTP / SSE transport.
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
                Standardized REST API schemas for contact transmissions, skills taxonomy, health monitoring, and project catalogs.
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
              <BookOpen className="w-8 h-8 text-cyber-yellow" />
              <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                acceptmarkdown.com Standard
              </h3>
              <p className="text-cyber-gray text-sm leading-relaxed font-light">
                Send <code className="text-cyber-yellow text-xs">Accept: text/markdown</code> to any route on this domain for pure structured markdown responses.
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

      <Contact />
    </main>
  );
}
