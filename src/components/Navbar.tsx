"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-100 bg-zinc-900/40 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full">
      <div className="flex items-center gap-10">
        <Link href="/" className="font-syne text-sm font-bold tracking-tighter hover:text-emerald-500 transition-colors">MAHI.</Link>
        <div className="flex gap-6">
          {["Expertise", "Projects", "Experience"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-1px bg-emerald-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}