"use client";
import { EXPERTISE, PROJECTS } from "@/data/portfolio";
import { SquareTerminal, Code, BrainCircuit, Cpu } from "lucide-react";

const ICON_MAP: Record<string, any> = { BrainCircuit, Code, Cpu };

const getSkillIcon = (skill: string) => {
  const map: Record<string, string> = {
    "React.js": "react", "Next.js": "nextjs", "Spring Boot": "spring", 
    "TypeScript": "ts", "C++": "cpp", "Python": "python", "Java": "java",
    "Go": "go", "Rust": "rust", "TensorFlow": "tensorflow", "OpenCV": "opencv", 
    "FastAPI": "fastapi", "AWS": "aws", "MySQL": "mysql", "Flask": "flask",
    "Pandas": "pandas", "IoT": "arduino",
    "YOLOv8": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/yolo.svg",
    "Librosa": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/librosa.svg",
    "Qiskit": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/qiskit.svg",
    "Plotly": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/plotly.svg",
    "LSTM-CNN": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google-lens.svg",
    "SAP OData API": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/sap.svg",
    "Oracle SQL": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/oracle.svg",
    "Quantum Circuits": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/qiskit.svg"
  };

  const iconSrc = map[skill];
  if (!iconSrc) return `https://skillicons.dev/icons?i=${skill.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
  return iconSrc.startsWith('http') ? iconSrc : `https://skillicons.dev/icons?i=${iconSrc}`;
};

const allSkills = Array.from(new Set([...EXPERTISE.flatMap(e => e.skills), ...PROJECTS.flatMap(p => p.tech)]));
const mid = Math.ceil(allSkills.length / 2);
const ROW1 = allSkills.slice(0, mid);
const ROW2 = allSkills.slice(mid);

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="py-20 px-6 md:px-12">
        <h2 className="font-['Unbounded'] font-black text-4xl md:text-6xl uppercase mb-16">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--br)] border border-[var(--br)]">
          {EXPERTISE.map((exp, i) => {
            const Icon = ICON_MAP[exp.icon] || Code;
            return (
              <div key={i} className="bg-[var(--bg-c)] p-10 min-h-[300px] flex flex-col group hover:bg-[var(--bg-s)] transition-colors">
                <Icon className="mb-8 text-[var(--muted)] group-hover:text-[var(--coral)] transition-colors" size={32} />
                <h3 className="font-['Unbounded'] font-bold text-lg uppercase mb-4">{exp.area}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-8 flex-grow">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map(s => <span key={s} className="px-2 py-0.5 bg-[var(--bg)] border border-[var(--brh)] rounded text-[9px] font-mono text-[var(--muted)] uppercase">{s}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mq-zone border-t border-[var(--br)]">
        <div className="mq-row">
          <div className="mq-track mq-fwd">
            {[...ROW1, ...ROW1].map((s, i) => {
              const src = getSkillIcon(s);
              return (
                <div className="mq-chip" key={i}>
                  <img src={src} className="w-5 h-5 object-contain" alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  {s}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mq-row border-t border-[var(--br)]">
          <div className="mq-track mq-rev">
            {[...ROW2, ...ROW2].map((s, i) => {
              const src = getSkillIcon(s);
              return (
                <div className="mq-chip" key={i}>
                  <img src={src} className="w-5 h-5 object-contain" alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  {s}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}