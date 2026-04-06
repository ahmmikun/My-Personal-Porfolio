"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  LayoutTemplate, 
  Server, 
  Database, 
  Cloud, 
  Link as LinkIcon, 
  Palette 
} from "lucide-react";

import { 
  SiHtml5, SiCss, SiJavascript, SiC, SiCplusplus, SiPython, 
  SiBootstrap, SiTailwindcss, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
  SiHeroku, SiRailway, SiVercel, SiCloudflare, 
  SiPostman, SiFigma 
} from "react-icons/si";

import { FaMicrochip, FaGlobe, FaPaintBrush, FaDatabase } from "react-icons/fa";
import { CyberPanel3D } from "@/components/ui/CyberPanel3D";

const skillCategories = [
  {
    category: "Languages",
    icon: <Code2 className="w-8 h-8 text-cyber-yellow" />,
    skills: [
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "C", Icon: SiC },
      { name: "C++", Icon: SiCplusplus },
      { name: "Python", Icon: SiPython },
      { name: "Assembly", Icon: FaMicrochip }
    ]
  },
  {
    category: "Frontend",
    icon: <LayoutTemplate className="w-8 h-8 text-cyber-yellow" />,
    skills: [
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs }
    ]
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8 text-cyber-yellow" />,
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress }
    ]
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8 text-cyber-yellow" />,
    skills: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "SQL", Icon: SiMysql }
    ]
  },
  {
    category: "Deployment",
    icon: <Cloud className="w-8 h-8 text-cyber-yellow" />,
    skills: [
      { name: "Heroku", Icon: SiHeroku },
      { name: "Railway", Icon: SiRailway },
      { name: "Vercel", Icon: SiVercel },
      { name: "Cloudflare", Icon: SiCloudflare },
      { name: "Oracle", Icon: FaDatabase }
    ]
  },
  {
    category: "API & Integration",
    icon: <LinkIcon className="w-8 h-8 text-cyber-yellow" />,
    skills: [
      { name: "REST API", Icon: FaGlobe },
      { name: "Postman", Icon: SiPostman }
    ]
  },
  {
    category: "Design Tools",
    icon: <Palette className="w-8 h-8 text-cyber-yellow" />,
    skills: [
      { name: "Photoshop", Icon: FaPaintBrush },
      { name: "Figma", Icon: SiFigma }
    ]
  }
];

export function Skills() {
  return (
    <section id="Skills" className="relative py-24 min-h-screen flex items-center bg-black/80 z-10">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
              {"// 03_SKILLS"}
            </span>
            <div className="h-[1px] w-24 bg-cyber-yellow" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider"
          >
            Technical <span className="text-cyber-gray">Arsenal</span>
          </motion.h2>
        </div>

        {/* Unified Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cyber-panel p-6 bg-[#050505] border border-white/10 hover:border-cyber-yellow transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
            >
              {/* Scanline Effect */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-cyber-yellow shadow-[0_0_10px_rgba(255,211,0,0.8)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Icon & Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 shrink-0 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-cyber-yellow group-hover:bg-cyber-yellow/10 transition-colors shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-lg font-orbitron font-bold text-white tracking-widest uppercase group-hover:text-cyber-yellow transition-colors leading-tight">
                  {category.category}
                </h3>
              </div>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-cyber-gray group-hover:border-cyber-yellow/30 group-hover:text-white transition-colors hover:!border-cyber-yellow hover:!bg-cyber-yellow/10 hover:!text-cyber-yellow shadow-sm"
                  >
                    <skill.Icon className="w-3.5 h-3.5" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
