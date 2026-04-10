"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const getIcon = (name: string) => `https://skillicons.dev/icons?i=${name}`;

const IconMap: Record<string, string> = {
  "Python": getIcon("python"),
  "Java": getIcon("java"), 
  "React.js": getIcon("react"),
  "Next.js": getIcon("nextjs"),
  "TypeScript": getIcon("ts"),
  "C++": getIcon("cpp"),
  "Go": getIcon("go"),
  "Rust": getIcon("rust"),
  "Spring Boot": getIcon("spring"), // FIXED: Switched back to the green leaf symbol
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
  "Next.js": "Architecting high-performance, SEO-optimized portfolio and music-engine interfaces.",
  "YOLOv8": "Real-time object detection and spatial analysis in computer vision projects.",
  "Pandas": "Complex data pipelines for water quality forecasting and statistical analysis.",
  "Qiskit": "Core framework for developing Quantum OTP generators and exploring quantum fundamentals.",
  "Framer Motion": "High-end, fluid user interactions and immersive UI experiences.",
  "Go": "Microservice architecture for the 'Vibe to Viral' music engine for high concurrency.",
  "Rust": "Memory-safe, high-performance back-end modules in the viral engine project.",
  "C++": "Applied in low-level system integrations and performance-critical computing.",
  "SAP OData API": "Integrated enterprise-grade data services for seamless cloud-to-application communication.",
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
    <section id="expertise" className="py-24 px-6 md:px-10 max-w-7xl mx-auto flex items-center relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-emerald-500" />
            <span className="text-emerald-500 font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Stack Details</span>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSkill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl font-bold uppercase italic leading-tight font-syne">
                {activeSkill.name}
              </h2>
              <p className="text-zinc-400 text-base max-w-sm leading-relaxed font-inter border-l border-emerald-500/30 pl-5">
                {activeSkill.detail}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="bg-[#050505] p-8 md:p-10 rounded-[3rem] border border-white/5 shadow-xl relative">
          <div className="grid grid-cols-4 md:grid-cols-5 gap-4 md:gap-6">
            {allSkills.map((skill) => {
              const iconUrl = IconMap[skill.name];
              const isActive = activeSkill.name === skill.name;
              
              // FIXED: Removed Spring Boot from this list so it keeps its green leaf color intact
              const isWhiteIcon = ["Pandas", "Framer Motion", "SAP OData API", "Plotly", "YOLOv8", "Qiskit"].includes(skill.name);

              return (
                <motion.button
                  key={skill.name}
                  onMouseEnter={() => setActiveSkill(skill)}
                  whileHover={{ scale: 1.1 }}
                  className={`group relative aspect-square rounded-2xl flex items-center justify-center transition-all duration-300 border
                    ${isActive 
                      ? 'bg-white border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]' 
                      : 'bg-zinc-900/40 border-white/5 hover:border-emerald-500/50'}
                  `}
                >
                  <img 
                    src={iconUrl} 
                    alt={skill.name} 
                    className={`w-8 h-8 object-contain transition-all duration-300 
                      ${isActive ? (isWhiteIcon ? 'brightness-0' : 'brightness-100') : 'brightness-100 opacity-50 group-hover:opacity-100'}
                      ${!isActive && isWhiteIcon ? 'invert' : ''} 
                    `}
                  />
                  {isActive && (
                    <motion.div layoutId="dot" className="absolute -bottom-2 w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}