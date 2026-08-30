"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroCanvas } from "@/components/3d/HeroCanvas";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

// Simple typing effect hook
function useTypingEffect(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState(text);

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayedText(text.substring(0, i));
      if (i >= text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return displayedText;
}

export function Hero() {
  const typedRole = useTypingEffect("Full Stack Developer & Graphic Designer", 70);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="Home" className="relative mb-24 min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated glow orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-yellow/10 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyber-green/5 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="flex flex-col items-start gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
              {"// 01_HOME"}
            </span>
            <div className="glow-line h-[1px] w-12" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl md:text-2xl font-medium text-cyber-gray mb-2">Hello!</h4>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-orbitron text-cyber-white leading-tight uppercase tracking-wide">
              I'm <span className="text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,211,0,0.4)]">Salman Ahmad.</span>
            </h1>
            <p className="text-cyber-gray text-sm md:text-base mt-3">
              Also known as <strong className="text-cyber-white">ahmmikun</strong> in developer communities.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="border-l-2 border-cyber-yellow/50 pl-6 py-2 my-2 relative">
            <div className="absolute -left-[2px] top-0 w-[2px] h-full bg-cyber-yellow/20" />
            <p className="text-lg md:text-2xl text-cyber-white font-light max-w-lg min-h-[4rem] sm:min-h-[2rem]">
              {typedRole}
              <span className="inline-block w-2 h-6 ml-1 bg-cyber-yellow animate-pulse align-middle" />
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-4 flex flex-col sm:flex-row flex-wrap gap-6">
            <a 
              href="#Projects" 
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden clip-corner-br border border-cyber-yellow/40 bg-cyber-yellow/5 px-8 font-medium text-cyber-yellow shadow-[0_0_15px_rgba(255,211,0,0.1)] transition-all hover:bg-cyber-yellow/10 hover:border-cyber-yellow hover:shadow-[0_0_30px_rgba(255,211,0,0.5)]"
            >
              <div className="absolute inset-0 -translate-x-[200%] bg-gradient-to-r from-transparent via-cyber-yellow/30 to-transparent skew-x-[30deg] transition-transform duration-1000 group-hover:translate-x-[200%]" />
              <span className="mr-2 uppercase tracking-widest text-sm font-bold z-10">Explore Projects</span>
              <svg className="w-5 h-5 z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            
            <div className="flex items-center gap-4 border border-cyber-border bg-cyber-surface/50 backdrop-blur-sm p-2 clip-corner-tl">
              <a href="https://github.com/ahmmikun" target="_blank" aria-label="GitHub" className="p-2 text-cyber-gray hover:text-cyber-white hover:bg-cyber-white/10 transition-colors">
                <SiGithub className="w-5 h-5" />
              </a>
              <div className="w-px h-5 bg-cyber-border" />
              <a href="https://www.linkedin.com/in/ahmmikun/" target="_blank" aria-label="LinkedIn" className="p-2 text-cyber-gray hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <div className="w-px h-5 bg-cyber-border" />
              <a href="https://www.instagram.com/ahmmikun/" target="_blank" aria-label="Instagram" className="p-2 text-cyber-gray hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
          className="relative flex justify-center items-center mt-12 md:mt-0"
        >
          {/* Cyberpunk HUD Decor */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
            {/* Outer rings */}
            <div className="absolute inset-0 border border-cyber-yellow/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-dashed border-cyber-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* 3D Construct */}
            <HeroCanvas />

            <div className="absolute inset-8 md:inset-0 z-10 clip-corner-tl clip-corner-br border-2 border-cyber-yellow/40 transition-all hover:border-cyber-yellow group bg-cyber-surface overflow-hidden">
              <div className="absolute inset-0 bg-cyber-yellow/20 -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out z-20 pointer-events-none mix-blend-overlay" />
              <Image 
                src="https://i.ibb.co/mVM1W4Jm/Salman-2.png"
                alt="Salman Ahmad (ahmmikun)"
                fill
                className="object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 256px, 400px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
