import React, { useEffect, useRef, useState } from "react";

interface Role {
  title: string;
  duration: string;
  bullets: string[];
}

interface ExperienceProps {
  title?: string;
  company: string;
  location: string;
  duration?: string;
  bullets?: string[];
  logo: string;
  roles?: Role[];
  tech?: string[];
}

const experiences: ExperienceProps[] = [
  {
    title: "Software Engineer Intern",
    company: "Trance4mation Games",
    tech: ["React", "Socket.io"],
    location: "New York, NY",
    duration: "August 2026 — Present",
    logo: "/images/trance4mation.jpeg",
    bullets: [
      "Lead a team of 4 developing TRILL, a real-time multiplayer dialogue game for addiction prevention and recovery, by coordinating tasks and driving weekly deliverables.",
      "Engineer the frontend architecture in React by developing the Home, Lobby, and Spirit Animal Selection screens and implementing application routing to create a cohesive player flow.",
      "Facilitate frontend-backend integration with backend developers on room creation, player lobbies, and game-state syncing using Socket.io, enabling live player interactions.",
    ],
  },

  {
    title: "Data Analyst Intern",
    company: "Metropolitan Transportation Authority (MTA)",
    tech: ["Python", "Pandas", "NumPy", "Power BI", "DAX", "Power Query"],
    location: "New York, NY",
    duration: "January 2026 — Present",
    logo: "/images/mta.jpeg",
    bullets: [
      "Analyzed the MTA Power Cable Enterprise Asset Management database with 11,000+ manhole inspection records, using Python, Pandas, and NumPy to detect duplicate entries and drive a ∼15% increase in maintenance activity.",
      "Created a Power BI compliance dashboard using DAX measures and Power Query M to track 18,000+ ELM training records against safety requirements, flagging compliance gaps for the Office of the Vice President, Chief Operations.",
      "Built a personnel dashboard consolidating 4 SharePoint lists across 1,200+ employees, using optimized DAX measures to track accident trends and support staffing decisions.",
    ],
  },

  {
    title: "Software Engineer Fellow",
    company: "CUNY Tech Prep",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Supabase",
    ],
    location: "New York, NY",
    duration: "July 2025 — May 2026",
    logo: "/images/ctp.jpeg",
    bullets: [
      "Developed the frontend for CUNY Hunter Marketplace, a student-to-student platform, using React, Next.js, and Tailwind CSS to build a responsive, component-based interface within a collaborative, agile team.",
      "Integrated an Azure-hosted PostgreSQL database via Prisma ORM into API endpoints built with Next.js and Node.js, following Git branching workflows and peer code reviews through pull requests.",
      "Delivered an item listing dashboard with CRUD functionality using Supabase to enable buying and selling.",
    ],
  },

  {
    company: "Computer Science Club at Hunter College",
    tech: ["Figma"],
    location: "New York, NY",
    logo: "/images/cs-club.jpeg",
    roles: [
      {
        title: "Tech Lead",
        duration: "August 2025 — August 2026",
        bullets: [
          "Drove technical initiatives and club growth by proposing new programs, coordinating events, and supporting strategic planning, increasing engagement and learning opportunities for CS students.",
          "Planned and hosted workshops for 30+ computer science students, providing guidance on technical skills, problem-solving strategies, and career development to enhance readiness for internships and software engineering roles.",
          "Mentored project leads in the club's Project Development Program, supporting student teams through semester-long collaborative projects by reviewing proposals, refining technical scopes, and providing guidance to ensure successful and educational outcomes.",
        ],
      },
      {
        title: "Web Developer",
        duration: "January 2025 — August 2025",
        bullets: [
          "Led the planning and design phases of the club website revamp by creating detailed prototypes and layouts using Figma, aiming to enhance the site's visual appeal and overall user experience.",
        ],
      },
    ],
  },

  {
    title: "Software Engineer Intern",
    company: "Permanence AI",
    tech: ["Python", "OpenAI API"],
    location: "New York, NY",
    duration: "January 2025",
    logo: "/images/permanence.jpeg",
    bullets: [
      "Tested OpenAI models across temperature and token configurations and optimized prompt design with OpenAI API, reducing token usage by ∼15% while improving output quality with fewer queries.",
      "Programmed a Pythonic Code Evaluator using Python and the OpenAI API to assess code style, identify non-Pythonic patterns, and generate more Pythonic alternatives with output comparisons.",
    ],
  },

  {
    title: "IT Service Management Intern",
    company: "New York City Housing Authority (NYCHA)",
    tech: ["ServiceNow", "R Markdown"],
    location: "New York, NY",
    duration: "July 2024 — August 2024",
    logo: "/images/nycha.png",
    bullets: [
      "Completed ServiceNow training in IT Service Management, with a focus on Knowledge Base and Incident Management to strengthen expertise in improving user experience and facilitating incident resolution.",
      "Reviewed 400+ Knowledge Base articles in ServiceNow, leading to actionable recommendations to keep, flag, review, or update its content.",
      "Conducted quality assurance by reviewing and validating 100+ Microsoft account requests from Movaris, ensuring accuracy on Microsoft Teams.",
      "Documented project charters and closing reports for key initiatives, recorded outcomes, and next steps with R-markdown to incorporate data visualization of our findings.",
    ],
  },

  {
    title: "Cybersecurity Intern",
    company: "The City of New York Office of Labor Relations",
    tech: ["Linux"],
    location: "New York, NY",
    duration: "July 2022 — August 2022",
    logo: "/images/nyc-olr.jpeg",
    bullets: [
      "Obtained a comprehensive understanding of cybersecurity by engaging in a panel led by the Center for Internet Security.",
      "Analyzed data from hardware and detected risk issues on PC through Linux commands.",
      "Handled IT Inventory Management by collecting 100+ PC and monitor tags, ensuring accurate asset tracking and organization.",
    ],
  },
];

// "August 2026 — Present" -> "Aug 2026 — Present"
const shortDate = (d = "") =>
  d.replace(
    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/g,
    (m) => m.slice(0, 3),
  );

// The whole span for a club with several roles: first role's start to last role's end
const fullDuration = (exp: ExperienceProps) => {
  if (exp.duration) return shortDate(exp.duration);
  if (!exp.roles?.length) return "";
  const start = exp.roles[exp.roles.length - 1].duration.split(" — ")[0];
  const end = exp.roles[0].duration.split(" — ").pop();
  return shortDate(`${start} — ${end}`);
};

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mt-3.5 grid gap-2.5">
    {items.map((b, i) => (
      <li
        key={i}
        className="relative pl-5 text-[15px] sm:text-[15.5px] leading-relaxed"
        style={{ color: "var(--ink)" }}
      >
        <span
          className="absolute left-0.5 top-[0.7em] w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "var(--rose)" }}
        />
        {b}
      </li>
    ))}
  </ul>
);

const Sep = ({ className = "" }: { className?: string }) => (
  <span
    className={`px-2 ${className}`}
    style={{ color: "var(--rose)", opacity: 0.5 }}
  >
    ·
  </span>
);

const ExperienceSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const roseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [passed, setPassed] = useState<boolean[]>(() =>
    experiences.map(() => false),
  );
  const [shown, setShown] = useState<boolean[]>(() =>
    experiences.map(() => false),
  );

  // As you scroll, the line fills down to a point 60% of the way down the screen.
  // Each job appears dimmed once it enters the screen, then lights up (and its
  // rose blooms) when the line reaches it. Scrolling back up reverses both.
  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      const timeline = timelineRef.current;
      if (!timeline) return;

      const mark = window.innerHeight * 0.6;
      const rect = timeline.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (mark - rect.top) / rect.height));
      setProgress(p);

      const next = roseRefs.current.map((el) => {
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top + r.height / 2 <= mark;
      });
      setPassed((prev) => (prev.every((v, i) => v === next[i]) ? prev : next));

      const inView = roseRefs.current.map((el) => {
        if (!el) return false;
        return el.getBoundingClientRect().top <= window.innerHeight * 0.92;
      });
      setShown((prev) =>
        prev.every((v, i) => v === inView[i]) ? prev : inView,
      );
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
            — My Journey —
          </p>

          <h2
            className="section-title"
            style={{
              color: "var(--wine)",
            }}
          >
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="max-w-5xl mx-auto relative">
          {/* Faint line */}
          <div
            className="absolute top-2 bottom-0 w-0.5 left-[20px] sm:left-[26px]"
            style={{ backgroundColor: "var(--line)" }}
          />

          {/* Rose line that fills as you scroll */}
          <div
            className="absolute top-2 bottom-0 w-0.5 left-[20px] sm:left-[26px] origin-top"
            style={{
              backgroundColor: "var(--rose-btn)",
              boxShadow: "0 0 10px var(--rose-glow)",
              transform: `scaleY(${progress})`,
            }}
          />

          <div className="grid gap-12 sm:gap-14">
            {experiences.map((exp, index) => {
              const isPassed = passed[index];
              const isShown = shown[index];
              const isNow = (
                exp.duration ??
                exp.roles?.[0]?.duration ??
                ""
              ).includes("Present");

              return (
                <article
                  key={exp.company + index}
                  className="grid grid-cols-[42px_1fr] sm:grid-cols-[54px_1fr] gap-2.5 sm:gap-[18px]"
                  style={{
                    // hidden -> dimmed (in view) -> lit (line reached it)
                    opacity: !isShown ? 0 : isPassed ? 1 : 0.45,
                    translate: isShown ? "0 0" : "0 40px",
                    transition: "opacity 0.6s, translate 0.6s",
                  }}
                >
                  {/* Rose on the line */}
                  <div
                    ref={(el) => {
                      roseRefs.current[index] = el;
                    }}
                    className="relative z-10 flex justify-center pt-1"
                  >
                    <img
                      src="/images/rose3.png"
                      alt=""
                      className="w-14 h-14 object-contain max-w-none"
                      style={{
                        transition:
                          "transform 0.6s cubic-bezier(0.3, 1.6, 0.5, 1), opacity 0.5s, filter 0.5s",
                        transform: isPassed ? "scale(1)" : "scale(0.5)",
                        opacity: isPassed ? 1 : 0.7,
                        filter: isPassed
                          ? "none"
                          : "grayscale(1) brightness(0.6)",
                      }}
                    />
                  </div>

                  <div className="min-w-0">
                    {/* Logo + title */}
                    <div className="flex items-start sm:items-center gap-3 sm:gap-3.5">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] sm:rounded-xl object-cover bg-white flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h3
                          className="font-serif-display font-semibold text-[21px] sm:text-[26px] leading-tight"
                          style={{ color: "var(--wine)" }}
                        >
                          {exp.title ?? exp.company}
                          {isNow && (
                            <span
                              className="ml-2.5 align-middle inline-block font-mono-ui text-[11px] uppercase tracking-[0.14em] rounded-full px-2.5 py-0.5"
                              style={{
                                color: "var(--rose)",
                                border: "1px solid var(--line-strong)",
                              }}
                            >
                              now
                            </span>
                          )}
                        </h3>

                        <p
                          className="font-mono-ui text-[13px] sm:text-[13.5px] mt-1"
                          style={{ color: "var(--muted)" }}
                        >
                          {exp.title
                            ? exp.company
                            : exp.roles?.map((r) => r.title).join(" · ")}
                          <Sep />
                          {exp.location}
                          <Sep className="hidden sm:inline" />
                          <span
                            className="block sm:inline mt-0.5 sm:mt-0 transition-colors duration-500"
                            style={{
                              color: isPassed ? "var(--rose)" : "var(--muted)",
                            }}
                          >
                            {fullDuration(exp)}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Bullets (or each role's bullets) */}
                    {exp.roles ? (
                      exp.roles.map((role) => (
                        <div
                          key={role.title}
                          className="mt-[18px] pt-4"
                          style={{ borderTop: "1px dashed var(--line)" }}
                        >
                          <h4
                            className="font-serif-display font-semibold text-[17px]"
                            style={{ color: "var(--wine)" }}
                          >
                            {role.title}
                          </h4>
                          <p
                            className="font-mono-ui text-[13px] mt-1"
                            style={{ color: "var(--muted)" }}
                          >
                            {shortDate(role.duration)}
                          </p>
                          <Bullets items={role.bullets} />
                        </div>
                      ))
                    ) : (
                      <Bullets items={exp.bullets ?? []} />
                    )}

                    {/* Stack */}
                    {exp.tech && exp.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono-ui text-[12.5px] px-2.5 py-1 rounded-[7px]"
                            style={{
                              color: "var(--ink)",
                              border: "1px solid var(--line-strong)",
                              background: "rgba(255, 255, 255, 0.03)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
