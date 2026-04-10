"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 md:px-10 overflow-hidden pt-20 bg-[#02040a]">
      {/* Geometric Structural Elements - Removes "Vibe" Glows */}
      <div className="absolute top-1/4 right-0 w-1/3 h-px bg-zinc-900" />
      <div className="absolute bottom-1/4 left-10 w-px h-1/4 bg-zinc-900" />

      <div className="relative z-10 w-full max-w-7xl">
        <div className="space-y-10">
          <div>
            {/* UPDATED: Clear, professional role titles */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-emerald-500 text-[10px] tracking-[0.4em] uppercase font-bold mb-6"
            >
              Software Engineer // AI Developer // Class of 2026
            </motion.p>
            
            <h1 className="font-syne text-5xl md:text-7xl font-extrabold italic uppercase leading-[1.1] tracking-tight">
              UMA MAHESWAR <br />
              <span className="text-outline not-italic">REDDY V.</span>
            </h1>
            
            {/* UPDATED: Sharpened description to separate Web, AI, and Enterprise */}
            <p className="font-serif italic text-xl md:text-2xl text-zinc-400 mt-6 max-w-3xl leading-snug">
              Architecting <span className="text-white">High-Performance Web Applications</span>, Enterprise Cloud Integrations, and <span className="text-white italic">Predictive AI Models</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 items-center pt-4">
            <a 
              href={PERSONAL_INFO.resume} // Dynamically links to your PDF
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-xs tracking-widest hover:bg-emerald-500 transition-all"
            >
              <FileText size={16} /> DOWNLOAD_CV
            </a>
            
            <a href="#projects" className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-all flex items-center gap-2">
              Explore_Deployments <ArrowRight size={14} className="text-emerald-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}