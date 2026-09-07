import React, { useState, useEffect } from "react";

import { NavLink, Link, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";

import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Experience", to: "/experience" },
  { name: "Skills", to: "/skills" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6",
          isScrolled || location.pathname !== "/"
            ? "backdrop-blur-sm shadow-sm"
            : "bg-transparent",
        )}
        style={
          isScrolled || location.pathname !== "/"
            ? {
                background:
                  "linear-gradient(135deg, #fffaf9 0%, #f9f0f1 45%, #f3e9eb 75%, #e8f1ec 100%)",
              }
            : undefined
        }
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-serif-display font-semibold transition-colors"
            style={{
              color: "rgb(164 19 60 / var(--tw-text-opacity, 1))",
            }}
          >
            Sanila Chowdhury
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "font-medium font-serif-display transition-colors relative",
                    "hover:text-[#A4133C]",
                    isActive &&
                      "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-full after:bg-[#ED6E92]",
                  )
                }
                style={({ isActive }) => ({
                  color: isActive
                    ? "rgb(164 19 60 / var(--tw-text-opacity, 1))"
                    : "rgb(45 106 79 / var(--tw-text-opacity, 1))",
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-colors"
            style={{
              color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
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
            "linear-gradient(135deg, #fffaf9 0%, #f9f0f1 45%, #f3e9eb 75%, #e8f1ec 100%)",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 transition-colors"
          style={{
            color: "rgb(45 106 79 / var(--tw-text-opacity, 1))",
          }}
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {/* Mobile Navigation */}
        <nav className="flex flex-col space-y-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-xl font-medium font-serif-display transition-colors relative",
                  "hover:text-[#A4133C]",
                  isActive &&
                    "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-full after:bg-[#ED6E92]",
                )
              }
              style={({ isActive }) => ({
                color: isActive
                  ? "rgb(164 19 60 / var(--tw-text-opacity, 1))"
                  : "rgb(45 106 79 / var(--tw-text-opacity, 1))",
              })}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
