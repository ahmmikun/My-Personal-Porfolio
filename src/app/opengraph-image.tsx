import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Salman Ahmad (ahmmikun) - Full Stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#050505",
          padding: "60px 80px",
          border: "8px solid #111111",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#FFD300",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "4px",
            }}
          >
            {"// SYSTEM_PROFILE //"}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#00FF66",
              fontSize: "16px",
              letterSpacing: "2px",
            }}
          >
            {"● SYSTEM ONLINE"}
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: "60px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            <span>Salman Ahmad</span>
            <span style={{ color: "#FFD300", marginLeft: "16px" }}>
              (ahmmikun)
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "26px",
              color: "#888888",
              fontWeight: 400,
              letterSpacing: "1px",
            }}
          >
            <span>Full Stack Developer &amp; Graphic Designer | Systems &amp; Automation Engineer</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            {["Next.js 16", "React 19", "Node.js", "Three.js 3D", "MCP Server", "TypeScript"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    padding: "8px 16px",
                    backgroundColor: "#0d0d0d",
                    border: "1px solid #333333",
                    color: "#FFD300",
                    fontSize: "15px",
                    fontWeight: 600,
                    borderRadius: "4px",
                  }}
                >
                  <span>{tag}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #222222",
            paddingTop: "24px",
            color: "#666666",
            fontSize: "18px",
          }}
        >
          <div style={{ display: "flex" }}>
            <span>https://ahmmikun.vercel.app</span>
          </div>
          <div style={{ display: "flex" }}>
            <span>Lahore, Pakistan</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
