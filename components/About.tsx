"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const skills = {
    languages: ["C++", "Python", "Java", "JavaScript", "TypeScript", "C#", "HTML/CSS", "SQL"],
    frameworks: ["React", "React Native", "Node.js", "MongoDB", "Firebase", "Supabase", "Vite", "Expo"],
    tools: ["Unity", "Blender", "Figma", "Git", "VSCode", "Jira", "Maya", "Processing"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-[#849F8C] to-[#849F8C] py-20 px-6"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-white"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Introduction */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-semibold text-[#FFC459] mb-4">
                Hi, I'm Ilani Seguinot
              </h3>
              <p className="text-[#3A3A3A] text-lg leading-relaxed mb-4">
                I'm a Computer Science and Digital Arts & Sciences student at the University of Florida, 
                graduating in May 2027. As a Benacquisto Scholar and National Merit Finalist with a 3.81 GPA, 
                I'm passionate about creating innovative software solutions that blend technical excellence with creative design.
              </p>
              <p className="text-[#3A3A3A] text-lg leading-relaxed">
                My journey spans full-stack web development, game design, 3D modeling, and mobile app creation. 
                I love building user-centered experiences that solve real problems—from marketplaces for campus 
                communities to interactive meal planning apps.
              </p>
            </div>

            {/* Beyond the Code */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-[#FFC459] mb-4">
                Beyond the Code
              </h3>
              <p className="text-[#3A3A3A] text-lg leading-relaxed mb-4">
                I'm passionate about building community and empowering others through technology. As Secretary 
                of the Hispanic Student Association, I lead our digital presence—directing our web team to 
                maintain both our public Wix site and a custom React/Firebase member portal.
              </p>
              <p className="text-[#3A3A3A] text-lg leading-relaxed mb-4">
                I also serve as UX/UI Director for SHPE UF, where I design user-friendly interfaces in Figma 
                for over 300 members. I love creating experiences that make technology more accessible and 
                intuitive for everyone.
              </p>
              <p className="text-[#3A3A3A] text-lg leading-relaxed">
                Previously, as Mentorship Director for HSA's Member Leadership Program, I coordinated 
                mentor-mentee pairings for 40 students and organized monthly challenges to foster 
                meaningful connections and growth within our community.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & More */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Technical Skills */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-[#FFC459] mb-6">
                Technical Skills
              </h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#3A3A3A] mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <motion.span
                      key={skill}
                      className="bg-white/10 rounded-full px-4 py-2 text-[#3A3A3A] font-medium border border-white/20"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255, 196, 89, 0.2)",
                        borderColor: "#FFC459",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#3A3A3A] mb-3">Frameworks & Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <motion.span
                      key={skill}
                      className="bg-white/10 rounded-full px-4 py-2 text-[#3A3A3A] font-medium border border-white/20"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255, 196, 89, 0.2)",
                        borderColor: "#FFC459",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#3A3A3A] mb-3">Tools & Design</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <motion.span
                      key={skill}
                      className="bg-white/10 rounded-full px-4 py-2 text-[#3A3A3A] font-medium border border-white/20"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255, 196, 89, 0.2)",
                        borderColor: "#FFC459",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Currently */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-[#FFC459] mb-4">
                Currently
              </h3>
              <p className="text-[#3A3A3A] text-lg leading-relaxed mb-3">
                Completing the IBM Full Stack Software Engineering Course and working on innovative 
                projects that push the boundaries of web and mobile development.
              </p>
              <p className="text-[#3A3A3A] text-lg leading-relaxed">
                Always eager to collaborate on meaningful projects and explore opportunities in 
                software engineering, UX/UI design, and creative technology.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <p className="text-[#3A3A3A] text-xl mb-6">
            Want to work together or just say hi?
          </p>
          <motion.button
            className="px-8 py-4 bg-[#FFC459] text-gray-900 font-semibold rounded-full text-lg"
            whileHover={{ scale: 1.05, backgroundColor: "#FFD380" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;