"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Globe } from "lucide-react";
import Image from "next/image";
import { CyberPanel3D } from "@/components/ui/CyberPanel3D";

const projects = [
  {
    id: 1,
    title: "XLICON V4 MD",
    subtitle: "WhatsApp Bot",
    description: "An advanced, feature-rich WhatsApp automation bot built with modern Node.js and the Baileys library. Capable of handling commands, media processing, and group management.",
    image: "https://i.ibb.co/yhgtCXh/XLICON-V4-IMG.png",
    link: "https://github.com/ahmmikun/XLICON-V4-MD",
    type: "github",
    tech: ["Node.js", "Baileys", "MongoDB"]
  },
  {
    id: 2,
    title: "AHMMI's API",
    subtitle: "REST API Service",
    description: "A comprehensive, high-performance RESTful API service providing various endpoints for scraping, data manipulation, and third-party integrations.",
    image: "https://i.ibb.co/fn15q6m/7090057.jpg",
    link: "https://api.ahmmikun.live/",
    type: "external",
    tech: ["Express", "Node.js", "REST"]
  },
  {
    id: 3,
    title: "LAUNCHING SOON",
    subtitle: "AI MODEL",
    description: "A next-generation AI model interface focused on conversational logic and generative capabilities. Currently under strict development protocols.",
    image: "https://i.ibb.co/SB30M3F/ezgif-4-beceaf75b9.jpg",
    link: "https://github.com/ahmmikun/",
    type: "pending",
    tech: ["Python", "TensorFlow", "React"]
  }
];

export function Projects() {
  return (
    <section id="Projects" className="relative py-24 min-h-screen flex flex-col justify-center bg-cyber-black z-10">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
                {"// 05_PROJECTS"}
              </span>
              <div className="glow-line h-[1px] w-24" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-white uppercase tracking-wider"
            >
              Neural <span className="text-cyber-gray">Works</span>
            </motion.h2>
          </div>
          
          <motion.a 
            href="https://github.com/ahmmikun"
            target="_blank"
            aria-label="ahmmikun GitHub"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center gap-2 text-cyber-yellow hover:text-cyber-white uppercase tracking-widest text-sm font-bold border-b border-cyber-yellow hover:border-cyber-white pb-1 transition-all"
          >
            Access All Data <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group block h-full"
            >
              <CyberPanel3D className="relative bg-cyber-surface border border-cyber-border hover:border-cyber-yellow transition-all duration-300 h-full flex flex-col clip-corner-tl shadow-lg">
                
                {/* Data Header */}
                <div className="p-4 border-b border-cyber-border flex justify-between items-center group-hover:bg-cyber-yellow/10 transition-colors">
                  <span className="text-xs font-orbitron tracking-widest text-cyber-gray group-hover:text-cyber-yellow">
                    FILE_{project.id.toString().padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.type === 'pending' && <span className="w-2 h-2 rounded-full bg-cyber-yellow animate-pulse" />}
                    {project.type === 'github' ? <Code2 className="w-4 h-4 text-cyber-gray group-hover:text-cyber-yellow" /> : <Globe className="w-4 h-4 text-cyber-gray group-hover:text-cyber-yellow" />}
                  </div>
                </div>

                {/* Project Image */}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative h-48 md:h-56 w-full overflow-hidden bg-cyber-black border-b border-cyber-border block">
                  <div className="absolute inset-0 bg-cyber-yellow/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover filter grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Overlay CTA */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyber-black/60 backdrop-blur-[2px]">
                    <span className="px-6 py-2 bg-cyber-yellow text-cyber-black font-bold uppercase tracking-widest text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(255,211,0,0.5)]">
                      Initialize <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs text-cyber-yellow mb-2 tracking-widest uppercase font-orbitron">
                    {project.subtitle}
                  </div>
                  <h3 className="text-xl text-cyber-white font-bold tracking-wider group-hover:text-cyber-yellow transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-cyber-gray leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-cyber-black border border-cyber-border text-cyber-gray font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cyberpunk Decorative element */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-transparent group-hover:border-cyber-yellow transition-colors m-4" />
              </CyberPanel3D>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
          <a href="https://github.com/ahmmikun" target="_blank" aria-label="ahmmikun GitHub" className="cyber-panel px-6 py-4 text-cyber-yellow uppercase tracking-widest text-sm font-bold shadow-[0_0_15px_rgba(255,211,0,0.2)] flex items-center gap-2">
            Access All Data <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
