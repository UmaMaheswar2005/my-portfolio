"use client"; 
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }} // Moves up slightly on hover
      whileTap={{ scale: 0.98 }}         // Shrinks slightly when clicked
      className={cn("glass cursor-pointer transition-shadow hover:shadow-blue-500/20 shadow-xl", className)}
    >
      {children}
    </motion.div>
  );
}