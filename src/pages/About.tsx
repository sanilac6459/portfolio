import PageLoader from "@/components/PageLoader";
import AboutSection from "@/components/AboutSection";

const About = () => (
  <PageLoader>
    <div className="pt-20 min-h-screen bg-portfolio-mauve/15">
      <AboutSection />
    </div>
  </PageLoader>
);

export default About;
