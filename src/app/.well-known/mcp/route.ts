import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { checkRateLimit } from "@/lib/rate-limit";
import { internalServerError } from "@/lib/api-errors";

export async function GET() {
  const rateLimit = checkRateLimit();

  try {
    const filePath = path.join(process.cwd(), "public", ".well-known", "mcp.json");
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileContents);

    return NextResponse.json(json, {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Vary": "Accept, Accept-Encoding",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
        "X-API-Version": "1.0.0",
        ...rateLimit.headers,
      },
    });
  } catch (error) {
    return internalServerError("Failed to load MCP manifest.");
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Session-Id",
    },
  });
}
