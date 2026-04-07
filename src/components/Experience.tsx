import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="mb-16">
        {/* Fixed header size */}
        <h2 className="font-syne text-4xl md:text-5xl font-black uppercase italic tracking-tighter">History.</h2>
        <p className="font-serif italic text-xl text-zinc-500 mt-2">Professional & Academic Milestones.</p>
      </div>

      <div className="divide-y divide-zinc-900 border-t border-zinc-900">
        
        {/* Render Internships/Training from your data file */}
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="group py-10 grid md:grid-cols-12 gap-6 hover:bg-zinc-950/50 transition-colors px-4">
            <div className="md:col-span-3">
              <span className="font-mono text-xs text-emerald-500 font-bold uppercase tracking-[0.2em]">
                {exp.duration}
              </span>
            </div>
            <div className="md:col-span-6">
              <h3 className="font-syne text-xl md:text-2xl font-bold uppercase mb-1">{exp.role}</h3>
              <p className="font-serif italic text-lg text-zinc-500">{exp.company}</p>
            </div>
            <div className="md:col-span-3 text-sm text-zinc-400 font-inter leading-relaxed">
              {exp.description}
            </div>
          </div>
        ))}

        {/* Injected Academic Milestone */}
        <div className="group py-10 grid md:grid-cols-12 gap-6 hover:bg-zinc-950/50 transition-colors px-4">
          <div className="md:col-span-3">
            <span className="font-mono text-xs text-emerald-500 font-bold uppercase tracking-[0.2em]">
              Sep 2022 - Mar 2026
            </span>
          </div>
          <div className="md:col-span-6">
            <h3 className="font-syne text-xl md:text-2xl font-bold uppercase mb-1">B.Tech in Computer Science</h3>
            <p className="font-serif italic text-lg text-zinc-500">Chadalawada Ramanamma Engineering College, Tirupati</p>
          </div>
          <div className="md:col-span-3 text-sm text-zinc-400 font-inter leading-relaxed">
            Focused on advanced algorithms, data structures, and core software engineering principles.
          </div>
        </div>

      </div>
    </section>
  );
}