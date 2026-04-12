"use client";
import { EXPERTISE, PROJECTS } from "@/data/portfolio";
import { BrainCircuit, Code, Cpu } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  BrainCircuit: BrainCircuit,
  Code: Code,
  Cpu: Cpu,
};

// ── DYNAMIC SKILL EXTRACTION ──
// This combines every skill from Expertise and every tech tag from Projects
const allUniqueSkills = Array.from(new Set([
  ...EXPERTISE.flatMap(e => e.skills),
  ...PROJECTS.flatMap(p => p.tech)
]));

// Split them into two distinct rows to maximize variety
const mid = Math.ceil(allUniqueSkills.length / 2);
const ROW1 = allUniqueSkills.slice(0, mid);
const ROW2 = allUniqueSkills.slice(mid);

const DOTCOLORS = ['coral','violet','mint','amber','sky','lime'];

export default function Expertise() {
  return (
    <section id="expertise" className="border-b border-[var(--br)]">
      <div className="section">
        <div className="eyebrow">
          <span className="eyetag">02 — Expertise</span>
          <div className="eyrule" />
        </div>
        <h2 className="sec-title">Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--br)] border border-[var(--br)] mb-20">
          {EXPERTISE.map((exp, i) => {
            const Icon = ICON_MAP[exp.icon] || Code;
            return (
              <div key={i} className="pc group hover:bg-[var(--bg-s)] transition-colors p-10 min-h-[320px] flex flex-col">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 border border-[var(--brh)] bg-[var(--bg-s)] group-hover:scale-110 transition-transform
                  ${i === 0 ? 'text-[var(--coral)]' : i === 1 ? 'text-[var(--violet)]' : 'text-[var(--mint)]'}
                `}>
                  <Icon size={24} />
                </div>
                <h3 className="font-['Unbounded'] font-bold text-xl uppercase mb-4 tracking-tight group-hover:text-[var(--text)] transition-colors">
                  {exp.area}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-8 flex-grow">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-[var(--bg)] border border-[var(--brh)] rounded text-[10px] font-mono text-[var(--muted)] uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── DYNAMIC MARQUEE ── */}
      <div className="mq-zone border-t border-[var(--br)]">
        <div className="mq-row">
          <div className="mq-track mq-fwd">
            {/* Duplicating once is required for the CSS -50% loop, but now it's a massive list */}
            {[...ROW1, ...ROW1].map((s, i) => (
              <span className="mq-chip" key={i}>
                <span className={`mq-dot dc-${DOTCOLORS[i % DOTCOLORS.length]}`} />
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="mq-row">
          <div className="mq-track mq-rev">
            {[...ROW2, ...ROW2].map((s, i) => (
              <span className="mq-chip" key={i}>
                <span className={`mq-dot dc-${DOTCOLORS[(i + 3) % DOTCOLORS.length]}`} />
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}