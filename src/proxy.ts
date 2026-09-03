import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

const KNOWN_HTML_ROUTES = new Set([
  "/",
  "/about",
  "/projects",
  "/skills",
  "/contact",
  "/docs",
  "/privacy",
]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const acceptHeader = request.headers.get("accept") || "";

  // Check rate limit for requests
  const rateLimit = checkRateLimit(request.headers.get("x-forwarded-for") || "global");

  // Check if client explicitly requests Markdown via Accept negotiation or .md extension
  const wantsMarkdown =
    acceptHeader.includes("text/markdown") ||
    acceptHeader.includes("text/x-markdown");

  const wantsJson =
    acceptHeader.includes("application/json") ||
    acceptHeader.includes("application/problem+json");

  const isExplicitMdPath = pathname.endsWith(".md") && !pathname.startsWith("/api");

  // Skip static assets, next internal routes, and direct api endpoints
  const isStaticFile =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".pdf") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".json") ||
    pathname.endsWith(".txt") ||
    pathname.endsWith(".xml");

  const isApiRoute = pathname.startsWith("/api") || pathname.startsWith("/.well-known");

  // If client wants JSON on an unknown non-API route, route to JSON 404 handler
  if (!isStaticFile && !isApiRoute && wantsJson && !KNOWN_HTML_ROUTES.has(pathname)) {
    const errorUrl = new URL(`/api/not-found-json`, request.url);
    errorUrl.searchParams.set("path", pathname);
    const rewriteResponse = NextResponse.rewrite(errorUrl);
    rewriteResponse.headers.set("Content-Type", "application/problem+json; charset=utf-8");
    rewriteResponse.headers.set("Vary", "Accept, Accept-Encoding");
    for (const [key, value] of Object.entries(rateLimit.headers)) {
      rewriteResponse.headers.set(key, value);
    }
    return rewriteResponse;
  }

  // Markdown content negotiation (acceptmarkdown.com)
  if (!isStaticFile && !isApiRoute && (wantsMarkdown || isExplicitMdPath)) {
    const cleanPath = isExplicitMdPath ? pathname.replace(/\.md$/, "") : pathname;
    const markdownUrl = new URL(`/api/markdown`, request.url);
    markdownUrl.searchParams.set("path", cleanPath || "/");

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-target-path", cleanPath || "/");

    const rewriteResponse = NextResponse.rewrite(markdownUrl, {
      request: {
        headers: requestHeaders,
      },
    });
    rewriteResponse.headers.set("Vary", "Accept, Accept-Encoding");
    rewriteResponse.headers.set("Link", '</llms.txt>; rel="alternate"; type="text/markdown"');
    for (const [key, value] of Object.entries(rateLimit.headers)) {
      rewriteResponse.headers.set(key, value);
    }
    return rewriteResponse;
  }

  const response = NextResponse.next();
  response.headers.set("Vary", "Accept, Accept-Encoding");
  response.headers.set(
    "Link",
    '</llms.txt>; rel="alternate"; type="text/markdown", </sitemap.xml>; rel="sitemap"; type="application/xml", </openapi.json>; rel="service-desc"; type="application/json"'
  );
  for (const [key, value] of Object.entries(rateLimit.headers)) {
    response.headers.set(key, value);
  }
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

export const middleware = proxy;
export default proxy;
