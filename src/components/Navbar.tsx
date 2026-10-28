import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

// Same order as the sections on the page
const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);

      // Highlight the last section whose top has passed the navbar
      let current = "home";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 140) current = item.id;
      }
      // At the very bottom, the last section is the active one
      if (
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4
      ) {
        current = navItems[navItems.length - 1].id;
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string, extra = "") =>
    cn(
      "font-medium font-serif-display transition-colors relative",
      "hover:text-[color:var(--rose)]",
      "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-[color:var(--rose)] after:transition-all after:duration-300",
      activeId === id ? "after:w-full" : "after:w-0",
      extra,
    );

  const linkStyle = (id: string) => ({
    color: activeId === id ? "var(--rose)" : "var(--wine)",
  });

  return (
    <>
      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6",
          isScrolled ? "backdrop-blur-sm" : "bg-transparent",
        )}
        style={
          isScrolled
            ? {
                background: "var(--nav-bg)",
                boxShadow:
                  "0 2px 10px rgba(89, 13, 34, 0.12), inset 0 -1px 0 var(--line)",
              }
            : undefined
        }
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            aria-label="Sanila Chowdhury, back to top"
            className="font-mono-ui text-base sm:text-lg md:text-xl transition-colors whitespace-nowrap"
            style={{
              color: "var(--wine)",
            }}
          >
            <span style={{ color: "var(--rose)" }}>~/</span>sanila
          </a>

          <div className="flex items-center gap-5 md:gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className={linkClass(item.id)}
                  style={linkStyle(item.id)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden transition-colors"
              style={{
                color: "var(--wine)",
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Scroll progress line */}
        <div
          className="absolute left-0 bottom-0 h-[2px] pointer-events-none"
          style={{
            width: `${progress * 100}%`,
            background: "var(--rose)",
          }}
        />
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-transform duration-300 transform flex flex-col items-center justify-center",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        style={{
          background: "var(--page-bg)",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 transition-colors"
          style={{
            color: "var(--wine)",
          }}
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {/* Mobile Navigation */}
        <nav className="flex flex-col space-y-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={linkClass(item.id, "text-xl")}
              style={linkStyle(item.id)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
