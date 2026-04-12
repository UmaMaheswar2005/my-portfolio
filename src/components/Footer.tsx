"use client";
import { PERSONAL_INFO } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Removed bg-[var(--bg-s)] so it inherits the seamless global background */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden transition-colors" id="contact">
        
        {/* Softened Background Mesh to blend seamlessly */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{
            background: `
            radial-gradient(ellipse 900px 600px at 50% 100%, rgba(255,58,92,0.05) 0%, transparent 50%),
            radial-gradient(ellipse 700px 700px at 100% 0%, rgba(191,126,255,0.04) 0%, transparent 50%)
            `
        }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--muted)]">
              Get in Touch
            </span>
            <div className="flex-1 h-px bg-[var(--br)] max-w-[80px]" />
          </div>
          
          <h2 className="font-['Unbounded'] font-black text-5xl md:text-[7rem] leading-[0.9] tracking-tighter uppercase text-[var(--text)] mb-16">
            Open for<br />
            <em className="not-italic bg-gradient-to-r from-[var(--coral)] via-[var(--violet)] to-[var(--sky)] bg-clip-text text-transparent filter drop-shadow-md">
              Opportunities.
            </em>
          </h2>

          <div className="grid md:grid-cols-3 gap-[1px] bg-[var(--br)] w-full relative z-[100]">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex flex-col justify-between p-8 md:p-10 bg-[var(--bg-c)] hover:bg-[var(--bg)] transition-colors cursor-pointer block">
              <div className="flex justify-between items-start mb-12">
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--muted)]">Email</div>
                <ArrowUpRight className="text-[var(--dim)] group-hover:text-[var(--coral)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
              </div>
              <div className="text-sm md:text-base font-medium text-[var(--text)] break-words">{PERSONAL_INFO.email}</div>
            </a>
            
            <a href={"https://github.com/UmaMaheswar2005"} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between p-8 md:p-10 bg-[var(--bg-c)] hover:bg-[var(--bg)] transition-colors cursor-pointer block">
              <div className="flex justify-between items-start mb-12">
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--muted)]">GitHub</div>
                <ArrowUpRight className="text-[var(--dim)] group-hover:text-[var(--violet)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
              </div>
              <div className="text-sm md:text-base font-medium text-[var(--text)]">UmaMaheswar2005</div>
            </a>

            <a href={"https://www.linkedin.com/in/uma-maheswar-v/"} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between p-8 md:p-10 bg-[var(--bg-c)] hover:bg-[var(--bg)] transition-colors cursor-pointer block">
              <div className="flex justify-between items-start mb-12">
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--muted)]">LinkedIn</div>
                <ArrowUpRight className="text-[var(--dim)] group-hover:text-[var(--sky)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
              </div>
              <div className="text-sm md:text-base font-medium text-[var(--text)]">uma-maheswar-reddy-v</div>
            </a>
          </div>
        </div>
      </section>

      {/* Removed the top border to keep it seamless */}
      <footer className="py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[var(--muted)] tracking-[0.08em] uppercase bg-[var(--bg)] relative z-[100]">
        <span>© 2026 <em className="not-italic text-[var(--amber)]">{PERSONAL_INFO.name}</em></span>
        <span>Engineered for performance and scale.</span>
      </footer>
    </>
  );
}