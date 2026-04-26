import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: ExperienceProps[] = [
  {
    title: "Software Engineer Intern",
    company: "Tech Company Inc.",
    duration: "May 2023 — August 2023",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with senior developers to implement new features and fix bugs.",
  },
  {
    title: "Web Developer",
    company: "Creative Solutions",
    duration: "January 2023 — April 2023",
    description:
      "Created responsive websites for clients using HTML, CSS, and JavaScript. Worked closely with designers to implement pixel-perfect designs.",
  },
  {
    title: "Student Developer",
    company: "University Tech Lab",
    duration: "September 2022 — December 2022",
    description:
      "Assisted in developing educational tools for students. Gained hands-on experience with Python and database management.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-portfolio-cream/40 blur-3xl"></div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="section-eyebrow">— My Journey —</p>
          <h2 className="section-title">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-portfolio-navy/30 to-transparent md:-translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-portfolio-navy ring-4 ring-portfolio-cream md:-translate-x-1/2 z-10"></div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content */}
                <div className="pl-12 md:pl-0 md:w-1/2">
                  <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl p-6 md:p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={14} className="text-portfolio-purple" />
                      <span className="text-xs uppercase tracking-widest text-portfolio-purple font-medium">
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="font-serif-display italic text-2xl text-portfolio-navy mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-portfolio-navy/70 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-portfolio-navy/70 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
