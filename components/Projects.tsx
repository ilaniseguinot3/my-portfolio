"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A cool project built with Next.js and Tailwind.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Another project showcasing interactivity and animations.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "A fun project using modern web technologies.",
    link: "#",
  },
];

const Projects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const getDistanceFromCursor = (element: HTMLElement | null) => {
    if (!element) return 1000;
    const rect = element.getBoundingClientRect();
    const sectionRect = sectionRef.current?.getBoundingClientRect();
    if (!sectionRect) return 1000;
    
    const elementCenterX = rect.left + rect.width / 2 - sectionRect.left;
    const elementCenterY = rect.top + rect.height / 2 - sectionRect.top;
    
    const distance = Math.sqrt(
      Math.pow(mousePos.x - elementCenterX, 2) + 
      Math.pow(mousePos.y - elementCenterY, 2)
    );
    
    return distance;
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#CBDFBD] relative"
      onMouseMove={handleMouseMove}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-[#FFFFFF]">My Projects</h2>
      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            mousePos={mousePos}
            getDistanceFromCursor={getDistanceFromCursor}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{
  project: Project;
  mousePos: { x: number; y: number };
  getDistanceFromCursor: (element: HTMLElement | null) => number;
}> = ({ project, mousePos, getDistanceFromCursor }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const distance = getDistanceFromCursor(cardRef.current);
  const maxDistance = 300; // Distance threshold for color effect
  const colorIntensity = Math.max(0, 1 - distance / maxDistance);

  const getLetterColor = (letterIndex: number, totalLetters: number) => {
    const gray = "#374151"; // text-gray-700
    const orange = "#FFC459";
    
    if (colorIntensity === 0) return gray;
    
    // Create a gradient effect across letters based on cursor proximity
    const letterProgress = letterIndex / totalLetters;
    const adjustedIntensity = colorIntensity * (1 - Math.abs(letterProgress - 0.5) * 0.5);
    
    // Interpolate between gray and orange
    const r = Math.round(55 + (255 - 55) * adjustedIntensity);
    const g = Math.round(65 + (196 - 65) * adjustedIntensity);
    const b = Math.round(81 + (89 - 81) * adjustedIntensity);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  const titleLetters = project.title.split("");
  const descLetters = project.description.split("");

  return (
    <motion.a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-2xl font-semibold mb-2">
        {titleLetters.map((letter, idx) => (
          <motion.span
            key={idx}
            style={{ 
              color: getLetterColor(idx, titleLetters.length),
              display: 'inline-block'
            }}
            animate={{
              color: getLetterColor(idx, titleLetters.length)
            }}
            transition={{ duration: 0.2 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </h3>
      <p className="text-gray-700">
        {descLetters.map((letter, idx) => (
          <motion.span
            key={idx}
            style={{ 
              color: getLetterColor(idx, descLetters.length),
              display: 'inline-block'
            }}
            animate={{
              color: getLetterColor(idx, descLetters.length)
            }}
            transition={{ duration: 0.2 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </p>
    </motion.a>
  );
};

export default Projects;