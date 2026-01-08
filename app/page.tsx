import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProcessSection />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
      <ClosingSection />
    </main>
  );
}

