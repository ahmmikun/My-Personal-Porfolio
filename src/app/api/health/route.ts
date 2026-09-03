import { NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

export async function GET() {
  const rateLimit = checkRateLimit();

  return NextResponse.json(
    {
      status: "healthy",
      service: "salmanahmad-portfolio",
      version: "1.0.0",
      apiVersion: "v1",
      canonical: "https://salmanahmad.tech",
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      endpoints: {
        v1: {
          contact: "/api/v1/contact",
          skills: "/api/v1/skills",
          projects: "/api/v1/projects",
          health: "/api/v1/health",
          mcp: "/api/v1/mcp",
        },
        discovery: {
          openapi: "/openapi.json",
          mcpManifest: "/.well-known/mcp.json",
          llms: "/llms.txt",
          llmsFull: "/llms-full.txt",
          agentInstructions: "/.well-known/agent-instructions",
          sitemap: "/sitemap.xml",
          cli: "npx salmanahmad",
        },
      },
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Vary": "Accept, Accept-Encoding",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
        "X-API-Version": "1.0.0",
        ...rateLimit.headers,
      },
    }
  );
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
