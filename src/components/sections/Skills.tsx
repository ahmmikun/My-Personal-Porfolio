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
  SiHtml5, SiJavascript, SiC, SiCplusplus, SiPython, 
  SiBootstrap, SiTailwindcss, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
  SiHeroku, SiRailway, SiVercel, SiCloudflare, 
  SiPostman, SiFigma 
} from "react-icons/si";

import { FaMicrochip, FaGlobe, FaPaintBrush, FaDatabase, FaCss3Alt } from "react-icons/fa";
import { CyberPanel3D } from "@/components/ui/CyberPanel3D";

const skillCategories = [
  {
    category: "Languages",
    icon: <Code2 className="w-8 h-8 text-cyber-yellow" />,
    colSpan: "lg:col-span-2 xl:col-span-2",
    skills: [
      { name: "HTML", Icon: SiHtml5, color: "hover:text-[#E34F26] hover:border-[#E34F26] hover:bg-[#E34F26]/10" },
      { name: "CSS", Icon: FaCss3Alt, color: "hover:text-[#1572B6] hover:border-[#1572B6] hover:bg-[#1572B6]/10" },
      { name: "JavaScript", Icon: SiJavascript, color: "hover:text-[#F7DF1E] hover:border-[#F7DF1E] hover:bg-[#F7DF1E]/10" },
      { name: "C", Icon: SiC, color: "hover:text-[#A8B9CC] hover:border-[#A8B9CC] hover:bg-[#A8B9CC]/10" },
      { name: "C++", Icon: SiCplusplus, color: "hover:text-[#00599C] hover:border-[#00599C] hover:bg-[#00599C]/10" },
      { name: "Python", Icon: SiPython, color: "hover:text-[#3776AB] hover:border-[#3776AB] hover:bg-[#3776AB]/10" },
      { name: "Assembly", Icon: FaMicrochip, color: "hover:text-cyber-white hover:border-cyber-white hover:bg-cyber-white/10" }
    ]
  },
  {
    category: "Frontend",
    icon: <LayoutTemplate className="w-8 h-8 text-cyber-yellow" />,
    colSpan: "lg:col-span-2 xl:col-span-2",
    skills: [
      { name: "Bootstrap", Icon: SiBootstrap, color: "hover:text-[#7952B3] hover:border-[#7952B3] hover:bg-[#7952B3]/10" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "hover:text-[#06B6D4] hover:border-[#06B6D4] hover:bg-[#06B6D4]/10" },
      { name: "React", Icon: SiReact, color: "hover:text-[#61DAFB] hover:border-[#61DAFB] hover:bg-[#61DAFB]/10" },
      { name: "Next.js", Icon: SiNextdotjs, color: "hover:text-cyber-white hover:border-cyber-white hover:bg-cyber-white/10" }
    ]
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8 text-cyber-yellow" />,
    colSpan: "lg:col-span-1 xl:col-span-1",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "hover:text-[#339933] hover:border-[#339933] hover:bg-[#339933]/10" },
      { name: "Express", Icon: SiExpress, color: "hover:text-cyber-white hover:border-cyber-white hover:bg-cyber-white/10" }
    ]
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8 text-cyber-yellow" />,
    colSpan: "lg:col-span-1 xl:col-span-1",
    skills: [
      { name: "MongoDB", Icon: SiMongodb, color: "hover:text-[#47A248] hover:border-[#47A248] hover:bg-[#47A248]/10" },
      { name: "SQL", Icon: SiMysql, color: "hover:text-[#4479A1] hover:border-[#4479A1] hover:bg-[#4479A1]/10" }
    ]
  },
  {
    category: "Deployment",
    icon: <Cloud className="w-8 h-8 text-cyber-yellow" />,
    colSpan: "lg:col-span-2 xl:col-span-2",
    skills: [
      { name: "Heroku", Icon: SiHeroku, color: "hover:text-[#430098] hover:border-[#430098] hover:bg-[#430098]/10" },
      { name: "Railway", Icon: SiRailway, color: "hover:text-cyber-white hover:border-cyber-white hover:bg-cyber-white/10" },
      { name: "Vercel", Icon: SiVercel, color: "hover:text-cyber-white hover:border-cyber-white hover:bg-cyber-white/10" },
      { name: "Cloudflare", Icon: SiCloudflare, color: "hover:text-[#F38020] hover:border-[#F38020] hover:bg-[#F38020]/10" },
      { name: "Oracle", Icon: FaDatabase, color: "hover:text-[#F80000] hover:border-[#F80000] hover:bg-[#F80000]/10" }
    ]
  },
  {
    category: "Design",
    icon: <Palette className="w-8 h-8 text-cyber-yellow" />,
    colSpan: "lg:col-span-1 xl:col-span-1",
    skills: [
      { name: "Photoshop", Icon: FaPaintBrush, color: "hover:text-[#31A8FF] hover:border-[#31A8FF] hover:bg-[#31A8FF]/10" },
      { name: "Figma", Icon: SiFigma, color: "hover:text-[#F24E1E] hover:border-[#F24E1E] hover:bg-[#F24E1E]/10" }
    ]
  },
  {
    category: "API Tools",
    icon: <LinkIcon className="w-8 h-8 text-cyber-yellow" />,
    colSpan: "lg:col-span-1 xl:col-span-1",
    skills: [
      { name: "REST API", Icon: FaGlobe, color: "hover:text-cyber-white hover:border-cyber-white hover:bg-cyber-white/10" },
      { name: "Postman", Icon: SiPostman, color: "hover:text-[#FF6C37] hover:border-[#FF6C37] hover:bg-[#FF6C37]/10" }
    ]
  }
];

export function Skills() {
  return (
    <section id="Skills" className="relative py-24 min-h-screen flex items-center bg-cyber-black/80 z-10">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none" />

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
            <div className="glow-line h-[1px] w-24" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-4xl md:text-5xl font-orbitron font-bold text-cyber-white uppercase tracking-wider"
          >
            Technical <span className="text-cyber-gray">Arsenal</span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`cyber-panel p-6 bg-cyber-surface border border-cyber-border transition-all duration-300 group flex flex-col h-full relative overflow-hidden ${category.colSpan}`}
            >
              {/* Scanline Effect */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-cyber-yellow shadow-[0_0_10px_rgba(255,211,0,0.8)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Icon & Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 shrink-0 bg-cyber-black border border-cyber-border flex items-center justify-center group-hover:border-cyber-yellow group-hover:bg-cyber-yellow/10 transition-colors shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-lg font-orbitron font-bold text-cyber-white tracking-widest uppercase group-hover:text-cyber-yellow transition-colors leading-tight">
                  {category.category}
                </h3>
              </div>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 bg-cyber-black border border-cyber-border text-cyber-gray transition-all shadow-sm cursor-default ${skill.color}`}
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
