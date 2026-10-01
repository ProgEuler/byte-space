import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
      </main>
    </>
  );
}
