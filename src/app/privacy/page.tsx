import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, Server, FileText, CheckCircle2, Mail, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Salman Ahmad (ahmmikun) Portfolio",
  description: "Official Privacy Policy for Salman Ahmad's (ahmmikun) portfolio, REST APIs, and Model Context Protocol services, outlining data collection, processing, security, and privacy rights.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
            // PRIVACY_PROTOCOL
          </span>
          <div className="glow-line h-[1px] w-24" />
        </div>
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-white uppercase tracking-wider">
          Privacy <span className="text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,211,0,0.4)]">Policy</span>
        </h1>
        <p className="text-cyber-gray text-sm md:text-base mt-2 font-light">
          Last Updated: August 2026 | Operator: Salman Ahmad (ahmmikun) | Canonical URL: https://ahmmikun.vercel.app/privacy
        </p>
      </div>

      {/* Main Policy Content Container */}
      <div className="bg-cyber-surface border border-cyber-border p-8 md:p-12 clip-corner-br space-y-12 text-cyber-gray text-base leading-relaxed font-light">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-cyber-yellow" />
            <h2 className="text-xl md:text-2xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
              1. Overview &amp; Commitment to Privacy
            </h2>
          </div>
          <p>
            This Privacy Policy sets out the data processing practices and principles governing the official portfolio website of <strong className="text-cyber-white">Salman Ahmad</strong> (also operating under the handle <strong className="text-cyber-white">&apos;ahmmikun&apos;</strong>), accessible at <strong className="text-cyber-yellow">https://ahmmikun.vercel.app</strong>, including all associated REST API endpoints, Model Context Protocol (MCP) servers, and machine-readable data feeds.
          </p>
          <p>
            We are dedicated to safeguarding the personal information and digital privacy of every visitor, developer, client, and automated agent interacting with our platform. We adhere to the fundamental principles of data minimization, purpose limitation, transparency, and robust technical security.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 border-t border-cyber-border pt-8">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-cyber-yellow" />
            <h2 className="text-xl md:text-2xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
              2. Information We Collect &amp; How It Is Used
            </h2>
          </div>
          
          <h3 className="text-lg font-orbitron font-bold text-cyber-white mt-4">
            A. Voluntarily Submitted Information
          </h3>
          <p>
            When you transmit a message through our web contact interface, our REST API endpoint (<code className="text-cyber-yellow font-mono text-sm">POST /api/contact</code>), or via an MCP tool call (<code className="text-cyber-yellow font-mono text-sm">send_contact_message</code>), we collect only the information you explicitly provide:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong className="text-cyber-white">Identifier:</strong> Your name, username, or organization handle.</li>
            <li><strong className="text-cyber-white">Contact Link:</strong> Your return email address.</li>
            <li><strong className="text-cyber-white">Message Payload:</strong> Subject header and message body content.</li>
          </ul>
          <p>
            <strong className="text-cyber-white">Purpose:</strong> This data is processed exclusively to evaluate your communication, respond to software engineering project proposals, answer technical inquiries, and maintain direct professional correspondence.
          </p>

          <h3 className="text-lg font-orbitron font-bold text-cyber-white mt-4">
            B. Automatically Collected Technical Metadata
          </h3>
          <p>
            Like virtually all internet services, when you visit our site, our hosting infrastructure provider (Vercel Inc.) may automatically collect standard HTTP network metadata. This includes IP address, user-agent string, referrer URL, operating system, and request timestamps. This data is utilized solely for DDoS mitigation, infrastructure health monitoring, and edge routing.
          </p>
          <p>
            <strong className="text-cyber-white">No Tracking Cookies:</strong> We do <span className="text-cyber-yellow font-bold">NOT</span> utilize third-party tracking cookies, behavioral advertising networks, social media tracking pixels, or intrusive analytics beacons.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 border-t border-cyber-border pt-8">
          <div className="flex items-center gap-3">
            <Server className="w-6 h-6 text-cyber-yellow" />
            <h2 className="text-xl md:text-2xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
              3. Data Transmission, Storage &amp; Third-Party Services
            </h2>
          </div>
          <p>
            Contact submissions are converted into an encrypted email transmission via TLS and delivered directly to our primary mailbox (<strong className="text-cyber-white">xheikhsalman4422@gmail.com</strong>) using standard SMTP transport protocols.
          </p>
          <p>
            We do not sell, rent, lease, trade, or otherwise disclose your personal contact details to any third-party marketing firms, commercial aggregators, or unauthorized data brokers.
          </p>
          <h3 className="text-lg font-orbitron font-bold text-cyber-white mt-4">
            Third-Party Infrastructure Providers:
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong className="text-cyber-white">Vercel Inc.:</strong> Application edge hosting, global CDN, and serverless compute.</li>
            <li><strong className="text-cyber-white">Google Workspace / Gmail:</strong> Encrypted email relay and inbox storage.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 border-t border-cyber-border pt-8">
          <div className="flex items-center gap-3">
            <Eye className="w-6 h-6 text-cyber-yellow" />
            <h2 className="text-xl md:text-2xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
              4. Data Retention &amp; Security Measures
            </h2>
          </div>
          <p>
            We implement industry-standard technical security practices to prevent unauthorized access, alteration, or interception of user transmissions. All web and API traffic is encrypted in transit using Transport Layer Security (TLS / HTTPS).
          </p>
          <p>
            We retain contact inquiries only for as long as necessary to complete active client discussions, fulfill contractual obligations, or maintain professional relationships. You may request the deletion of your transmitted information at any time.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4 border-t border-cyber-border pt-8">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-cyber-yellow" />
            <h2 className="text-xl md:text-2xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
              5. Your Legal Rights (GDPR &amp; CCPA Alignment)
            </h2>
          </div>
          <p>
            Depending on your jurisdiction, you have specific rights regarding your personal information, including:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>The right to know what personal information has been transmitted or collected.</li>
            <li>The right to request the rectification or complete erasure of your transmitted data.</li>
            <li>The right to withdraw consent for future communication at any time.</li>
            <li>The right to non-discrimination for exercising your privacy rights.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 border-t border-cyber-border pt-8">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-cyber-yellow" />
            <h2 className="text-xl md:text-2xl font-orbitron font-bold text-cyber-white uppercase tracking-wide">
              6. Privacy Officer &amp; Direct Inquiries
            </h2>
          </div>
          <p>
            If you have any questions, comments, or data erasure requests concerning this Privacy Policy or our operational data practices, please contact Salman Ahmad directly:
          </p>
          <div className="bg-cyber-black border border-cyber-border p-4 font-mono text-sm space-y-1">
            <p><strong className="text-cyber-white">Entity:</strong> Salman Ahmad (ahmmikun)</p>
            <p><strong className="text-cyber-white">Location:</strong> Lahore, Punjab, Pakistan</p>
            <p><strong className="text-cyber-white">Direct Email:</strong> <a href="mailto:xheikhsalman4422@gmail.com" className="text-cyber-yellow hover:underline">xheikhsalman4422@gmail.com</a></p>
            <p><strong className="text-cyber-white">Canonical Site:</strong> https://ahmmikun.vercel.app</p>
          </div>
        </section>

        {/* Back Link */}
        <div className="border-t border-cyber-border pt-8 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-orbitron font-bold text-cyber-yellow hover:text-cyber-white uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Portfolio Base
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-orbitron font-bold text-cyber-gray hover:text-cyber-white uppercase tracking-wider"
          >
            Contact Channel
          </Link>
        </div>
      </div>
    </main>
  );
}
