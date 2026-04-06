"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "HOME", href: "#Home" },
    { name: "ABOUT", href: "#About" },
    { name: "SKILLS", href: "#Skills" },
    { name: "CERTIFICATES", href: "#Certificates" },
    { name: "PROJECTS", href: "#Projects" },
    { name: "CONTACT", href: "#Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-orbitron text-xl font-bold tracking-widest text-white group">
              SALMAN<span className="text-cyber-yellow group-hover:drop-shadow-[0_0_8px_rgba(255,211,0,0.8)] transition-all">AHMAD</span>
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group text-sm font-bold tracking-[0.2em] text-cyber-gray hover:text-white transition-colors py-2"
              >
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyber-yellow group-hover:w-full transition-all duration-300"
                  style={{ boxShadow: "0 0 10px rgba(255, 211, 0, 0.5)" }}
                />
              </a>
            ))}
          </div>

          {/* Desktop Right - Resume Button */}
          <div className="hidden md:flex justify-end items-center">
            <a 
              href="/CV-Resume-1.pdf" 
              download="Salman-Ahmad-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-cyber-yellow/10 border border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow hover:text-black font-bold tracking-widest text-xs uppercase transition-all shadow-[0_0_10px_rgba(255,211,0,0.2)] hover:shadow-[0_0_15px_rgba(255,211,0,0.6)] flex items-center gap-2 group clip-corner-br"
            >
              RESUME
              <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyber-yellow hover:text-white transition-colors focus:outline-none p-2 border border-cyber-yellow/30 bg-black/50 backdrop-blur-md rounded-md z-50 relative pointer-events-auto shadow-[0_0_15px_rgba(255,211,0,0.15)]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/10"
          >
            <div className="px-4 pt-12 pb-6 space-y-6 flex flex-col items-center">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-orbitron text-center tracking-widest text-white/70 hover:text-cyber-yellow w-full py-4 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: links.length * 0.1 }}
                className="pt-4"
              >
                <a 
                  href="/CV-Resume-1.pdf" 
                  download="Salman-Ahmad-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 bg-cyber-yellow text-black font-bold tracking-widest text-lg uppercase transition-all shadow-[0_0_15px_rgba(255,211,0,0.4)] flex items-center gap-3 clip-corner-br"
                >
                  RESUME
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
