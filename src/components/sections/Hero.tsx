"use client";

import { motion } from "framer-motion";
import { HeroCanvas } from "@/components/3d/HeroCanvas";

export function Hero() {
  return (
    <section id="Home" className="relative mb-24 min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-yellow/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyber-yellow/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
              {"// 01_HOME"}
            </span>
            <div className="h-[1px] w-12 bg-cyber-yellow" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="text-2xl font-medium text-cyber-gray mb-2">Hello !</h4>
            <h1 className="text-5xl lg:text-7xl font-bold font-orbitron text-white leading-tight uppercase tracking-wide">
              I'm <span className="text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,211,0,0.4)]">Salman Ahmad.</span>
            </h1>
            <p className="text-cyber-gray text-sm mt-2">Also known as <strong>ahmmikun</strong> in developer communities.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="border-l-2 border-cyber-yellow/50 pl-6 py-2 my-2"
          >
            <p className="text-xl md:text-2xl text-cyber-gray font-light max-w-lg">
              Full Stack Developer & Graphics Designer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 flex flex-wrap gap-6"
          >
            <motion.a 
              href="#Projects" 
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden clip-corner-br border border-cyber-yellow/40 bg-cyber-yellow/5 px-8 font-medium text-cyber-yellow shadow-[0_0_15px_rgba(255,211,0,0.1)] transition-all hover:bg-cyber-yellow/10 hover:border-cyber-yellow hover:shadow-[0_0_30px_rgba(255,211,0,0.5)]"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 -translate-x-[200%] bg-gradient-to-r from-transparent via-cyber-yellow/30 to-transparent skew-x-[30deg] transition-transform duration-1000 group-hover:translate-x-[200%]" />
              <span className="mr-2 uppercase tracking-widest text-sm font-bold z-10">Explore Projects</span>
              <motion.span 
                className="z-10"
                variants={{ hover: { x: 6 } }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </motion.span>
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/ahmmikun/" 
              target="_blank" 
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden clip-corner-tl border border-white/20 bg-white/5 backdrop-blur-sm px-8 font-medium text-white transition-all hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 -translate-x-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[30deg] transition-transform duration-1000 group-hover:translate-x-[200%]" />
              <span className="ml-2 uppercase tracking-widest text-sm font-bold z-10">Resume</span>
              <motion.span 
                className="mr-2 z-10 order-first"
                variants={{ hover: { y: -4 } }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden md:flex justify-center items-center"
        >
          {/* Cyberpunk HUD Decor around the right side */}
          <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px]">
            {/* Outer rings */}
            <div className="absolute inset-0 border border-cyber-yellow/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-dashed border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* 3D Construct in the background of Profile */}
            <HeroCanvas />

            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 clip-corner-tl clip-corner-br border-2 border-cyber-yellow/40 transition-all hover:border-cyber-yellow" 
                 aria-label="Salman Ahmad aka ahmmikun developer"
                 style={{ backgroundImage: "url('https://github.com/ahmmikun.png')", backgroundSize: 'cover' }}>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
