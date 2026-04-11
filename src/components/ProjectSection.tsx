"use client";
import { useState } from "react";
import { Projects } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

export default function ProjectSection() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="projects" className="py-32 px-6 md:px-10 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-900">
      <div className="mb-20">
        <h2 className="font-syne text-5xl md:text-7xl font-black uppercase italic tracking-tighter">Selected Works.</h2>
        <p className="font-serif italic text-xl text-zinc-600 dark:text-zinc-400 mt-4">Architected for performance and scale.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Projects.map((project, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setSelected(project)}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] p-8 md:p-10 min-h-[420px] flex flex-col cursor-pointer group hover:border-primary dark:hover:border-primary hover:-translate-y-2 transition-all shadow-sm hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-widest">{project.category}</span>
                <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{project.date}</span>
              </div>
              <ExternalLink className="text-zinc-300 dark:text-zinc-600 group-hover:text-primary transition-colors" size={20} />
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="font-syne text-2xl font-bold uppercase mb-4 leading-snug group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-inter text-sm text-zinc-600 dark:text-zinc-400 mb-8 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t: string) => (
                  <span key={t} className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-[10px] font-mono font-bold rounded-full text-primary uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal - Fixed Backgrounds */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-zinc-50/90 dark:bg-black/90 backdrop-blur-md">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 rounded-[2rem] max-w-2xl w-full relative max-h-[90vh] overflow-y-auto shadow-2xl">
              <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-zinc-400 hover:text-primary transition-colors bg-zinc-100 dark:bg-zinc-900 p-2 rounded-full">
                <X size={24}/>
              </button>
              
              <h3 className="font-syne text-3xl md:text-5xl font-black uppercase italic mb-2 leading-tight pr-12 text-zinc-900 dark:text-white">
                {selected.title}
              </h3>
              <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                {selected.date}
              </p>
              
              <div className="space-y-8 font-inter">
                <div>
                  <span className="font-mono text-[10px] text-primary block mb-2 uppercase tracking-widest font-bold">The Challenge</span>
                  <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{selected.details.challenge}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-primary block mb-2 uppercase tracking-widest font-bold">The Solution</span>
                  <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{selected.details.solution}</p>
                </div>
                <div className="bg-primary/5 border-l-2 border-primary p-4 rounded-r-lg">
                  <span className="font-mono text-[10px] text-primary block mb-2 uppercase tracking-widest font-bold">Impact</span>
                  <p className="text-sm leading-relaxed text-zinc-900 dark:text-white italic">"{selected.details.impact}"</p>
                </div>
              </div>
              
              <div className="mt-12 flex justify-end pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <a href={selected.github} target="_blank" className="flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-lg font-bold text-[10px] tracking-widest hover:-translate-y-1 transition-transform uppercase">
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