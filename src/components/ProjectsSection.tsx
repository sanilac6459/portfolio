import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";

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
    <span
      className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        color: "#FFE5EC",
        border: "1px solid rgba(255, 229, 236, 0.22)",
      }}
    >
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
  // {
  //   title: "CUNY Marketplace",
  //   description:
  //     "An app for Hunter College students to discover and join campus clubs, share announcements, and stay connected with their college community.",
  //   technologies: ["React", "Node.js", "Express.js", "Prisma", "Supabase"],
  //   image: "/images/",
  //   demoUrl: "https://github.com/farmiha/cuny-marketplace",
  // },

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

  /**
  {
    title: "AuraTracks",
    description:
      "A new way to soundtrack memories, discover music, and bring your photos to life with sound!",
    technologies: ["React", "Gemini API", "Spotify API", "FastAPI"],
    image: "/images/project-aura.png",
    demoUrl:
      "https://devpost.com/software/project-aura-y49k2j",
    repoUrl:
      "https://github.com/maida5/ctp-hacks-2025",
  },
  */

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

  /**
  {
    title: "FinTech Focus Weather App",
    description:
      "A weather app that delivers real-time forecasts worldwide, showing current conditions and a three-day outlook based on the user's location.",
    technologies: ["Python", "Flask", "OpenWeather API"],
    image: "/images/weather.png",
    demoUrl:
      "https://drive.google.com/file/d/1WdWFLjX1RC3wM0LR9Jp2YswwVAwo5boe/view?usp=sharing",
  },
  */

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

const SLIDE_MS = 7000; // how long each project shows before auto-advancing

const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const total = projects.length;
  const project = projects[index];

  const go = useCallback(
    (next: number) => setIndex((next + total) % total),
    [total],
  );

  // Auto-advance (paused on hover, off for reduced motion)
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || reduce) return;
    const timer = setTimeout(() => go(index + 1), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [index, paused, go]);

  const linkStyle = { color: "#FFB3C1" };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <style>{`
        @keyframes projectTimer { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes projectInfoIn { from { opacity: 0; transform: translateY(12px); } }
      `}</style>

      {/* Decorative background element */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{
          backgroundColor: "rgba(128, 15, 47, 0.06)",
        }}
      ></div>

      <div className="container relative">
        {/* Section Heading */}
        <div
          className="flex flex-col items-center text-center mb-16"
          data-reveal
        >
          <p
            className="section-eyebrow"
            style={{
              color: "#A4133C",
            }}
          >
            — What I've Built —
          </p>

          <h2
            className="section-title"
            style={{
              color: "#800F2F",
            }}
          >
            Projects
          </h2>

          <p
            className="font-serif-display italic text-lg mt-3"
            style={{
              color: "#590D22",
            }}
          >
            Flip through them.
          </p>
        </div>

        <div
          className="max-w-6xl mx-auto"
          data-reveal
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-stretch">
            {/* Stage: screenshots slide left/right */}
            <div className="relative min-w-0">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #FFF8F7 0%, #F8F0F1 65%, #F1E2E5 100%)",
                  border: "1.5px solid #800F2F",
                  boxShadow: "8px 8px 0 #800F2F",
                }}
                onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
                onTouchEnd={(e) => {
                  if (touchX.current === null) return;
                  const dx = e.changedTouches[0].clientX - touchX.current;
                  if (Math.abs(dx) > 40) go(dx < 0 ? index + 1 : index - 1);
                  touchX.current = null;
                }}
              >
                <div
                  className="flex"
                  style={{
                    transform: `translateX(-${index * 100}%)`,
                    transition: "transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)",
                  }}
                >
                  {projects.map((p, i) => (
                    <div
                      key={p.title}
                      className="flex-[0_0_100%] p-4 sm:p-8 md:p-10"
                      aria-hidden={i !== index}
                    >
                      {/* Browser-style frame */}
                      <div
                        className="rounded-xl overflow-hidden bg-white"
                        style={{
                          border: "1px solid rgba(128, 15, 47, 0.15)",
                          boxShadow: "0 18px 40px -18px rgba(89, 13, 34, 0.35)",
                        }}
                      >
                        <div
                          className="flex items-center gap-1.5 px-3 py-2"
                          style={{
                            backgroundColor: "#F8F0F1",
                            borderBottom: "1px solid rgba(128, 15, 47, 0.1)",
                          }}
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                          <span
                            className="flex-1 text-center text-[11px] truncate pr-8"
                            style={{ color: "#590D22" }}
                          >
                            {p.title}
                          </span>
                        </div>

                        <div className="aspect-[16/10] overflow-hidden">
                          {p.image ? (
                            <img
                              src={p.image}
                              alt={p.title}
                              className="w-full h-full object-cover object-top"
                              loading="lazy"
                            />
                          ) : (
                            <div
                              className="w-full h-full flex items-center justify-center"
                              style={{
                                background:
                                  "linear-gradient(135deg, #FFF8F7 0%, #F8F0F1 50%, #F2E5E8 100%)",
                              }}
                            >
                              <span
                                className="font-serif-display italic text-7xl"
                                style={{ color: "#A4133C" }}
                              >
                                {String(i + 1).padStart(2, "0")}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress bar for auto-advance */}
                <div
                  key={`${index}-${paused}`}
                  className="absolute bottom-0 left-0 h-1 w-full origin-left"
                  style={{
                    backgroundColor: "#A4133C",
                    animation: paused
                      ? "none"
                      : `projectTimer ${SLIDE_MS}ms linear forwards`,
                    transform: paused ? "scaleX(0)" : undefined,
                  }}
                />
              </div>

              {/* Arrows */}
              {[
                {
                  dir: -1,
                  label: "Previous project",
                  Icon: ArrowLeft,
                  side: "left-2 sm:-left-6",
                },
                {
                  dir: 1,
                  label: "Next project",
                  Icon: ArrowRight,
                  side: "right-2 sm:-right-6",
                },
              ].map(({ dir, label, Icon, side }) => (
                <button
                  key={label}
                  onClick={() => go(index + dir)}
                  aria-label={label}
                  className={`absolute top-1/2 -translate-y-1/2 ${side} rounded-full flex items-center justify-center transition-transform hover:scale-110 backdrop-blur-sm`}
                  style={{
                    width: 52,
                    height: 52,
                    backgroundColor: "rgba(89, 13, 34, 0.92)",
                    color: "#FFF8F7",
                    border: "1.5px solid #FFF8F7",
                    boxShadow: "3px 3px 0 #800F2F",
                  }}
                >
                  <Icon size={22} />
                </button>
              ))}
            </div>

            {/* Side panel with the description */}
            <div
              key={index}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background:
                  "linear-gradient(160deg, #590D22 0%, #6E1530 60%, #800F2F 100%)",
                border: "1.5px solid #800F2F",
                boxShadow: "8px 8px 0 rgba(128, 15, 47, 0.35)",
                color: "#FFF8F7",
              }}
            >
              <div
                className="flex items-baseline gap-3 mb-4"
                style={{ animation: "projectInfoIn 0.5s ease both" }}
              >
                <span
                  className="font-serif-display italic text-4xl"
                  style={{ color: "#FFB3C1" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] opacity-70">
                  Project
                </span>
                <span className="ml-auto text-xs tracking-widest opacity-70">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              <h3
                className="font-serif-display text-3xl md:text-4xl leading-tight mb-4"
                style={{
                  color: "#FFF8F7",
                  animation: "projectInfoIn 0.5s 0.05s ease both",
                }}
              >
                {project.title}
              </h3>

              <p
                className="leading-relaxed text-[15px] mb-6"
                style={{
                  color: "rgba(255, 248, 247, 0.85)",
                  animation: "projectInfoIn 0.5s 0.1s ease both",
                }}
              >
                {project.description}
              </p>

              <div
                className="flex flex-wrap gap-2 mb-6"
                style={{ animation: "projectInfoIn 0.5s 0.15s ease both" }}
              >
                {project.technologies.map((tech) => (
                  <TechTag key={tech} tech={tech} />
                ))}
              </div>

              {/* Links */}
              <div
                className="mt-auto pt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium"
                style={{ borderTop: "1px solid rgba(255, 229, 236, 0.2)" }}
              >
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:underline"
                    style={linkStyle}
                  >
                    <ExternalLink size={14} /> Preview
                  </a>
                )}
                {project.presentationUrl && (
                  <a
                    href={project.presentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:underline"
                    style={linkStyle}
                  >
                    <ExternalLink size={14} /> Live Presentation
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:underline"
                    style={linkStyle}
                  >
                    <Github size={14} /> Code
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {projects.map((p, i) => (
              <button
                key={p.title}
                onClick={() => go(i)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={
                  i === index
                    ? {
                        backgroundColor: "#A4133C",
                        color: "#FFF8F7",
                        border: "1.5px solid #800F2F",
                        boxShadow: "3px 3px 0 #800F2F",
                      }
                    : {
                        backgroundColor: "rgba(255, 255, 255, 0.45)",
                        color: "#800F2F",
                        border: "1.5px solid rgba(128, 15, 47, 0.25)",
                      }
                }
              >
                {p.title}
              </button>
            ))}

            <a
              href="https://github.com/sanilac6459"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/60"
              style={{
                color: "#800F2F",
                border: "1.5px dashed rgba(128, 15, 47, 0.5)",
              }}
            >
              More on GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
