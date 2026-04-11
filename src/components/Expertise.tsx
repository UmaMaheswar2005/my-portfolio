"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const getIcon = (name: string) => `https://skillicons.dev/icons?i=${name}`;

// Note: Ensure your IconMap and TechnicalDetails remain the same as you had them.
const IconMap: Record<string, string> = {
  "Python": getIcon("python"),
  "Java": getIcon("java"), 
  "React.js": getIcon("react"),
  "Next.js": getIcon("nextjs"),
  "TypeScript": getIcon("ts"),
  "C++": getIcon("cpp"),
  "Go": getIcon("go"),
  "Rust": getIcon("rust"),
  "Spring Boot": getIcon("spring"), 
  "TensorFlow": getIcon("tensorflow"),
  "YOLOv8": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/yolo.svg",
  "OpenCV": getIcon("opencv"),
  "Pandas": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pandas.svg",
  "Plotly": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/plotly.svg",
  "Qiskit": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/qiskit.svg",
  "Framer Motion": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/framer.svg", 
  "FastAPI": getIcon("fastapi"),
  "AWS": getIcon("aws"),
  "SAP OData API": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/sap.svg",
  "MySQL": getIcon("mysql")
};

const TechnicalDetails: Record<string, string> = {
  "Python": "Primary language for developing Intelligent Water Quality Monitoring and Object Detection.",
  "Java": "Core backend language utilized for robust enterprise logic and civic system architectures.",
  "Spring Boot": "Framework used to build scalable, RESTful backends for full-stack applications.",
  "Next.js": "Architecting high-performance, SEO-optimized portfolio and interfaces.",
  "YOLOv8": "Real-time object detection and spatial analysis in computer vision projects.",
  "Pandas": "Complex data pipelines for water quality forecasting and statistical analysis.",
  "Qiskit": "Core framework for developing Quantum OTP generators and exploring quantum fundamentals.",
  "Framer Motion": "High-end, fluid user interactions and immersive UI experiences.",
  "Go": "Microservice architecture for music engines for high concurrency.",
  "Rust": "Memory-safe, high-performance back-end modules in viral engine projects.",
  "C++": "Applied in low-level system integrations and performance-critical computing.",
  "SAP OData API": "Integrated enterprise-grade data services for seamless cloud communication.",
  "AWS": "Managed cloud deployment and integration strategies for web development projects."
};

export default function Expertise() {
  const allSkills = useMemo(() => {
    const masterList = [
      "Python", "Java", "React.js", "Next.js", "TypeScript", "C++", "Go", "Rust", 
      "Spring Boot", "TensorFlow", "YOLOv8", "OpenCV", "Pandas", "Plotly",
      "Qiskit", "Framer Motion", "FastAPI", "AWS", "SAP OData API", "MySQL"
    ];

    return masterList.map(name => ({
      name,
      detail: TechnicalDetails[name] || "Advanced implementation within high-performance software architectures."
    }));
  }, []);

  const [activeSkill, setActiveSkill] = useState(allSkills[0]);

  return (
    <section id="expertise" className="py-32 px-6 md:px-10 max-w-7xl mx-auto border-t border-border/50">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Side: Typography & Detail */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase font-bold">Tech Stack</span>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSkill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-5xl sm:text-6xl font-black uppercase italic leading-tight font-syne text-foreground">
                {activeSkill.name}
              </h2>
              <p className="text-foreground/70 text-lg max-w-md leading-relaxed font-inter border-l-4 border-primary/20 pl-6 py-2">
                {activeSkill.detail}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Tactile Grid */}
        <div className="color-card p-8 md:p-12 rounded-[2rem] shadow-sm">
          <div className="grid grid-cols-4 md:grid-cols-5 gap-4 md:gap-6">
            {allSkills.map((skill) => {
              const iconUrl = IconMap[skill.name];
              const isActive = activeSkill.name === skill.name;
              // Monochrome icons need to invert in dark mode so they don't vanish
              const isMonochromeIcon = ["Next.js", "Pandas", "Framer Motion", "SAP OData API", "Plotly", "YOLOv8", "Qiskit", "Github"].includes(skill.name);

              return (
                <motion.button
                  key={skill.name}
                  onClick={() => setActiveSkill(skill)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative aspect-square rounded-xl flex items-center justify-center transition-all duration-300 border
                    ${isActive 
                      ? 'bg-primary/10 border-primary shadow-sm' 
                      : 'bg-background border-border hover:border-primary/50'}
                  `}
                >
                  <img 
                    src={iconUrl} 
                    alt={skill.name} 
                    className={`w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300 
                      ${isActive ? 'opacity-100 scale-110' : 'opacity-60 group-hover:opacity-100'}
                      ${isMonochromeIcon ? 'dark:invert' : ''} 
                    `}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}