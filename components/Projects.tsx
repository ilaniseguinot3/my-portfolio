"use client";
import { motion } from "framer-motion";

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
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
