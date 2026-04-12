"use client";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 border-b border-(--br)">
      <h2 className="font-['Unbounded'] font-black text-4xl md:text-6xl uppercase mb-16 text-(--text)">Timeline</h2>

      <div className="flex flex-col">
        {EXPERIENCE.map((item, i) => (
          <div key={i} className="grid md:grid-cols-[250px_1fr] gap-8 py-12 border-b border-(--br) relative pl-8 group hover:bg-(--bg-s) transition-colors">
            {/* Vertical Sidebar Indicator */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${i % 2 === 0 ? 'bg-(--coral)' : 'bg-(--violet)'}`} />
            
            <div>
              <p className="font-mono text-xs text-(--muted) uppercase tracking-widest mb-2">{item.duration}</p>
              <p className="font-bold text-(--text)">{item.company}</p>
            </div>
            <div>
              <h3 className="font-['Unbounded'] font-bold text-2xl uppercase mb-4 group-hover:text-(--violet) transition-colors">{item.role}</h3>
              <p className="text-(--muted) leading-relaxed max-w-2xl">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}