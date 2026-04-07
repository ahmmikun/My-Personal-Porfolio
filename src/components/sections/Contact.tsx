"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { CyberPanel3D } from "@/components/ui/CyberPanel3D";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      contact_message: formData.get("contact_message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
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
               <CyberPanel3D className="p-6 bg-black border border-white/10 flex items-center gap-6 hover:border-cyber-yellow transition-colors group">
                 <div className="w-14 h-14 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-cyber-yellow group-hover:bg-cyber-yellow/10 transition-colors shrink-0">
                    <Mail className="w-6 h-6 text-cyber-yellow" />
                 </div>
                 <div>
                    <div className="text-xs uppercase tracking-widest text-cyber-gray mb-1">Email Terminal</div>
                    <a href="mailto:salmansheikh2500@gmail.com" className="text-white hover:text-cyber-yellow transition-colors font-bold break-all">
                       salmansheikh2500@gmail.com
                    </a>
                 </div>
               </CyberPanel3D>

               <CyberPanel3D className="p-6 bg-black border border-white/10 flex items-center gap-6 hover:border-cyber-yellow transition-colors group">
                 <div className="w-14 h-14 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-cyber-yellow group-hover:bg-cyber-yellow/10 transition-colors shrink-0">
                    <MapPin className="w-6 h-6 text-cyber-yellow" />
                 </div>
                 <div>
                    <div className="text-xs uppercase tracking-widest text-cyber-gray mb-1">Physical Location</div>
                    <div className="text-white font-bold">
                       Punjab, Lahore, Pakistan
                    </div>
                 </div>
               </CyberPanel3D>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CyberPanel3D className="p-8 bg-black/60 border border-white/10 backdrop-blur-sm relative clip-corner-br">
              <form onSubmit={handleSubmit} className="h-full">
                 <div className="absolute top-0 right-0 w-24 h-[1px] bg-cyber-yellow/50" />
                 <div className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest text-cyber-gray font-orbitron ml-1">Identifier</label>
                          <input type="text" name="username" required placeholder="Your Name" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white placeholder-cyber-gray/50 focus:outline-none focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow transition-all disabled:opacity-50" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest text-cyber-gray font-orbitron ml-1">Comm Link</label>
                          <input type="email" name="email" required placeholder="Your Email" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white placeholder-cyber-gray/50 focus:outline-none focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow transition-all disabled:opacity-50" />
                       </div>
                    </div>
                    
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest text-cyber-gray font-orbitron ml-1">Subject Vector</label>
                       <input type="text" name="subject" required placeholder="Transmission Subject" disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white placeholder-cyber-gray/50 focus:outline-none focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow transition-all disabled:opacity-50" />
                    </div>

                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest text-cyber-gray font-orbitron ml-1">Data Payload</label>
                       <textarea name="contact_message" required rows={5} placeholder="Compose your message..." disabled={isSubmitting} className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-white placeholder-cyber-gray/50 focus:outline-none focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow transition-all resize-none disabled:opacity-50" />
                    </div>

                    {submitStatus === "success" && (
                       <div className="p-4 border border-green-500/50 bg-green-500/10 text-green-400 text-sm font-orbitron uppercase tracking-wider flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" /> Transmission Successful
                       </div>
                    )}
                    
                    {submitStatus === "error" && (
                       <div className="p-4 border border-red-500/50 bg-red-500/10 text-red-500 text-sm font-orbitron uppercase tracking-wider flex items-center gap-2">
                          <AlertCircle className="w-5 h-5" /> Transmission Failed
                       </div>
                    )}

                    <button type="submit" disabled={isSubmitting} className="group mt-2 border border-cyber-yellow bg-cyber-yellow/10 text-cyber-yellow uppercase tracking-widest text-sm font-bold py-4 flex items-center justify-center gap-3 hover:bg-cyber-yellow hover:text-black transition-all disabled:opacity-50 disabled:hover:bg-cyber-yellow/10 disabled:hover:text-cyber-yellow disabled:cursor-not-allowed">
                       {isSubmitting ? (
                          <><Loader2 className="w-4 h-4 animate-spin" /> Transmitting...</>
                       ) : (
                          <><Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Transmit Data</>
                       )}
                    </button>
                 </div>
              </form>
            </CyberPanel3D>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
