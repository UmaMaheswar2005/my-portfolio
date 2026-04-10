"use client";
import { useState } from "react";
import { Projects } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X, Plus } from "lucide-react";

export default function ProjectSection() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="projects" className="py-32 px-6 md:px-10 border-t border-zinc-900">
      <div className="flex justify-between items-baseline mb-16 max-w-7xl mx-auto">
        <h2 className="font-syne text-5xl md:text-7xl font-black italic tracking-tighter">WORKS.</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 max-w-7xl mx-auto">
        {Projects.map((project, i) => (
          <div 
            key={i} 
            onClick={() => setSelected(project)}
            className="group relative bg-[#050505] p-8 md:p-10 min-h-[380px] flex flex-col cursor-pointer overflow-hidden transition-colors hover:bg-zinc-950"
          >
            {/* Top Bar: Category & Icon */}
            <div className="flex justify-between items-start z-10 mb-8">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">{project.category}</span>
              <Plus className="text-zinc-700 group-hover:rotate-90 group-hover:text-emerald-500 transition-all shrink-0" size={20} />
            </div>

            {/* Base Info: Title, Description, and Tech Stack */}
            <div className="z-10 flex flex-col flex-grow">
              {/* Scaled down the title size significantly so it fits cleanly */}
              <h3 className="font-syne text-xl md:text-2xl font-bold uppercase mb-4 leading-snug group-hover:text-emerald-500 transition-colors">
                {project.title}
              </h3>
              
              {/* Brought the description to the front of the card */}
              <p className="font-inter text-sm text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Added basic tech stack preview to the base card */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t: string) => (
                  <span key={t} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-[9px] font-mono rounded text-zinc-500 uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle Background Number */}
            <div className="absolute -bottom-6 -right-2 font-syne text-8xl font-black text-white/[0.02] italic pointer-events-none transition-transform group-hover:scale-110">
              0{i + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Deep-Dive Case Study Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-md">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-zinc-950 border border-zinc-900 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] max-w-2xl w-full relative max-h-[90vh] overflow-y-auto custom-scrollbar">
              <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-zinc-600 hover:text-white transition-colors">
                <X size={28}/>
              </button>
              
              <h3 className="font-syne text-3xl md:text-5xl font-black uppercase italic mb-8 border-b border-zinc-900 pb-8 pr-8 leading-tight">
                {selected.title}
              </h3>
              
              <div className="space-y-8 font-inter text-zinc-400">
                <div>
                  <span className="font-mono text-[10px] text-emerald-500 block mb-2 uppercase tracking-widest">The Challenge</span>
                  <p className="text-sm leading-relaxed">{selected.details.challenge}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-emerald-500 block mb-2 uppercase tracking-widest">The Solution</span>
                  <p className="text-sm leading-relaxed">{selected.details.solution}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-emerald-500 block mb-2 uppercase tracking-widest">Impact</span>
                  <p className="text-sm leading-relaxed text-white italic">"{selected.details.impact}"</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-emerald-500 block mb-2 uppercase tracking-widest">Full Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t: string) => (
                      <span key={t} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono rounded-md text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex justify-end">
                <a href={selected.github} target="_blank" className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-[10px] tracking-widest hover:bg-emerald-500 transition-colors uppercase">
                   <Github size={16}/> Source_Code
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}