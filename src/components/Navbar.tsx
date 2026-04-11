"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full z-[100] bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        
        <Link href="/" className="font-syne text-2xl font-black tracking-tighter hover:text-primary transition-colors">
          &lt;UmaMaheswar /&gt;
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-6 font-mono text-sm uppercase tracking-widest font-bold">
            {["Expertise", "Projects", "Experience", "Contact"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
          
          {/* THE THEME TOGGLE BUTTON */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
            className="p-3 rounded-full bg-foreground/5 hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center text-foreground"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </div>
    </nav>
  );
}