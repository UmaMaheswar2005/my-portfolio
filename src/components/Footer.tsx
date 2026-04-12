"use client";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  return (
    <>
      <section className="relative py-32 px-6 md:px-12 bg-(--bg-s) overflow-hidden transition-colors" id="contact">
        {/* Ambient Contact Mesh */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{
            background: `
            radial-gradient(ellipse 900px 600px at -5% 50%, rgba(255,58,92,0.1) 0%, transparent 60%),
            radial-gradient(ellipse 700px 700px at 105% 20%, rgba(191,126,255,0.08) 0%, transparent 60%)
            `
        }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-(--muted)">
              03 — Get in Touch
            </span>
            <div className="flex-1 h-px bg-(--br) max-w-80px" />
          </div>
          
          <h2 className="font-['Unbounded'] font-black text-5xl md:text-[7rem] leading-[0.9] tracking-tighter uppercase text-(--text) mb-16">
            Open for<br />
            <em className="not-italic bg-gradient-to-r from-[var(--coral)] via-[var(--violet)] to-[var(--sky)] bg-clip-text text-transparent filter drop-shadow-md">
              Opportunities.
            </em>
          </h2>

          <div className="grid md:grid-cols-2 gap-[1px] bg-[var(--br)] max-w-3xl">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center justify-between p-8 bg-[var(--bg-c)] hover:bg-[var(--bg)] transition-colors">
              <div>
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--muted)] mb-2">Email</div>
                <div className="text-sm font-medium text-[var(--text)]">{PERSONAL_INFO.email}</div>
              </div>
              <span className="text-2xl text-[var(--dim)] group-hover:text-[var(--coral)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">↗</span>
            </a>
            
            <a href={(PERSONAL_INFO as any).github ?? "#"} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-8 bg-[var(--bg-c)] hover:bg-[var(--bg)] transition-colors">
              <div>
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--muted)] mb-2">GitHub</div>
                <div className="text-sm font-medium text-[var(--text)]">GitHub Profile</div>
              </div>
              <span className="text-2xl text-[var(--dim)] group-hover:text-[var(--violet)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">↗</span>
            </a>

            <a href={(PERSONAL_INFO as any).linkedin ?? "#"} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-8 bg-[var(--bg-c)] hover:bg-[var(--bg)] transition-colors">
              <div>
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--muted)] mb-2">LinkedIn</div>
                <div className="text-sm font-medium text-[var(--text)]">LinkedIn Profile</div>
              </div>
              <span className="text-2xl text-[var(--dim)] group-hover:text-[var(--sky)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[var(--muted)] tracking-[0.08em] border-t border-[var(--br)] uppercase">
        <span>© 2026 <em className="not-italic text-[var(--amber)]">{PERSONAL_INFO.name}</em></span>
        <span>Engineered for performance and scale.</span>
      </footer>
    </>
  );
}