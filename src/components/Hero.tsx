import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start px-10 overflow-hidden pt-20 font-inter">
      {/* Editorial Background Text */}
      <div className="absolute top-20 left-0 w-full opacity-[0.03] select-none pointer-events-none overflow-hidden whitespace-nowrap">
        <h1 className="font-syne text-[25vw] font-extrabold leading-none tracking-tighter uppercase italic">
          DESIGN•ENGINEER•DESIGN
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-7xl mt-20">
        <div className="space-y-4 mb-12">
          <p className="text-emerald-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
            Available 2026 // Based in India
          </p>
          <h1 className="font-syne text-7xl md:text-[11rem] font-extrabold tracking-tighter text-white leading-[0.75] uppercase italic">
            {PERSONAL_INFO.name.split(' ')[0]} <br />
            <span className="text-zinc-800">{PERSONAL_INFO.name.split(' ').slice(1).join(' ')}</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 border-t border-zinc-900 pt-10">
          <p className="text-zinc-400 max-w-xl text-xl md:text-2xl leading-snug font-medium italic">
            Architecting <span className="text-white">Quantum-Safe Systems</span> and <span className="text-white">Predictive AI Models</span> with a focus on enterprise scalability.
          </p>
          
          <Link href="#projects" className="group flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-500">
              <span className="text-white group-hover:text-black transition-colors">↓</span>
            </div>
            <span className="font-syne text-sm font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
              Explore Work
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}