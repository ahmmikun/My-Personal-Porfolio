import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      { protocol: "https", hostname: "i1-e.pinimg.com" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Vary",
            value: "Accept, Accept-Encoding",
          },
          {
            key: "Link",
            value: '</llms.txt>; rel="alternate"; type="text/markdown", </sitemap.xml>; rel="sitemap"; type="application/xml", </sitemap.txt>; rel="sitemap"; type="text/plain"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
