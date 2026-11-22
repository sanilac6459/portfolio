import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Sparkles from "@/components/Sparkles";

const Home = () => {
  const location = useLocation();

  // Fade-up reveal: anything with data-reveal slides in once when it enters the screen.
  // Items that come on screen together appear one after another (like Ishra's site).
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top ||
              a.boundingClientRect.left - b.boundingClientRect.left,
          );
        entering.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          if (!el.style.getPropertyValue("--reveal-delay"))
            el.style.setProperty("--reveal-delay", `${Math.min(i, 5) * 90}ms`);
          el.classList.add("revealed");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const watch = () =>
      document
        .querySelectorAll("[data-reveal]:not(.revealed)")
        .forEach((el) => io.observe(el));

    // Scan once now, and once more after images and fonts settle.
    watch();
    const later = window.setTimeout(watch, 1200);

    return () => {
      window.clearTimeout(later);
      io.disconnect();
    };
  }, []);

  // Old links like /projects or /#projects still land on the right section.
  useEffect(() => {
    const id = location.hash.slice(1) || location.pathname.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [location.pathname, location.hash]);

  return (
    <>
      {/* Faint rose sparkles drifting behind every section */}
      <Sparkles />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
