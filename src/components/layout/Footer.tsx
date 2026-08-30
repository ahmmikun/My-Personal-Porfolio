"use client";

import Link from "next/link";
import { ArrowUp, Terminal, Shield, Code, BookOpen } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-cyber-black border-t border-cyber-border pt-16 pb-8 relative z-10 overflow-hidden">
      {/* Subtle top gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyber-yellow/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start text-left">
          
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <h2 className="font-orbitron text-2xl font-bold tracking-widest text-cyber-white">
              SALMAN <span className="text-cyber-yellow">AHMAD</span>
            </h2>
            <p className="text-cyber-gray text-xs md:text-sm leading-relaxed">
              Also known as <strong className="text-cyber-white">ahmmikun</strong>. Full Stack Developer &amp; Graphic Designer specializing in Next.js, React, Node.js, Three.js, and automation bots.
            </p>
            <p className="text-xs text-cyber-yellow font-mono mt-1">
              Lahore, Pakistan (UTC+5)
            </p>
          </div>

          {/* Core Navigation */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs uppercase tracking-widest text-cyber-white font-orbitron mb-2">Navigation</h3>
            <Link href="/" className="text-xs tracking-wider text-cyber-gray hover:text-cyber-yellow transition-colors">HOME</Link>
            <Link href="/about" className="text-xs tracking-wider text-cyber-gray hover:text-cyber-yellow transition-colors">ABOUT SALMAN</Link>
            <Link href="/projects" className="text-xs tracking-wider text-cyber-gray hover:text-cyber-yellow transition-colors">FEATURED PROJECTS</Link>
            <Link href="/skills" className="text-xs tracking-wider text-cyber-gray hover:text-cyber-yellow transition-colors">TECHNICAL SKILLS</Link>
            <Link href="/contact" className="text-xs tracking-wider text-cyber-gray hover:text-cyber-yellow transition-colors">CONTACT TERMINAL</Link>
          </div>

          {/* Developer & Machine Interfaces */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs uppercase tracking-widest text-cyber-white font-orbitron mb-2">Developer &amp; Agent APIs</h3>
            <Link href="/docs" className="text-xs tracking-wider text-cyber-gray hover:text-cyber-yellow transition-colors">DEVELOPER PORTAL</Link>
            <Link href="/openapi.json" target="_blank" className="text-xs tracking-wider text-cyber-gray hover:text-cyber-yellow transition-colors">OPENAPI 3.1.0 SPEC</Link>
            <Link href="/.well-known/mcp.json" target="_blank" className="text-xs tracking-wider text-cyber-gray hover:text-cyber-yellow transition-colors">MCP MANIFEST</Link>
            <Link href="/llms.txt" target="_blank" className="text-xs tracking-wider text-cyber-gray hover:text-cyber-yellow transition-colors">LLMS.TXT INDEX</Link>
            <Link href="/sitemap.xml" target="_blank" className="text-xs tracking-wider text-cyber-gray hover:text-cyber-yellow transition-colors">XML SITEMAP</Link>
            <Link href="/privacy" className="text-xs tracking-wider text-cyber-gray hover:text-cyber-yellow transition-colors">PRIVACY POLICY</Link>
          </div>

          {/* Social Icons & Connect */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest text-cyber-white font-orbitron mb-2">Transmissions</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ahmmikun"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-cyber-surface border border-cyber-border rounded-sm text-cyber-gray hover:text-cyber-white hover:border-cyber-yellow hover:bg-cyber-yellow/10 hover:shadow-[0_0_15px_rgba(255,211,0,0.2)] transition-all"
              >
                <SiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmmikun/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-cyber-surface border border-cyber-border rounded-sm text-cyber-gray hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:shadow-[0_0_15px_rgba(10,102,194,0.2)] transition-all"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/ahmmikun/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 bg-cyber-surface border border-cyber-border rounded-sm text-cyber-gray hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-[#E4405F]/10 hover:shadow-[0_0_15px_rgba(228,64,95,0.2)] transition-all"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-cyber-gray mt-2">
              Email: <a href="mailto:xheikhsalman4422@gmail.com" className="text-cyber-yellow hover:underline">xheikhsalman4422@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyber-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs tracking-widest text-cyber-gray/70 uppercase">
            © {currentYear} SALMAN AHMAD (AHMMIKUN). ALL RIGHTS RESERVED.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2 text-xs tracking-widest text-cyber-gray uppercase">
              <span className="w-2 h-2 rounded-full bg-cyber-green pulse-green"></span>
              SYSTEM ONLINE // AGENT READY
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-bold tracking-widest text-cyber-yellow hover:text-cyber-white transition-colors group px-4 py-2 bg-cyber-surface border border-cyber-border hover:border-cyber-yellow clip-corner-br"
              aria-label="Scroll to top"
            >
              BACK TO TOP
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
