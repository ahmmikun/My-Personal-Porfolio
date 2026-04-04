import Link from "next/link";
import { Code2, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="font-orbitron text-2xl font-bold tracking-widest">
              AHMMI <span className="text-cyber-yellow">KUN</span>
            </h2>
            <p className="text-cyber-gray text-sm md:text-base text-center md:text-left">
              Full Stack Developer & Graphics Designer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://github.com/ahmmikun" target="_blank" className="text-cyber-gray hover:text-cyber-yellow transition-all hover:scale-110">
              <Code2 className="w-6 h-6" />
            </Link>
            <Link href="mailto:salmansheikh2500@gmail.com" className="text-cyber-gray hover:text-cyber-yellow transition-all hover:scale-110">
              <Mail className="w-6 h-6" />
            </Link>
            <Link href="https://www.instagram.com/ahmmikun/" target="_blank" className="text-cyber-gray hover:text-cyber-yellow transition-all hover:scale-110">
              <ExternalLink className="w-6 h-6" />
            </Link>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest text-cyber-gray/50 uppercase">
          <p>© {new Date().getFullYear()} AHMMI KUN. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-yellow animate-pulse"></span>
            SYSTEM ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
}
