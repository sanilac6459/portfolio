import React from "react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-portfolio-pink/10 blur-3xl"></div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="section-eyebrow">— Introduction —</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-portfolio-cream to-portfolio-mauve/30 rounded-2xl p-5 md:p-6 border border-portfolio-mauve/20 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* <h3 className="font-serif-display italic text-3xl mb-6 text-portfolio-navy">
              Who I Am
            </h3> */}
            <div className="space-y-4 text-portfolio-navy/80 leading-relaxed">
              <p>
                I'm an aspiring software engineer passionate about creating
                efficient and user-friendly applications. With a background in
                [your background], I blend technical expertise with creative
                problem-solving.
              </p>
              <p>
                My journey in software development began with [how you started].
                Since then, I've been continuously expanding my knowledge and
                skills in various technologies and methodologies.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating
                solutions that make a real difference. When I'm not coding, you
                can find me [your hobbies or interests].
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
