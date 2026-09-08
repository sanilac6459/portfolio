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

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #fffaf9 0%, #f9f0f1 45%, #f3e9eb 75%, #e8f1ec 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2"
        style={{
          backgroundColor: "rgb(64 145 108 / 0)",
        }}
      ></div>

      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl"
        style={{
          backgroundColor: "rgb(237 110 146 / 0.08)",
        }}
      ></div>

      <div className="container relative">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <p
            className="section-eyebrow"
            style={{
              color: "rgb(237 110 146 / var(--tw-text-opacity, 1))",
            }}
          >
            — What I Work With —
          </p>

          <h2
            className="section-title"
            style={{
              color: "rgb(201 24 74 / var(--tw-text-opacity, 1))",
            }}
          >
            Skills
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              {/* Category heading */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  style={{
                    color: "rgb(64 145 108 / var(--tw-text-opacity, 0.80))",
                  }}
                >
                  {category.icon}
                </span>

                <h3
                  className="font-serif-display text-2xl"
                  style={{
                    color: "rgb(201 24 74 / var(--tw-text-opacity, 1))",
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #fffaf9 0%, #f9f0f1 65%, #f1ebe9 100%)",
                      border: "1px solid rgb(237 110 146 / 0.20)",
                      color: "rgb(237 110 146 / var(--tw-text-opacity, 1))",
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />

                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
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
