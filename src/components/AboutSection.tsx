import React from "react";
import { Target, Heart, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-portfolio-pink/10 blur-3xl"></div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="section-eyebrow">— Hello —</p>
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
                I'm an undergrad at CUNY Hunter College studying Computer
                Science. I'm an aspiring software engineer with a focus on
                full-stack development. My journey in tech began in high school
                with a four-year software engineering course where I discovered
                my passion for programming and turning my ideas into products
                that can shape people's lives.
              </p>
              <p>
                I'm someone who embraces new challenges and isn't afraid to take
                risks. Although I'm committed to pursuing a career in software
                engineering, my experiences across cybersecurity, IT, and data
                analytics have taught me that every field offers a different
                lens in shaping the future of tech, and I'm open to any path
                that lets me keep building and growing.
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
                What drives me is impact and purpose. I want to build technology
                that is more accessible, connected, and equitable for all of us
                — technology that removes barriers instead of creating new ones.
              </p>
              <p>
                I also want to create an environment that supports people from
                underrepresented groups who are passionate about tech in finding
                their voice and realizing their potential. I know firsthand how
                it feels to be invisible in a field you’re passionate about, and
                it's what pushes me to uplift those around me and make tech more
                inclusive.
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
