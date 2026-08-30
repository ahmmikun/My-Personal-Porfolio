import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";
import { Code2, Server, Database, Cloud, Palette, Cpu, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Skills Matrix & Stacks | Salman Ahmad (ahmmikun)",
  description: "Comprehensive software engineering skills matrix of Salman Ahmad (ahmmikun), including JavaScript, TypeScript, React, Next.js, Node.js, Python, Three.js, MongoDB, and MCP tooling.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Technical Skills Matrix | Salman Ahmad (ahmmikun)",
    description: "Comprehensive software engineering skills matrix of Salman Ahmad (ahmmikun), covering frontend, backend, databases, and DevOps.",
    url: "/skills",
  },
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
            // 03_SKILLS_MATRIX
          </span>
          <div className="glow-line h-[1px] w-24" />
        </div>
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-white uppercase tracking-wider">
          Technical <span className="text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,211,0,0.4)]">Skills</span> Matrix
        </h1>
        <p className="text-cyber-gray text-base md:text-lg mt-4 max-w-3xl font-light">
          A structured breakdown of core engineering capabilities, frameworks, database systems, protocols, and design tools utilized across production software systems.
        </p>
      </div>

      {/* Main Interactive Skills Component */}
      <Skills />
    </main>
  );
}
