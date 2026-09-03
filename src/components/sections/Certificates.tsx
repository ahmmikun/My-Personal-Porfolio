"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CyberPanel3D } from "@/components/ui/CyberPanel3D";
import { Maximize2 } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Responsive Web Design",
    image: "https://i.ibb.co/zh9zN2RM/image.png",
    issuer: "FreeCodeCamp"
  },
  {
    id: 2,
    title: "Web Basics Certificate",
    image: "https://i.ibb.co/QrJ9rCF/UC-a53e902f-a62c-4fda-8fa1-e56749040689.jpg",
    issuer: "Udemy"
  },
  {
    id: 3,
    title: "Generative AI",
    image: "https://i.ibb.co/Vj3sLp5/UC-a3f57b32-ffd9-4fef-844f-bde43685f63b.jpg",
    issuer: "Udemy"
  },
  {
    id: 4,
    title: "AI Fundamentals",
    image: "https://i.ibb.co/8DvsLC8Q/image.png",
    issuer: "DataCamp"
  }
];

export function Certificates() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="Certificates" className="relative py-24 min-h-screen flex flex-col justify-center bg-cyber-black z-10 border-t border-cyber-border">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyber-yellow/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_10s_ease-in-out_infinite]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="glow-line h-[1px] w-12" />
            <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
              {"// 04_CERTIFICATES"}
            </span>
            <div className="glow-line h-[1px] w-12" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-white uppercase tracking-wider"
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
              onClick={() => setSelectedImg(cert.image)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImg(cert.image);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View certificate for ${cert.title}`}
            >
              <CyberPanel3D className="p-2 bg-cyber-surface border border-cyber-border hover:border-cyber-yellow transition-colors duration-300 relative overflow-hidden">

                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cyber-black">
                  {/* Scanline hover effect */}
                  <div className="absolute inset-0 bg-cyber-yellow/20 -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out z-10 pointer-events-none mix-blend-overlay" />

                  {/* Hover icon */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyber-black/40 backdrop-blur-sm">
                    <div className="p-3 bg-cyber-yellow text-cyber-black rounded-full shadow-[0_0_15px_rgba(255,211,0,0.6)]">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover filter grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="p-4 flex items-center justify-between border-t border-cyber-border mt-2 bg-cyber-black">
                  <div>
                    <div className="text-[10px] text-cyber-gray tracking-widest uppercase mb-1">{cert.issuer}</div>
                    <h3 className="text-sm font-bold text-cyber-white uppercase tracking-wider line-clamp-1 mr-2 group-hover:text-cyber-yellow transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="w-2 h-2 shrink-0 rounded-full bg-cyber-green pulse-green" />
                </div>
              </CyberPanel3D>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cyber-black/90 backdrop-blur-md p-4"
          onClick={() => setSelectedImg(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl aspect-[4/3] max-h-[90vh] cyber-panel p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-cyber-yellow text-cyber-black flex items-center justify-center rounded-full z-10 hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,211,0,0.5)] font-bold text-xl"
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="relative w-full h-full bg-cyber-black overflow-hidden">
              <Image
                src={selectedImg}
                alt="Certificate full view"
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
