"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

type Category = "react" | "unity" | "cpp" | "uiux";
type Tab = "all" | Category;

type Project = {
  title: string;
  category: Category;
  video?: string;
  image?: string;
  website?: string;
  technologies: string[];
  description: string;
  link?: string;
  hideButton?: boolean;
};

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "react", label: "React" },
  { id: "unity", label: "Unity" },
  { id: "cpp", label: "C++/Java" },
  { id: "uiux", label: "UI/UX Design" },
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const projects: Project[] = [
    {
      title: "Gator Marketplace",
      category: "react",
      video: "https://www.youtube.com/embed/1UYjbEZ3ttc?si=BwtTr0_wYgSTmpBt",
      technologies: ["React", "Vite", "MongoDB", "Auth0", "CSS", "JavaScript"],
      description:
        "Built a full-stack marketplace for UF students to safely buy, sell, and trade items within their campus community. Designed the React frontend with Figma components and CSS for seamless navigation.",
      link: "https://github.com/am-ndaa/Gator-Marketplace",
    },
    {
      title: "Culinara: Meal Planner & Pantry",
      category: "react",
      video:
        "https://www.youtube.com/embed/DRmWa-gMS98?si=FM2ImqZPlGNtvRWd&amp;start=190",
      technologies: ["React Native", "Expo", "TypeScript", "Supabase"],
      description:
        "Engineered a mobile recipe app with dynamic CRUD operations and Supabase authentication. Crafted interactive UI components, including modals, scrollable grids, and editable meal plans.",
      link: "https://github.com/PatrickLeimer/Culinara",
    },
    {
      title: "Thorn & Thistle: Apothecary Simulator",
      category: "unity",
      video: "https://www.youtube.com/embed/X6XT0dCsiCk?si=2Yava_ouHokdByr6",
      technologies: ["Unity", "C#"],
      description:
        "Served as Lead Programmer for a cozy apothecary simulation game where players prescribe treatments for customer ailments, delegating development tasks and coordinating gameplay system implementation. Developed backend systems including inventory management, potion crafting logic, and diagnosis mechanics.",
      link: "https://github.com/ilaniseguinot3/ThornandThistle",
    },
    {
      title: "Aetherion: 2D Platformer",
      category: "unity",
      video: "https://www.youtube.com/embed/iGfUWZmp0jg?si=lF4Z_Odhse5Mcfwt",
      technologies: ["Unity", "C#"],
      description:
        "Developed core mechanics, enemy AI, and level design for a 2D platformer. Integrated original artwork, sound design, and dynamic lighting for immersive gameplay.",
    },
    {
      title: "Java Hollow: VR Forest Café Experience",
      category: "unity",
      video: "https://www.youtube.com/embed/Ed-hmlwKeYI?si=ZUk2PRft1R_rxGKN",
      technologies: [
        "Unity",
        "C#",
        "VR Interaction",
        "Spatial Audio",
        "Dynamic Lighting",
      ],
      description:
        "Created an immersive VR café experience set in a forest hollow. Users can fully interact with the coffee station: pour espresso, add milk, refill the machine, and enjoy their virtual drink. Integrated dynamic day/night lighting, realistic ambient sounds, and environmental interactions for a relaxing, engaging experience.",
      link: "https://github.com/danielromerom/Java-Hollow",
    },
    {
      title: "Legend of Zelda Temple",
      category: "unity",
      image: "/zelda.png",
      technologies: ["Blender"],
      description:
        "Modeled and textured a game-accurate temple in Blender with a 3-person team. Applied HDR environments, UV unwrapping, and advanced lighting for realistic interior and exterior rendering.",
      link: "https://drive.google.com/drive/folders/1cO88gRWBYfKZy1gJJbvihbxe9ajoR6nU?usp=drive_link",
    },
    {
      title: "FlixHabit",
      category: "cpp",
      image: "/flixhabit.png",
      website: "https://flixhabit.netlify.app/",
      technologies: ["C++", "JSON", "Graphs", "MinHeap"],
      description:
        "Analyzes Netflix-style user data to recommend movies based on genre similarity and user preferences. Features data visualization and JSON export for a frontend interface.",
      link: "https://github.com/vincinious/FlixHabit",
    },
    {
      title: "Minesweeper (C++ & SFML)",
      category: "cpp",
      video: "https://www.youtube.com/embed/6pCcPW872BA?si=Fpn7uNhvwe1JDUhV",
      technologies: ["C++", "SFML"],
      description:
        "Classic Minesweeper game built in C++ using SFML. Features grid-based gameplay, flagging mechanics, and real-time interactions. Fully playable with dynamic graphics and responsive controls.",
      hideButton: true,
    },
  ];

  const visibleProjects =
    activeTab === "all"
      ? [...projects].sort((a, b) => a.title.localeCompare(b.title))
      : projects.filter((project) => project.category === activeTab);

  return (
    <section
      id="projects"
      className="relative bg-[#ECE5D8] text-[#172A3A] py-24 px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="04"
          label="Selected Work"
          title="Technical Projects"
        />

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#172A3A]/15">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`relative px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                activeTab === tab.id
                  ? "text-[#9B2D22]"
                  : "text-[#172A3A]/60 hover:text-[#172A3A]"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.span
                  layoutId="projectsTabUnderline"
                  className="absolute left-0 right-0 -bottom-px h-0.5 bg-[#9B2D22]"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className={
              visibleProjects.length > 0
                ? "grid grid-cols-1 md:grid-cols-2 gap-8"
                : ""
            }
          >
            {visibleProjects.length > 0 ? (
              visibleProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-[#172A3A]/25 py-20 text-center">
                <span className="text-3xl">✦</span>
                <p className="text-lg font-semibold text-[#172A3A]">
                  Coming soon
                </p>
                <p className="max-w-md text-[#172A3A]/60">
                  New UI/UX work is in progress — check back shortly.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-6 bg-[#172A3A] text-[#EDE4D3] rounded-sm p-6 md:p-8 shadow-xl h-full"
    >
      {/* Project Media */}
      <div className="w-full">
        <div className="relative w-full h-56 rounded-sm overflow-hidden shadow-lg">
          {project.video ? (
            <iframe
              src={project.video}
              title={project.title}
              className="w-full h-full rounded-sm"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : project.website ? (
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </a>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-sm"
            />
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="w-full flex flex-col flex-1 space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold text-[#EDE4D3]">
          {project.title}
        </h3>

        <span className="block w-10 h-px bg-[#C2A36B]" />

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-[#C2A36B]/15 text-[#C2A36B] rounded-sm text-xs font-medium border border-[#C2A36B]/30 uppercase tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-[#EDE4D3]/80 leading-relaxed">
          {project.description}
        </p>

        {/* Link */}
        {!project.hideButton && project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start bg-[#9B2D22] text-[#EDE4D3] px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-[0.2em] shadow-md mt-2"
            whileHover={{ scale: 1.04, backgroundColor: "#B23728" }}
            whileTap={{ scale: 0.96 }}
          >
            {project.title === "Legend of Zelda Temple" ? (
              <img
                src="/googledrive.png"
                alt="Google Drive"
                className="w-4 h-4 object-contain"
              />
            ) : (
              <img
                src="/github.svg"
                alt="GitHub"
                className="w-4 h-4 object-contain invert"
              />
            )}
            View Project →
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
