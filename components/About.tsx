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

  const involvements = [
    {
      year: "2024-Present",
      title: "Secretary",
      organization: "Hispanic Student Association",
      description: "Leading our digital presence by directing the web team to maintain both our public Wix site and a custom React/Firebase member portal.",
      impact: "Enhanced digital engagement for 500+ members"
    },
    {
      year: "2024-Present",
      title: "UX/UI Director",
      organization: "SHPE UF",
      description: "Designing user-friendly interfaces in Figma for over 300 members, making technology more accessible and intuitive.",
      impact: "Improved user experience for 300+ members"
    },
    {
      year: "2023-2024",
      title: "IBM Full Stack Course",
      organization: "Professional Development",
      description: "Completing comprehensive training in full-stack development, focusing on modern web technologies and best practices.",
      impact: "Built 10+ full-stack projects"
    }
  ];

  const funFacts = [
    { emoji: "🍜", label: "Favorite Food", value: "Thai Cuisine", favorite: "Pad See Ew" },
    { emoji: "🎮", label: "Hobby", value: "Cozy Games", favorite: "Stardew Valley" },
    { emoji: "🎵", label: "Passion", value: "Playlist Curation", favorite: "Indie Pop Vibes" },
    { emoji: "📚", label: "Reading", value: "Historical Fantasy", favorite: "The Name of the Wind" },
    { emoji: "👗", label: "Style", value: "Fashion Enthusiast", favorite: "Vintage Meets Modern" },
    { emoji: "🚗", label: "Adventure", value: "Spontaneous Day Trips", favorite: "Beach Sunsets" }
  ];

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
        {/* Section Title */}
        <HeaderWithAura 
          text="About Me" 
          className="text-5xl font-bold text-center mb-16 text-[#F6F4D2]" 
          mouseX={mouseX} 
          mouseY={mouseY} 
          variants={itemVariants} 
        />

        {/* Personal Introduction */}
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

        {/* Student ID + Technical Skills Side by Side */}
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
              {/* ID Card Header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#FFC459]/20">
                <div>
                  <h3 className="text-3xl font-bold text-[#F6F4D2]">Ilani Seguinot</h3>
                  <p className="text-[#FFC459] font-medium">Student Profile</p>
                </div>
                <div className="w-20 h-20 bg-[#FFC459]/20 rounded-full flex items-center justify-center border-2 border-[#FFC459]">
                  <span className="text-3xl">🎓</span>
                </div>
              </div>

              {/* ID Card Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-[#FFC459] text-sm font-semibold uppercase tracking-wide mb-1">Major</p>
                    <p className="text-[#F6F4D2] font-medium">Computer Science & Digital Arts</p>
                  </div>
                  <div>
                    <p className="text-[#FFC459] text-sm font-semibold uppercase tracking-wide mb-1">University</p>
                    <p className="text-[#F6F4D2] font-medium">University of Florida</p>
                  </div>
                  <div>
                    <p className="text-[#FFC459] text-sm font-semibold uppercase tracking-wide mb-1">Graduation</p>
                    <p className="text-[#F6F4D2] font-medium">May 2027</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#FFC459] text-sm font-semibold uppercase tracking-wide mb-1">GPA</p>
                    <p className="text-[#F6F4D2] font-medium">3.81 / 4.0</p>
                  </div>
                  <div>
                    <p className="text-[#FFC459] text-sm font-semibold uppercase tracking-wide mb-1">Honors</p>
                    <p className="text-[#F6F4D2] font-medium">Benacquisto Scholar</p>
                    <p className="text-[#F6F4D2] font-medium">National Merit Finalist</p>
                  </div>
                </div>
              </div>

              {/* Resume Download Button */}
              <div className="mt-8 pt-6 border-t border-[#FFC459]/20">
                <motion.a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-3 w-full bg-[#FFC459] text-gray-900 font-semibold py-4 rounded-xl"
                  whileHover={{ scale: 1.02, backgroundColor: "#FFD380" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </motion.a>
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
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="w-full mb-4">
                  <h4 className="text-lg font-semibold text-[#F6F4D2] mb-2 capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <motion.span
                        key={skill}
                        className="bg-white/10 rounded-full px-4 py-2 text-[#3A3A3A] font-medium border border-white/20 cursor-pointer"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255, 196, 89, 0.2)",
                          borderColor: "#FFC459",
                          color: "#FFC459"
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

        {/* Involvements Timeline */}
        <motion.div variants={itemVariants} className="mb-16">
          <HeaderWithAura 
            text="My Journey"
            className="text-3xl font-semibold text-[#F6F4D2] mb-12 text-center"
            mouseX={mouseX}
            mouseY={mouseY}
          />
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#FFC459]/30 transform -translate-x-1/2 hidden md:block" />
            {involvements.map((item, index) => (
              <TimelineCard 
                key={index} 
                item={item} 
                index={index}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            ))}
          </div>
        </motion.div>

        {/* Fun Facts ID Card */}
        <motion.div variants={itemVariants}>
          <HeaderWithAura 
            text="Quick Facts"
            className="text-3xl font-semibold text-[#F6F4D2] mb-8 text-center"
            mouseX={mouseX}
            mouseY={mouseY}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {funFacts.map((fact, index) => (
              <QuickFactCard key={index} fact={fact} />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <p className="text-[#3A3A3A] text-xl mb-6">Want to work together or just say hi?</p>
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

// Timeline Card Component
const TimelineCard: React.FC<{
  item: any;
  index: number;
  mouseX: any;
  mouseY: any;
}> = ({ item, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative mb-12 md:w-1/2 ${isEven ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="hidden md:block absolute top-6 w-4 h-4 bg-[#FFC459] rounded-full" style={{ [isEven ? 'right' : 'left']: '-8px' }} />
      <div className="relative h-64 cursor-pointer perspective-1000" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
        <motion.div className="relative w-full h-full" animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.6 }} style={{ transformStyle: "preserve-3d" }}>
          <div className="absolute w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20" style={{ backfaceVisibility: "hidden" }}>
            <div className="text-[#FFC459] font-semibold mb-2">{item.year}</div>
            <h4 className="text-2xl font-bold text-[#F6F4D2] mb-2">{item.title}</h4>
            <p className="text-[#3A3A3A] font-medium mb-4">{item.organization}</p>
            <p className="text-[#3A3A3A] text-sm opacity-70">Hover to learn more</p>
          </div>
          <div className="absolute w-full h-full bg-[#FFC459]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#FFC459]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
            <p className="text-[#3A3A3A] mb-4">{item.description}</p>
            <div className="mt-auto">
              <div className="inline-block bg-[#FFC459] text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">{item.impact}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Quick Fact Card
const QuickFactCard: React.FC<{ fact: any }> = ({ fact }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="relative h-32 cursor-pointer perspective-1000" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
      <motion.div className="relative w-full h-full" animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.6 }} style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute w-full h-full bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center flex flex-col items-center justify-center" style={{ backfaceVisibility: "hidden" }}>
          <div className="text-4xl mb-2">{fact.emoji}</div>
          <div className="text-[#F6F4D2] font-semibold text-sm mb-1">{fact.label}</div>
          <div className="text-[#3A3A3A] text-sm">{fact.value}</div>
        </div>
        <div className="absolute w-full h-full bg-[#FFC459]/20 backdrop-blur-sm rounded-xl p-6 border border-[#FFC459] flex flex-col items-center justify-center text-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <div className="text-2xl mb-2">{fact.emoji}</div>
          <div className="text-[#F6F4D2] font-bold text-sm mb-1">My Favorite</div>
          <div className="text-[#3A3A3A] text-sm font-medium">{fact.favorite}</div>
        </div>
      </motion.div>
    </div>
  );
};

// HeaderWithAura
const HeaderWithAura: React.FC<{
  text: string;
  className?: string;
  variants?: any;
  mouseX: any;
  mouseY: any;
}> = ({ text, className = "", variants, mouseX, mouseY }) => (
  <motion.h3 className={className} variants={variants}>
    {splitLetters(text).map((letter, index) => (
      <LetterSpan key={index} letter={letter} mouseX={mouseX} mouseY={mouseY} initialColor="#F6F4D2" />
    ))}
  </motion.h3>
);

// LetterSpan
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
    const start = [246, 244, 210];
    const end = [255, 196, 89];
    const r = Math.round(start[0] + (end[0] - start[0]) * intensity);
    const g = Math.round(start[1] + (end[1] - start[1]) * intensity);
    const b = Math.round(start[2] + (end[2] - start[2]) * intensity);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return <motion.span ref={letterRef} style={{ color, display: "inline-block" }}>{letter === " " ? "\u00A0" : letter}</motion.span>;
};

export default About;
