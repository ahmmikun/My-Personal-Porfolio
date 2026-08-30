import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, GraduationCap, Shield } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Salman Ahmad (ahmmikun) | Full Stack Developer & Systems Engineer",
  description: "Learn more about Salman Ahmad (ahmmikun), a Full Stack Developer & Graphic Designer from Lahore, Pakistan specializing in Next.js, React, Node.js, Three.js 3D web applications, and automation systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Salman Ahmad (ahmmikun) | Full Stack Developer",
    description: "Learn more about Salman Ahmad (ahmmikun), a Full Stack Developer & Graphic Designer specializing in Next.js, React, Node.js, Three.js, and automation systems.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-cyber-yellow font-orbitron tracking-widest text-sm uppercase">
            // 02_SYSTEM_PROFILE
          </span>
          <div className="glow-line h-[1px] w-24" />
        </div>
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-cyber-white uppercase tracking-wider">
          About <span className="text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,211,0,0.4)]">Salman Ahmad</span> (ahmmikun)
        </h1>
        <p className="text-cyber-gray text-base md:text-lg mt-4 max-w-3xl font-light">
          Full Stack Developer, Graphic Designer, and Automation Engineer based in Lahore, Pakistan. Operating under the developer identity <strong className="text-cyber-white">&apos;ahmmikun&apos;</strong>, I build high-performance web applications, resilient automation bots, and modern 3D WebGL interfaces.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Biography & Mission */}
          <section className="bg-cyber-surface border border-cyber-border p-8 md:p-10 clip-corner-br relative">
            <h2 className="text-2xl font-orbitron font-bold text-cyber-white uppercase tracking-wide mb-6 flex items-center gap-3">
              <ChevronRight className="w-6 h-6 text-cyber-yellow" />
              Professional Background &amp; Engineering Ethos
            </h2>
            <div className="space-y-4 text-cyber-gray text-base leading-relaxed font-light">
              <p>
                Based in Lahore, Pakistan, I am a dedicated software engineer with extensive experience developing full-stack digital products. Throughout my journey, I have combined a deep passion for system architecture, algorithm optimization, and modern UI/UX design to deliver software that is both visually captivating and architecturally resilient.
              </p>
              <p>
                As <strong className="text-cyber-white">ahmmikun</strong>, I have authored and maintained widely used open-source repositories, most notably the <strong className="text-cyber-white">XLICON WhatsApp automation bot ecosystem</strong>. This project required architecting real-time multi-device socket connections, designing dynamic command parsing frameworks, and managing state persistence across thousands of simultaneous active users.
              </p>
              <p>
                My technical philosophy is founded upon three core tenets: <strong className="text-cyber-white">performance</strong> (sub-second load times and 60 FPS interfaces), <strong className="text-cyber-white">maintainability</strong> (modular architecture and type safety), and <strong className="text-cyber-white">agent-readiness</strong> (structured semantic data, MCP tooling, and OpenAPI specifications).
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 border-t border-cyber-border pt-8 mt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-yellow">20+</div>
                <div className="text-xs text-cyber-gray uppercase font-orbitron mt-1">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-yellow">3+</div>
                <div className="text-xs text-cyber-gray uppercase font-orbitron mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-yellow">99%</div>
                <div className="text-xs text-cyber-gray uppercase font-orbitron mt-1">Satisfaction Rate</div>
              </div>
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="bg-cyber-surface border border-cyber-border p-8 md:p-10 clip-corner-br">
            <h2 className="text-2xl font-orbitron font-bold text-cyber-white uppercase tracking-wide mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-cyber-yellow" />
              Education &amp; Industry Certifications
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-cyber-yellow pl-4">
                <h3 className="text-lg font-orbitron font-bold text-cyber-white">Computer Science &amp; Software Engineering Studies</h3>
                <p className="text-xs text-cyber-yellow font-mono uppercase tracking-widest mt-1">Superior University</p>
                <p className="text-sm text-cyber-gray mt-2 leading-relaxed">
                  Rigorous academic training covering object-oriented programming, data structures, algorithms, database management systems, computer networks, and operating systems.
                </p>
              </div>

              <div className="border-l-2 border-cyber-border pl-4">
                <h3 className="text-lg font-orbitron font-bold text-cyber-white">Responsive Web Design Certification</h3>
                <p className="text-xs text-cyber-yellow font-mono uppercase tracking-widest mt-1">FreeCodeCamp</p>
                <p className="text-sm text-cyber-gray mt-2 leading-relaxed">
                  Mastery in modern HTML5 semantic architecture, CSS3 media queries, Flexbox, CSS Grid, and web accessibility standards.
                </p>
              </div>

              <div className="border-l-2 border-cyber-border pl-4">
                <h3 className="text-lg font-orbitron font-bold text-cyber-white">Generative AI &amp; AI Fundamentals</h3>
                <p className="text-xs text-cyber-yellow font-mono uppercase tracking-widest mt-1">Udemy &amp; DataCamp</p>
                <p className="text-sm text-cyber-gray mt-2 leading-relaxed">
                  Specialized training in large language models, prompt engineering, context orchestration, and building autonomous agent pipelines.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Info & Verification */}
        <div className="lg:col-span-4 space-y-8">
          {/* Identity Card */}
          <div className="bg-cyber-surface border border-cyber-border p-6 clip-corner-br">
            <h3 className="text-sm font-orbitron font-bold text-cyber-yellow uppercase tracking-widest mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyber-green" /> Verified Entity Profile
            </h3>
            <ul className="space-y-3 text-sm text-cyber-gray">
              <li><strong className="text-cyber-white">Full Name:</strong> Salman Ahmad</li>
              <li><strong className="text-cyber-white">Handle:</strong> ahmmikun</li>
              <li><strong className="text-cyber-white">Location:</strong> Lahore, Punjab, Pakistan</li>
              <li><strong className="text-cyber-white">Primary Focus:</strong> Full Stack Web &amp; Automation</li>
              <li><strong className="text-cyber-white">Availability:</strong> Open to Contracts &amp; Roles</li>
              <li><strong className="text-cyber-white">Email:</strong> xheikhsalman4422@gmail.com</li>
            </ul>

            <div className="flex items-center gap-3 border-t border-cyber-border pt-4 mt-6">
              <a
                href="https://github.com/ahmmikun"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyber-black border border-cyber-border hover:border-cyber-yellow hover:text-cyber-yellow text-cyber-gray transition-colors"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmmikun/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyber-black border border-cyber-border hover:border-[#0A66C2] hover:text-[#0A66C2] text-cyber-gray transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ahmmikun"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyber-black border border-cyber-border hover:border-[#E4405F] hover:text-[#E4405F] text-cyber-gray transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="bg-cyber-surface border border-cyber-border p-6">
            <h3 className="text-sm font-orbitron font-bold text-cyber-white uppercase tracking-widest mb-4">
              Explore Portfolio
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/projects" className="text-cyber-gray hover:text-cyber-yellow transition-colors flex items-center justify-between py-1">
                <span>Featured Projects</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/skills" className="text-cyber-gray hover:text-cyber-yellow transition-colors flex items-center justify-between py-1">
                <span>Technical Skills</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/docs" className="text-cyber-gray hover:text-cyber-yellow transition-colors flex items-center justify-between py-1">
                <span>Developer Portal &amp; API</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="text-cyber-gray hover:text-cyber-yellow transition-colors flex items-center justify-between py-1">
                <span>Contact Terminal</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/privacy" className="text-cyber-gray hover:text-cyber-yellow transition-colors flex items-center justify-between py-1">
                <span>Privacy Policy</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
