"use client";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="py-28 px-6 md:px-12 border-b border-[var(--br)]" id="history">
      
      <div className="flex items-center gap-4 mb-5">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--muted)]">
          02 — History
        </span>
        <div className="flex-1 h-px bg-[var(--br)] max-w-[80px]" />
      </div>
      <h2 className="font-['Unbounded'] font-black text-4xl md:text-6xl uppercase tracking-tight text-[var(--text)] mb-16">
        Timeline
      </h2>

      <div className="flex flex-col">
        {EXPERIENCE.map((item, i) => (
          <div 
            key={i} 
            className="group grid md:grid-cols-[250px_1fr] gap-4 md:gap-12 py-10 border-b border-[var(--br)] relative hover:bg-[var(--bg-s)] transition-colors px-6 -mx-6 rounded-2xl"
          >
            {/* Interactive Vertical Glow Line */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-md transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:w-2
                ${i % 3 === 0 ? 'bg-[var(--coral)]' : i % 3 === 1 ? 'bg-[var(--violet)]' : 'bg-[var(--sky)]'}
            `} />

            <div>
              <p className="font-mono text-xs tracking-[0.1em] uppercase text-[var(--muted)] mb-2">
                {item.duration} {/* Reads your exact local dates */}
              </p>
              <p className="text-sm font-semibold text-[var(--text)]">
                {item.company}
              </p>
              {(item as any).current && (
                <div className="inline-flex items-center gap-2 mt-3 font-mono text-[10px] text-[var(--mint)] tracking-[0.1em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)] animate-pulse" />
                  Current
                </div>
              )}
            </div>

            <div>
              <h3 className="font-['Unbounded'] font-bold text-xl md:text-2xl uppercase tracking-tight text-[var(--text)] mb-4 group-hover:text-[var(--violet)] transition-colors">
                {item.role}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}