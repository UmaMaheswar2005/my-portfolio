import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-20">
        <h2 className="font-syne text-6xl font-extrabold uppercase tracking-tighter leading-none">
          History.
        </h2>
        <p className="font-serif italic text-2xl text-zinc-500 max-w-sm">
          A trajectory of technical growth across web, data, and cloud sectors.
        </p>
      </div>

      <div className="space-y-0">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="group border-t border-zinc-800 py-12 flex flex-col md:grid md:grid-cols-12 gap-6 hover:bg-zinc-900/30 transition-all px-4">
            <div className="md:col-span-3">
              <span className="font-mono text-[10px] text-emerald-500 font-bold uppercase tracking-[0.3em]">{exp.duration}</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="font-syne text-2xl font-bold uppercase mb-2 group-hover:translate-x-2 transition-transform">{exp.role}</h3>
              <p className="font-serif italic text-xl text-zinc-400">{exp.company}</p>
            </div>
            <div className="md:col-span-3 text-sm text-zinc-500 font-inter leading-relaxed">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}