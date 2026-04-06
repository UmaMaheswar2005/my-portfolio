"use client";

import { useState } from "react";
import { Projects } from "@/data/portfolio";
import { Github, ExternalLink, X, ShieldCheck, Code2, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto border-t border-(--border)">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-(--foreground) tracking-tight mb-6">
          Featured Engineering
        </h2>
        <p className="text-(--muted) max-w-2xl text-lg leading-relaxed">
          A collection of systems ranging from hybrid neural networks for environmental safety to quantum-enhanced cryptographic generators.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Projects.map((project, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedProject(project)} 
            className="group cursor-pointer flex flex-col h-full p-8 rounded-xl bg-(--background) border border-(--border) hover:border-(--foreground) transition-all duration-300 shadow-sm"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-2 rounded-md bg-slate-100 dark:bg-zinc-900 border border-(--border) text-blue-600 dark:text-blue-400">
                <Code2 size={18} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mt-2">
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-(--foreground) group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <div className="flex items-center gap-2 text-[11px] font-mono text-(--muted) mb-6">
              <Calendar size={12} />
              <span>{project.date}</span>
            </div>
            
            <p className="text-(--muted) text-sm leading-relaxed mb-8 grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2.5 py-1 bg-slate-50 dark:bg-zinc-900 border border-(--border) rounded text-[10px] font-semibold text-(--muted)"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-(--background) max-w-3xl w-full p-10 rounded-2xl relative border border-(--border) shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-8 right-8 text-(--muted) hover:text-(--foreground) transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-3xl font-bold mb-10 text-(--foreground) pr-12">
                {selectedProject.title}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-12 mb-10">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-(--muted) mb-4 border-b border-(--border) pb-2">The Challenge</h4>
                  <p className="text-(--foreground) text-sm leading-relaxed">
                    {selectedProject.details.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-(--muted) mb-4 border-b border-(--border) pb-2">Technical Solution</h4>
                  <p className="text-(--foreground) text-sm leading-relaxed">
                    {selectedProject.details.solution}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl mb-10">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2">
                  <ShieldCheck size={16} /> Technical Impact
                </h4>
                <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed italic">
                  "{selectedProject.details.impact}"
                </p>
              </div>

              <div className="flex justify-end pt-6 border-t border-(--border)">
                 <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold px-6 py-3 bg-(--foreground) text-(--background) rounded-lg hover:opacity-90 transition-all"
                >
                  <Github size={18} /> Source Code
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}