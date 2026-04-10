"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Certificates } from "@/components/sections/Certificates";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { BackgroundScene } from "@/components/3d/BackgroundScene";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Salman Ahmad",
            alternateName: "ahmmikun",
            url: "https://ahmmikun.vercel.app",
            sameAs: [
              "https://github.com/ahmmikun",
              "https://instagram.com/ahmmikun"
            ]
          })
        }}
      />
      <p style={{ display: "none" }}>
        ahmmikun ahmmikun developer ahmmikun portfolio ahmmikun github ahmmikun projects
      </p>
      <BackgroundScene />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </main>
  );
}
