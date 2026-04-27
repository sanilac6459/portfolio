import PageLoader from "@/components/PageLoader";
import ExperienceSection from "@/components/ExperienceSection";

const Experience = () => (
  <PageLoader>
    <div className="pt-20 min-h-screen bg-portfolio-mauve/15">
      <ExperienceSection />
    </div>
  </PageLoader>
);

export default Experience;
