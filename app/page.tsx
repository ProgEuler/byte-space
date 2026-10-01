import Navbar from "@/components/layout/Navbar";
import CategoryPills from "@/components/sections/CategoryPills";
import Hero from "@/components/sections/Hero";
import LearningPathsSection from "@/components/sections/LearningPaths";
import LogoStrip from "@/components/sections/LogoStrip";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <CategoryPills />
        <LearningPathsSection />
      </main>
    </>
  );
}
