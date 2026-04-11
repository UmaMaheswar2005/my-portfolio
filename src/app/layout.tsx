import type { Metadata } from "next";
import { Syne, Cormorant_Garamond, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

// If you placed ThemeProvider in a different folder earlier, ensure this path is correct.
// Typically it is in src/components/providers.tsx
import { ThemeProvider } from "@/components/providers";
import Navbar from "@/components/Navbar";

const syne = Syne({ subsets: ["latin"], weight: ["800"], variable: "--font-syne" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600"], style: "italic", variable: "--font-serif" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Uma Maheswar Reddy V. | Software Engineer",
  description: "Portfolio of Uma Maheswar Reddy V.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${cormorant.variable} ${spaceMono.variable} ${inter.variable} font-inter antialiased bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}