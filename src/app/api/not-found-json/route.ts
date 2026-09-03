import { NextRequest, NextResponse } from "next/server";
import { notFoundError } from "@/lib/api-errors";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") || request.nextUrl.pathname;
  return notFoundError(path);
}

export async function POST(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") || request.nextUrl.pathname;
  return notFoundError(path);
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Session-Id, x-session-id",
    },
  });
}
