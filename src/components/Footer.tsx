import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 border-t border-white/5 bg-black/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-slate-400 mb-8">Currently open to opportunities in AI, Quantum, and Full-stack development.</p>
        
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com" className="p-3 glass rounded-full hover:text-blue-400 transition-colors"><Github /></a>
          <a href="https://linkedin.com" className="p-3 glass rounded-full hover:text-blue-400 transition-colors"><Linkedin /></a>
          <a href="mailto:umamaheswar.v275@gmail.com" className="p-3 glass rounded-full hover:text-blue-400 transition-colors"><Mail /></a>
        </div>
        
        <p className="text-slate-600 text-sm italic">
          Designed & Built by Uma Maheswar Reddy V— 2026
        </p>
      </div>
    </footer>
  );
}