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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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
      "hover:text-[#A4133C]",
      "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-[#A4133C] after:transition-all after:duration-300",
      activeId === id ? "after:w-full" : "after:w-0",
      extra,
    );

  const linkStyle = (id: string) => ({
    color: activeId === id ? "#A4133C" : "#800F2F",
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
                background:
                  "linear-gradient(135deg, rgba(255, 248, 247, 0.85) 0%, rgba(248, 239, 240, 0.85) 45%, rgba(242, 227, 230, 0.85) 75%, rgba(233, 213, 218, 0.85) 100%)",
                boxShadow: "0 2px 10px rgba(89, 13, 34, 0.12)",
              }
            : undefined
        }
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-serif-display font-semibold transition-colors"
            style={{
              color: "#800F2F",
            }}
          >
            Sanila Chowdhury
          </a>

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
              color: "#800F2F",
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-transform duration-300 transform flex flex-col items-center justify-center",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        style={{
          background:
            "linear-gradient(135deg, #FFF8F7 0%, #F8F0F1 35%, #EBD8DD 65%, #D9B8C0 100%)",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 transition-colors"
          style={{
            color: "#800F2F",
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
