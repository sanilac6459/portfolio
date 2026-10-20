import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "@/components/PageLoader";
import HomeSection from "@/components/HomeSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Sections = () => {
  const location = useLocation();

  // Fade-up reveal: anything with data-reveal slides in when it enters the screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const watch = () =>
      document
        .querySelectorAll("[data-reveal]:not(.revealed)")
        .forEach((el) => io.observe(el));

    watch();

    // Catch new elements too (e.g. "View More" projects).
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  // Old links like /projects or /#projects still land on the right section.
  useEffect(() => {
    const id = location.hash.slice(1) || location.pathname.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [location.pathname, location.hash]);

  return (
    <>
      <HomeSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

const Home = () => (
  <PageLoader>
    <Sections />
  </PageLoader>
);

export default Home;
