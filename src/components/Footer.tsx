import { Github, Linkedin, ArrowUpRight, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 border-t border-border/50 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          
          {/* Left Side: Massive Typography */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="font-syne text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9]">
              LET'S <br /> <span className="text-gradient not-italic">CONNECT.</span>
            </h2>
            <p className="font-serif italic text-xl md:text-2xl text-foreground/60 max-w-sm leading-relaxed">
              Open to opportunities in AI, Full-Stack development, and enterprise software engineering.
            </p>
          </div>

          {/* Right Side: Tactile Links */}
          <div className="flex flex-col justify-end space-y-8 lg:w-1/2">
            
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex justify-between items-center border-b border-border pb-6 hover:border-primary transition-all">
              <span className="font-syne text-2xl md:text-4xl font-bold uppercase text-foreground tracking-tighter group-hover:text-primary transition-colors flex items-center gap-4">
                <Mail className="text-primary" size={32} /> Email Me
              </span>
              <ArrowUpRight className="text-foreground/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={32} />
            </a>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://github.com/UmaMaheswar2005" 
                target="_blank"
                rel="noopener noreferrer"
                className="color-card flex items-center gap-3 px-8 py-4 rounded-lg font-mono text-[10px] font-bold tracking-widest text-foreground uppercase transition-all hover:-translate-y-1"
              >
                <Github size={18} className="text-primary" /> GitHub Profile
              </a>
              <a 
                href="https://linkedin.com/in/uma-maheswar-reddy-v" 
                target="_blank"
                rel="noopener noreferrer"
                className="color-card flex items-center gap-3 px-8 py-4 rounded-lg font-mono text-[10px] font-bold tracking-widest text-foreground uppercase transition-all hover:-translate-y-1"
              >
                <Linkedin size={18} className="text-primary" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 gap-4">
          <p className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest font-bold">
            © 2026 {PERSONAL_INFO.name}
          </p>
          <p className="font-serif italic text-foreground/50 text-sm">
            Engineered for performance and scale.
          </p>
        </div>
      </div>
    </footer>
  );
}