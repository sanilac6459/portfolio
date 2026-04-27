import PageLoader from "@/components/PageLoader";
import SkillsSection from "@/components/SkillsSection";

const Skills = () => (
  <PageLoader>
    <div
      className="pt-20 min-h-screen"
      style={{ background: "var(--gradient-soft)" }}
    >
      <SkillsSection />
    </div>
  </PageLoader>
);

export default Skills;
