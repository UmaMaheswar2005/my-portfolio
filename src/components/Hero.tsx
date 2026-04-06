import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 hero-mesh">
      <div className="max-w-5xl mx-auto text-center">
        {/* Technical Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-400">
            System Status: Ready for Hire
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-linear-to-b from-white to-slate-500 bg-clip-text text-transparent">
          {PERSONAL_INFO.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
          {PERSONAL_INFO.role} building <span className="text-white">autonomous AI systems</span> and <span className="text-white">quantum cryptographic tools</span>. {PERSONAL_INFO.college}.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="#projects" className="w-full sm:w-auto">
            <Button className="w-full h-14 px-10 btn-primary rounded-lg transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Explore Repositories
            </Button>
          </Link>
          
          <Link href={PERSONAL_INFO.resume} target="_blank" className="w-full sm:w-auto">
            <Button className="w-full h-14 px-10 btn-outline rounded-lg transition-all hover:bg-slate-900 border-slate-700">
              Download CV.pdf
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}