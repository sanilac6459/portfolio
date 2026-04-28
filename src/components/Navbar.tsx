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
            ? "bg-portfolio-cream/90 backdrop-blur-sm shadow-sm"
            : "bg-transparent",
        )}
      >
        <div className="container flex items-center justify-between">
          <Link
            to="/"
            className="text-xl md:text-2xl font-serif-display font-semibold text-portfolio-navy"
          >
            Sanila Chowdhury
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-portfolio-navy hover:text-portfolio-purple font-medium font-serif-display transition-colors relative",
                    isActive &&
                      "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-full after:bg-portfolio-purple",
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden text-portfolio-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu rendered outside header */}
      <div
        className={cn(
          "fixed inset-0 bg-portfolio-cream z-50 md:hidden transition-transform duration-300 transform flex flex-col items-center justify-center",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          className="absolute top-4 right-4 text-portfolio-navy"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col space-y-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-xl font-medium text-portfolio-navy hover:text-portfolio-purple font-serif-display transition-colors relative",
                  isActive &&
                    "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-full after:bg-portfolio-purple",
                )
              }
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
