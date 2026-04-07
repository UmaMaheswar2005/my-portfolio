"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 md:px-10 overflow-hidden pt-20">
      {/* Structural Lines */}
      <div className="absolute top-1/3 right-0 w-1/3 h-px bg-zinc-900" />
      
      <div className="relative z-10 w-full max-w-7xl">
        <div className="space-y-10">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-emerald-500 text-[9px] tracking-[0.4em] uppercase font-bold mb-6"
            >
              Architect // Developer // 2026
            </motion.p>
            
            <h1 className="font-syne fluid-header font-extrabold italic">
              UMA MAHESWAR <br />
              <span className="text-outline not-italic">REDDY V.</span>
            </h1>
            
            <p className="font-serif italic text-2xl md:text-4xl text-zinc-500 mt-6 max-w-2xl leading-tight">
              Architecting <span className="text-white">Quantum-Safe Systems</span> and Intelligence at scale.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-[10px] tracking-widest hover:bg-emerald-500 transition-all"
            >
              <FileText size={14} /> DOWNLOAD_CV
            </a>
            
            <a href="#projects" className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-600 hover:text-white transition-all">
              EXPLORE_WORKS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}