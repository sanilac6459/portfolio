import React from "react";
import { Code2, Wrench, Layers, Bot, Database } from "lucide-react";

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
      { name: "HTML/CSS", icon: "/images/html5.png" },
      { name: "JavaScript", icon: "/images/js.png" },
      { name: "TypeScript", icon: "/images/typescript.png" },
      { name: "Python", icon: "/images/python.png" },
      { name: "Java", icon: "/images/java.png" },
      { name: "SQL", icon: "/images/mysql.png" },
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
      { name: "Docker", icon: "/images/docker.png" },
      { name: "VS Code", icon: "/images/vscode.png" },
      { name: "Postman", icon: "/images/postman.png" },
      { name: "Figma", icon: "/images/figma.png" },
      { name: "Jupyter", icon: "/images/jupyter.png" },
      { name: "Google Collab", icon: "/images/collab.png" },
      { name: "Xcode", icon: "/images/xcode.png" },
      { name: "Vercel", icon: "/images/vercel.png" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers size={20} />,
    skills: [
      { name: "React", icon: "/images/react.png" },
      { name: "Node.js", icon: "/images/nodejs.png" },
      { name: "Express.js", icon: "/images/express.png" },
      { name: "Angular", icon: "/images/angular.png" },
      { name: "Flask", icon: "/images/flask.png" },
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
    title: "Databases & Backend",
    icon: <Database size={20} />,
    skills: [
      { name: "MySQL", icon: "/images/mysql.png" },
      { name: "Firebase", icon: "/images/firebase.png" },
      { name: "Supabase", icon: "/images/supabase.png" },
      { name: "ChromaDB", icon: "/images/chromadb.png" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-portfolio-mauve/10 blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-portfolio-pink/10 blur-3xl"></div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="section-eyebrow">— What I Use —</p>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-portfolio-cream to-portfolio-mauve/30 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border border-portfolio-mauve/20 dark:border-gray-600 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-portfolio-pink/20 group-hover:bg-portfolio-pink/40 transition-colors flex items-center justify-center text-portfolio-navy dark:text-white">
                {category.icon}
              </div>

              <div className="mb-6">
                <h3 className="font-serif-display italic text-2xl text-portfolio-navy dark:text-white">
                  {category.title}
                </h3>
                <div className="w-12 h-px bg-portfolio-navy/40 dark:bg-white/40 mt-3"></div>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-portfolio-navy/80 dark:text-white/80"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <span className="font-light">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
