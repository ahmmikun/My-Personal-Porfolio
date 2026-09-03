import { NextRequest, NextResponse } from "next/server";
import { notFoundError } from "@/lib/api-errors";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ catchall: string[] }> }
) {
  const resolvedParams = await params;
  const path = `/api/${resolvedParams.catchall.join("/")}`;
  return notFoundError(path);
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ catchall: string[] }> }
) {
  const resolvedParams = await params;
  const path = `/api/${resolvedParams.catchall.join("/")}`;
  return notFoundError(path);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ catchall: string[] }> }
) {
  const resolvedParams = await params;
  const path = `/api/${resolvedParams.catchall.join("/")}`;
  return notFoundError(path);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ catchall: string[] }> }
) {
  const resolvedParams = await params;
  const path = `/api/${resolvedParams.catchall.join("/")}`;
  return notFoundError(path);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ catchall: string[] }> }
) {
  const resolvedParams = await params;
  const path = `/api/${resolvedParams.catchall.join("/")}`;
  return notFoundError(path);
}

export async function HEAD(
  request: NextRequest,
  { params }: { params: Promise<{ catchall: string[] }> }
) {
  const resolvedParams = await params;
  const path = `/api/${resolvedParams.catchall.join("/")}`;
  return notFoundError(path);
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Session-Id, x-session-id",
    },
  });
}
