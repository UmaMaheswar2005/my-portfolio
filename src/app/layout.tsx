import { Syne, Cormorant_Garamond, Space_Mono, Inter } from "next/font/google";
import "./globals.css"; // CRITICAL: Ensure this path is correct
import Navbar from "@/components/Navbar";

const syne = Syne({ subsets: ["latin"], weight: ["800"], variable: "--font-syne" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600"], style: "italic", variable: "--font-serif" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${cormorant.variable} ${spaceMono.variable} ${inter.variable} font-inter bg-[#050505] text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}