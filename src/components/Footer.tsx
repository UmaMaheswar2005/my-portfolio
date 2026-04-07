import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-32 border-t border-zinc-900 bg-[#02040a]">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="font-syne text-6xl md:text-8xl font-black italic tracking-tighter mb-8 uppercase">
              LET'S <br /> CONNECT.
            </h2>
            <p className="font-serif italic text-2xl text-zinc-500 max-w-sm">
              Currently open to opportunities in AI, Quantum, and Full-stack development.
            </p>
          </div>

          <div className="flex flex-col justify-end space-y-8">
            <a href="mailto:umamaheswar.v275@gmail.com" className="group flex justify-between items-center border-b border-zinc-800 pb-6 hover:border-emerald-500 transition-all">
              <span className="font-syne text-2xl font-bold uppercase">Email</span>
              <ArrowUpRight className="group-hover:text-emerald-500 transition-colors" />
            </a>
            <div className="flex gap-10">
              <a href="https://github.com" className="font-mono text-[10px] tracking-widest text-zinc-500 hover:text-white uppercase">Github</a>
              <a href="https://linkedin.com" className="font-mono text-[10px] tracking-widest text-zinc-500 hover:text-white uppercase">Linkedin</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 gap-6">
          <p className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest">
            © 2026 UMA MAHESWAR REDDY V.
          </p>
          <p className="font-serif italic text-zinc-600">
            Engineered for performance and scale.
          </p>
        </div>
      </div>
    </footer>
  );
}