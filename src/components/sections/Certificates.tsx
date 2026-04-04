"use client";

import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "HTML Certificate",
    image: "https://i.ibb.co/c3yvXjh/UC-d185cc63-2789-45bb-b3cb-6fecc026e95a.jpg"
  },
  {
    id: 2,
    title: "WEB BASIC Certificate",
    image: "https://i.ibb.co/QrJ9rCF/UC-a53e902f-a62c-4fda-8fa1-e56749040689.jpg"
  },
  {
    id: 3,
    title: "GENERATIVE AI Certificate",
    image: "https://i.ibb.co/Vj3sLp5/UC-a3f57b32-ffd9-4fef-844f-bde43685f63b.jpg"
  },
  {
    id: 4,
    title: "Cyber Security Basics",
    image: "https://cdn.discordapp.com/attachments/946018559421734914/1186726423214440570/dummy_cirtifica_73222cee-e918-456e-8f31-cc1b422687b3.png?ex=65944c1b&is=6581d71b&hm=de60c421e7696dd68ed50565c2806f43777c5683902ee98f25aeca1eccb4f291&"
  }
];

export function Certificates() {
  return (
    <section id="Certificates" className="relative py-24 min-h-screen flex flex-col justify-center bg-[#050505] z-10 border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyber-yellow/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-cyber-yellow" />
            <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
              {"// 03_CERTIFICATES"}
            </span>
            <div className="h-[1px] w-12 bg-cyber-yellow" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider"
          >
            Verified <span className="text-cyber-yellow drop-shadow-[0_0_10px_rgba(255,211,0,0.4)]">Credentials</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative cursor-pointer"
            >
              <div className="cyber-panel p-2 bg-black border border-white/10 hover:border-cyber-yellow transition-colors duration-300 relative overflow-hidden">
                
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
                  {/* Scanline hover effect */}
                  <div className="absolute inset-0 bg-cyber-yellow/20 -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out z-10 pointers-events-none mix-blend-overlay" />
                  
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover filter grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="p-4 flex items-center justify-between border-t border-white/5 mt-2 bg-[#0a0a0a]">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider truncate mr-2">
                    {cert.title}
                  </h4>
                  <div className="w-2 h-2 rounded-full bg-cyber-yellow shadow-[0_0_5px_rgba(255,211,0,0.8)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
