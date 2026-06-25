"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

type Project = {
  title: string;
  video?: string;
  image?: string;
  website?: string;
  technologies: string[];
  description: string;
  link?: string;
  hideButton?: boolean;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
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
      video:
        "https://www.youtube.com/embed/DRmWa-gMS98?si=FM2ImqZPlGNtvRWd&amp;start=190",
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
      title: "Minesweeper (C++ & SFML)",
      video: "https://www.youtube.com/embed/6pCcPW872BA?si=Fpn7uNhvwe1JDUhV",
      technologies: ["C++", "SFML"],
      description:
        "Classic Minesweeper game built in C++ using SFML. Features grid-based gameplay, flagging mechanics, and real-time interactions. Fully playable with dynamic graphics and responsive controls.",
      hideButton: true,
    },
  ];

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

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
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
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 items-stretch bg-[#172A3A] text-[#EDE4D3] rounded-sm p-6 md:p-8 shadow-xl`}
    >
      {/* Project Media */}
      <div className="w-full md:w-1/2">
        <div className="relative w-full h-64 md:h-full min-h-[16rem] rounded-sm overflow-hidden shadow-lg">
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
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
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
