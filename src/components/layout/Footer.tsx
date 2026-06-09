"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-cyber-black border-t border-cyber-border pt-16 pb-8 relative z-10 overflow-hidden">
      {/* Subtle top gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyber-yellow/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h2 className="font-orbitron text-2xl font-bold tracking-widest text-cyber-white">
              AHMMI <span className="text-cyber-yellow">KUN</span>
            </h2>
            <p className="text-cyber-gray text-sm md:text-base">
              Full Stack Developer & Graphic Designer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-xs uppercase tracking-widest text-cyber-gray font-orbitron mb-2">Terminal Access</h3>
            <div className="flex gap-6">
              <a href="#Home" className="text-sm font-bold tracking-wider text-cyber-gray hover:text-cyber-white transition-colors">HOME</a>
              <a href="#Projects" className="text-sm font-bold tracking-wider text-cyber-gray hover:text-cyber-white transition-colors">PROJECTS</a>
              <a href="#Contact" className="text-sm font-bold tracking-wider text-cyber-gray hover:text-cyber-white transition-colors">CONTACT</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-end gap-6">
            <Link 
              href="https://github.com/ahmmikun" 
              target="_blank" 
              aria-label="GitHub" 
              className="p-3 bg-cyber-surface border border-cyber-border rounded-sm text-cyber-gray hover:text-cyber-white hover:border-cyber-yellow hover:bg-cyber-yellow/10 hover:shadow-[0_0_15px_rgba(255,211,0,0.2)] transition-all group"
            >
              <SiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/ahmmikun/" 
              target="_blank" 
              aria-label="LinkedIn" 
              className="p-3 bg-cyber-surface border border-cyber-border rounded-sm text-cyber-gray hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:shadow-[0_0_15px_rgba(10,102,194,0.2)] transition-all group"
            >
              <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
            <Link 
              href="https://www.instagram.com/ahmmikun/" 
              target="_blank" 
              aria-label="Instagram"
              className="p-3 bg-cyber-surface border border-cyber-border rounded-sm text-cyber-gray hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-[#E4405F]/10 hover:shadow-[0_0_15px_rgba(228,64,95,0.2)] transition-all group"
            >
              <SiInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cyber-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs tracking-widest text-cyber-gray/70 uppercase">
            © {currentYear} AHMMI KUN. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2 text-xs tracking-widest text-cyber-gray uppercase">
              <span className="w-2 h-2 rounded-full bg-cyber-green pulse-green"></span>
              SYSTEM ONLINE
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
