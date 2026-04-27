import PageLoader from "@/components/PageLoader";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => (
  <PageLoader>
    <div
      className="pt-20 min-h-screen"
      style={{ background: "var(--gradient-soft)" }}
    >
      <ProjectsSection />
    </div>
  </PageLoader>
);

export default Projects;
