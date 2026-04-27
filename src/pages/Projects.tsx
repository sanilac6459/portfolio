import PageLoader from "@/components/PageLoader";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => (
  <PageLoader>
    <div className="pt-20 min-h-screen bg-portfolio-mauve/40">
      <ProjectsSection />
    </div>
  </PageLoader>
);

export default Projects;
