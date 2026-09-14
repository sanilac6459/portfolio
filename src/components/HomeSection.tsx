import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const roles = [
  "Software Engineer",
  "CS Student at Hunter College",
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
      className="min-h-screen flex items-center relative overflow-hidden grain-overlay"
      style={{
        background:
          "linear-gradient(135deg, #FFF8F7 0%, #F8F0F1 35%, #EBD8DD 65%, #D9B8C0 100%)",
      }}
    >
      <div className="container mx-auto px-4 z-10 w-full">
        <div className="animate-fade-in max-w-3xl">
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
          <h1 className="font-serif-display text-6xl md:text-6xl font-semibold mb-6 leading-[0.95]">
            {/* Name */}
            <span
              className="block text-4xl md:text-6xl"
              style={{
                color: "#800F2F",
              }}
            >
              Hi! I'm Sanila
            </span>

            {/* Rotating Roles */}
            <span
              className="block mt-2 italic text-4xl md:text-6xl"
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
          <div className="flex flex-wrap gap-4">
            {/* About Me */}
            <Button
              className="text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              style={{
                backgroundColor: "#A4133C",
              }}
              asChild
            >
              <Link to="/about">About Me</Link>
            </Button>

            {/* View My Work */}
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
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
