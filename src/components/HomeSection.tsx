import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const roles = [
  "Software Engineer",
  "Data Analyst",
  "Full-Stack Developer",
  "Tech Enthusiast",
  "Women in Tech",
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10 w-full">
        <div className="animate-fade-in max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Welcome Text */}
          <p
            className="section-eyebrow text-xs sm:text-sm whitespace-nowrap"
            style={{
              color: "#A4133C",
            }}
          >
            — Welcome To My Portfolio —
          </p>

          {/* Main Heading */}
          <h1 className="font-serif-display font-semibold mb-6 leading-[0.95]">
            {/* Name */}
            <span
              className="block text-5xl md:text-7xl lg:text-8xl"
              style={{
                color: "#800F2F",
              }}
            >
              Hi! I'm Sanila
            </span>

            {/* Rotating Roles */}
            <span
              className="block mt-4 italic text-3xl md:text-5xl min-h-[1.2em]"
              style={{
                color: "#A4133C",
              }}
            >
              {displayed}

              {/* Typing Cursor */}
              <span
                className="animate-pulse"
                style={{
                  color: "#A4133C",
                }}
              >
                |
              </span>
            </span>
          </h1>

          {/* Description */}
          <div className="mb-8">
            <p
              className="text-base md:text-lg max-w-xl font-light"
              style={{
                color: "#590D22",
              }}
            >
              The best part of every project isn't the finished product. It's
              who I become in the process. ♡
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* View My Work */}
            <Button
              className="text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              style={{
                backgroundColor: "#A4133C",
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
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderColor: "#800F2F",
                color: "#800F2F",
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
