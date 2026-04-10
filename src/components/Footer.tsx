import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-32 border-t border-zinc-900 bg-[#02040a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-32">
          <div className="lg:w-1/2">
            {/* FIXED: Removed aggressive breaking, adjusted responsive sizes so it fits cleanly */}
            <h2 className="font-syne text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tight mb-6 uppercase leading-none">
              LET'S <br /> CONNECT.
            </h2>
            <p className="font-serif italic text-xl md:text-2xl text-zinc-400 max-w-sm">
              Currently open to opportunities in AI, Full-Stack, and software engineering.
            </p>
          </div>

          <div className="flex flex-col justify-end space-y-10 lg:w-1/2">
            <a href="mailto:umamaheswar.v275@gmail.com" className="group flex justify-between items-center border-b border-zinc-800 pb-6 hover:border-emerald-500 transition-all">
              {/* FIXED: Reverted to "Email" for a sharp, designer-friendly UI without text wrapping issues */}
              <span className="font-syne text-2xl md:text-3xl font-bold uppercase text-white tracking-wider">
                Email
              </span>
              <ArrowUpRight className="text-zinc-500 group-hover:text-emerald-500 transition-colors shrink-0 ml-4" />
            </a>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/UmaMaheswar2005" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 hover:border-emerald-500 hover:bg-emerald-500/10 px-6 py-4 rounded-full font-mono text-[10px] tracking-widest text-white uppercase transition-all shadow-lg"
              >
                <Github size={18} className="text-white" /> GITHUB_PROFILE
              </a>
              <a 
                href="https://linkedin.com/in/your-profile-here" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 hover:border-emerald-500 hover:bg-emerald-500/10 px-6 py-4 rounded-full font-mono text-[10px] tracking-widest text-white uppercase transition-all shadow-lg"
              >
                <Linkedin size={18} className="text-white" /> LINKEDIN
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 gap-6">
          <p className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest text-center md:text-left">
            © 2026 UMA MAHESWAR REDDY V.
          </p>
          <p className="font-serif italic text-zinc-600 text-center md:text-right">
            Engineered for performance and scale.
          </p>
        </div>
      </div>
    </footer>
  );
}