import { EXPERTISE } from "@/data/portfolio";
import { BrainCircuit, Code, Cpu, type LucideIcon } from "lucide-react";

const IconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Code,
  Cpu,
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 px-6 max-w-7xl mx-auto border-t border-slate-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Technical Stack
          </h2>
          <p className="text-slate-400 text-lg">
            Cross-functional proficiency in modern software architecture.
          </p>
        </div>
        <div className="text-sm font-mono text-blue-500">Expertise_v2.0</div>
      </div>

      <div className="grid md:grid-cols-3 gap-1px bg-slate-900 border border-slate-900">
        {EXPERTISE.map((item) => {
          const IconComponent = IconMap[item.icon as keyof typeof IconMap] || Cpu;

          return (
            <div 
              key={item.area} 
              className="group p-10 bg-[#020617] hover:bg-[#030a1f] transition-colors relative"
            >
              <div className="mb-8 p-3 w-fit rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <IconComponent size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                {item.area}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-8 text-sm h-12">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-2 py-1 text-[10px] font-bold font-mono tracking-tighter bg-slate-900 text-slate-500 border border-slate-800 rounded group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}