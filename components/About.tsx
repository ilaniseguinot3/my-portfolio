"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const splitLetters = (text: string) => text.split("");

const About: React.FC = () => {
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

  const skills = {
    languages: ["C++", "Python", "Java", "JavaScript", "TypeScript", "C#", "HTML/CSS", "SQL"],
    frameworks: ["React", "React Native", "Node.js", "MongoDB", "Firebase", "Supabase", "Vite", "Expo"],
    tools: ["Unity", "Blender", "Figma", "Git", "VSCode", "Jira", "Maya", "Processing"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-[#849F8C] to-[#849F8C] py-20 px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Aura Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-75"
        style={{
          background: `radial-gradient(500px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(255, 255, 255, 0.18), transparent 50%)`,
          mixBlendMode: "overlay",
        }}
      />

      <motion.div
        className="relative max-w-6xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Title with aura letters */}
        <HeaderWithAura 
          text="About Me" 
          className="text-5xl font-bold text-center mb-16 text-[#F6F4D2]" 
          mouseX={mouseX} 
          mouseY={mouseY} 
          variants={itemVariants} 
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <HeaderWithAura 
                text="Hi, I'm Ilani Seguinot"
                className="text-3xl font-semibold text-[#F6F4D2] mb-4"
                mouseX={mouseX}
                mouseY={mouseY}
              />
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
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              variants={itemVariants}
            >
              <HeaderWithAura 
                text="Beyond the Code"
                className="text-2xl font-semibold text-[#F6F4D2] mb-4"
                mouseX={mouseX}
                mouseY={mouseY}
              />
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
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <HeaderWithAura 
                text="Technical Skills"
                className="text-2xl font-semibold text-[#F6F4D2] mb-6"
                mouseX={mouseX}
                mouseY={mouseY}
              />

              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="mb-6">
                  <h4 className="text-lg font-semibold text-[#3A3A3A] mb-3 capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
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
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// 🔸 HeaderWithAura and LetterSpan identical logic to Hero
const HeaderWithAura: React.FC<{
  text: string;
  className?: string;
  variants?: any;
  mouseX: any;
  mouseY: any;
}> = ({ text, className = "", variants, mouseX, mouseY }) => {
  return (
    <motion.h3 className={className} variants={variants}>
      {splitLetters(text).map((letter, index) => (
        <LetterSpan
          key={index}
          letter={letter}
          mouseX={mouseX}
          mouseY={mouseY}
          initialColor="#F6F4D2"
        />
      ))}
    </motion.h3>
  );
};

const LetterSpan: React.FC<{
  letter: string;
  mouseX: any;
  mouseY: any;
  initialColor: string;
}> = ({ letter, mouseX, mouseY, initialColor }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    const update = () => {
      const latestX = mouseX.get();
      const latestY = mouseY.get();
      updateColor(latestX, latestY);
    };

    const unsubscribeX = mouseX.onChange(update);
    const unsubscribeY = mouseY.onChange(update);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY]);

  const updateColor = (x: number, y: number) => {
    if (!letterRef.current) return;

    const rect = letterRef.current.getBoundingClientRect();
    const letterCenterX = rect.left + rect.width / 2;
    const letterCenterY = rect.top + rect.height / 2;
    const section = letterRef.current.closest("section");
    if (!section) return;

    const sectionRect = section.getBoundingClientRect();
    const relX = letterCenterX - sectionRect.left;
    const relY = letterCenterY - sectionRect.top;

    const distance = Math.sqrt(Math.pow(x - relX, 2) + Math.pow(y - relY, 2));
    const maxDistance = 250;
    const intensity = Math.max(0, 1 - distance / maxDistance);

    if (intensity === 0) {
      setColor(initialColor);
      return;
    }

    // Interpolate between initialColor (#F6F4D2) and #FFC459
    const start = [246, 244, 210];
    const end = [255, 196, 89];

    const r = Math.round(start[0] + (end[0] - start[0]) * intensity);
    const g = Math.round(start[1] + (end[1] - start[1]) * intensity);
    const b = Math.round(start[2] + (end[2] - start[2]) * intensity);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <motion.span ref={letterRef} style={{ color, display: "inline-block" }}>
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

export default About;
