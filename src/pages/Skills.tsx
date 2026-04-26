import PageLoader from "@/components/PageLoader";
import SkillsSection from "@/components/SkillsSection";

const Skills = () => (
  <PageLoader>
    <div className="pt-20" style={{ background: "var(--gradient-soft)" }}>
      <SkillsSection />
    </div>
  </PageLoader>
);

export default Skills;
