import React from "react";
import { Target, Heart, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
    >
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
            — Hello —
          </p>

          <h2
            className="section-title"
            style={{
              color: "var(--wine)",
            }}
          >
            About Me
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Who I Am */}
          <div
            className="rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            data-reveal="both"
            style={{
              background:
                "var(--card-bg)",
              border: "1px solid var(--line)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="p-2 rounded-lg"
                style={{
                  backgroundColor: "var(--rose-soft)",
                  color: "var(--rose)",
                }}
              >
                <User size={20} />
              </div>

              <h3
                className="font-serif-display text-2xl"
                style={{
                  color: "var(--rose)",
                }}
              >
                Who I Am
              </h3>
            </div>

            <div
              className="about-body space-y-3 leading-relaxed text-base"
              style={{
                color: "var(--rose)",
              }}
            >
              <p>
                I'm a Computer Science undergraduate at CUNY Hunter College and
                an aspiring software engineer with a passion for full-stack
                development. My journey in tech began in high school with a
                four-year software engineering course where I discovered my
                passion for programming and turning my ideas into products that
                can shape people's lives.
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
          <div
            className="rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            data-reveal="both"
            style={{
              background:
                "var(--card-bg)",
              border: "1px solid var(--line)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="p-2 rounded-lg"
                style={{
                  backgroundColor: "var(--rose-soft)",
                  color: "var(--rose)",
                }}
              >
                <Target size={20} />
              </div>

              <h3
                className="font-serif-display text-2xl"
                style={{
                  color: "var(--rose)",
                }}
              >
                Goals
              </h3>
            </div>

            <div
              className="about-body space-y-3 leading-relaxed text-base"
              style={{
                color: "var(--rose)",
              }}
            >
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
          <div
            className="rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            data-reveal="both"
            style={{
              background:
                "var(--card-bg)",
              border: "1px solid var(--line)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="p-2 rounded-lg"
                style={{
                  backgroundColor: "var(--rose-soft)",
                  color: "var(--rose)",
                }}
              >
                <Heart size={20} />
              </div>

              <h3
                className="font-serif-display text-2xl"
                style={{
                  color: "var(--rose)",
                }}
              >
                Interests
              </h3>
            </div>

            <div
              className="about-body space-y-3 leading-relaxed text-base"
              style={{
                color: "var(--rose)",
              }}
            >
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
