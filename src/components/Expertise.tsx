"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { EXPERTISE, PROJECTS } from "@/data/portfolio";
import { BrainCircuit, Code, Cpu, AudioWaveform, Network, Database } from "lucide-react";

const ICON_MAP: Record<string, any> = { BrainCircuit, Code, Cpu };

// Intelligent Icon Renderer
const SkillIcon = ({ skill, theme }: { skill: string; theme: string | undefined }) => {
  const isDark = theme === "dark";
  const simpleIconColor = isDark ? "white" : "black"; 

  // 1. Specific SVG Icons for tools that lack official brand logos
  if (skill === "Librosa") return <AudioWaveform size={20} className="text-[var(--text)]" />;
  if (skill === "LSTM-CNN") return <Network size={20} className="text-[var(--text)]" />;
  if (skill === "Machine Learning") return <BrainCircuit size={20} className="text-[var(--text)]" />;
  if (skill === "Database Design") return <Database size={20} className="text-[var(--text)]" />;
  
  // Map generic "Cloud" terms directly to the official AWS logo
  if (skill.includes("Cloud Deployment") || skill.includes("Cloud Integration") || skill === "AWS") {
    return <img src={`https://skillicons.dev/icons?i=aws&theme=${isDark ? 'dark' : 'light'}`} className="w-5 h-5 object-contain" alt="AWS" />;
  }

  // 2. SimpleIcons: Native white/black colored SVGs (Best for single-color logos)
  const simpleMap: Record<string, string> = {
    "Pandas": "pandas",
    "Plotly": "plotly",
    "Qiskit": "qiskit",
    "Quantum Circuits": "qiskit",
    "SAP OData": "sap",
    "SAP OData API": "sap",
    "Oracle SQL": "oracle",
    "YOLOv8": "yolo"
  };

  if (simpleMap[skill]) {
    return <img src={`https://cdn.simpleicons.org/${simpleMap[skill]}/${simpleIconColor}`} className="w-5 h-5 object-contain" alt={skill} />;
  }

  // 3. SkillIcons: Handles its own theme automatically (Best for fully colored logos)
  const skillIconsMap: Record<string, string> = {
    "React.js": "react", "Next.js": "nextjs", "Spring Boot": "spring", 
    "TypeScript": "ts", "C++": "cpp", "Python": "python", "Java": "java",
    "Go": "go", "Rust": "rust", "TensorFlow": "tensorflow", "OpenCV": "opencv", 
    "FastAPI": "fastapi", "MySQL": "mysql", "Flask": "flask",
    "IoT": "arduino"
  };

  const slug = skillIconsMap[skill] || skill.toLowerCase().replace(/[^a-z0-9]/g, '');
  return <img src={`https://skillicons.dev/icons?i=${slug}&theme=${isDark ? 'dark' : 'light'}`} className="w-5 h-5 object-contain" alt={skill} onError={(e) => (e.currentTarget.style.display = 'none')} />;
};

export default function Expertise() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const allSkills = Array.from(new Set([
    ...EXPERTISE.flatMap(e => e.skills), 
    ...PROJECTS.flatMap(p => p.tech)
  ]));
  
  const mid = Math.ceil(allSkills.length / 2);
  const ROW1 = allSkills.slice(0, mid);
  const ROW2 = allSkills.slice(mid);

  if (!mounted) return null;

  return (
    <section id="expertise">
      <div className="py-20 px-6 md:px-12">
        <h2 className="font-['Unbounded'] font-black text-4xl md:text-6xl uppercase mb-16 text-[var(--text)]">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--br)] border border-[var(--br)]">
          {EXPERTISE.map((exp, i) => {
            const Icon = ICON_MAP[exp.icon] || Code;
            return (
              <div key={i} className="bg-[var(--bg-c)] p-10 min-h-[300px] flex flex-col group hover:bg-[var(--bg-s)] transition-colors">
                <Icon className="mb-8 text-[var(--muted)] group-hover:text-[var(--coral)] transition-colors" size={32} />
                <h3 className="font-['Unbounded'] font-bold text-lg uppercase mb-4 text-[var(--text)]">{exp.area}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-8 flex-grow">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map(s => (
                    <span key={s} className="px-2 py-0.5 bg-[var(--bg)] border border-[var(--brh)] rounded text-[9px] font-mono text-[var(--muted)] uppercase">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mq-zone border-t border-[var(--br)]">
        <div className="mq-row">
          <div className="mq-track mq-fwd">
            {[...ROW1, ...ROW1].map((s, i) => (
              <div className="mq-chip" key={i}>
                <SkillIcon skill={s} theme={theme} />
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="mq-row border-t border-[var(--br)]">
          <div className="mq-track mq-rev">
            {[...ROW2, ...ROW2].map((s, i) => (
              <div className="mq-chip" key={i}>
                <SkillIcon skill={s} theme={theme} />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}