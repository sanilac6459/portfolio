import React from "react";

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
}

const experiences: ExperienceProps[] = [
  {
    title: "Software Engineer Intern",
    company: "Trance4mation Games",
    location: "New York, NY",
    duration: "August 2026 — Present",
    logo: "/images/trance4mation.jpeg",
    bullets: [
      "Leading a team of 5 developing TRILL, a real-time multiplayer game for addiction recovery, by breaking features into scoped tasks across frontend, backend, and middleware.",
      "Contributing to full-stack development with React, Node.js, Express, and Socket.IO for real-time, server-authoritative game state synchronization.",
    ],
  },

  {
    title: "Data Analyst Intern",
    company: "Metropolitan Transportation Authority (MTA)",
    location: "New York, NY",
    duration: "January 2026 — Present",
    logo: "/images/mta.jpeg",
    bullets: [
      "Analyzed the MTA Power Cable Enterprise Asset Management database with 11,000+ manhole inspection records, using Python, Pandas, and NumPy to detect duplicate entries and drive a ∼15% increase in maintenance activity.",
      "Developed a Power BI compliance dashboard using DAX measures and Power Query M to evaluate 18,000+ ELM training records against a safety training matrix, presenting findings to the Office of the Vice President, Chief Operations, to close gaps in the department’s overall compliance.",
      "Built a personnel dashboard consolidating 4 SharePoint lists across 1,200+ employees, using optimized DAX measures to track accident trends and support staffing decisions.",
    ],
  },

  {
    title: "Software Engineer Fellow",
    company: "CUNY Tech Prep",
    location: "New York, NY",
    duration: "July 2025 — May 2026",
    logo: "/images/ctp.jpeg",
    bullets: [
      "Developed the frontend for CUNY Hunter Marketplace, a student-to-student platform, using React, Next.js, and Tailwind CSS to build a responsive, component-based interface within a collaborative, agile team.",
      "Built API endpoints with Next.js and Node.js, integrating an Azure-hosted PostgreSQL database via Prisma ORM, following Git branching workflows and peer code reviews through pull requests.",
      "Implemented JWT-based user authentication and an item listing dashboard with CRUD functionality using Supabase and Prisma to enable student-to-student transactions.",
    ],
  },

  {
    company: "Computer Science Club at Hunter College",
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
    location: "New York, NY",
    duration: "January 2025",
    logo: "/images/permanence.jpeg",
    bullets: [
      "Tested OpenAI models across temperature and token configurations and optimized prompt design with OpenAI API, reducing token usage by ∼15% while improving output quality with fewer queries.",
      "Engineered a Pythonic Code Evaluator using Python and the OpenAI API to assess code style, identify non-Pythonic patterns, and generate more Pythonic alternatives with output comparisons.",
    ],
  },

  {
    title: "IT Service Management Intern",
    company: "New York City Housing Authority (NYCHA)",
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

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFF8F7 0%, #F8F0F1 35%, #EBD8DD 65%, #D9B8C0 100%)",
      }}
    >
      {/* Decorative background element */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl"
        style={{
          backgroundColor: "rgba(128, 15, 47, 0.06)",
        }}
      ></div>

      <div className="container relative">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <p
            className="section-eyebrow"
            style={{
              color: "#A4133C",
            }}
          >
            — My Journey —
          </p>

          <h2
            className="section-title"
            style={{
              color: "#800F2F",
            }}
          >
            Experience
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                background:
                  "linear-gradient(135deg, #FFF8F7 0%, #F8F0F1 65%, #F1E2E5 100%)",
                border: "1px solid rgba(128, 15, 47, 0.15)",
              }}
            >
              {exp.roles ? (
                <>
                  {/* Company Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 object-contain rounded-lg border border-white/40 shadow-sm flex-shrink-0"
                    />

                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold"
                        style={{
                          color: "#800F2F",
                        }}
                      >
                        {exp.company}
                      </h3>

                      <p
                        className="text-sm mt-1"
                        style={{
                          color: "#A4133C",
                        }}
                      >
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Multiple Roles */}
                  <div
                    className="space-y-6 pl-4 ml-6"
                    style={{
                      borderLeft: "2px solid rgba(164, 19, 60, 0.25)",
                    }}
                  >
                    {exp.roles.map((role, idx) => (
                      <div key={idx} className="pl-4">
                        <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                          <h4
                            className="font-bold text-lg"
                            style={{
                              color: "#800F2F",
                            }}
                          >
                            {role.title}
                          </h4>

                          <span
                            className="flex-shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold"
                            style={{
                              backgroundColor: "rgba(164, 19, 60, 0.04)",
                              border: "1px solid rgba(164, 19, 60, 0.18)",
                              color: "#A4133C",
                            }}
                          >
                            {role.duration}
                          </span>
                        </div>

                        <ul className="space-y-2">
                          {role.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-2 text-sm leading-relaxed"
                              style={{
                                color: "#590D22",
                              }}
                            >
                              <span
                                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{
                                  backgroundColor: "#A4133C",
                                }}
                              ></span>

                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* Single Role */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 object-contain rounded-lg border border-white/40 shadow-sm flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-xl font-bold"
                          style={{
                            color: "#800F2F",
                          }}
                        >
                          {exp.title}
                        </h3>

                        <p
                          className="text-sm mt-1"
                          style={{
                            color: "#A4133C",
                          }}
                        >
                          <span
                            className="font-semibold"
                            style={{
                              color: "#A4133C",
                            }}
                          >
                            {exp.company}
                          </span>

                          <span className="mx-1.5 opacity-70">·</span>

                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <span
                      className="self-start flex-shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold"
                      style={{
                        backgroundColor: "rgba(164, 19, 60, 0.04)",
                        border: "1px solid rgba(164, 19, 60, 0.18)",
                        color: "#A4133C",
                      }}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets!.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                        style={{
                          color: "#800F2F",
                        }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor: "#A4133C",
                          }}
                        ></span>

                        {bullet}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
