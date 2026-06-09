"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const links = [
    { name: "HOME", href: "#Home" },
    { name: "ABOUT", href: "#About" },
    { name: "SKILLS", href: "#Skills" },
    { name: "CERTIFICATES", href: "#Certificates" },
    { name: "PROJECTS", href: "#Projects" },
    { name: "CONTACT", href: "#Contact" },
  ];

  // Handle scroll events for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection based on scroll position
      const sections = links.map(link => link.name);
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-cyber-black/80 backdrop-blur-md border-b border-cyber-border py-2" : "bg-transparent py-4"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-orbitron text-xl font-bold tracking-widest text-cyber-white group">
              SALMAN<span className="text-cyber-yellow group-hover:drop-shadow-[0_0_8px_rgba(255,211,0,0.8)] transition-all">AHMAD</span>
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {links.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative group text-sm font-bold tracking-[0.2em] transition-colors py-2 ${
                    isActive ? "text-cyber-white" : "text-cyber-gray hover:text-cyber-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      isActive ? "w-full bg-cyber-green" : "w-0 bg-cyber-yellow group-hover:w-full"
                    }`}
                    style={isActive ? { boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)" } : { boxShadow: "0 0 10px rgba(255, 211, 0, 0.5)" }}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop Right - Resume Button */}
          <div className="hidden md:flex justify-end items-center">
            <a 
              href="/CV-Resume-1.pdf" 
              download="Salman-Ahmad-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-cyber-yellow/10 border border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow hover:text-cyber-black font-bold tracking-widest text-xs uppercase transition-all hover:shadow-[0_0_20px_rgba(255,211,0,0.4)] flex items-center gap-2 group clip-corner-br"
            >
              RESUME
              <svg className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyber-yellow hover:text-cyber-white transition-colors focus:outline-none p-2 border border-cyber-yellow/30 bg-cyber-black/50 backdrop-blur-md rounded-md z-50 relative pointer-events-auto shadow-[0_0_15px_rgba(255,211,0,0.15)]"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
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
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed inset-0 top-0 pt-20 bg-cyber-black/95 backdrop-blur-xl border-l border-cyber-border z-40 overflow-y-auto"
          >
            <div className="px-4 pb-12 space-y-8 flex flex-col items-center min-h-[calc(100vh-5rem)] justify-center">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="w-full text-center"
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-2xl font-orbitron tracking-widest py-2 transition-colors ${
                      activeSection === link.name ? "text-cyber-green drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "text-cyber-white/70 hover:text-cyber-yellow"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + links.length * 0.1 }}
                className="pt-8"
              >
                <a 
                  href="/CV-Resume-1.pdf" 
                  download="Salman-Ahmad-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="px-10 py-4 bg-cyber-yellow text-cyber-black font-bold tracking-widest text-lg uppercase transition-all hover:shadow-[0_0_20px_rgba(255,211,0,0.6)] flex items-center gap-3 clip-corner-br"
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
