"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
// ... (I will keep the rest of the array consistent, let's grab the full text)
  {
    id: 1,
    title: "XLICON V4 MD",
    subtitle: "Whatsapp Bot",
    image: "https://i.ibb.co/yhgtCXh/XLICON-V4-IMG.png",
    link: "https://github.com/ahmmikun/XLICON-V4-MD",
    type: "github"
  },
  {
    id: 2,
    title: "AHMMI's API",
    subtitle: "REST API SITE",
    image: "https://i.ibb.co/fn15q6m/7090057.jpg",
    link: "https://api.ahmmikun.live/",
    type: "external"
  },
  {
    id: 3,
    title: "LAUNCHING SOON",
    subtitle: "AI MODEL",
    image: "https://i.ibb.co/SB30M3F/ezgif-4-beceaf75b9.jpg",
    link: "https://github.com/ahmmikun/",
    type: "pending"
  }
];

export function Projects() {
  return (
    <section id="Projects" className="relative py-24 min-h-screen flex flex-col justify-center bg-black z-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="mb-16 flex justify-between items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
                {"// 04_PROJECTS"}
              </span>
              <div className="h-[1px] w-24 bg-cyber-yellow" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider"
            >
              Neural <span className="text-cyber-gray">Works</span>
            </motion.h2>
          </div>
          
          <motion.a 
            href="https://github.com/ahmmikun"
            target="_blank"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center gap-2 text-cyber-yellow hover:text-white uppercase tracking-widest text-sm font-bold border-b border-cyber-yellow hover:border-white pb-1 transition-all"
          >
            Access All Data <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group block"
            >
              <div className="cyber-panel relative bg-[#050505] border border-white/10 hover:border-cyber-yellow transition-all duration-300 h-[400px] flex flex-col clip-corner-tl">
                
                {/* Data Header */}
                <div className="p-4 border-b border-white/5 flex justify-between items-center group-hover:bg-cyber-yellow/10 transition-colors">
                  <span className="text-xs font-orbitron tracking-widest text-cyber-gray group-hover:text-cyber-yellow">
                    FILE_{project.id.toString().padStart(2, '0')}
                  </span>
                  {project.type === 'github' ? <Code2 className="w-4 h-4 text-cyber-gray group-hover:text-cyber-yellow" /> : <ExternalLink className="w-4 h-4 text-cyber-gray group-hover:text-cyber-yellow" />}
                </div>

                {/* Project Image */}
                <div className="relative flex-1 overflow-hidden bg-black/50 border-b border-white/5">
                  <div className="absolute inset-0 bg-cyber-yellow/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale-[60%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                {/* Project Footer */}
                <div className="p-6">
                  <div className="text-xs text-cyber-yellow mb-2 tracking-Widest uppercase font-orbitron">
                    {project.subtitle}
                  </div>
                  <h3 className="text-xl text-white font-bold tracking-wider group-hover:text-cyber-yellow transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Cyberpunk Decorative element */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-transparent group-hover:border-cyber-yellow transition-colors m-4" />
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <a href="https://github.com/ahmmikun" target="_blank" className="cyber-panel px-6 py-3 text-cyber-yellow uppercase tracking-widest text-sm font-bold shadow-[0_0_15px_rgba(255,211,0,0.2)]">
            Access All Data
          </a>
        </div>

      </div>
    </section>
  );
}
