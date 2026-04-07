import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="font-syne text-5xl md:text-7xl font-black uppercase italic tracking-tighter">History.</h2>
      </div>

      <div className="divide-y divide-zinc-900 border-t border-zinc-900">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="group py-12 grid md:grid-cols-12 gap-8 hover:bg-zinc-950/50 transition-colors px-4">
            <div className="md:col-span-3">
              <span className="font-mono text-[10px] text-emerald-500 font-bold uppercase tracking-[0.3em]">
                {exp.duration}
              </span>
            </div>
            <div className="md:col-span-6">
              <h3 className="font-syne text-2xl font-bold uppercase mb-1">{exp.role}</h3>
              <p className="font-serif italic text-lg text-zinc-500">{exp.company}</p>
            </div>
            <div className="md:col-span-3 text-xs text-zinc-400 font-inter leading-relaxed">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}