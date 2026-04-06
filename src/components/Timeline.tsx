import { Card } from "@/components/ui/Card";

export default function Timeline() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Industry Experience</h2>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to before:from-transparent before:via-blue-500/50 before:to-transparent">
        
        {/* Timeline Item (Placeholders for your data) */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/50 bg-black text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <div className="w-2 h-2 rounded-full bg-current" />
          </div>
          
          <Card className="w-[calc(100%-4rem)] md:w-[45%] p-6">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-blue-400">Current Role</div>
              <time className="font-mono text-xs text-slate-500">2026 - Present</time>
            </div>
            <div className="text-slate-400 text-sm mb-2">Company Name</div>
            <p className="text-slate-500 text-xs">High-level description of your contributions and the tech stack used.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}