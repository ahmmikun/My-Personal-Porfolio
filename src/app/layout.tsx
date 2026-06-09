import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Salman Ahmad (ahmmikun) | Full Stack Developer Portfolio",
  description:
    "Salman Ahmad, also known as ahmmikun, is a Full Stack Developer & Graphic Designer specializing in automation, bots, and modern web applications with React, Next.js, and Node.js.",
  keywords: ["Salman Ahmad", "ahmmikun", "developer", "portfolio", "full stack", "web developer", "React", "Next.js"],
  authors: [{ name: "Salman Ahmad", url: "https://ahmmikun.vercel.app" }],
  creator: "Salman Ahmad",
  openGraph: {
    title: "Salman Ahmad (ahmmikun) | Full Stack Developer",
    description: "Full Stack Developer & Graphic Designer — building automation tools and modern web applications.",
    url: "https://ahmmikun.vercel.app",
    siteName: "Salman Ahmad Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salman Ahmad (ahmmikun) | Full Stack Developer",
    description: "Full Stack Developer & Graphic Designer — building automation tools and modern web applications.",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
