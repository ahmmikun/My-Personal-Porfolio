"use client";

import { motion } from "framer-motion";
import { Terminal, GraduationCap, BookOpen, ChevronRight, Code2 } from "lucide-react";
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiGit, SiTypescript } from "react-icons/si";

export function About() {
  return (
    <section id="About" className="relative py-24 min-h-screen flex items-center bg-black/50 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
              {"// 02_ABOUT"}
            </span>
            <div className="h-[1px] w-32 bg-gradient-to-r from-cyber-yellow to-transparent" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider"
          >
            System <span className="text-cyber-gray">Profile</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Bio & Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Bio Card */}
            <div className="cyber-panel p-8 md:p-10 bg-[#050505] border border-white/10 relative overflow-hidden group hover:border-cyber-yellow/40 transition-colors duration-500 rounded-sm">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-yellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="flex items-center gap-3 mb-6">
                <ChevronRight className="w-6 h-6 text-cyber-yellow" />
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white">
                  SALMAN <span className="text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,211,0,0.4)]">AHMAD</span>
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-cyber-gray text-base md:text-lg leading-relaxed font-light">
                  Based in Lahore, Pakistan, I am a passionate Full-Stack Developer specializing in engineering high-performance web applications and responsive automation systems.
                </p>
                <p className="text-cyber-gray text-base md:text-lg leading-relaxed font-light">
                  With a strong foundation in modern JavaScript frameworks and scalable backend architecture, I transform complex requirements into elegant, interactive digital experiences. My focus lies in writing clean, modular code and pushing the boundaries of web UI/UX.
                </p>
              </div>
              
              {/* Fact Counters */}
              <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8 mt-10">
                <div className="text-center group/stat">
                  <div className="text-4xl font-orbitron font-bold text-cyber-yellow mb-2 group-hover/stat:scale-110 transition-transform drop-shadow-[0_0_12px_rgba(255,211,0,0.2)] flex justify-center">20+</div>
                  <div className="text-xs tracking-widest text-[#a0a0a0] uppercase font-bold">Projects</div>
                </div>
                <div className="text-center border-l border-white/5 group/stat">
                  <div className="text-4xl font-orbitron font-bold text-cyber-yellow mb-2 group-hover/stat:scale-110 transition-transform drop-shadow-[0_0_12px_rgba(255,211,0,0.2)] flex justify-center">10+</div>
                  <div className="text-xs tracking-widest text-[#a0a0a0] uppercase font-bold">Tools / Dev</div>
                </div>
                <div className="text-center border-l border-white/5 group/stat">
                  <div className="text-4xl font-orbitron font-bold text-cyber-yellow mb-2 group-hover/stat:scale-110 transition-transform drop-shadow-[0_0_12px_rgba(255,211,0,0.2)] flex justify-center">1k+</div>
                  <div className="text-xs tracking-widest text-[#a0a0a0] uppercase font-bold">Hours</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education & Experience Timelines */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col pt-4 lg:pt-0"
            id="Resume"
          >
            {/* Experience Section */}
            <h3 className="text-lg font-orbitron text-white mb-10 uppercase tracking-widest flex items-center gap-4">
              <span className="w-3 h-3 bg-cyber-yellow rotate-45 shadow-[0_0_8px_rgba(255,211,0,0.6)]" /> 
              Experience
            </h3>
            
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cyber-yellow/60 before:via-white/10 before:to-transparent">
                  
              {/* Exp Item 1 - Corvit */}
              <div className="relative flex items-start gap-8 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-none bg-[#0a0a0a] border-2 border-cyber-yellow z-10 shrink-0 shadow-[0_0_15px_rgba(255,211,0,0.3)] group-hover:bg-cyber-yellow/10 transition-colors rotate-45 group-hover:rotate-0 duration-500">
                    <Terminal className="w-5 h-5 text-cyber-yellow -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 pb-4 border-b border-white/5 group-hover:border-cyber-yellow/30 transition-colors">
                    <div className="flex flex-col mb-1">
                        <span className="text-[10px] sm:text-xs font-orbitron text-cyber-yellow tracking-widest mb-1">2026</span>
                        <h4 className="font-bold text-white text-base sm:text-lg leading-tight group-hover:text-cyber-yellow transition-colors">Full Stack Developer</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#a0a0a0] mb-3">Corvit Networks</p>
                    
                    {/* Tech Stack Icons */}
                    <div className="flex gap-2 text-cyber-gray">
                      <SiReact className="w-4 h-4 hover:text-[#61DAFB] transition-colors" title="React" />
                      <SiNextdotjs className="w-4 h-4 hover:text-white transition-colors" title="Next.js" />
                      <SiNodedotjs className="w-4 h-4 hover:text-[#339933] transition-colors" title="Node.js" />
                      <SiMongodb className="w-4 h-4 hover:text-[#47A248] transition-colors" title="MongoDB" />
                    </div>
                  </div>
              </div>

              {/* Exp Item 2 - Open Source */}
              <div className="relative flex items-start gap-8 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-none bg-[#0a0a0a] border-2 border-white/20 z-10 shrink-0 group-hover:border-cyber-yellow group-hover:bg-cyber-yellow/5 transition-colors rotate-45 group-hover:rotate-0 duration-500">
                    <Code2 className="w-5 h-5 text-cyber-gray group-hover:text-cyber-yellow -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                  </div>
                  <div className="flex-1 pb-4 group-hover:border-cyber-yellow/30 transition-colors">
                    <div className="flex flex-col mb-1">
                        <span className="text-[10px] sm:text-xs font-orbitron text-cyber-gray group-hover:text-cyber-yellow tracking-widest mb-1 transition-colors">2023 — Present</span>
                        <h4 className="font-bold text-white text-base sm:text-lg leading-tight group-hover:text-cyber-yellow transition-colors">Open Source Contributor</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#a0a0a0] mb-3">Global / Remote</p>

                    {/* Tech Stack Icons */}
                    <div className="flex gap-2 text-cyber-gray">
                      <SiGit className="w-4 h-4 hover:text-[#F05032] transition-colors" title="Git" />
                      <SiTypescript className="w-4 h-4 hover:text-[#3178C6] transition-colors" title="TypeScript" />
                      <SiReact className="w-4 h-4 hover:text-[#61DAFB] transition-colors" title="React" />
                      <SiTailwindcss className="w-4 h-4 hover:text-[#06B6D4] transition-colors" title="Tailwind CSS" />
                    </div>
                  </div>
              </div>
            </div>

            {/* Education Section */}
            <h3 className="text-lg font-orbitron text-white mt-12 mb-10 uppercase tracking-widest flex items-center gap-4">
              <span className="w-3 h-3 bg-cyber-gray rotate-45 shadow-[0_0_8px_rgba(255,255,255,0.2)]" /> 
              Education
            </h3>
            
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-white/20 before:via-white/10 before:to-transparent">
              
              {/* Edu Item 1 - BSCS */}
              <div className="relative flex items-start gap-8 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-none bg-[#0a0a0a] border-2 border-white/20 z-10 shrink-0 group-hover:border-cyber-yellow group-hover:bg-cyber-yellow/5 transition-colors rotate-45 group-hover:rotate-0 duration-500">
                    <GraduationCap className="w-5 h-5 text-cyber-gray group-hover:text-cyber-yellow -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                  </div>
                  <div className="flex-1 pb-4 border-b border-white/5 group-hover:border-cyber-yellow/30 transition-colors">
                    <div className="flex flex-col mb-1">
                        <span className="text-[10px] sm:text-xs font-orbitron text-cyber-gray group-hover:text-cyber-yellow tracking-widest mb-1 transition-colors">2024 — 2028</span>
                        <h4 className="font-bold text-white text-base sm:text-lg leading-tight group-hover:text-cyber-yellow transition-colors">BSCS</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#a0a0a0]">Punjab University</p>
                  </div>
              </div>

              {/* Edu Item 2 - HSSC */}
              <div className="relative flex items-start gap-8 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-none bg-[#0a0a0a] border-2 border-white/20 z-10 shrink-0 group-hover:border-cyber-yellow group-hover:bg-cyber-yellow/5 transition-colors rotate-45 group-hover:rotate-0 duration-500">
                    <BookOpen className="w-5 h-5 text-cyber-gray group-hover:text-cyber-yellow -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                  </div>
                  <div className="flex-1 pb-4 group-hover:border-cyber-yellow/30 transition-colors">
                    <div className="flex flex-col mb-1">
                        <span className="text-[10px] sm:text-xs font-orbitron text-cyber-gray group-hover:text-cyber-yellow tracking-widest mb-1 transition-colors">2022 — 2024</span>
                        <h4 className="font-bold text-white text-base sm:text-lg leading-tight group-hover:text-cyber-yellow transition-colors">HSSC</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#a0a0a0]">Punjab College</p>
                  </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
