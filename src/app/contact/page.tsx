import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { Mail, MapPin, Clock } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Salman Ahmad (ahmmikun) | Direct Transmission Terminal",
  description: "Get in touch with Salman Ahmad (ahmmikun) for software development projects, technical consultations, full-stack web applications, and automation systems.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Salman Ahmad (ahmmikun) | Direct Transmission Terminal",
    description: "Get in touch with Salman Ahmad (ahmmikun) for software development projects, full-stack web applications, and automation systems.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
            // 06_DIRECT_TRANSMISSION
          </span>
          <div className="glow-line h-[1px] w-24" />
        </div>
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-white uppercase tracking-wider">
          Contact <span className="text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,211,0,0.4)]">Salman Ahmad</span> (ahmmikun)
        </h1>
        <p className="text-cyber-gray text-base md:text-lg mt-4 max-w-3xl font-light">
          Establish a direct communication channel for engineering contracts, full-stack web applications, API integrations, or technical collaborations. Transmissions are encrypted and relayed directly to Salman Ahmad.
        </p>
      </div>

      {/* Information Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 bg-cyber-surface border border-cyber-border clip-corner-br">
          <Mail className="w-8 h-8 text-cyber-yellow mb-4" />
          <h2 className="text-lg font-orbitron font-bold text-cyber-white mb-1">Direct Email</h2>
          <p className="text-xs text-cyber-gray mb-3">Primary communications inbox</p>
          <a
            href="mailto:xheikhsalman4422@gmail.com"
            className="text-sm font-mono text-cyber-yellow hover:underline break-all"
          >
            xheikhsalman4422@gmail.com
          </a>
        </div>

        <div className="p-6 bg-cyber-surface border border-cyber-border clip-corner-br">
          <MapPin className="w-8 h-8 text-cyber-yellow mb-4" />
          <h2 className="text-lg font-orbitron font-bold text-cyber-white mb-1">Location &amp; Timezone</h2>
          <p className="text-xs text-cyber-gray mb-3">Operating Headquarters</p>
          <p className="text-sm text-cyber-white font-mono">
            Lahore, Punjab, Pakistan (PKT / UTC+5)
          </p>
        </div>

        <div className="p-6 bg-cyber-surface border border-cyber-border clip-corner-br">
          <Clock className="w-8 h-8 text-cyber-yellow mb-4" />
          <h2 className="text-lg font-orbitron font-bold text-cyber-white mb-1">Response SLA</h2>
          <p className="text-xs text-cyber-gray mb-3">Guaranteed turnaround</p>
          <p className="text-sm text-cyber-white font-mono">
            Within 24 to 48 Hours
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mb-16">
        <Contact />
      </div>

      {/* Programmatic & Agent Access Protocol */}
      <div className="bg-cyber-surface border border-cyber-border p-8 md:p-10 clip-corner-br space-y-6">
        <div className="border-l-2 border-cyber-yellow pl-4">
          <h2 className="text-xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
            Automated &amp; Agentic Contact Protocol
          </h2>
          <p className="text-cyber-gray text-sm mt-1">
            How autonomous agents and programmatic clients can dispatch communications.
          </p>
        </div>

        <p className="text-cyber-gray text-sm leading-relaxed">
          AI agents and automated systems can dispatch inquiries directly via HTTP POST or through the Model Context Protocol (MCP) tool <code className="text-cyber-yellow">send_contact_message</code>.
        </p>

        <pre className="p-4 bg-cyber-black border border-cyber-border text-xs text-cyber-gray overflow-x-auto font-mono">
{`curl -X POST https://ahmmikun.vercel.app/api/contact \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "Autonomous Agent",
    "email": "agent@example.com",
    "subject": "Contract Inquiry",
    "contact_message": "Automated transmission regarding software architecture contract."
  }'`}
        </pre>
      </div>
    </main>
  );
}
