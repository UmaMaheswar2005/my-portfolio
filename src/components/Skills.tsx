import { Card } from "@/components/ui/Card";
import { Atom, Brain, Code2, Layers } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Quantum & Physics",
    icon: <Atom className="text-purple-400" />,
    skills: ["Qiskit", "Quantum Algorithms", "Quantum Gates", "Physics Fundamentals"],
    note: "89% Assessment Score in Wiser Program"
  },
  {
    title: "Artificial Intelligence",
    icon: <Brain className="text-blue-400" />,
    skills: ["Python", "TensorFlow", "LSTM-CNN", "OpenCV", "Data Visualization"],
    note: "Focused on Environmental Forecasting"
  },
  {
    title: "Web & Cloud",
    icon: <Code2 className="text-emerald-400" />,
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "SAP Integration"],
    note: "Building Scalable Architectures"
  },
  {
    title: "Core Engineering",
    icon: <Layers className="text-slate-400" />,
    skills: ["SQL", "Git", "C++", "Data Structures"],
    note: "GATE 2026 Preparation in progress"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
        <p className="text-slate-400">Bridging classical computing with future-ready technologies.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat) => (
          <Card key={cat.title} className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-2xl">{cat.icon}</div>
              <h3 className="text-xl font-bold">{cat.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8 grow">
              {cat.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 text-xs font-mono text-slate-500 uppercase tracking-widest">
              // {cat.note}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}