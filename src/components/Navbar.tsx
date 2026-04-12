"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="nav h-16 px-6 md:px-12 fixed top-0 w-full z-50 flex items-center justify-between bg-[var(--bg)]/70 backdrop-blur-xl border-b border-[var(--br)] transition-colors">
      <div className="w-12 h-12 rounded-full bg-[var(--amber)] flex items-center justify-center font-['Unbounded'] font-black text-xs text-black cursor-pointer hover:rotate-12 transition-transform">
        MAHI
      </div>

      <div className="flex items-center gap-10">
        <ul className="hidden md:flex gap-8 font-medium text-[13px] text-[var(--muted)] tracking-wider">
          <li><Link href="#projects" className="hover:text-[var(--text)] transition-colors">Works</Link></li>
          <li><Link href="#history" className="hover:text-[var(--text)] transition-colors">History</Link></li>
          <li><Link href="#contact" className="hover:text-[var(--text)] transition-colors">Contact</Link></li>
        </ul>

        <button 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-16 h-8 rounded-full bg-[var(--bg-c)] border border-[var(--brh)] relative flex items-center px-1"
        >
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${theme === 'dark' ? 'translate-x-0 bg-[var(--amber)]' : 'translate-x-8 bg-[var(--sky)]'}`}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </div>
        </button>
      </div>
    </nav>
  );
}