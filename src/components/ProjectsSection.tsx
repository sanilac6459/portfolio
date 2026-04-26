import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Project Name 1",
    description:
      "A brief description of the project, what it does, and your role in developing it.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project1",
  },
  {
    title: "Project Name 2",
    description:
      "Another project description highlighting the key features and your contributions.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project2",
  },
  {
    title: "Project Name 3",
    description:
      "A description of a third project, mentioning the problem it solves and the approach you took.",
    technologies: ["Vue.js", "Express", "Firebase", "Tailwind CSS"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project3",
  },
];

const ProjectCard = ({
  title,
  description,
  technologies,
  demoUrl,
  repoUrl,
  index,
}: ProjectProps & { index: number }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden border border-portfolio-mauve/20 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    {/* Image area */}
    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-portfolio-pink/40 via-portfolio-mauve/40 to-portfolio-purple/40">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif-display italic text-7xl text-white/40">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12">
        <ArrowUpRight size={18} className="text-portfolio-navy" />
      </div>
    </div>

    <div className="p-6">
      <h3 className="font-serif-display italic text-2xl mb-2 text-portfolio-navy">
        {title}
      </h3>
      <p className="text-portfolio-navy/70 mb-4 text-sm leading-relaxed font-light">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="px-2.5 py-1 bg-portfolio-cream text-portfolio-navy/80 text-xs rounded-full border border-portfolio-mauve/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-4 border-t border-portfolio-mauve/20">
        {demoUrl && (
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-portfolio-navy hover:bg-portfolio-pink/20"
          >
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} className="mr-1.5" /> Demo
            </a>
          </Button>
        )}
        {repoUrl && (
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-portfolio-navy hover:bg-portfolio-pink/20"
          >
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github size={14} className="mr-1.5" /> Code
            </a>
          </Button>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-portfolio-cream/40 blur-3xl"></div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="section-eyebrow">— Selected Works —</p>
          <h2 className="section-title">Projects</h2>
          <p className="text-portfolio-navy/70 mt-6 max-w-2xl font-light">
            A curated selection of work where each challenge shaped my craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            className="bg-portfolio-navy hover:bg-portfolio-navy/90 text-white px-8 py-6 rounded-full shadow-lg"
            asChild
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="mr-2" /> Visit My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
