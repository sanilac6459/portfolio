import PageLoader from "@/components/PageLoader";
import AboutSection from "@/components/AboutSection";

const About = () => (
  <PageLoader>
    <div
      className="pt-20 min-h-screen"
      style={{ background: "var(--gradient-soft)" }}
    >
      <AboutSection />
    </div>
  </PageLoader>
);

export default About;
