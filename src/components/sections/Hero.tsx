"use client";

import { motion } from "framer-motion";

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
            <a href="#Projects" className="cyber-panel clip-corner-br px-8 py-4 text-cyber-yellow font-bold uppercase tracking-widest text-sm hover:bg-cyber-yellow hover:text-black transition-all duration-300 group flex items-center gap-2 border border-cyber-yellow">
              Explore Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            
            <a href="/CV-Resume-1.pdf" download="Salman-Ahmad-Resume.pdf" className="cyber-panel clip-corner-tl px-8 py-4 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 group flex items-center gap-2 border border-white/20 hover:border-white">
              <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Resume
            </a>
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
            
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 clip-corner-tl clip-corner-br border-2 border-cyber-yellow/40 transition-all hover:border-cyber-yellow" 
                 style={{ backgroundImage: "url('/Profile.png')", backgroundSize: 'cover' }}>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
