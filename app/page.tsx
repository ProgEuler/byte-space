import Navbar from "@/components/layout/Navbar";
import CategoryPills from "@/components/sections/CategoryPills";
import CreateCourses from "@/components/sections/CreateCourses";
import GrowthStats from "@/components/sections/GrowthStats";
import Hero from "@/components/sections/Hero";
import LearningPathsSection from "@/components/sections/LearningPaths";
import LogoStrip from "@/components/sections/LogoStrip";
import CreatorCTA from "@/components/sections/CreatorCTA";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <CategoryPills />
        <LearningPathsSection />
        <GrowthStats />
        <CreateCourses />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
