import React from "react";
import { Target, Heart, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-portfolio-pink/10 blur-3xl"></div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="section-eyebrow">— Introduction —</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Who I Am */}
          <div className="bg-gradient-to-br from-portfolio-cream to-portfolio-mauve/30 rounded-2xl p-6 border border-portfolio-mauve/20 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-portfolio-pink/20 text-portfolio-navy">
                <User size={20} />
              </div>
              <h3 className="font-serif-display text-2xl text-portfolio-navy">
                Who I Am
              </h3>
            </div>
            <div className="space-y-3 text-portfolio-navy leading-relaxed text-base">
              <p>
                I'm a rising senior at CUNY Hunter College studying Computer
                Science with a minor in Mathematics. I'm an aspiring software
                engineer with a focus on full-stack development. My journey
                began in high school with a four-year software engineering
                course, where I discovered my passion in programming and turning
                my ideas into software that can shape people's lives.
              </p>
              <p>
                Although I'm committed to software engineering, but my
                experiences across cybersecurity, IT, and data analytics have
                taught me that every field offers a different lens for solving
                problems — and I'm open to wherever that takes me.
              </p>
            </div>
          </div>

          {/* Goals */}
          <div className="bg-gradient-to-br from-portfolio-cream to-portfolio-mauve/30 rounded-2xl p-6 border border-portfolio-mauve/20 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-portfolio-pink/20 text-portfolio-navy">
                <Target size={20} />
              </div>
              <h3 className="font-serif-display text-2xl text-portfolio-navy">
                Goals
              </h3>
            </div>
            <div className="space-y-3 text-portfolio-navy leading-relaxed text-base">
              <p>
                What drives me the most is impact and purpose. I want to build
                technology that makes our lives easier, more connected, and more
                equitable — software that meets people where they are and
                removes barriers rather than creating them.
              </p>
              <p>
                I also believe the best technology is built by the most diverse
                minds, and I'm passionate about creating spaces where people
                from underrepresented backgrounds have a voice and can
                contribute to the future milestones of the tech industry.
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="bg-gradient-to-br from-portfolio-cream to-portfolio-mauve/30 rounded-2xl p-6 border border-portfolio-mauve/20 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-portfolio-pink/20 text-portfolio-navy">
                <Heart size={20} />
              </div>
              <h3 className="font-serif-display text-2xl text-portfolio-navy">
                Interests
              </h3>
            </div>
            <div className="space-y-3 text-portfolio-navy leading-relaxed text-base">
              <p>
                When I'm not coding, you'll usually find me in different cafes
                or food spots in the city. I also love to travel, roller skate,
                play badminton, and pick up new hobbies like hiking or rock
                climbing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
