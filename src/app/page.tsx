import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Expertise />
      <ProjectSection />
      <Experience />
      <Footer />
    </main>
  );
}