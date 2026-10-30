import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  presentationUrl?: string;
}

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

const SLIDE_MS = 7000; // how long each project shows before auto-advancing

// The terminal stays dark, like a real one
const term = {
  fg: "#f4e6ec",
  dim: "#a88d99",
  path: "#f5a3b8",
  arrow: "#ff6b95",
  head: "#ff8fab",
};

// "Phil — Job Applier Agent" -> "phil", "HunterConnect" -> "hunterconnect"
const fileName = (title: string) =>
  title
    .split(" — ")[0]
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const pad = (n: number) => String(n).padStart(2, "0");

const Prompt = () => (
  <>
    <span style={{ color: term.path }}>~/projects</span>{" "}
    <span style={{ color: term.dim }}>main</span>
    <span style={{ color: term.arrow }}>*</span>{" "}
    <span className="font-bold" style={{ color: term.arrow }}>
      ❯
    </span>
  </>
);

const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Once someone uses the arrows, tabs or swipes, stop moving on its own
  const [userPicked, setUserPicked] = useState(false);
  const touchX = useRef<number | null>(null);
  const total = projects.length;
  const project = projects[index];

  const go = useCallback(
    (next: number) => setIndex((next + total) % total),
    [total],
  );

  const pick = (next: number) => {
    setUserPicked(true);
    go(next);
  };

  const stopped = paused || userPicked;

  // Auto-advance (paused on hover, off for reduced motion)
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (stopped || reduce) return;
    const timer = setTimeout(() => go(index + 1), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [index, stopped, go]);

  // Placeholder links (like example.com) are hidden until a real one is added
  const isReal = (url?: string) => !!url && !url.includes("example.com");

  const links = [
    isReal(project.demoUrl) && {
      label: "Preview",
      href: project.demoUrl!,
      kind: "primary",
    },
    isReal(project.presentationUrl) && {
      label: "Presentation",
      href: project.presentationUrl!,
      kind: "outline",
    },
    isReal(project.repoUrl) && {
      label: "GitHub",
      href: project.repoUrl!,
      kind: "outline",
    },
  ].filter(Boolean) as { label: string; href: string; kind: string }[];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <style>{`
        @keyframes projectTimer { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes projectInfoIn { from { opacity: 0; transform: translateY(8px); } }
      `}</style>

      <div className="container relative">
        {/* Section Heading */}
        <div
          className="flex flex-col items-center text-center mb-16"
          data-reveal
        >
          <p
            className="section-eyebrow"
            style={{
              color: "var(--rose)",
            }}
          >
            — What I've Built —
          </p>

          <h2
            className="section-title"
            style={{
              color: "var(--wine)",
            }}
          >
            Projects
          </h2>

          <p
            className="font-serif-display italic text-lg mt-3"
            style={{
              color: "var(--ink)",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:auto-rows-[480px] gap-6">
            {/* Screenshots: every frame the same size, whole screenshot shown */}
            <div className="relative min-w-0">
              <div
                className="relative h-full overflow-hidden"
                onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
                onTouchEnd={(e) => {
                  if (touchX.current === null) return;
                  const dx = e.changedTouches[0].clientX - touchX.current;
                  if (Math.abs(dx) > 40) pick(dx < 0 ? index + 1 : index - 1);
                  touchX.current = null;
                }}
              >
                <div
                  className="flex h-full"
                  style={{
                    transform: `translateX(-${index * 100}%)`,
                    transition: "transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)",
                  }}
                >
                  {projects.map((p, i) => (
                    <div
                      key={p.title}
                      className="flex-[0_0_100%] pr-2.5 pb-2.5 aspect-[4/3] lg:aspect-auto"
                      aria-hidden={i !== index}
                    >
                      <div
                        className="relative w-full h-full rounded-[14px] overflow-hidden grid place-items-center"
                        style={{
                          border: "1.5px solid var(--frame)",
                          boxShadow:
                            "8px 8px 0 var(--frame), 0 24px 50px -24px rgba(0, 0, 0, 0.7)",
                        }}
                      >
                        {/* Blurred copy fills the leftover space */}
                        <div
                          className="absolute -inset-8"
                          style={{
                            backgroundImage: p.image
                              ? `url(${p.image})`
                              : undefined,
                            backgroundColor: "var(--card-bar)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "blur(22px) brightness(0.55) saturate(1.1)",
                          }}
                        />

                        {p.image ? (
                          <img
                            src={p.image}
                            alt={`Screenshot of ${p.title}`}
                            className="relative block max-w-full max-h-full w-auto h-auto"
                            style={{
                              boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
                            }}
                            loading="lazy"
                          />
                        ) : (
                          <span
                            className="relative font-serif-display italic text-7xl"
                            style={{ color: "var(--rose)" }}
                          >
                            {pad(i + 1)}
                          </span>
                        )}

                        {/* Auto-advance bar */}
                        {i === index && !userPicked && (
                          <div
                            key={`${index}-${paused}`}
                            className="absolute bottom-0 left-0 h-1 w-full origin-left"
                            style={{
                              backgroundColor: "var(--rose)",
                              animation: paused
                                ? "none"
                                : `projectTimer ${SLIDE_MS}ms linear forwards`,
                              transform: paused ? "scaleX(0)" : undefined,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrows */}
              {[
                {
                  dir: -1,
                  label: "Previous project",
                  Icon: ArrowLeft,
                  side: "left-3",
                },
                {
                  dir: 1,
                  label: "Next project",
                  Icon: ArrowRight,
                  side: "right-5",
                },
              ].map(({ dir, label, Icon, side }) => (
                <button
                  key={label}
                  onClick={() => pick(index + dir)}
                  aria-label={label}
                  className={`absolute top-1/2 -translate-y-1/2 ${side} z-10 w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full flex items-center justify-center transition-transform hover:scale-110`}
                  style={{
                    backgroundColor: "rgba(89, 13, 34, 0.92)",
                    color: "#FFF8F7",
                    border: "1.5px solid #FFF8F7",
                    boxShadow: "3px 3px 0 var(--frame)",
                  }}
                >
                  <Icon size={22} />
                </button>
              ))}
            </div>

            {/* Project details as a terminal window */}
            <div
              className="min-w-0 min-h-0 flex flex-col rounded-[14px] overflow-hidden font-mono-ui text-[13.5px] leading-relaxed"
              style={{
                background: "var(--term-bg)",
                color: term.fg,
                border: "1px solid var(--line-strong)",
                boxShadow: "0 30px 70px -30px var(--rose-glow)",
              }}
              aria-live="polite"
              aria-label="Project details"
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-2 px-3.5 py-3"
                style={{
                  background: "var(--term-bar)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span
                  className="flex-1 text-center text-xs truncate"
                  style={{ color: term.dim }}
                >
                  ~/sanilachowdhury/projects
                </span>
                <span
                  className="text-xs tabular-nums"
                  style={{ color: term.dim }}
                >
                  {pad(index + 1)} / {pad(total)}
                </span>
              </div>

              {/* Commands and output */}
              <div
                key={index}
                className="flex-1 overflow-y-auto flex flex-col gap-3.5 px-4 sm:px-5 pt-[18px] pb-5"
              >
                <p
                  className="break-words"
                  style={{ animation: "projectInfoIn 0.45s ease both" }}
                >
                  <Prompt /> cat {fileName(project.title)}.md
                </p>

                <div
                  style={{ animation: "projectInfoIn 0.45s 0.05s ease both" }}
                >
                  <p className="font-bold" style={{ color: term.head }}>
                    # project {pad(index + 1)}
                  </p>
                  <h3
                    className="font-serif-display font-semibold text-2xl sm:text-[26px] leading-tight mt-0.5 mb-1.5"
                    style={{ color: "var(--wine)" }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ opacity: 0.92 }}>{project.description}</p>
                </div>

                <div
                  style={{ animation: "projectInfoIn 0.45s 0.1s ease both" }}
                >
                  <p>
                    <Prompt /> ls stack/
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-[7px] py-1 pl-2 pr-2.5 rounded-lg"
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid var(--line)",
                        }}
                      >
                        {techIcons[tech] && (
                          <img
                            src={techIcons[tech]}
                            alt=""
                            className="w-[18px] h-[18px] object-contain rounded p-0.5"
                            style={{ background: "rgba(255, 255, 255, 0.92)" }}
                          />
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="mt-auto pt-3.5 grid gap-2.5"
                  style={{
                    borderTop: "1px dashed var(--line-strong)",
                    animation: "projectInfoIn 0.45s 0.15s ease both",
                  }}
                >
                  <div className="flex flex-wrap gap-2.5">
                    {links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full px-[18px] py-2.5 font-sans font-semibold text-sm transition-transform hover:-translate-y-0.5"
                        style={
                          l.kind === "primary"
                            ? {
                                background: "var(--rose-btn)",
                                color: "#fff",
                                boxShadow: "0 10px 24px -10px var(--rose-glow)",
                                fontFamily:
                                  "Space Grotesk, system-ui, sans-serif",
                              }
                            : {
                                color: "var(--wine)",
                                border: "1.5px solid var(--line-strong)",
                                background: "rgba(255, 255, 255, 0.04)",
                                fontFamily:
                                  "Space Grotesk, system-ui, sans-serif",
                              }
                        }
                      >
                        {l.label === "GitHub" && <Github size={16} />}
                        {l.label}
                        {l.label !== "GitHub" && <ArrowUpRight size={16} />}
                      </a>
                    ))}
                  </div>
                  <p>
                    <Prompt />{" "}
                    <span className="blink-cursor" aria-hidden="true" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {projects.map((p, i) => (
              <button
                key={p.title}
                onClick={() => pick(i)}
                aria-pressed={i === index}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={
                  i === index
                    ? {
                        backgroundColor: "var(--rose-btn)",
                        color: "#fff",
                        border: "1.5px solid var(--frame)",
                        boxShadow: "3px 3px 0 var(--frame)",
                      }
                    : {
                        backgroundColor: "var(--glass)",
                        color: "var(--wine)",
                        border: "1.5px solid var(--line-strong)",
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
              className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/5"
              style={{
                color: "var(--wine)",
                border: "1.5px dashed var(--line-strong)",
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
