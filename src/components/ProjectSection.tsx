"use client";
import { PROJECTS } from "@/data/portfolio";
import { useRef, useState } from "react";
import { Github, X, Layers, Zap, Info } from "lucide-react";
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
    // Removed border-b to prevent the "wall"
    <section id="projects" className="py-20 px-6 md:px-12 relative" onMouseMove={handleMouseMove}>
      <h2 className="font-['Unbounded'] font-black text-4xl md:text-6xl uppercase mb-12 text-(--text)">Projects</h2>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-6 gap-1px bg-(--br) border border-(--br)">
        {PROJECTS.map((p: any, i) => {
          const gridClass = [0, 5].includes(i) ? "md:col-span-4" : [2, 3].includes(i) ? "md:col-span-3" : "md:col-span-2";
          
          return (
            <div key={i} onClick={() => setSelected(p)} className={`pc spotlight-card group ${gridClass} p-10 relative overflow-hidden cursor-pointer min-h-300px flex flex-col justify-between`}>
              <div className="pc-grid-bg" />
              <div className="flex justify-between items-start mb-8 relative z-10 w-full">
                <span className={`px-4 py-1.5 rounded-full border border-(--brh) font-mono text-[10px] uppercase tracking-widest text-(--text) bg-(--bg-s)`}>
                  {p.category}
                </span>
                <a href={p.link || p.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-(--muted) hover:text-(--text) transition-colors relative z-20 bg-(--bg)/50 p-2 rounded-full backdrop-blur-sm border border-(--br)">
                  <Github size={18} />
                </a>
              </div>
              <div className="relative z-10 w-full">
                <h3 className="font-['Unbounded'] font-bold text-2xl uppercase mb-3 tracking-tight group-hover:text-(--coral) transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-[13px] text-(--muted) leading-relaxed mb-6 line-clamp-2">{p.description || p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {((p as any).stack ?? p.tech)?.slice(0, 4).map((t: string) => (
                    <span key={t} className="px-2 py-1 bg-(--bg-s) border border-(--brh) rounded text-[10px] font-mono text-(--muted) uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pc-wm">0{i + 1}</div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
           <div className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-10 bg-(--bg)/98 backdrop-blur-2xl">
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} 
             className="bg-(--bg-c) border border-(--br) rounded-3xl max-w-6xl w-full relative max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
           >
             <div className="p-6 md:p-8 border-b border-(--br) flex justify-between items-center bg-(--bg-s)">
                <div>
                   <h3 className="font-['Unbounded'] text-xl md:text-3xl font-black uppercase text-(--text)">{selected.title}</h3>
                   <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-(--muted) mt-1">{selected.category} — {selected.date || selected.period}</p>
                </div>
                <button onClick={() => setSelected(null)} className="p-3 bg-(--bg) rounded-full hover:text-(--coral) transition-colors"><X size={20}/></button>
             </div>

             <div className="flex-1 overflow-y-auto p-8 md:p-12">
               <div className="grid lg:grid-cols-12 gap-12">
                 
                 <div className="lg:col-span-4 space-y-10">
                    <div className="space-y-4">
                       <span className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase text-(--coral) tracking-tighter"><Layers size={14}/> Stack Architecture</span>
                       <div className="grid grid-cols-2 gap-2">
                          {(selected.stack || selected.tech).map((t: string) => (
                            <div key={t} className="p-3 bg-(--bg-s) border border-(--br) rounded-xl text-[11px] font-mono text-(--text) flex items-center gap-2">
                               <div className="w-1 h-1 bg-(--text) rounded-full"/> {t}
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="p-6 bg-(--bg-s) rounded-2xl border border-(--br)">
                       <span className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase text-(--sky) mb-4"><Zap size={14}/> Core Tech</span>
                       <div className="space-y-3">
                          {/* Removed License and Status, isolated the primary engine */}
                          <div className="flex justify-between text-[13px] font-mono"><span className="text-(--muted)">Engine:</span><span className="font-bold text-(--text)">{(selected.stack || selected.tech)[0]}</span></div>
                       </div>
                    </div>
                 </div>

                 <div className="lg:col-span-8 space-y-12">
                    <section>
                       <span className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase text-(--violet) mb-4"><Info size={14}/> Project Summary</span>
                       {/* Increased description text size significantly */}
                       <p className="text-xl md:text-2xl text-(--text) font-light leading-relaxed">{selected.description || selected.desc}</p>
                    </section>

                    {(selected.details?.challenge || selected.details?.solution) && (
                      <div className="grid md:grid-cols-2 gap-8">
                         <div className="space-y-4">
                            <h4 className="font-['Unbounded'] text-xs font-bold uppercase text-(--text)">The Challenge</h4>
                            <p className="text-[14px] text-(--muted) leading-relaxed border-l-2 border-(--coral) pl-5">{selected.details?.challenge}</p>
                         </div>
                         <div className="space-y-4">
                            <h4 className="font-['Unbounded'] text-xs font-bold uppercase text-(--text)">The Solution</h4>
                            <p className="text-[14px] text-(--muted) leading-relaxed border-l-2 border-(--sky) pl-5">{selected.details?.solution}</p>
                         </div>
                      </div>
                    )}

                    {selected.details?.impact && (
                      <div className="p-8 bg-(--mint)/5 border border-(--mint)/20 rounded-3xl">
                         <h4 className="font-mono text-[10px] font-bold uppercase text-(--mint) mb-4 tracking-[0.2em]">Impact & Results</h4>
                         <p className="text-[18px] md:text-[22px] font-['Outfit'] font-medium text-(--text) italic leading-snug">"{selected.details?.impact}"</p>
                      </div>
                    )}

                    <div className="flex justify-start pt-6">
                       <a href={selected.link || selected.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-(--text) text-(--bg) px-10 py-5 rounded-2xl font-bold uppercase text-xs tracking-widest hover:scale-[1.02] transition-transform shadow-xl">
                          View Source Code <Github size={16}/>
                       </a>
                    </div>
                 </div>

               </div>
             </div>
           </motion.div>
         </div>
        )}
      </AnimatePresence>
    </section>
  );
}