import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  presentationUrl?: string;
}

const techIcons: Record<string, string> = {
  HTML: "/images/html5.png",
  CSS: "/images/css3.png",
  JavaScript: "/images/js.png",
  TypeScript: "/images/typescript.png",
  Python: "/images/python.png",
  Java: "/images/java.png",
  SQL: "/images/sql.png",
  "C++": "/images/c++.png",
  Swift: "/images/swift.png",
  "C#": "/images/csharp.png",
  Git: "/images/git.png",
  GitHub: "/images/github.png",
  npm: "/images/npm.png",
  Docker: "/images/docker.png",
  "VS Code": "/images/vscode.png",
  Postman: "/images/postman.png",
  Figma: "/images/figma.png",
  Jupyter: "/images/jupyter.png",
  "Google Colab": "/images/colab.png",
  Xcode: "/images/xcode.png",
  Vercel: "/images/vercel.svg",
  Flask: "/images/flask.png",
  React: "/images/react.png",
  "Node.js": "/images/nodejs.png",
  "Express.js": "/images/express.png",
  Angular: "/images/angular.png",
  "Tailwind CSS": "/images/tailwind-css.png",
  "OpenAI API": "/images/openai.png",
  "Gemini API": "/images/gemini.png",
  LangChain: "/images/langchain.png",
  OpenRouter: "/images/openrouter.webp",
  MySQL: "/images/mysql.png",
  Firebase: "/images/firebase.png",
  Supabase: "/images/supabase.png",
  ChromaDB: "/images/chromadb.png",
  "REST APIs": "/images/restAPI.png",
  "Discord.py": "/images/discord-py.png",
  Unity: "/images/unity.png",
  "p5.js": "/images/p5js.png",
  "OpenWeather API": "/images/openweather.png",
  Prisma: "/images/prisma.svg",
};

const TechTag = ({ tech }: { tech: string }) => {
  const [imgFailed, setImgFailed] = React.useState(false);
  const iconSrc = techIcons[tech];

  return (
    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-portfolio-cream text-portfolio-navy text-xs rounded-full border border-portfolio-mauve/30">
      {iconSrc && !imgFailed && (
        <img
          src={iconSrc}
          alt={tech}
          className="w-3.5 h-3.5 object-contain flex-shrink-0"
          onError={() => setImgFailed(true)}
        />
      )}
      {tech}
    </span>
  );
};

const projects: ProjectProps[] = [
  {
    title: "HunterConnect",
    description:
      "An app for Hunter College students to discover and join campus clubs, share announcements, and stay connected with their college community.",
    technologies: ["React", "Node.js", "Express.js", "Prisma", "Supabase"],
    image: "/images/hunter-connect.png",
    demoUrl: "https://hunter-connect-psi.vercel.app/",
    repoUrl: "https://github.com/sanilac6459/hunter-connect",
  },
  {
    title: "Phil — Job Applier Agent",
    description:
      "An AI agent that streamlines the job application process with human oversight.",
    technologies: ["LangChain", "Gemini API", "ChromaDB", "Jupyter"],
    image: "/images/phil-agent.webp",
    demoUrl:
      "https://drive.google.com/file/d/1NNQAlaI6GqRZ3moRA5YVlMKBbLKKBzz-/view?usp=sharing",
    repoUrl: "https://github.com/sanilac6459/job-agent",
  },
  // {
  //   title: "AuraTracks",
  //   description:
  //     "A new way to soundtrack memories, discover music, and bring your photos to life with sound!",
  //   technologies: ["React", "Gemini API", "Sportify API", "FastAPI"],
  //   image: "/images/project-aura.png",
  //   demoUrl:
  //     "https://devpost.com/software/project-aura-y49k2j?_gl=1*6l35lf*_gcl_au*MjAyMjU4Mzk1OC4xNzU1OTY3ODQ1*_ga*MjE0MjA2MDkwNS4xNzU1OTY3ODQ1*_ga_0YHJK3Y10M*czE3NTYwNjY4NDckbzYkZzEkdDE3NTYwNjY5MjQkajQ4JGwwJGgw",
  //   repoUrl: "https://github.com/maida5/ctp-hacks-2025",
  // },
  {
    title: "StyleMe",
    description:
      "A virtual wardrobe where users can store, organize, and generate personalized outfit combinations from their clothing inventory.",
    technologies: ["Angular", "Node.js", "Express.js", "REST APIs", "Firebase"],
    image: "/images/styleme.png",
    demoUrl:
      "https://drive.google.com/file/d/1Hox0GU5vjn6Zmxep-Tz5oX5rOxcfNtbc/view?usp=sharing",
    repoUrl: "https://github.com/weijiej2964/Fashion-Project",
  },
  {
    title: "Python Code Evaluator",
    description:
      "An evaluator that takes in user's Python code to determine whether it's Pythonic or not and generates Pythonic examples and output comparisons. This enhances code quality and optimizes Python codebases.",
    technologies: ["Python", "OpenAI API"],
    image: "/images/python-computer.png",
    repoUrl: "https://github.com/sanilac6459/pythonic-code-evaluator",
  },
  {
    title: "Winter Wordleland",
    description:
      "A winter-themed of The NY Times' Wordle Game designed to help users get into the holiday spirit!",
    technologies: ["C++", "Ncurses Library", "Hunspell Dictionary", "Docker"],
    image: "/images/wordle.png",
    demoUrl:
      "https://drive.google.com/file/d/1nA2Tjaf9ZgVG9kCAeBXm-5qcnNyu-R-J/view?usp=sharing",
    repoUrl: "https://github.com/TheSimmer101/wordle",
  },
  {
    title: "GIMMIE CANDY!!!",
    description:
      "A unique trick-or-treating game where enemies steal trick or treater's candies. A great way to get into the Halloween spirit!",
    technologies: ["C#", "Unity"],
    image: "/images/gimme-candy.png",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/sanilac6459",
  },
  // {
  //   title: "FinTech Focus Weather App",
  //   description:
  //     "A weather app that delivers real-time forecasts worldwide, showing current conditions and a three-day outlook based on the user's location.",
  //   technologies: ["Python", "Flask", "OpenWeather API"],
  //   image: "/images/weather.png",
  //   demoUrl:
  //     "https://drive.google.com/file/d/1WdWFLjX1RC3wM0LR9Jp2YswwVAwo5boe/view?usp=sharing",
  //   // repoUrl: "https://replit.com/@MashrafiAlam/FTF-Weather-App-2",
  // },
  {
    title: "Discord Music Bot",
    description:
      "A Discord music bot that lets users play and control music in voice channels, while also sending automated messages based on user activity within the server.",
    technologies: ["Python", "Discord.py"],
    image: "/images/discord.png",
    demoUrl:
      "https://drive.google.com/file/d/17X4uWqc8Sk0jsoS9bcPMiy_kUGpsuZfY/view?usp=sharing",
    presentationUrl:
      "https://photos.google.com/share/AF1QipM98JBT3MIDm-JN2YyQVtM2agU3yMzoaU3lzIvR0l8Ls-mK65OYZDh51NeiH8sjJw/photo/AF1QipOEoqB5UZ7_-FzkikLJk4MvfqfPsYh6LGTN9ijG?key=aWtId3V5Z1JIZUdVMnloMzFXREhnWmZBVmJLeFNn",
    repoUrl: "https://github.com/vickyc5/ditto-discord-bot",
  },
  {
    title: "Keysanity Typing Game",
    description:
      "A game for users to enhance their typing skills by generating random words and tracking their score, word per minute (WPM), typed input, and a timer. Offers a fun way to engage in friendly competition to beat the world record in WPM!",
    technologies: ["JavaScript", "p5.js"],
    image: "/images/sep11-fp.png",
    demoUrl: "https://sanilac6459.github.io/sep11-freedom-project/intro/",
    repoUrl: "https://github.com/sanilac6459/sep11-freedom-project",
  },
];

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  demoUrl,
  repoUrl,
  presentationUrl,
  index,
}: ProjectProps & { index: number }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden border border-portfolio-mauve/20 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    <div className="relative h-48 overflow-hidden">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-portfolio-pink/40 via-portfolio-mauve/40 to-portfolio-purple/40 flex items-center justify-center">
          <span className="font-serif-display italic text-7xl text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>

    <div className="p-6">
      <h3 className="font-serif-display text-2xl mb-2 text-portfolio-navy">
        {title}
      </h3>
      <p className="text-portfolio-navy mb-4 text-sm leading-relaxed font-light">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {technologies.map((tech, i) => (
          <TechTag key={i} tech={tech} />
        ))}
      </div>

      <div className="flex gap-3 pt-4 border-t flex-wrap">
        {demoUrl && (
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-portfolio-navy hover:bg-portfolio-pink/20"
          >
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} className="mr-1.5" /> Preview
            </a>
          </Button>
        )}
        {presentationUrl && (
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-portfolio-navy hover:bg-portfolio-pink/20"
          >
            <a href={presentationUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} className="mr-1.5" /> Live Presentation
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
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-portfolio-cream/40 blur-3xl"></div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="section-eyebrow">— What I've Built —</p>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            className="border-portfolio-navy/40 text-portfolio-navy hover:bg-portfolio-navy/5 px-8 py-6 rounded-full"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View More"}
          </Button>
          {/* <Button
            className="bg-portfolio-navy hover:bg-portfolio-navy/90 text-white px-8 py-6 rounded-full shadow-lg"
            asChild
          >
            <a
              href="https://github.com/sanilac6459"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="mr-2" /> Visit My GitHub
            </a>
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
