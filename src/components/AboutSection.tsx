import React from "react";

// The terminal stays dark in both light and dark mode, like a real one
const term = {
  bg: "var(--term-bg)",
  bar: "var(--term-bar)",
  fg: "#f4e6ec",
  dim: "#a88d99",
  path: "#f5a3b8",
  arrow: "#ff6b95",
  head: "#ff8fab",
};

const sections = [
  {
    file: "who-i-am.md",
    title: "Who I Am",
    paragraphs: [
      "I'm a Computer Science undergraduate at CUNY Hunter College and an aspiring software engineer with a passion for full-stack development. My journey in tech began in high school with a four-year software engineering course where I discovered my passion for programming and turning my ideas into products that can shape people's lives.",
      "I'm someone who embraces new challenges and isn't afraid to take risks. Although I'm committed to pursuing a career in software engineering, my experiences across cybersecurity, IT, and data analytics have taught me that every field offers a different lens in shaping the future of tech, and I'm open to any path that lets me keep building and growing.",
    ],
  },
  {
    file: "goals.md",
    title: "Goals",
    paragraphs: [
      "What drives me is impact and purpose. I want to build technology that is more accessible, connected, and equitable for all of us — technology that removes barriers instead of creating new ones.",
      "I also want to create an environment that supports people from underrepresented groups who are passionate about tech in finding their voice and realizing their potential. I know firsthand how it feels to be invisible in a field you're passionate about, and it's what pushes me to uplift those around me and make tech more inclusive.",
    ],
  },
  {
    file: "interests/README.md",
    title: "Interests",
    paragraphs: [
      "When I'm not coding, you'll usually find me in different cafes or food spots in the city. I also love to travel, roller skate, play badminton, and pick up new hobbies like hiking or rock climbing.",
    ],
  },
];

const Prompt = () => (
  <>
    <span style={{ color: term.path }}>~/sanilachowdhury/about</span>{" "}
    <span style={{ color: term.dim }}>main</span>
    <span style={{ color: term.arrow }}>*</span>{" "}
    <span className="font-bold" style={{ color: term.arrow }}>
      ❯
    </span>
  </>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container relative">
        {/* Section Heading */}
        <div
          className="flex flex-col items-center text-center mb-12"
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

        {/* Terminal window */}
        <div
          className="max-w-6xl mx-auto rounded-2xl overflow-hidden font-mono-ui text-[13.5px] sm:text-sm leading-relaxed"
          data-reveal="both"
          style={{
            background: term.bg,
            color: term.fg,
            border: "1px solid var(--line-strong)",
            boxShadow: "0 30px 70px -30px var(--rose-glow)",
          }}
          aria-label="About Sanila, shown as a terminal"
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              background: term.bar,
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span
              className="hidden sm:inline ml-2.5 text-xs"
              style={{ color: term.dim }}
            >
              ⌥⌘1
            </span>
            <span
              className="flex-1 text-center text-xs sm:text-[13px] truncate mr-11 sm:mr-[76px]"
              style={{ color: term.dim }}
            >
              ~/sanilachowdhury/about
            </span>
          </div>

          {/* Commands and output */}
          <div className="px-4 sm:px-7 py-5 sm:py-6 grid gap-[18px]">
            {sections.map((s) => (
              <div key={s.file} className="min-w-0">
                <p className="break-words">
                  <Prompt /> <span>cat {s.file}</span>
                </p>
                <p className="font-bold mt-1" style={{ color: term.head }}>
                  # {s.title}
                </p>
                <div className="grid gap-2.5 mt-0.5">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} style={{ opacity: 0.92 }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Empty prompt with blinking cursor */}
            <p>
              <Prompt />{" "}
              <span className="blink-cursor" aria-hidden="true" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
