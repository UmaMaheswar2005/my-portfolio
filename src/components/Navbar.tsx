"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PERSONAL_INFO, NAV_LINKS } from "@/data/portfolio";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-(--border) bg-(--background)/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Name updated to MAHI */}
        <div 
          className="font-bold text-xl tracking-tighter cursor-pointer text-(--foreground)" 
          onClick={() => router.push('/')}
        >
          MAHI
        </div>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-sm font-medium text-(--muted) hover:text-(--foreground) transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="#experience" 
                className="text-sm font-medium text-(--muted) hover:text-(--foreground) transition-colors"
              >
                Experience
              </Link>
            </li>
          </ul>
          
          <Link 
            href={PERSONAL_INFO.resume} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 border border-(--border) rounded-md hover:bg-(--foreground) hover:text-(--background) transition-all"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}