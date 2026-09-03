import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

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
    title: "BijliTrack",
    subtitle: "Electricity & Power Outage Dashboard",
    description: "A full-stack electricity monitoring platform for Pakistan that enables users to track live power status, feeder outages, 12-month billing history, and CCMS utility data.",
    link: "https://github.com/ahmmikun/bijlitrack",
    type: "github",
    tech: ["Next.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "GitRoasted",
    subtitle: "AI GitHub Profile Roaster",
    description: "An AI-powered GitHub profile analyzer and roaster featuring multi-provider AI fallbacks (OpenRouter, Gemini, OpenAI, Grok), Neo-Brutalist UI, and shareable roast cards.",
    link: "https://github.com/ahmmikun/GitRoasted",
    type: "github",
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "Zod", "AI"],
  },
  {
    id: 5,
    title: "Campus BookHub",
    subtitle: "Student Book Exchange & Marketplace",
    description: "A peer-to-peer textbook marketplace and exchange platform for university students featuring Open Library API integration, local storage persistence, and analytics dashboard.",
    link: "https://github.com/ahmmikun/campus-bookhub",
    type: "github",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Open Library API"],
  },
  {
    id: 6,
    title: "Neural AI Generative Interface",
    subtitle: "AI Model & Conversational UI",
    description: "A next-generation AI model interface focused on conversational logic, generative capabilities, and context orchestration.",
    link: "https://github.com/ahmmikun/",
    type: "github",
    tech: ["Python", "TensorFlow", "React", "Tailwind CSS"],
  },
];

export async function GET(request: NextRequest) {
  const rateLimit = checkRateLimit();
  const { searchParams } = new URL(request.url);
  const filterParam = searchParams.get("filter")?.toLowerCase();
  const limitParam = searchParams.get("limit");

  let filtered = projectsData;
  if (filterParam) {
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(filterParam) ||
        p.description.toLowerCase().includes(filterParam) ||
        p.subtitle.toLowerCase().includes(filterParam) ||
        p.tech.some((t) => t.toLowerCase().includes(filterParam))
    );
  }

  if (limitParam) {
    const limit = parseInt(limitParam, 10);
    if (!isNaN(limit) && limit > 0) {
      filtered = filtered.slice(0, limit);
    }
  }

  return NextResponse.json(filtered, {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Vary": "Accept, Accept-Encoding",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Access-Control-Allow-Origin": "*",
      "X-API-Version": "1.0.0",
      ...rateLimit.headers,
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Session-Id, x-session-id",
    },
  });
}
