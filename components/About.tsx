"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const splitLetters = (text: string) => text.split("");

const AboutMain: React.FC = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-[#849F8C] to-[#849F8C] py-20 px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
      id="about"
    >
      {/* Background Aura */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-75"
        style={{
          background: `radial-gradient(500px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(255,255,255,0.18), transparent 50%)`,
          mixBlendMode: "overlay",
        }}
      />

      <motion.div
        className="relative max-w-6xl mx-auto z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <HeaderWithAura
          text="About Me"
          className="text-5xl font-bold text-center mb-16 text-[#F6F4D2]"
          mouseX={mouseX}
          mouseY={mouseY}
          variants={itemVariants}
        />

        {/* Intro */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <HeaderWithAura
              text="Hi Everyone!"
              className="text-3xl font-semibold text-[#F6F4D2] mb-6 text-center"
              mouseX={mouseX}
              mouseY={mouseY}
            />
            <p className="text-[#3A3A3A] text-lg leading-relaxed text-center">
              My journey into technology began in middle school robotics, where I discovered the joy of building
              something bigger than myself. Through teamwork and collaboration, I learned that the best innovations
              happen when diverse minds come together. That spark has grown into a passion for using technology to
              connect people and empower communities—a mission I've pursued through my college years at UF, especially
              within the vibrant Hispanic community on campus. Today, I blend technical excellence with creative design,
              driven by the belief that technology's greatest power lies in bringing people together.
            </p>
          </div>
        </motion.div>

        {/* Student ID + Skills */}
        <motion.div variants={itemVariants} className="mb-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Student ID */}
          <div>
            <HeaderWithAura
              text="Student ID"
              className="text-3xl font-semibold text-[#F6F4D2] mb-6 text-center md:text-left"
              mouseX={mouseX}
              mouseY={mouseY}
            />
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl p-8 border-2 border-[#FFC459]/30 shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#FFC459]/20">
                <div>
                  <h3 className="text-3xl font-bold text-[#F6F4D2]">Ilani Seguinot</h3>
                  <p className="text-[#FFC459] font-medium">Student Profile</p>
                </div>
                <div className="w-20 h-20 bg-[#FFC459]/20 rounded-full flex items-center justify-center border-2 border-[#FFC459]">
                  <span className="text-3xl">🎓</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Info label="Major" value="Computer Science & Digital Arts" />
                  <Info label="University" value="University of Florida" />
                  <Info label="Graduation" value="May 2027" />
                </div>
                <div className="space-y-4">
                  <Info label="GPA" value="3.81 / 4.0" />
                  <Info label="Honors" value="Benacquisto Scholar / National Merit Finalist" />
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <HeaderWithAura
              text="Technical Skills"
              className="text-3xl font-semibold text-[#F6F4D2] mb-6 text-center md:text-left"
              mouseX={mouseX}
              mouseY={mouseY}
            />
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full flex flex-wrap justify-center md:justify-start gap-4">
              {Object.entries(skills).map(([category, list]) => (
                <div key={category} className="w-full mb-4">
                  <h4 className="text-lg font-semibold text-[#F6F4D2] mb-2 capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {list.map((skill) => (
                      <motion.span
                        key={skill}
                        className="bg-white/10 rounded-full px-4 py-2 text-[#3A3A3A] font-medium border border-white/20 cursor-pointer"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255,196,89,0.2)",
                          borderColor: "#FFC459",
                          color: "#FFC459",
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Info = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-[#FFC459] text-sm font-semibold uppercase tracking-wide mb-1">{label}</p>
    <p className="text-[#F6F4D2] font-medium">{value}</p>
  </div>
);

const HeaderWithAura = ({
  text,
  className = "",
  variants,
  mouseX,
  mouseY,
}: any) => (
  <motion.h3 className={className} variants={variants}>
    {splitLetters(text).map((letter: string, i: number) => (
      <LetterSpan key={i} letter={letter} mouseX={mouseX} mouseY={mouseY} initialColor="#F6F4D2" />
    ))}
  </motion.h3>
);

const LetterSpan = ({
  letter,
  mouseX,
  mouseY,
  initialColor,
}: any) => {
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

export default AboutMain;
