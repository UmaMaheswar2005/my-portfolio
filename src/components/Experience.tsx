import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="mb-20 text-center">
        {/* Using standard square bracket syntax for CSS variables in Tailwind */}
        <h2 className="text-4xl font-bold text-(--foreground) mb-4">Professional Path</h2>
        <p className="text-(--muted)">Industry training and specialized internships.</p>
      </div>

      <div className="space-y-16">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-(--border) hover:border-(--foreground) transition-colors pb-4">
            {/* Fixed the negative left position and variable syntax */}
            <div className="absolute -left-9px top-0 w-4 h-4 rounded-full bg-(--background) border-2 border-(--foreground)" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-2xl font-bold text-(--foreground)">{exp.role}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
              </div>
              <span className="text-sm font-mono px-3 py-1 bg-slate-100 dark:bg-zinc-900 border border-(--border) rounded-md text-(--muted)">
                {exp.duration}
              </span>
            </div>
            
            <p className="text-(--muted) leading-relaxed max-w-3xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}