"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const About: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  const skills = {
    languages: [
      "C++",
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C#",
      "HTML/CSS",
      "SQL",
    ],
    frameworks: [
      "React",
      "React Native",
      "Node.js",
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "Supabase",
      "Vite",
      "Expo",
    ],
    tools: [
      "Unity",
      "Blender",
      "Figma",
      "Git",
      "VSCode",
      "Jira",
      "Maya",
      "Processing",
    ],
  };

  const coursework = [
    "Data Structures & Algorithms",
    "Human-Computer Interaction",
    "Software Engineering",
    "Game Design + Development",
    "Intro to Virtual Reality",
    "Game Engine Development",
    "Linear Algebra",
    "Computer Graphics",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="relative bg-[#ECE5D8] text-[#172A3A] py-24 px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="02" label="About Me" title="Get to Know Me" />

        {/* Intro + Photo Row */}
        <div className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Flippable Card */}
          <div
            className="relative w-full h-[520px] cursor-pointer"
            style={{ perspective: 1000 }}
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
                className="absolute w-full h-full bg-[#172A3A] text-[#EDE4D3] rounded-sm p-8 shadow-xl flex flex-col"
                style={{ backfaceVisibility: "hidden" }}
              >
                <h3 className="text-2xl font-bold mb-4">Hi Everyone!</h3>
                <span className="block w-10 h-px bg-[#C2A36B] mb-5" />
                <p className="text-[#EDE4D3]/85 leading-relaxed">
                  My technology journey began in middle school robotics, where I
                  discovered the challenge and excitement of designing and
                  building solutions alongside a team. At UF, I have grown this
                  foundation by leading technical projects and initiatives within
                  the Hispanic community, turning ideas into tangible solutions
                  that connect and empower others. My work blends engineering
                  expertise with creative problem-solving, guided by a commitment
                  to leverage technology as a force for collaboration and
                  meaningful impact.
                </p>
                <p className="mt-auto pt-6 text-xs uppercase tracking-[0.2em] text-[#C2A36B]">
                  Hover to flip my student profile →
                </p>
              </div>

              {/* Back: Student Profile */}
              <div
                className="absolute w-full h-full bg-[#AE9D80] text-[#172A3A] rounded-sm p-8 shadow-xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#172A3A]/20">
                  <div>
                    <h3 className="text-2xl font-bold">Ilani Seguinot</h3>
                    <p className="text-[#9B2D22] font-semibold text-sm uppercase tracking-[0.15em]">
                      Student Profile
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-[#172A3A]/10 rounded-full flex items-center justify-center border border-[#172A3A]/30">
                    <span className="text-2xl">🎓</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Info label="Major" value="Computer Science & Digital Arts" />
                    <Info label="University" value="University of Florida" />
                    <Info label="GPA" value="3.86 / 4.0" />
                  </div>
                  <div className="space-y-6">
                    <Info
                      label="Honors"
                      value={[
                        "Engineering Leadership Circle",
                        "Reitz Scholar 2025-2026 Cohort",
                        "Benacquisto Scholar",
                        "National Merit Finalist",
                        "Dean's List",
                      ]}
                    />
                    <Info
                      label="Involvement"
                      value={[
                        "Dream Team Engineering",
                        "Society of Hispanic Professional Engineers",
                        "Hispanic-Latine Student Association",
                        "Codepath",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-80 h-96 rounded-sm overflow-hidden shadow-2xl border-4 border-[#AE9D80]">
              <img
                src="/headshot.jpg"
                alt="Ilani Seguinot"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-[#9B2D22] -z-0" />
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#172A3A]/60">
              Technical Skills
            </span>
            <span className="flex-1 h-px bg-[#172A3A]/15" />
          </div>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-[#9B2D22] mb-3 capitalize tracking-wide">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {list.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-[#172A3A]/[0.04] rounded-sm px-4 py-2 text-[#172A3A] font-medium border border-[#172A3A]/15 hover:border-[#9B2D22]/50 hover:bg-[#9B2D22]/5 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h4 className="text-sm font-semibold text-[#9B2D22] mb-3 capitalize tracking-wide">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-3">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="inline-block bg-[#172A3A]/[0.04] rounded-sm px-4 py-2 text-[#172A3A] font-medium border border-[#172A3A]/15 hover:border-[#9B2D22]/50 hover:bg-[#9B2D22]/5 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Info = ({ label, value }: { label: string; value: string | string[] }) => (
  <div>
    <p className="text-[#9B2D22] text-xs font-semibold uppercase tracking-wide mb-1">
      {label}
    </p>
    {Array.isArray(value) ? (
      <div className="flex flex-col gap-1">
        {value.map((v, i) => (
          <p key={i} className="text-[#172A3A] font-medium text-sm">
            {v}
          </p>
        ))}
      </div>
    ) : (
      <p className="text-[#172A3A] font-medium text-sm">{value}</p>
    )}
  </div>
);

export default About;
