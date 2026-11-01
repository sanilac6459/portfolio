import React from "react";
import { User, Target, Heart } from "lucide-react";

const whoIAm = [
  "I'm a Computer Science undergraduate at CUNY Hunter College and an aspiring software engineer with a passion for full-stack development. My journey in tech began in high school with a four-year software engineering course where I discovered my passion for programming and turning my ideas into products that can shape people's lives.",
  "I'm someone who embraces new challenges and isn't afraid to take risks. Although I'm committed to pursuing a career in software engineering, my experiences across cybersecurity, IT, and data analytics have taught me that every field offers a different lens in shaping the future of tech, and I'm open to any path that lets me keep building and growing.",
];

const goals = [
  "What drives me is impact and purpose. I want to build technology that is more accessible, connected, and equitable for all of us — technology that removes barriers instead of creating new ones.",
  "I also want to create an environment that supports people from underrepresented groups who are passionate about tech in finding their voice and realizing their potential. I know firsthand how it feels to be invisible in a field you're passionate about, and it's what pushes me to uplift those around me and make tech more inclusive.",
];

const interests =
  "When I'm not coding, you'll usually find me in different cafes or food spots in the city. I also love to travel, roller skate, play badminton, and pick up new hobbies like hiking or rock climbing.";

const cardClass =
  "rounded-[18px] p-6 sm:p-[26px] transition-all duration-300 hover:-translate-y-[3px] hover:border-[color:var(--line-strong)]";

const cardStyle: React.CSSProperties = {
  background: "rgba(27, 15, 22, 0.82)",
  border: "1px solid var(--line)",
  boxShadow: "0 30px 60px -36px rgba(0, 0, 0, 0.9)",
};

const Label = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <p
    className="flex items-center gap-2.5 mb-3.5 font-mono-ui text-[12.5px] uppercase tracking-[0.2em]"
    style={{ color: "var(--rose)" }}
  >
    <span style={{ color: "var(--wine)" }}>{icon}</span>
    {children}
  </p>
);

const Paragraphs = ({ items }: { items: string[] }) => (
  <div
    className="grid gap-3.5 text-[15px] sm:text-[15.5px] leading-[1.75]"
    style={{ color: "var(--ink)" }}
  >
    {items.map((p, i) => (
      <p key={i}>{p}</p>
    ))}
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container relative">
        {/* Section Heading */}
        <div
          className="flex flex-col items-center text-center mb-10"
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

          <p
            className="font-serif-display italic text-lg mt-3 max-w-xl"
            style={{
              color: "var(--ink)",
            }}
          >
            The best part of every project isn't the finished product. It's who
            I become in the process. ♡
          </p>
        </div>

        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-5">
            {/* Who I Am */}
            <div className={cardClass} style={cardStyle} data-reveal="both">
              <Label icon={<User size={18} />}>Who I Am</Label>
              <Paragraphs items={whoIAm} />
            </div>

            {/* Goals */}
            <div className={cardClass} style={cardStyle} data-reveal="both">
              <Label icon={<Target size={18} />}>Goals</Label>
              <Paragraphs items={goals} />
            </div>

            {/* Interests */}
            <div
              className={`${cardClass} lg:col-span-2`}
              style={cardStyle}
              data-reveal="both"
            >
              <Label icon={<Heart size={18} />}>Interests</Label>
              <Paragraphs items={[interests]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
