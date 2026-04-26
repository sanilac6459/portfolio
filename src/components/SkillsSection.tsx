import React from 'react';
import { Code2, Wrench, Layers } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategoryProps[] = [
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    skills: ["JavaScript", "Java", "Python", "C++"]
  },
  {
    title: "Development Tools",
    icon: <Wrench size={20} />,
    skills: ["HTML/CSS", "Git/GitHub", "VS Code", "Docker", "Replit", "Figma"]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers size={20} />,
    skills: ["React.js", "p5.js", "Flask", "Bootstrap", "Discord.py", "Unity", "Ncurses", "OpenAI API"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
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
              className="group relative bg-gradient-to-br from-portfolio-cream/70 to-white rounded-2xl p-8 border border-portfolio-mauve/20 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-portfolio-pink/20 group-hover:bg-portfolio-pink/40 transition-colors flex items-center justify-center text-portfolio-navy">
                {category.icon}
              </div>

              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.25em] text-portfolio-purple mb-2">Category {String(index + 1).padStart(2, '0')}</p>
                <h3 className="font-serif-display italic text-2xl text-portfolio-navy">{category.title}</h3>
                <div className="w-12 h-px bg-portfolio-navy/40 mt-3"></div>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-portfolio-navy/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple"></span>
                    <span className="font-light">{skill}</span>
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
