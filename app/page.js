import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <ContactSection />
    </div>
  );
}
