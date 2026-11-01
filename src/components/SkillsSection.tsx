import React from "react";

import { Code2, Wrench, Layers, Database, BarChart3 } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; icon: string }[];
}

const skillCategories: SkillCategoryProps[] = [
  {
    title: "Languages",
    icon: <Code2 size={20} />,
    skills: [
      { name: "TypeScript", icon: "/images/typescript.png" },
      { name: "JavaScript", icon: "/images/js.png" },
      { name: "Python", icon: "/images/python.png" },
      { name: "Java", icon: "/images/java.png" },
      { name: "SQL", icon: "/images/sql.png" },
      { name: "C++", icon: "/images/c++.png" },
      { name: "Swift", icon: "/images/swift.png" },
      { name: "HTML", icon: "/images/html5.png" },
      { name: "CSS", icon: "/images/css3.png" },
    ],
  },

  {
    title: "Tools",
    icon: <Wrench size={20} />,
    skills: [
      { name: "Git", icon: "/images/git.png" },
      { name: "GitHub", icon: "/images/github.png" },
      { name: "Docker", icon: "/images/docker.png" },
      { name: "npm", icon: "/images/npm.png" },
      { name: "VS Code", icon: "/images/vscode.png" },
      { name: "Jupyter", icon: "/images/jupyter.png" },
      { name: "Google Colab", icon: "/images/colab.png" },
      { name: "Postman", icon: "/images/postman.png" },
      { name: "Figma", icon: "/images/figma.png" },
      { name: "Xcode", icon: "/images/xcode.png" },
      { name: "Vercel", icon: "/images/vercel.svg" },
      { name: "Render", icon: "/images/render.jpeg" },
    ],
  },

  {
    title: "Frameworks & Libraries",
    icon: <Layers size={20} />,
    skills: [
      { name: "React", icon: "/images/react.png" },
      { name: "Angular", icon: "/images/angular.png" },
      { name: "Tailwind CSS", icon: "/images/tailwind-css.png" },
      { name: "Node.js", icon: "/images/nodejs.png" },
      { name: "Express.js", icon: "/images/express.png" },
      { name: "Flask", icon: "/images/flask.png" },
      { name: "Prisma", icon: "/images/prisma.svg" },
      { name: "OpenAI API", icon: "/images/openai.png" },
      { name: "Gemini API", icon: "/images/gemini.png" },
      { name: "LangChain", icon: "/images/langchain.png" },
    ],
  },

  {
    title: "Databases & Backend",
    icon: <Database size={20} />,
    skills: [
      { name: "Supabase", icon: "/images/supabase.png" },
      { name: "MySQL", icon: "/images/mysql.png" },
      { name: "Firebase", icon: "/images/firebase.png" },
      { name: "ChromaDB", icon: "/images/chromadb.png" },
    ],
  },

  {
    title: "Data",
    icon: <BarChart3 size={20} />,
    skills: [
      { name: "Power BI", icon: "/images/powerbi.svg" },
      { name: "Power Query", icon: "/images/powerquery.png" },
      { name: "Power Automate", icon: "/images/powerautomate.png" },
    ],
  },
];

// One skill: small icon tile + name, like the stack chips on the project cards
const SkillChip = ({ name, icon }: { name: string; icon: string }) => {
  const [failed, setFailed] = React.useState(false);

  return (
    <span
      className="inline-flex items-center gap-[9px] whitespace-nowrap rounded-[10px] py-[7px] pl-2 pr-[13px] text-[13px] sm:text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--line-strong)]"
      style={{
        background: "rgba(255, 255, 255, 0.04)",
        border: "1px solid var(--line)",
        color: "var(--ink)",
      }}
    >
      {failed ? (
        <span
          className="w-6 h-6 rounded-md grid place-items-center font-serif-display"
          style={{
            background: "rgba(255, 255, 255, 0.94)",
            color: "var(--rose-btn)",
          }}
        >
          {name[0]}
        </span>
      ) : (
        <img
          src={icon}
          alt=""
          className="w-6 h-6 object-contain rounded-md p-[3px]"
          style={{ background: "rgba(255, 255, 255, 0.94)" }}
          onError={() => setFailed(true)}
        />
      )}
      {name}
    </span>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container relative">
        {/* Section Heading */}
        <div
          className="flex flex-col items-center text-center mb-16"
          data-reveal="both"
        >
          <p
            className="section-eyebrow"
            style={{
              color: "var(--rose)",
            }}
          >
            — What I Work With —
          </p>

          <h2
            className="section-title"
            style={{
              color: "var(--wine)",
            }}
          >
            Skills
          </h2>
        </div>

        <div className="max-w-[1040px] mx-auto font-mono-ui">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              data-reveal="both"
              className="grid grid-cols-1 md:grid-cols-[230px_1fr] gap-2.5 md:gap-5 items-center py-[22px]"
              style={{
                borderTop: index === 0 ? "none" : "1px dashed var(--line)",
              }}
            >
              {/* Category name */}
              <div
                className="flex items-center gap-3 text-[12.5px] uppercase tracking-[0.2em]"
                style={{ color: "var(--muted)" }}
              >
                <span className="shrink-0" style={{ color: "var(--wine)" }}>
                  {category.icon}
                </span>
                {category.title}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {category.skills.map((skill) => (
                  <SkillChip
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
