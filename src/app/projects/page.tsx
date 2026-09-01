import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { Code, GitBranch, ExternalLink, Terminal, Shield, FolderGit2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Featured Software Projects & Systems | Salman Ahmad (ahmmikun)",
  description: "Explore software projects, automation bot architectures, REST microservices, and AI models engineered by Salman Ahmad (ahmmikun).",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Featured Software Projects | Salman Ahmad (ahmmikun)",
    description: "Explore software projects, automation bot architectures, REST microservices, and AI models engineered by Salman Ahmad (ahmmikun).",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
            // 05_PROJECT_REPOSITORIES
          </span>
          <div className="glow-line h-[1px] w-24" />
        </div>
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-white uppercase tracking-wider">
          Software <span className="text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,211,0,0.4)]">Projects</span> &amp; Systems
        </h1>
        <p className="text-cyber-gray text-base md:text-lg mt-4 max-w-3xl font-light">
          A showcase of production software systems, automation suites, developer microservices, and experimental artificial intelligence architectures authored by Salman Ahmad (ahmmikun).
        </p>
      </div>

      {/* Main Projects Component */}
      <Projects />

      {/* Detailed Technical Case Studies */}
      <div className="mt-20 space-y-10">
        <div className="border-l-2 border-cyber-yellow pl-4">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
            Detailed Project Breakdown &amp; Technical Architecture
          </h2>
          <p className="text-cyber-gray text-sm mt-1">
            Deep-dive into architectural patterns, challenges, and tech stacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-cyber-surface border border-cyber-border clip-corner-br space-y-4">
            <div className="flex items-center gap-3">
              <FolderGit2 className="w-6 h-6 text-cyber-yellow" />
              <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                BijliTrack: Full-Stack Power &amp; Outage Monitoring System
              </h3>
            </div>
            <p className="text-cyber-gray text-sm leading-relaxed font-light">
              An electricity monitoring platform for Pakistani utility consumers. Connects directly to CCMS/PITC public endpoints with real-time feeder ON/OFF tracking, per-hour outage history charts, 12-month billing trends, and scheduled load shedding grids.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Next.js 16</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Express</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">MongoDB</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Tailwind CSS 4</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">TypeScript</span>
            </div>
          </div>

          <div className="p-8 bg-cyber-surface border border-cyber-border clip-corner-br space-y-4">
            <div className="flex items-center gap-3">
              <FolderGit2 className="w-6 h-6 text-cyber-yellow" />
              <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                GitRoasted: Multi-Provider AI Profile Roasting Engine
              </h3>
            </div>
            <p className="text-cyber-gray text-sm leading-relaxed font-light">
              An AI-powered GitHub profile analyzer generating witty roasts and developer metrics. Implements an automated fallback chain across OpenRouter, Gemini, OpenAI, and Grok with MongoDB caching and Neo-Brutalist UI styling.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Next.js 16</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">React 19</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">MongoDB</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Zod</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">AI Fallback</span>
            </div>
          </div>

          <div className="p-8 bg-cyber-surface border border-cyber-border clip-corner-br space-y-4">
            <div className="flex items-center gap-3">
              <FolderGit2 className="w-6 h-6 text-cyber-yellow" />
              <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                Campus BookHub: Student Peer-to-Peer Book Exchange
              </h3>
            </div>
            <p className="text-cyber-gray text-sm leading-relaxed font-light">
              A university student second-hand textbook exchange, sale, and rental platform. Features dynamic Open Library API search, cover image caching, zero-value swap flow, reservation state management, and an interactive business analytics dashboard.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">React 19</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Vite</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">TypeScript</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Tailwind CSS</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Open Library API</span>
            </div>
          </div>

          <div className="p-8 bg-cyber-surface border border-cyber-border clip-corner-br space-y-4">
            <div className="flex items-center gap-3">
              <FolderGit2 className="w-6 h-6 text-cyber-yellow" />
              <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                XLICON V4 MD: Multi-Device WhatsApp Architecture
              </h3>
            </div>
            <p className="text-cyber-gray text-sm leading-relaxed font-light">
              Engineered using modern Node.js, the Baileys protocol library, and MongoDB, XLICON V4 MD is an enterprise-scale messaging bot handling real-time socket sessions with WhatsApp Multi-Device servers. Features include automated media transcoding, spam mitigation, and plugin-based extensibility.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Node.js</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Baileys</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">MongoDB</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">JavaScript</span>
            </div>
          </div>

          <div className="p-8 bg-cyber-surface border border-cyber-border clip-corner-br space-y-4">
            <div className="flex items-center gap-3">
              <FolderGit2 className="w-6 h-6 text-cyber-yellow" />
              <h3 className="text-xl font-orbitron font-bold text-cyber-white">
                AHMMI&apos;s REST API: High-Throughput Scraper Microservice
              </h3>
            </div>
            <p className="text-cyber-gray text-sm leading-relaxed font-light">
              A high-availability RESTful API microservice deployed on cloud infrastructure behind Cloudflare CDN. Provides high-speed utility routes for web scraping, media manipulation, and third-party data processing, designed for high concurrency with zero downtime.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Express</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Node.js</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">REST API</span>
              <span className="px-2 py-1 bg-cyber-black text-cyber-yellow font-mono text-xs border border-cyber-border">Cloudflare</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
