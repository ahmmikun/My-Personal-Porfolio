import { NextResponse } from "next/server";

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

export async function GET() {
  return NextResponse.json(skillsData, {
    status: 200,
    headers: {
      "Vary": "Accept, Accept-Encoding",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
