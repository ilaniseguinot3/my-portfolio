"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const splitLetters = (text: string) => text.split("");

const AboutMain: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [flipped, setFlipped] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const skills = {
    languages: ["C++", "Python", "Java", "JavaScript", "TypeScript", "C#", "HTML/CSS", "SQL"],
    frameworks: ["React", "React Native", "Node.js", "Next.js", "MongoDB", "Tailwind CSS", "Firebase", "Supabase", "Vite", "Expo"],
    tools: ["Unity", "Blender", "Figma", "Git", "VSCode", "Jira", "Maya", "Processing"],
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-[#849F8C] to-[#4A311F] py-20 px-6 overflow-hidden"
      // 4C8C7F possible
      onMouseMove={handleMouseMove}
      id="about"
    >
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

        {/* Intro + Photo Row */}
        <motion.div
          variants={itemVariants}
          className="mb-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Flippable Card */}
          <div
            className="relative w-full h-[480px] cursor-pointer perspective-1000"
            onClick={() => setFlipped(!flipped)}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front: About Me Text */}
              <div
                className="absolute w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                <HeaderWithAura
                  text="Hi Everyone!"
                  className="text-3xl font-semibold text-[#F6F4D2] mb-4"
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
                <p className="text-[#F6F4D2] text-lg leading-relaxed">
                  My technology journey began in middle school robotics, where I discovered the challenge and excitement of designing and building solutions alongside a team. At UF, I have grown this foundation by leading technical projects and initiatives within the Hispanic community, turning ideas into tangible solutions that connect and empower others. My work blends engineering expertise with creative problem-solving, guided by a commitment to leverage technology as a force for collaboration and meaningful impact.</p>
                <p className="mt-6 text-sm text-[#F6F4D2]/60 italic">
                  (Click or hover to flip my student profile!)
                </p>
              </div>

              {/* Back: Student ID */}
              <div
                className="absolute w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-[#FFC459]/30 shadow-2xl"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
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
                    <Info label="GPA" value="3.84 / 4.0" />
                  </div>
                  <div className="space-y-4">
                    <Info
                      label="Honors"
                      value={["Reitz Scholar", "Benacquisto Scholar", "National Merit Finalist", "Dean's List"]}
                    />
                  </div>
                </div>

                {/* <div className="mt-4 pt-6 border-t border-[#FFC459]/20">
                  <motion.a
                    href="https://drive.google.com/file/d/1XeX8cwktHAsFYxdrJ-jdX4WLcSKj2HMR/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#FFC459] text-gray-900 font-semibold py-4 rounded-xl"
                    whileHover={{ scale: 1.02, backgroundColor: "#FFD380" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img src="/googledrive.png" alt="Google Drive" className="w-5 h-5 object-contain" />
                    Open Resume
                  </motion.a>
                </div> */}
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(255,196,89,0.4)] border border-[#FFC459]/40">
              <img
                src="/headshot.jpg"
                alt="Ilani Seguinot"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div variants={itemVariants} className="max-w-6xl mx-auto relative">
          <HeaderWithAura
            text="Technical Skills"
            className="text-3xl font-semibold text-[#F6F4D2] mb-6 text-center md:text-left"
            mouseX={mouseX}
            mouseY={mouseY}
          />

          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col md:flex-row justify-between shadow-2xl">
            {Object.entries(skills).map(([category, list], index) => (
              <div
                key={category}
                className={`flex-1 ${
                  index !== Object.keys(skills).length - 1
                    ? "md:border-r md:border-[#FFC459]/30 md:pr-4 md:mr-3"
                    : ""
                } mb-6 md:mb-0`}
              >
                <h4 className="text-lg font-semibold text-[#F6F4D2] mb-4 capitalize">{category}</h4>
                <div className="grid grid-cols-3 gap-3">
                  {list.map((skill) => (
                    <motion.span
                      key={skill}
                      className="bg-white/10 rounded-full w-28 h-12 flex items-center justify-center text-[#F6F4D2] font-medium border border-white/20 cursor-pointer text-center shadow-sm"
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
        </motion.div>
      </motion.div>
    </section>
  );
};

const Info = ({ label, value }: { label: string; value: string | string[] }) => (
  <div>
    <p className="text-[#FFC459] text-sm font-semibold uppercase tracking-wide mb-1">{label}</p>
    {Array.isArray(value) ? (
      <div className="flex flex-col gap-1">
        {value.map((v, i) => (
          <p key={i} className="text-[#F6F4D2] font-medium">{v}</p>
        ))}
      </div>
    ) : (
      <p className="text-[#F6F4D2] font-medium">{value}</p>
    )}
  </div>
);

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

export default AboutMain;
