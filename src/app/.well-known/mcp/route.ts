import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
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
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load MCP manifest" },
      { status: 500 }
    );
  }
}
