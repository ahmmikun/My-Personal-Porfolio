import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const acceptHeader = request.headers.get("accept") || "";

  // Check if client explicitly requests Markdown via Accept negotiation or .md extension
  const wantsMarkdown =
    acceptHeader.includes("text/markdown") ||
    acceptHeader.includes("text/x-markdown");

  const isExplicitMdPath = pathname.endsWith(".md") && !pathname.startsWith("/api");

  // Skip static assets, next internal routes, and direct api endpoints (except markdown routing)
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

  const isApiRoute = pathname.startsWith("/api");

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
    return rewriteResponse;
  }

  const response = NextResponse.next();
  response.headers.set("Vary", "Accept, Accept-Encoding");
  response.headers.set("Link", '</llms.txt>; rel="alternate"; type="text/markdown", </sitemap.xml>; rel="sitemap"; type="application/xml"');
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

// Also support default export and middleware alias for backwards compatibility
export const middleware = proxy;
export default proxy;
