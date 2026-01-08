"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const splitLetters = (text: string) => text.split("");

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const projects = [
    {
      title: "Gator Marketplace",
      image: "/gatormarketplace.jpg",
      technologies: ["React", "Vite", "MongoDB", "Auth0", "CSS", "JavaScript"],
      description:
        "Built a full-stack marketplace for UF students to safely buy, sell, and trade items within their campus community. Designed the React frontend with Figma components and CSS for seamless navigation.",
      link: "https://github.com/yourusername/gator-marketplace",
    },
    {
      title: "Culinara: Meal Planner & Pantry",
      image: "/culinara.jpg",
      technologies: ["React Native", "Expo", "TypeScript", "Supabase"],
      description:
        "Engineered a mobile recipe app with dynamic CRUD operations and Supabase authentication. Crafted interactive UI components, including modals, scrollable grids, and editable meal plans.",
      link: "https://github.com/yourusername/culinara",
    },
    {
      title: "Aetherion: 2D Platformer",
      image: "/aetherion.jpg",
      technologies: ["Unity", "C#"],
      description:
        "Developed core mechanics, enemy AI, and level design for a 2D platformer. Integrated original artwork, sound design, and dynamic lighting for immersive gameplay.",
      link: "https://github.com/yourusername/aetherion",
    },
    {
      title: "Legend of Zelda Temple",
      image: "/zelda-temple.jpg",
      technologies: ["Blender"],
      description:
        "Modeled and textured a game-accurate temple in Blender with a 3-person team. Applied HDR environments, UV unwrapping, and advanced lighting for realistic interior and exterior rendering.",
      link: "https://www.artstation.com/yourusername",
    },
    {
      title: "FlixHabit",
      image: "/flixhabit.jpg",
      technologies: ["C++", "JSON", "Graphs", "MinHeap"],
      description:
        "Analyzes Netflix-style user data to recommend movies based on genre similarity and user preferences. Features data visualization and JSON export for a frontend interface.",
      link: "https://github.com/yourusername/flixhabit",
    },
    {
      title: "Portfolio Website",
      image: "/portfolio.jpg",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      description:
        "Developed a fully responsive personal portfolio showcasing technical projects, leadership experiences, and creative design with smooth animations.",
      link: "https://yourwebsite.com",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-gradient-to-b from-[#27321F] to-[#849F8C] py-20 px-6 overflow-hidden"
      id="projects"
    >
      <motion.div 
        className="relative max-w-6xl mx-auto z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Title */}
        <HeaderWithAura
          text="Technical Projects"
          className="text-5xl font-bold text-center mb-16 text-[#F6F4D2]"
          mouseX={mouseX}
          mouseY={mouseY}
          variants={itemVariants}
        />

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              variants={itemVariants}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          variants={itemVariants}
        >
          <p className="text-[#F6F4D2] text-xl mb-6">
            Want to work together or just say hi?
          </p>
          <motion.button
            className="px-8 py-4 bg-[#FFC459] text-gray-900 font-semibold rounded-full text-lg shadow-lg shadow-[#FFC459]/40"
            whileHover={{ scale: 1.05, backgroundColor: "#FFD380" }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* --- Subcomponents --- */

const HeaderWithAura = ({ text, className = "", variants, mouseX, mouseY }: any) => (
  <motion.h3 className={className} variants={variants}>
    {splitLetters(text).map((letter: string, i: number) => (
      <LetterSpan
        key={i}
        letter={letter}
        mouseX={mouseX}
        mouseY={mouseY}
        initialColor="#F6F4D2"
      />
    ))}
  </motion.h3>
);

const LetterSpan = ({ letter, mouseX, mouseY, initialColor }: any) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    const update = () => {
      const latestX = mouseX.get();
      const latestY = mouseY.get();
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const section = ref.current.closest("section");
      if (!section) return;
      const sectionRect = section.getBoundingClientRect();
      const relX = rect.left + rect.width / 2 - sectionRect.left;
      const relY = rect.top + rect.height / 2 - sectionRect.top;
      const distance = Math.hypot(latestX - relX, latestY - relY);
      const intensity = Math.max(0, 1 - distance / 250);
      const start = [246, 244, 210];
      const end = [255, 196, 89];
      const r = Math.round(start[0] + (end[0] - start[0]) * intensity);
      const g = Math.round(start[1] + (end[1] - start[1]) * intensity);
      const b = Math.round(start[2] + (end[2] - start[2]) * intensity);
      setColor(`rgb(${r},${g},${b})`);
    };
    const subX = mouseX.onChange(update);
    const subY = mouseY.onChange(update);
    return () => {
      subX();
      subY();
    };
  }, [mouseX, mouseY]);

  return (
    <motion.span ref={ref} style={{ color, display: "inline-block" }}>
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

const ProjectCard = ({ project, index, variants }: any) => {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col md:flex-row gap-8 items-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl"
    >
      {/* Project Image */}
      <div className="w-full md:w-1/2">
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      {/* Project Info */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-3xl font-bold text-[#F6F4D2]">{project.title}</h3>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-4 py-2 bg-[#FFC459]/20 text-[#FFC459] rounded-full text-sm font-medium border border-[#FFC459]/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-[#F6F4D2]/90 text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Link */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FFC459] text-gray-900 px-6 py-3 rounded-full font-semibold shadow-md"
          whileHover={{ scale: 1.05, backgroundColor: "#FFD380" }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
          <span>→</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Projects;