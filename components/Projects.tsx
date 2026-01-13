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
      video: "https://www.youtube.com/embed/1UYjbEZ3ttc?si=BwtTr0_wYgSTmpBt",
      technologies: ["React", "Vite", "MongoDB", "Auth0", "CSS", "JavaScript"],
      description:
        "Built a full-stack marketplace for UF students to safely buy, sell, and trade items within their campus community. Designed the React frontend with Figma components and CSS for seamless navigation.",
      link: "https://github.com/am-ndaa/Gator-Marketplace",
    },
    {
      title: "Culinara: Meal Planner & Pantry",
      video: "https://www.youtube.com/embed/DRmWa-gMS98?si=FM2ImqZPlGNtvRWd&amp;start=190",
      technologies: ["React Native", "Expo", "TypeScript", "Supabase"],
      description:
        "Engineered a mobile recipe app with dynamic CRUD operations and Supabase authentication. Crafted interactive UI components, including modals, scrollable grids, and editable meal plans.",
      link: "https://github.com/PatrickLeimer/Culinara",
    },
    {
      title: "Aetherion: 2D Platformer",
      video: "https://www.youtube.com/embed/iGfUWZmp0jg?si=lF4Z_Odhse5Mcfwt",
      technologies: ["Unity", "C#"],
      description:
        "Developed core mechanics, enemy AI, and level design for a 2D platformer. Integrated original artwork, sound design, and dynamic lighting for immersive gameplay.",
    },
    {
      title: "Legend of Zelda Temple",
      image: "/zelda.png",
      technologies: ["Blender"],
      description:
        "Modeled and textured a game-accurate temple in Blender with a 3-person team. Applied HDR environments, UV unwrapping, and advanced lighting for realistic interior and exterior rendering.",
      link: "https://drive.google.com/drive/folders/1cO88gRWBYfKZy1gJJbvihbxe9ajoR6nU?usp=drive_link",
    },
    {
      title: "FlixHabit",
      image: "/flixhabit.png",
      website: "https://flixhabit.netlify.app/",
      technologies: ["C++", "JSON", "Graphs", "MinHeap"],
      description:
        "Analyzes Netflix-style user data to recommend movies based on genre similarity and user preferences. Features data visualization and JSON export for a frontend interface.",
      link: "https://github.com/vincinious/FlixHabit",
    },
    {
      title: "Java Hollow: VR Forest Café Experience",
      video: "https://www.youtube.com/embed/Ed-hmlwKeYI?si=ZUk2PRft1R_rxGKN",
      technologies: ["Unity", "C#", "VR Interaction", "Spatial Audio", "Dynamic Lighting"],
      description:
        "Created an immersive VR café experience set in a forest hollow. Users can fully interact with the coffee station: pour espresso, add milk, refill the machine, and enjoy their virtual drink. Integrated dynamic day/night lighting, realistic ambient sounds, and environmental interactions for a relaxing, engaging experience.",
      link: "https://github.com/danielromerom/Java-Hollow",
    },
    {
      title: "Minesweeper (C++ & SFML)",
      video: "https://www.youtube.com/embed/6pCcPW872BA?si=Fpn7uNhvwe1JDUhV",
      technologies: ["C++", "SFML"],
      description:
        "Classic Minesweeper game built in C++ using SFML. Features grid-based gameplay, flagging mechanics, and real-time interactions. Fully playable with dynamic graphics and responsive controls.",
      hideButton: true,
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
            <ProjectCard key={index} project={project} index={index} variants={itemVariants} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

/* --- Subcomponents --- */

const HeaderWithAura = ({ text, className = "", variants, mouseX, mouseY }: any) => (
  <motion.h3 className={className} variants={variants}>
    {splitLetters(text).map((letter: string, i: number) => (
      <LetterSpan key={i} letter={letter} mouseX={mouseX} mouseY={mouseY} initialColor="#F6F4D2" />
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
      {/* Project Media */}
      <div className="w-full md:w-1/2">
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
          {project.video ? (
            <iframe
              src={project.video}
              title={project.title}
              className="w-full h-full object-cover rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : project.website ? (
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </a>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-100 transition-transform duration-500 rounded-xl"
            />
          )}
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
              className="px-4 py-2 bg-[#FFC459]/20 text-[#F6F4D2] rounded-full text-sm font-medium border border-[#FFC459]/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-[#F6F4D2]/90 text-lg leading-relaxed">{project.description}</p>

        {/* GitHub / Google Drive Link */}
        {!project.hideButton && project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFC459] text-gray-900 px-6 py-3 rounded-full font-semibold shadow-md"
            whileHover={{ scale: 1.05, backgroundColor: "#FFD380" }}
            whileTap={{ scale: 0.95 }}
          >
            {project.title === "Legend of Zelda Temple" ? (
              <img
                src="/googledrive.png"
                alt="Google Drive"
                className="w-5 h-5 object-contain"
              />
            ) : (
              <img
                src="/github.svg"
                alt="GitHub"
                className="w-5 h-5 object-contain"
              />
            )}
            View Project
            <span>→</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;