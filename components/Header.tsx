"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "journey", label: "Journey" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Me" },
  ];

  // --- Scroll detection logic for active section ---
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      let currentSection = "";

      // Find which section is in the viewport
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section.id;
            break;
          }
        }
      }

      // Fallback: pick the section closest to top if none intersect cleanly
      if (!currentSection) {
        let minDistance = Infinity;
        for (const section of sections) {
          if (section.element) {
            const rect = section.element.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = section.id;
            }
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial highlight on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 translate-x-205 translate-y-3"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex gap-8 relative">
            {/* Background bubble */}
            <div className="absolute inset-0 -inset-x-6 -inset-y-3 bg-black/20 backdrop-blur-sm rounded-full"></div>

            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-lg font-medium transition-colors z-10 ${
                  activeSection === item.id
                    ? "text-[#FFC459]"
                    : "text-[#D3E4E4]"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFC459]"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
