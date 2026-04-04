import type { Metadata } from "next";
import { Orbitron, Chakra_Petch } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra-petch",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyberpunk Portfolio | Developer",
  description: "A premium cinematic cyberpunk developer portfolio.",
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
      className={`${orbitron.variable} ${chakraPetch.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col relative bg-black text-white selection:bg-cyber-yellow selection:text-black">
        <div className="cyber-noise"></div>
        <div className="scanline"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
