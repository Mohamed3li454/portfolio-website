import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProcessSection />
      <ProjectsSection />
    </main>
  );
}

