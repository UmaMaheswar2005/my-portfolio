import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import ProjectSection from '@/components/ProjectSection';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Who you are & your big goals */}
      <Hero />
      
      {/* 2. Your technical niches (Quantum, AI, Web) */}
      <Expertise />
      
      {/* 3. Proof of your specialized building skills */}
      <ProjectSection />
      
      {/* 4. Professional internships and industry training */}
      <Experience />
      
      {/* 5. Contact and social links */}
      <Footer />
    </main>
  );
}