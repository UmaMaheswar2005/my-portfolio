"use client";
import { PROJECTS } from "@/data/portfolio";
import { useRef, useState } from "react";
import { Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<any>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const cards = containerRef.current.getElementsByClassName("pc");
    for (const card of cards as any) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section id="projects" className="py-28 px-6 md:px-12 border-b border-[var(--br)] relative" onMouseMove={handleMouseMove}>
      <div className="eyebrow">
        <span className="eyetag">01 — Selected Works</span>
        <div className="eyrule" />
      </div>
      <h2 className="sec-title">Projects</h2>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-6 gap-[1px] bg-[var(--br)] border border-[var(--br)]">
        {PROJECTS.map((p, i) => {
          const gridClass = i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2 md:row-span-2" : "md:col-span-2";
          
          return (
            <div 
              key={i} 
              onClick={() => setSelected(p)}
              className={`pc spotlight-card group ${gridClass} bg-[var(--bg-c)] p-10 relative overflow-hidden transition-colors cursor-pointer`}
            >
              <div className="flex justify-between items-start mb-8 relative z-10">
                <span className={`pc-type at-${i % 2 === 0 ? 'coral' : 'violet'}`}>
                  {p.category}
                </span>
                
                {/* Stop Propagation prevents the modal from opening when clicking Github */}
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} 
                  className="text-[var(--muted)] hover:text-[var(--text)] transition-colors relative z-20"
                >
                  <Github size={20} />
                </a>
              </div>

              <div className="relative z-10">
                <h3 className="pc-title group-hover:text-[var(--coral)] transition-colors">
                  {p.title}
                </h3>
                <p className="pc-desc mb-8">{p.description}</p>
                <div className="pc-tags">
                  {p.tech.map((t) => <span key={t} className="pc-tag">{t}</span>)}
                </div>
              </div>

              <div className="pc-wm">0{i + 1}</div>
              <div className="pc-foot">{p.date}</div>
            </div>
          );
        })}
      </div>

      {/* The Interactive Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-[var(--bg)]/90 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }} 
              className="bg-[var(--bg-c)] border border-[var(--br)] p-8 md:p-12 rounded-3xl max-w-2xl w-full relative max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <button 
                onClick={() => setSelected(null)} 
                className="absolute top-6 right-6 text-[var(--muted)] hover:text-[var(--coral)] transition-colors bg-[var(--bg-s)] p-2 rounded-full border border-[var(--br)]"
              >
                <X size={20}/>
              </button>
              
              <h3 className="font-['Unbounded'] text-2xl md:text-4xl font-black uppercase mb-4 leading-tight pr-12 text-[var(--text)]">
                {selected.title}
              </h3>
              
              <div className="flex gap-3 mb-8 pb-8 border-b border-[var(--br)]">
                 <span className="font-mono text-[10px] text-[var(--violet)] uppercase tracking-widest border border-[var(--violet)]/30 px-3 py-1 rounded-full bg-[var(--violet)]/10">
                    {selected.category}
                 </span>
                 <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-widest border border-[var(--br)] px-3 py-1 rounded-full">
                    {selected.date}
                 </span>
              </div>
              
              <div className="space-y-8 font-['Outfit']">
                {selected.details?.challenge && (
                  <div>
                    <span className="font-mono text-[10px] text-[var(--coral)] block mb-2 uppercase tracking-widest font-bold">The Challenge</span>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">{selected.details.challenge}</p>
                  </div>
                )}
                {selected.details?.solution && (
                  <div>
                    <span className="font-mono text-[10px] text-[var(--sky)] block mb-2 uppercase tracking-widest font-bold">The Solution</span>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">{selected.details.solution}</p>
                  </div>
                )}
                {selected.details?.impact && (
                  <div className="bg-[var(--mint)]/5 border-l-2 border-[var(--mint)] p-5 rounded-r-lg">
                    <span className="font-mono text-[10px] text-[var(--mint)] block mb-2 uppercase tracking-widest font-bold">Impact</span>
                    <p className="text-sm leading-relaxed text-[var(--text)] italic">"{selected.details.impact}"</p>
                  </div>
                )}
              </div>
              
              <div className="mt-12 flex justify-end pt-8 border-t border-[var(--br)]">
                <a href={selected.github} target="_blank" className="flex items-center gap-3 bg-[var(--text)] text-[var(--bg)] px-8 py-4 rounded-full font-bold text-xs tracking-widest hover:scale-105 transition-transform uppercase">
                   <Github size={16}/> View Source
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}