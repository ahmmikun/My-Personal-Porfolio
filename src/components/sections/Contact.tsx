"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="Contact" className="relative py-24 min-h-screen flex items-center bg-[#050505] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
              {"// 05_CONTACT"}
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
            Get In <span className="text-cyber-yellow drop-shadow-[0_0_10px_rgba(255,211,0,0.4)]">Touch</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <p className="text-cyber-gray text-lg leading-relaxed border-l-2 border-cyber-yellow/50 pl-4 py-1">
              Feel free to establish a secure comm link. Ready to initialize new ventures.
            </p>

            <div className="grid gap-6 mt-4">
               <div className="cyber-panel p-6 bg-black border border-white/10 flex items-center gap-6 hover:border-cyber-yellow transition-colors group">
                 <div className="w-14 h-14 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-cyber-yellow group-hover:bg-cyber-yellow/10 transition-colors shrink-0">
                    <Mail className="w-6 h-6 text-cyber-yellow" />
                 </div>
                 <div>
                    <div className="text-xs uppercase tracking-widest text-cyber-gray mb-1">Email Terminal</div>
                    <a href="mailto:salmansheikh2500@gmail.com" className="text-white hover:text-cyber-yellow transition-colors font-bold break-all">
                       salmansheikh2500@gmail.com
                    </a>
                 </div>
               </div>

               <div className="cyber-panel p-6 bg-black border border-white/10 flex items-center gap-6 hover:border-cyber-yellow transition-colors group">
                 <div className="w-14 h-14 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-cyber-yellow group-hover:bg-cyber-yellow/10 transition-colors shrink-0">
                    <MapPin className="w-6 h-6 text-cyber-yellow" />
                 </div>
                 <div>
                    <div className="text-xs uppercase tracking-widest text-cyber-gray mb-1">Physical Location</div>
                    <div className="text-white font-bold">
                       Punjab, Lahore, Pakistan
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form action="https://formspree.io/f/mbjwgegb" method="POST" className="cyber-panel p-8 bg-black/60 border border-white/10 backdrop-blur-sm relative clip-corner-br">
               <div className="absolute top-0 right-0 w-24 h-[1px] bg-cyber-yellow/50" />
               <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-cyber-gray font-orbitron ml-1">Identifier</label>
                        <input type="text" name="username" required placeholder="Your Name" className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white placeholder-cyber-gray/50 focus:outline-none focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow transition-all" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-cyber-gray font-orbitron ml-1">Comm Link</label>
                        <input type="email" name="email" required placeholder="Your Email" className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white placeholder-cyber-gray/50 focus:outline-none focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow transition-all" />
                     </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label className="text-xs uppercase tracking-widest text-cyber-gray font-orbitron ml-1">Subject Vector</label>
                     <input type="text" name="subject" required placeholder="Transmission Subject" className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white placeholder-cyber-gray/50 focus:outline-none focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow transition-all" />
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs uppercase tracking-widest text-cyber-gray font-orbitron ml-1">Data Payload</label>
                     <textarea name="contact_message" required rows={5} placeholder="Compose your message..." className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white placeholder-cyber-gray/50 focus:outline-none focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow transition-all resize-none" />
                  </div>

                  <button type="submit" className="group mt-2 border border-cyber-yellow bg-cyber-yellow/10 text-cyber-yellow uppercase tracking-widest text-sm font-bold py-4 flex items-center justify-center gap-3 hover:bg-cyber-yellow hover:text-black transition-all">
                     <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Transmit Data
                  </button>
               </div>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
