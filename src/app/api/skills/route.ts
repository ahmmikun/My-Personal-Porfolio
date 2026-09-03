import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { validationError } from "@/lib/api-errors";

export const skillsData = [
  {
    category: "Languages",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "C", "C++", "Python", "Assembly (x86)"],
  },
  {
    category: "Frontend",
    skills: ["React 19", "Next.js 16", "Tailwind CSS 4", "Bootstrap", "Three.js", "React Three Fiber", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Model Context Protocol (MCP)", "Nodemailer", "Webhooks", "JSON-RPC"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    category: "Cloud & Tools",
    skills: ["Vercel", "Cloudflare", "Railway", "Heroku", "Git", "GitHub Actions", "Postman", "Figma"],
  },
];

export async function GET(request: NextRequest) {
  const rateLimit = checkRateLimit();
  const { searchParams } = new URL(request.url);
  const categoryParam = searchParams.get("category");

  let filtered = skillsData;
  if (categoryParam) {
    const term = categoryParam.toLowerCase();
    filtered = skillsData.filter((s) => s.category.toLowerCase().includes(term));
    if (filtered.length === 0) {
      return validationError(
        `Category '${categoryParam}' not found. Available categories: Languages, Frontend, Backend, Databases, Cloud & Tools`,
        [{ name: "category", reason: "Invalid category filter" }]
      );
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
