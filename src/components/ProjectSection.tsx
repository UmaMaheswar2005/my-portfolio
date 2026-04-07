"use client";
import { useState } from "react";
import { Projects } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X, Plus } from "lucide-react";

export default function ProjectSection() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="projects" className="py-32 px-10 border-t border-zinc-900">
      <div className="flex justify-between items-baseline mb-24">
        <h2 className="font-syne text-6xl md:text-8xl font-black italic tracking-tighter">WORKS.</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
        {Projects.map((project, i) => (
          <div 
            key={i} 
            onClick={() => setSelected(project)}
            className="group relative bg-[#050505] p-12 aspect-square flex flex-col justify-between cursor-pointer overflow-hidden transition-colors hover:bg-zinc-950"
          >
            <div className="flex justify-between items-start z-10">
              <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">{project.category}</span>
              <Plus className="text-zinc-800 group-hover:rotate-90 group-hover:text-emerald-500 transition-all" size={20} />
            </div>

            <div className="z-10">
              <h3 className="font-syne text-3xl font-bold uppercase mb-2 leading-none group-hover:text-emerald-500 transition-colors">
                {project.title.split(' ').slice(0, 2).join(' ')}
              </h3>
              <p className="font-serif italic text-zinc-500 text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                View Case Study
              </p>
            </div>

            {/* Background number in Syne font */}
            <div className="absolute -bottom-10 -right-5 font-syne text-[15rem] font-black text-white/[0.02] italic pointer-events-none">
              0{i + 1}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-zinc-950 border border-zinc-900 p-12 rounded-[3rem] max-w-2xl w-full relative">
              <button onClick={() => setSelected(null)} className="absolute top-8 right-8 text-zinc-600 hover:text-white transition-colors"><X size={32}/></button>
              <h3 className="font-syne text-5xl font-black uppercase italic mb-8 border-b border-zinc-900 pb-8">{selected.title}</h3>
              <div className="space-y-8 font-inter text-zinc-400">
                <div>
                  <span className="font-mono text-[10px] text-emerald-500 block mb-2 uppercase">Challenge</span>
                  <p className="text-sm leading-relaxed">{selected.details.challenge}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-emerald-500 block mb-2 uppercase">Tech_Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t: any) => <span key={t} className="px-3 py-1 bg-zinc-900 text-[10px] font-mono rounded-md">{t}</span>)}
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