import { NextResponse } from "next/server";

export const projectsData = [
  {
    id: 1,
    title: "XLICON V4 MD",
    subtitle: "WhatsApp Automation Bot",
    description: "An advanced, feature-rich WhatsApp automation bot built with modern Node.js and the Baileys library. Capable of handling commands, media processing, and group management.",
    link: "https://github.com/ahmmikun/XLICON-V4-MD",
    type: "github",
    tech: ["Node.js", "Baileys", "MongoDB", "JavaScript"],
  },
  {
    id: 2,
    title: "AHMMI's API",
    subtitle: "REST API Service",
    description: "A comprehensive, high-performance RESTful API service providing various endpoints for scraping, data manipulation, and third-party integrations.",
    link: "https://api.ahmmikun.live/",
    type: "external",
    tech: ["Express", "Node.js", "REST", "Cloudflare"],
  },
  {
    id: 3,
    title: "Neural AI Generative Interface",
    subtitle: "AI Model & Conversational UI",
    description: "A next-generation AI model interface focused on conversational logic, generative capabilities, and context orchestration.",
    link: "https://github.com/ahmmikun/",
    type: "github",
    tech: ["Python", "TensorFlow", "React", "Tailwind CSS"],
  },
];

export async function GET() {
  return NextResponse.json(projectsData, {
    status: 200,
    headers: {
      "Vary": "Accept, Accept-Encoding",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
