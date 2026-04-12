"use client";
import { useState, useEffect } from "react";
import { PERSONAL_INFO, ROLES } from "@/data/portfolio";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIdx((prev) => (prev + 1) % ROLES.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 border-b border-[var(--br)] overflow-hidden">
      {/* Blobs from singlepage.tsx */}
      <div className="blob w-[700px] h-[500px] top-[-120px] left-[-150px] bg-[radial-gradient(ellipse,rgba(255,58,92,0.15)_0%,transparent_65%)]" />
      <div className="blob w-[600px] h-[700px] top-[5%] right-[-120px] bg-[radial-gradient(ellipse,rgba(191,126,255,0.12)_0%,transparent_65%)]" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--brh)] bg-[var(--bg-s)] font-mono text-[11px] tracking-widest text-[var(--muted)] mb-10">
          <span className="w-2 h-2 rounded-full bg-[var(--mint)] animate-pulse" />
          {PERSONAL_INFO.college}
        </div>

        <h1 className="font-['Unbounded'] font-black text-5xl md:text-[8vw] leading-[0.9] uppercase tracking-tighter">
          Uma <br />
          <span className="grad-text">Maheswar <br /> Reddy V.</span>
        </h1>

        <div className="mt-10 flex items-center gap-4">
          <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest">I BUILD AS A →</span>
          <span className={`text-2xl font-bold transition-all duration-300 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {ROLES[roleIdx]}
          </span>
        </div>

        <div className="flex gap-4 mt-12">
          <a href="#contact" className="px-10 py-4 bg-[var(--text)] text-[var(--bg)] rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Let's Connect
          </a>
          <a href={PERSONAL_INFO.resume} target="_blank" className="px-10 py-4 border border-[var(--brh)] rounded-full font-bold text-sm hover:border-[var(--coral)] hover:text-[var(--coral)] transition-all">
            View Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}