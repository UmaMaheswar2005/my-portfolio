"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 md:px-10 overflow-hidden pt-20">
      <div className="absolute top-1/3 right-0 w-1/3 h-px bg-zinc-900" />
      
      <div className="relative z-10 w-full max-w-7xl">
        <div className="space-y-8">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-emerald-500 text-xs tracking-[0.3em] uppercase font-bold mb-6"
            >
              System // Software Engineer // 2026
            </motion.p>
            
            {/* Standardized, readable size instead of massive viewport units */}
            <h1 className="font-syne text-5xl md:text-7xl font-bold italic uppercase leading-tight mb-4">
              UMA MAHESWAR <br />
              <span className="text-outline not-italic">REDDY V.</span>
            </h1>
            
            <p className="font-serif italic text-xl md:text-2xl text-zinc-400 mt-6 max-w-2xl leading-relaxed">
              Architecting <span className="text-white">Quantum-Safe Systems</span> and Intelligence at scale.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 items-center pt-4">
            <a 
              href={PERSONAL_INFO.resume} 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-xs tracking-widest hover:bg-emerald-500 transition-all"
            >
              <FileText size={16} /> DOWNLOAD_CV
            </a>
            
            <a href="#projects" className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-all flex items-center gap-2">
              Explore Works <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}