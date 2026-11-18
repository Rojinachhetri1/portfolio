import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FeaturedProjectsSection } from "@/components/featured-projects-section";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-line px-6 py-7 text-center text-sm text-muted sm:px-10">
        <p>Designed and built by Rojina Chhetri. © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
