import React from "react";

import { Code2, Wrench, Layers, Bot, Database, BarChart3 } from "lucide-react";

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
      { name: "HTML", icon: "/images/html5.png" },
      { name: "CSS", icon: "/images/css3.png" },
      { name: "JavaScript", icon: "/images/js.png" },
      { name: "TypeScript", icon: "/images/typescript.png" },
      { name: "Python", icon: "/images/python.png" },
      { name: "Java", icon: "/images/java.png" },
      { name: "SQL", icon: "/images/sql.png" },
      { name: "C++", icon: "/images/c++.png" },
      { name: "Swift", icon: "/images/swift.png" },
    ],
  },

  {
    title: "Developer Tools",
    icon: <Wrench size={20} />,
    skills: [
      { name: "Git", icon: "/images/git.png" },
      { name: "GitHub", icon: "/images/github.png" },
      { name: "npm", icon: "/images/npm.png" },
      { name: "Docker", icon: "/images/docker.png" },
      { name: "VS Code", icon: "/images/vscode.png" },
      { name: "Postman", icon: "/images/postman.png" },
      { name: "Figma", icon: "/images/figma.png" },
      { name: "Jupyter", icon: "/images/jupyter.png" },
      { name: "Google Colab", icon: "/images/colab.png" },
      { name: "Xcode", icon: "/images/xcode.png" },
      { name: "Prisma", icon: "/images/prisma.svg" },
      { name: "Vercel", icon: "/images/vercel.svg" },
      { name: "Render", icon: "/images/render.jpeg" },
    ],
  },

  {
    title: "Frameworks & Libraries",
    icon: <Layers size={20} />,
    skills: [
      { name: "Flask", icon: "/images/flask.png" },
      { name: "React", icon: "/images/react.png" },
      { name: "Node.js", icon: "/images/nodejs.png" },
      { name: "Express.js", icon: "/images/express.png" },
      { name: "Angular", icon: "/images/angular.png" },
      { name: "Tailwind CSS", icon: "/images/tailwind-css.png" },
    ],
  },

  {
    title: "AI / LLM Tools",
    icon: <Bot size={20} />,
    skills: [
      { name: "OpenAI API", icon: "/images/openai.png" },
      { name: "Google Gemini API", icon: "/images/gemini.png" },
      { name: "LangChain", icon: "/images/langchain.png" },
      { name: "OpenRouter", icon: "/images/openrouter.webp" },
    ],
  },

  {
    title: "Databases & Backend Services",
    icon: <Database size={20} />,
    skills: [
      { name: "MySQL", icon: "/images/mysql.png" },
      { name: "Firebase", icon: "/images/firebase.png" },
      { name: "Supabase", icon: "/images/supabase.png" },
      { name: "ChromaDB", icon: "/images/chromadb.png" },
    ],
  },

  {
    title: "Data Analytics & Visualization",
    icon: <BarChart3 size={20} />,
    skills: [
      { name: "Microsoft Power BI", icon: "/images/powerbi.svg" },
      // { name: "DAX", icon: "/images/dax.png" },
      { name: "Power Query", icon: "/images/powerquery.png" },
      // { name: "Excel", icon: "/images/excel.png" },
      {
        name: "Microsoft Power Automate",
        icon: "/images/powerautomate.png",
      },
    ],
  },
];


const SkillIcon = ({ name, icon }: { name: string; icon: string }) => {
  const [failed, setFailed] = React.useState(false);

  return (
    <div className="group flex flex-col items-center gap-2 sm:gap-3 w-20 sm:w-28">
      <div className="skill-tile w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {failed ? (
          <span
            className="font-serif-display text-3xl"
            style={{ color: "var(--rose)" }}
          >
            {name[0]}
          </span>
        ) : (
          <img
            src={icon}
            alt=""
            className="w-full h-full object-contain"
            style={{ filter: "drop-shadow(0 6px 10px rgba(89, 13, 34, 0.18))" }}
            onError={() => setFailed(true)}
          />
        )}
      </div>

      <span
        className="text-sm sm:text-[15px] font-semibold text-center leading-tight"
        style={{ color: "var(--wine)" }}
      >
        {name}
      </span>
    </div>
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

        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} data-reveal="both">
              {/* Category heading */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <span
                  style={{
                    color: "var(--wine)",
                  }}
                >
                  {category.icon}
                </span>

                <h3
                  className="font-serif-display text-2xl"
                  style={{
                    color: "var(--wine)",
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Big icons */}
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-8 sm:gap-x-10 sm:gap-y-10">
                {category.skills.map((skill) => (
                  <SkillIcon
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
