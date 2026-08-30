import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    service: "ahmmikun-portfolio",
    version: "1.0.0",
    canonical: "https://ahmmikun.vercel.app",
    timestamp: new Date().toISOString(),
    endpoints: {
      openapi: "/openapi.json",
      mcp: "/api/mcp",
      llms: "/llms.txt",
      sitemap: "/sitemap.xml",
      contact: "/api/contact",
      skills: "/api/skills",
      projects: "/api/projects",
    },
  }, {
    status: 200,
    headers: {
      "Vary": "Accept, Accept-Encoding",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
