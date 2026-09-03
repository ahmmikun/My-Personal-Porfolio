import type { Metadata, Viewport } from "next";
import { Orbitron, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://salmanahmad.tech"),
  title: {
    default: "Salman Ahmad Portfolio | Full Stack Developer & Systems Engineer (ahmmikun)",
    template: "%s | Salman Ahmad Portfolio",
  },
  description:
    "Official portfolio of Salman Ahmad (ahmmikun), Full Stack Developer & Graphic Designer specializing in Next.js, React, Node.js, Three.js 3D web applications, and automation systems.",
  keywords: [
    "Salman Ahmad",
    "Salman Ahmad Portfolio",
    "ahmmikun",
    "ahmmikun portfolio",
    "Salman Ahmad Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Three.js Portfolio",
    "Node.js Automation",
    "WhatsApp Bot Developer",
    "Lahore Developer",
    "Model Context Protocol",
  ],
  authors: [{ name: "Salman Ahmad", url: "https://salmanahmad.tech" }],
  creator: "Salman Ahmad",
  publisher: "Salman Ahmad",
  applicationName: "Salman Ahmad Portfolio",
  alternates: {
    canonical: "https://salmanahmad.tech",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://salmanahmad.tech",
    siteName: "Salman Ahmad Portfolio",
    title: "Salman Ahmad Portfolio | Full Stack Developer & Systems Engineer (ahmmikun)",
    description:
      "Full Stack Developer & Graphic Designer — building high-performance web applications, 3D WebGL interfaces, and automation tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Salman Ahmad (ahmmikun) - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salman Ahmad Portfolio | Full Stack Developer & Systems Engineer (ahmmikun)",
    description:
      "Full Stack Developer & Graphic Designer — building high-performance web applications, 3D WebGL interfaces, and automation tools.",
    images: ["/og-image.png"],
    creator: "@ahmmikun",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://salmanahmad.tech/#person",
      "name": "Salman Ahmad",
      "alternateName": ["ahmmikun", "Ahmmi Kun", "Salman Ahmad Portfolio", "Salman Ahmad Developer"],
      "description":
        "Full Stack Developer & Graphic Designer specializing in Next.js, React, Node.js, Three.js 3D web applications, and automation systems.",
      "jobTitle": "Full Stack Developer & Systems Engineer",
      "url": "https://salmanahmad.tech",
      "image": "https://salmanahmad.tech/og-image.png",
      "email": "mailto:xheikhsalman4422@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "postalCode": "54000",
        "addressCountry": "PK",
      },
      "sameAs": [
        "https://github.com/ahmmikun",
        "https://www.linkedin.com/in/ahmmikun/",
        "https://instagram.com/ahmmikun",
        "https://salmanahmad.tech",
      ],
      "knowsAbout": [
        "Full Stack Web Development",
        "JavaScript (ES6+)",
        "TypeScript",
        "React 19",
        "Next.js 16",
        "Node.js",
        "Three.js & WebGL",
        "Python",
        "MongoDB",
        "Express",
        "REST APIs",
        "Model Context Protocol (MCP)",
        "WhatsApp Automation",
        "UI/UX Design",
        "Graphic Design",
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Superior University",
        "location": "Lahore, Pakistan",
      },
      "brand": {
        "@type": "Brand",
        "@id": "https://salmanahmad.tech/#brand",
        "name": "Salman Ahmad Portfolio",
        "alternateName": "ahmmikun",
        "url": "https://salmanahmad.tech",
        "logo": "https://salmanahmad.tech/og-image.png",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Engineering Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Stack Web Application Development",
              "description": "Building modern, scalable web applications using React, Next.js, and Node.js.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Interactive 3D WebGL & Three.js Experiences",
              "description": "Creating immersive 3D web graphics, shaders, and particle viewports.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automation Systems & Bot Engineering",
              "description": "Developing WhatsApp bots, web scrapers, and background automation workflows.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "REST API & MCP Server Development",
              "description": "Designing high-throughput RESTful microservices and Model Context Protocol servers.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://salmanahmad.tech/#website",
      "url": "https://salmanahmad.tech",
      "name": "Salman Ahmad Portfolio",
      "alternateName": "ahmmikun portfolio",
      "description": "Official portfolio and developer platform for Salman Ahmad (ahmmikun).",
      "publisher": {
        "@id": "https://salmanahmad.tech/#person",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://salmanahmad.tech/#webpage",
      "url": "https://salmanahmad.tech",
      "name": "Salman Ahmad Portfolio | Full Stack Developer & Systems Engineer (ahmmikun)",
      "description": "Official portfolio of Salman Ahmad (ahmmikun), Full Stack Developer & Graphic Designer.",
      "mainEntity": {
        "@id": "https://salmanahmad.tech/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col relative bg-cyber-black text-cyber-white"
      >
        <div className="cyber-noise" aria-hidden="true"></div>
        <div className="scanline" aria-hidden="true"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
