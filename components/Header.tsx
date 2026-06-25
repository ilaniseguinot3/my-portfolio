"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  // --- Scroll detection: active section + header background ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      let currentSection = "";
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section.id;
            break;
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#172A3A]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-8 lg:px-12 py-6 flex items-center justify-between">
        {/* Monogram */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl tracking-[0.3em] text-[#EDE4D3] font-bold"
        >
          I<span className="text-[#C2A36B]"> / </span>S
        </button>

        {/* Center nav links */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                activeSection === item.id
                  ? "text-[#C2A36B]"
                  : "text-[#EDE4D3]/80 hover:text-[#EDE4D3]"
              }`}
              whileHover={{ y: -2 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-px bg-[#C2A36B]"
                  layoutId="nav-underline"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* CTA button */}
        <motion.button
          onClick={() => scrollToSection("contact")}
          className="bg-[#9B2D22] text-[#EDE4D3] text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3 rounded-sm shadow-md"
          whileHover={{ scale: 1.05, backgroundColor: "#B23728" }}
          whileTap={{ scale: 0.96 }}
        >
          Let&apos;s Connect
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Header;
