import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const roles = [
  "Software Engineer",
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
      className="min-h-screen flex items-center relative overflow-hidden grain-overlay"
      style={{ background: "var(--gradient-soft)" }}
    >
      <div className="container mx-auto px-4 z-10 w-full">
        <div className="animate-fade-in max-w-3xl">
          <p className="section-eyebrow text-xs sm:text-sm whitespace-nowrap">
            — Welcome To My Portfolio —
          </p>
          <h1 className="font-serif-display text-6xl md:text-6xl font-semibold mb-6 text-portfolio-navy leading-[0.95]">
            <span className="block">Hi! I'm Sanila</span>
            <span className="block mt-2 italic text-portfolio-purple text-4xl md:text-6xl">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <div className="mb-8">
            <p className="text-base md:text-lg text-portfolio-navy max-w-xl  font-light">
              The best part of every project isn't the finished product. It's
              who I become in the process. ♡
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-portfolio-navy hover:bg-portfolio-navy/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link to="/about">About Me</Link>
            </Button>
            <Button
              variant="outline"
              className="border-portfolio-navy/40 text-portfolio-navy  hover:bg-portfolio-navy/5 px-8 py-6 rounded-full backdrop-blur-sm bg-white/30"
              asChild
            >
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
