"use client";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600 dark:text-zinc-400">
              {PERSONAL_INFO.college}
            </span>
          </div>

          <h1 className="font-syne text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter">
            UMA MAHESWAR <br />
            <span className="text-gradient">REDDY V.</span>
          </h1>
          
          <p className="font-serif italic text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
            Engineering <span className="font-semibold text-zinc-900 dark:text-white not-italic">Intelligence</span> across scalable enterprise systems, full-stack ecosystems, and predictive AI models.
          </p>
          
          <div className="flex flex-wrap gap-5 pt-6">
            <a href="#contact" className="group flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-lg font-mono text-xs font-bold uppercase tracking-widest hover:-translate-y-1 transition-all shadow-xl">
              Contact Me <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={PERSONAL_INFO.resume} target="_blank" className="flex items-center gap-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-800 px-8 py-4 rounded-lg font-mono text-xs font-bold uppercase tracking-widest hover:border-primary dark:hover:border-primary hover:-translate-y-1 transition-all">
              <FileText size={16} /> View Resume
            </a>
          </div>
        </motion.div>

        {/* Clean, Engineered Wireframe Graphic */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:flex justify-end items-center relative">
           <div className="w-[80%] aspect-square rounded-full border border-zinc-300 dark:border-zinc-800 relative flex items-center justify-center">
              <div className="w-[60%] aspect-square rounded-full border border-dashed border-primary/50 animate-[spin_60s_linear_infinite] flex items-center justify-center relative">
                 <div className="absolute w-3 h-3 bg-primary rounded-full top-0 -translate-y-1/2 shadow-[0_0_15px_rgba(139,92,246,0.8)]"></div>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}