import Link from "next/link";
import { Terminal, Compass, ArrowLeft, Home, FileText, Code, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Transmission Lost | Salman Ahmad Portfolio",
  description: "The requested sector or resource could not be found. Consult the agent-friendly directory and recovery links below.",
};

export default function NotFound() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center py-20 px-4 relative z-10">
      <div className="max-w-3xl w-full border border-cyber-border bg-cyber-surface/90 backdrop-blur-md p-8 md:p-12 clip-corner-br relative overflow-hidden shadow-[0_0_50px_rgba(255,211,0,0.05)]">
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyber-yellow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3 mb-6">
          <Terminal className="w-6 h-6 text-cyber-yellow" />
          <span className="font-orbitron text-xs tracking-widest text-cyber-yellow uppercase">
            // ERROR_CODE: 404_NOT_FOUND
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-white tracking-wider uppercase mb-4">
          TRANSMISSION <span className="text-cyber-yellow">LOST</span>
        </h1>

        <p className="text-cyber-gray text-base md:text-lg leading-relaxed mb-8">
          The requested coordinate does not exist in Salman Ahmad&apos;s portfolio database. If you are an AI crawler or automated agent, use the recovery endpoints and sitemap below to navigate the system index.
        </p>

        {/* Machine-readable & Agent Directory */}
        <div className="border-t border-b border-cyber-border py-6 mb-8 space-y-4">
          <h2 className="text-sm font-orbitron font-bold text-cyber-white uppercase tracking-widest flex items-center gap-2">
            <Compass className="w-4 h-4 text-cyber-yellow" /> Agent Recovery Index &amp; Discovery
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link
              href="/llms.txt"
              className="p-3 bg-cyber-black border border-cyber-border hover:border-cyber-yellow text-cyber-gray hover:text-cyber-white transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyber-yellow" />
              <span>/llms.txt (LLM Summary)</span>
            </Link>
            <Link
              href="/llms-full.txt"
              className="p-3 bg-cyber-black border border-cyber-border hover:border-cyber-yellow text-cyber-gray hover:text-cyber-white transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyber-yellow" />
              <span>/llms-full.txt (Full Knowledge)</span>
            </Link>
            <Link
              href="/sitemap.xml"
              className="p-3 bg-cyber-black border border-cyber-border hover:border-cyber-yellow text-cyber-gray hover:text-cyber-white transition-colors flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-cyber-yellow" />
              <span>/sitemap.xml (All Routes)</span>
            </Link>
            <Link
              href="/docs"
              className="p-3 bg-cyber-black border border-cyber-border hover:border-cyber-yellow text-cyber-gray hover:text-cyber-white transition-colors flex items-center gap-2"
            >
              <Code className="w-4 h-4 text-cyber-yellow" />
              <span>/docs (Developer API &amp; MCP)</span>
            </Link>
          </div>
        </div>

        {/* Human Navigation */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-yellow/10 border border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow hover:text-cyber-black transition-all font-orbitron text-xs tracking-widest uppercase font-bold clip-corner-br"
          >
            <Home className="w-4 h-4" /> Return to Base (Home)
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-surface border border-cyber-border text-cyber-gray hover:text-cyber-white hover:border-cyber-yellow transition-all font-orbitron text-xs tracking-widest uppercase font-bold"
          >
            About Salman
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-surface border border-cyber-border text-cyber-gray hover:text-cyber-white hover:border-cyber-yellow transition-all font-orbitron text-xs tracking-widest uppercase font-bold"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-surface border border-cyber-border text-cyber-gray hover:text-cyber-white hover:border-cyber-yellow transition-all font-orbitron text-xs tracking-widest uppercase font-bold"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
