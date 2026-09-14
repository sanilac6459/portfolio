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
      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6",
          isScrolled || location.pathname !== "/"
            ? "backdrop-blur-sm"
            : "bg-transparent",
        )}
        style={
          isScrolled || location.pathname !== "/"
            ? {
                background:
                  "linear-gradient(135deg, #FFF8F7 0%, #F8EFF0 45%, #F2E3E6 75%, #E9D5DA 100%)",
                boxShadow: "0 2px 10px rgba(89, 13, 34, 0.12)",
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
              color: "#800F2F",
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
                      "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-full after:bg-[#A4133C]",
                  )
                }
                style={({ isActive }) => ({
                  color: isActive ? "#A4133C" : "#800F2F",
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
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-xl font-medium font-serif-display transition-colors relative",
                  "hover:text-[#A4133C]",
                  isActive &&
                    "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-full after:bg-[#A4133C]",
                )
              }
              style={({ isActive }) => ({
                color: isActive ? "#A4133C" : "#800F2F",
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
