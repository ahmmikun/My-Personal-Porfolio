"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Certificates } from "@/components/sections/Certificates";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col relative">
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </main>
  );
}
