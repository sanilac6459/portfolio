import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const roles = [
  "software engineer",
  "data analyst",
  "full-stack developer",
  "tech enthusiast",
  "women in tech",
];

const HomeSection = () => {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-44"
    >
      <div className="container mx-auto px-4 z-10 w-full">
        <div className="animate-fade-in max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Welcome Text */}
          <p
            className="section-eyebrow text-xs sm:text-sm whitespace-nowrap"
            style={{
              color: "var(--rose)",
            }}
          >
            — Welcome To My Portfolio —
          </p>

          {/* Main Heading */}
          <h1 className="font-serif-display font-semibold mb-6 leading-[0.95]">
            {/* Name */}
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                color: "var(--wine)",
              }}
            >
              Sanila Chowdhury
            </span>
          </h1>

          {/* Rotating Roles, terminal style */}
          <p className="font-mono-ui text-xl md:text-3xl mb-6 min-h-[1.5em]">
            <span className="mr-3" style={{ color: "var(--live)" }}>
              $
            </span>
            <span style={{ color: "var(--rose-btn)" }}>{displayed}</span>
            <span className="blink-cursor" aria-hidden="true" />
          </p>

          {/* Intro */}
          <p
            className="text-base md:text-lg max-w-2xl font-light leading-relaxed mb-8"
            style={{ color: "var(--ink)" }}
          >
            <span style={{ color: "var(--rose)" }}>Building with purpose</span>{" "}
            through full-stack apps and data that drives real decisions.
          </p>

          {/* Right now */}
          <div
            className="mb-8 w-full max-w-xl rounded-2xl px-5 py-4 text-left grid gap-2 backdrop-blur-sm"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--line)",
            }}
          >
            <p
              className="flex items-center gap-2 text-[12.5px] uppercase tracking-[0.18em] font-medium"
              style={{ color: "var(--muted)" }}
            >
              <span
                className="live-dot w-2 h-2 rounded-full"
                style={{ background: "var(--live)" }}
              />
              Right now
            </p>
            <p
              className="text-sm sm:text-base"
              style={{ color: "var(--wine)" }}
            >
              <b className="font-semibold">CS Student</b> at{" "}
              <span style={{ color: "var(--rose)" }}>Hunter College</span>
              <span
                className="whitespace-nowrap"
                style={{ color: "var(--muted)" }}
              >
                {" "}
                · Expected May 2027
              </span>
            </p>

            <p
              className="text-sm sm:text-base"
              style={{ color: "var(--wine)" }}
            >
              <b className="font-semibold">Software Engineer Intern</b> at{" "}
              <span style={{ color: "var(--rose)" }}>Trance4mation Games</span>
            </p>
            <p
              className="text-sm sm:text-base"
              style={{ color: "var(--wine)" }}
            >
              <b className="font-semibold">Data Analyst Intern</b> at{" "}
              <span style={{ color: "var(--rose)" }}>
                Metropolitan Transportation Authority (MTA)
              </span>
            </p>
          </div>
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* View My Work */}
            <Button
              className="text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              style={{
                backgroundColor: "var(--rose-btn)",
              }}
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>

            {/* About Me */}
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full backdrop-blur-sm transition-all"
              style={{
                backgroundColor: "var(--glass)",
                borderColor: "var(--wine)",
                color: "var(--wine)",
              }}
              asChild
            >
              <a href="#about">About Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
