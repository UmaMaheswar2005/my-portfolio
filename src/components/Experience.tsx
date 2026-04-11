"use client";
import { EXPERIENCE } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-10 max-w-7xl mx-auto border-t border-border/50">
      <div className="mb-20">
        <h2 className="font-syne text-5xl md:text-7xl font-black uppercase italic tracking-tighter">History.</h2>
        <p className="font-serif italic text-xl text-foreground/60 mt-4">Professional & Academic Timeline.</p>
      </div>

      <div className="space-y-12 pl-4 md:pl-0">
        {EXPERIENCE.map((exp, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative grid md:grid-cols-12 gap-6 md:gap-10 group"
          >
            {/* The Timeline Line & Dot */}
            <div className="absolute -left-4 md:-left-[21px] top-2 bottom-[-3rem] w-px bg-border group-last:bg-transparent"></div>
            <div className="absolute -left-[21px] md:-left-[26px] top-2.5 w-3 h-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors"></div>

            <div className="md:col-span-3 pt-1">
              <span className="font-mono text-xs text-primary font-bold uppercase tracking-[0.2em]">
                {exp.duration}
              </span>
            </div>
            
            <div className="md:col-span-4">
              <h3 className="font-syne text-xl md:text-2xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                {exp.role}
              </h3>
              <p className="font-serif italic text-lg text-foreground/70">
                {exp.company}
              </p>
            </div>
            
            <div className="md:col-span-5 text-sm text-foreground/60 font-inter leading-relaxed">
              {exp.description}
            </div>
          </motion.div>
        ))}

        {/* Academic Milestone */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative grid md:grid-cols-12 gap-6 md:gap-10 group"
        >
          <div className="absolute -left-[21px] md:-left-[26px] top-2.5 w-3 h-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors"></div>

          <div className="md:col-span-3 pt-1">
            <span className="font-mono text-xs text-primary font-bold uppercase tracking-[0.2em]">
              Sep 2022 - Mar 2026
            </span>
          </div>
          <div className="md:col-span-4">
            <h3 className="font-syne text-xl md:text-2xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">
              B.Tech in Computer Science
            </h3>
            <p className="font-serif italic text-lg text-foreground/70">
              Chadalawada Ramanamma Engineering College
            </p>
          </div>
          <div className="md:col-span-5 text-sm text-foreground/60 font-inter leading-relaxed">
            Focused on advanced algorithms, data structures, and core software engineering principles. Completed GATE exams in DA and PH.
          </div>
        </motion.div>
      </div>
    </section>
  );
}