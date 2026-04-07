"use client";
import { useState } from "react";
import { Projects } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, X } from "lucide-react";

export default function ProjectSection() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="projects" className="py-32 px-10 max-w-7xl mx-auto">
      <h2 className="font-syne text-6xl font-extrabold uppercase tracking-tighter mb-20">Works.</h2>

      <div className="grid md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
        {Projects.map((project, i) => (
          <div 
            key={i} 
            onClick={() => setSelected(project)}
            className="bg-[#050505] p-12 aspect-square flex flex-col justify-between group cursor-pointer hover:bg-zinc-900/50 transition-all"
          >
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest italic">{project.category}</span>
              <ArrowUpRight className="text-zinc-700 group-hover:text-emerald-500 transition-colors" />
            </div>
            <div>
              <h3 className="font-syne text-4xl font-bold uppercase mb-4 leading-none">{project.title}</h3>
              <p className="font-serif italic text-lg text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">View Project Details</p>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-950 border border-zinc-800 p-12 rounded-[2rem] max-w-2xl w-full relative">
              <button onClick={() => setSelected(null)} className="absolute top-8 right-8 text-zinc-500 hover:text-white"><X/></button>
              <span className="font-mono text-[10px] text-emerald-500 uppercase font-bold">{selected.category}</span>
              <h3 className="font-syne text-5xl font-bold uppercase my-6">{selected.title}</h3>
              <div className="space-y-6 font-inter text-zinc-400 text-sm">
                <p><b className="text-white block font-syne uppercase text-xs mb-2">Challenge:</b> {selected.details.challenge}</p>
                <p><b className="text-white block font-syne uppercase text-xs mb-2">Solution:</b> {selected.details.solution}</p>
              </div>
              <div className="mt-10 flex justify-end">
                <a href={selected.github} target="_blank" className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-500 transition-colors">
                  <Github size={18}/> REPOSITORY
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}