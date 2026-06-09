"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
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
        setTimeout(() => setSubmitStatus("idle"), 5000);
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
    <section id="Contact" className="relative py-24 min-h-screen flex items-center bg-cyber-surface z-10 border-t border-cyber-border">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
              {"// 06_CONTACT"}
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
            Get In <span className="text-cyber-yellow drop-shadow-[0_0_10px_rgba(255,211,0,0.4)]">Touch</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
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

            <div className="grid gap-4 mt-4">
               <CyberPanel3D className="p-6 bg-cyber-black border border-cyber-border flex items-center gap-6 hover:border-cyber-yellow transition-colors group">
                 <div className="w-14 h-14 bg-cyber-surface border border-cyber-border flex items-center justify-center group-hover:border-cyber-yellow group-hover:bg-cyber-yellow/10 transition-colors shrink-0">
                    <Mail className="w-6 h-6 text-cyber-yellow" />
                 </div>
                 <div>
                    <div className="text-xs uppercase tracking-widest text-cyber-gray mb-1">Email Terminal</div>
                    <a href="mailto:salmansheikh2500@gmail.com" className="text-cyber-white hover:text-cyber-yellow transition-colors font-bold break-all">
                       salmansheikh2500@gmail.com
                    </a>
                 </div>
               </CyberPanel3D>

               <CyberPanel3D className="p-6 bg-cyber-black border border-cyber-border flex items-center gap-6 hover:border-cyber-yellow transition-colors group">
                 <div className="w-14 h-14 bg-cyber-surface border border-cyber-border flex items-center justify-center group-hover:border-cyber-yellow group-hover:bg-cyber-yellow/10 transition-colors shrink-0">
                    <MapPin className="w-6 h-6 text-cyber-yellow" />
                 </div>
                 <div>
                    <div className="text-xs uppercase tracking-widest text-cyber-gray mb-1">Physical Location</div>
                    <div className="text-cyber-white font-bold">
                       Punjab, Lahore, Pakistan
                    </div>
                 </div>
               </CyberPanel3D>

               <div className="grid grid-cols-3 gap-4 mt-2">
                 <a href="https://github.com/ahmmikun" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-2 p-4 bg-cyber-black border border-cyber-border hover:border-cyber-yellow hover:bg-cyber-yellow/5 transition-all group">
                   <SiGithub className="w-6 h-6 text-cyber-gray group-hover:text-cyber-white" />
                   <span className="text-[10px] uppercase tracking-widest text-cyber-gray group-hover:text-cyber-white font-bold">GitHub</span>
                 </a>
                 <a href="https://www.linkedin.com/in/ahmmikun/" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-2 p-4 bg-cyber-black border border-cyber-border hover:border-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all group">
                   <FaLinkedin className="w-6 h-6 text-cyber-gray group-hover:text-[#0A66C2]" />
                   <span className="text-[10px] uppercase tracking-widest text-cyber-gray group-hover:text-cyber-white font-bold">LinkedIn</span>
                 </a>
                 <a href="https://www.instagram.com/ahmmikun/" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-2 p-4 bg-cyber-black border border-cyber-border hover:border-[#E4405F] hover:bg-[#E4405F]/5 transition-all group">
                   <SiInstagram className="w-6 h-6 text-cyber-gray group-hover:text-[#E4405F]" />
                   <span className="text-[10px] uppercase tracking-widest text-cyber-gray group-hover:text-cyber-white font-bold">Instagram</span>
                 </a>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CyberPanel3D className="p-6 sm:p-8 bg-cyber-black/80 backdrop-blur-md border border-cyber-border relative clip-corner-br shadow-xl">
              <form onSubmit={handleSubmit} className="h-full">
                 <div className="absolute top-0 right-0 w-24 h-[1px] bg-cyber-yellow/50" />
                 <div className="grid gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div className="relative group">
                          <input type="text" name="username" id="username" required placeholder="Enter your alias" disabled={isSubmitting} className="peer w-full bg-cyber-surface border border-cyber-border p-4 pt-8 pb-2 text-cyber-white focus:outline-none focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow transition-all disabled:opacity-50 placeholder-transparent focus:placeholder-cyber-gray/30" />
                          <label htmlFor="username" className="absolute left-4 top-4 text-cyber-gray text-sm uppercase tracking-widest font-orbitron transition-all peer-focus:text-[10px] peer-focus:top-2 peer-focus:text-cyber-yellow peer-valid:text-[10px] peer-valid:top-2 pointer-events-none">Identifier</label>
                       </div>
                       <div className="relative group">
                          <input type="email" name="email" id="email" required placeholder="Enter your email address" disabled={isSubmitting} className="peer w-full bg-cyber-surface border border-cyber-border p-4 pt-8 pb-2 text-cyber-white focus:outline-none focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow transition-all disabled:opacity-50 placeholder-transparent focus:placeholder-cyber-gray/30" />
                          <label htmlFor="email" className="absolute left-4 top-4 text-cyber-gray text-sm uppercase tracking-widest font-orbitron transition-all peer-focus:text-[10px] peer-focus:top-2 peer-focus:text-cyber-yellow peer-valid:text-[10px] peer-valid:top-2 pointer-events-none">Comm Link</label>
                       </div>
                    </div>
                    
                    <div className="relative group">
                       <input type="text" name="subject" id="subject" required placeholder="State your intent" disabled={isSubmitting} className="peer w-full bg-cyber-surface border border-cyber-border p-4 pt-8 pb-2 text-cyber-white focus:outline-none focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow transition-all disabled:opacity-50 placeholder-transparent focus:placeholder-cyber-gray/30" />
                       <label htmlFor="subject" className="absolute left-4 top-4 text-cyber-gray text-sm uppercase tracking-widest font-orbitron transition-all peer-focus:text-[10px] peer-focus:top-2 peer-focus:text-cyber-yellow peer-valid:text-[10px] peer-valid:top-2 pointer-events-none">Subject Vector</label>
                    </div>

                    <div className="relative group">
                       <textarea name="contact_message" id="contact_message" required rows={4} placeholder="Input transmission data here..." disabled={isSubmitting} className="peer w-full bg-cyber-surface border border-cyber-border p-4 pt-8 text-cyber-white focus:outline-none focus:border-cyber-yellow focus:ring-1 focus:ring-cyber-yellow transition-all resize-none disabled:opacity-50 placeholder-transparent focus:placeholder-cyber-gray/30" />
                       <label htmlFor="contact_message" className="absolute left-4 top-4 text-cyber-gray text-sm uppercase tracking-widest font-orbitron transition-all peer-focus:text-[10px] peer-focus:top-2 peer-focus:text-cyber-yellow peer-valid:text-[10px] peer-valid:top-2 pointer-events-none">Data Payload</label>
                    </div>

                    {/* Accessibility live region for screen readers */}
                    <div aria-live="polite" className="sr-only">
                      {submitStatus === 'success' && 'Message sent successfully.'}
                      {submitStatus === 'error' && 'Failed to send message. Please try again.'}
                    </div>

                    {submitStatus === "success" && (
                       <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 border border-cyber-green/50 bg-cyber-green/10 text-cyber-green text-sm font-orbitron uppercase tracking-wider flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" /> Transmission Successful
                       </motion.div>
                    )}
                    
                    {submitStatus === "error" && (
                       <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 border border-red-500/50 bg-red-500/10 text-red-500 text-sm font-orbitron uppercase tracking-wider flex items-center gap-2">
                          <AlertCircle className="w-5 h-5" /> Transmission Failed
                       </motion.div>
                    )}

                    <button type="submit" disabled={isSubmitting} className="group mt-2 border border-cyber-yellow bg-cyber-yellow/10 text-cyber-yellow uppercase tracking-widest text-sm font-bold py-4 flex items-center justify-center gap-3 hover:bg-cyber-yellow hover:text-cyber-black transition-all disabled:opacity-50 disabled:hover:bg-cyber-yellow/10 disabled:hover:text-cyber-yellow disabled:cursor-not-allowed shadow-[0_0_15px_rgba(255,211,0,0.1)] hover:shadow-[0_0_20px_rgba(255,211,0,0.4)]">
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
