"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const splitLetters = (text: string) => text.split("");

const AboutJourney: React.FC = () => {
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

  const involvements = [
    {
      year: "Fall 2025 - Present",
      title: "IBM Full Stack Course",
      organization: "Professional Development",
      description:
        "Completing full-stack training focused on React, Node.js, and cloud deployment best practices.",
      impact: "Built 10+ full-stack projects",
    },
    {
      year: "Fall 2025 - Present",
      title: "Reitz Scholar",
      organization: "University of Florida",
      description:
        "Selected as a Reitz Scholar to participate in a year-long leadership development program focused on personal growth, community engagement, and professional excellence.",
      impact:
        "Strengthened leadership skills through faculty and professional mentor 1:1's, service projects, and reflective essays.",
    },
    {
      year: "Summer 2025 - Present",
      title: "Secretary",
      organization: "Hispanic-Latine Student Association",
      description:
        "Leading our digital presence by directing the web team to maintain both our public Wix site and a custom React/Firebase member portal.",
      impact: "Enhanced digital engagement for 500+ members",
    },
    {
      year: "Fall 2024 - Present",
      title: "UX/UI Director",
      organization: "Society of Hispanic Professional Engineers",
      description:
        "Designing user-friendly website and mobile app interfaces in Figma for over 300 members, making technology more accessible and intuitive.",
      impact: "Improved user experience for 300+ members",
    },
    {
      year: "Spring 2025",
      title: "Codepath Technical Interview Prep 101",
      organization: "Professional Development",
      description:
        "Completed CodePath's Technical Interview Prep 101 course, a hands-on program focused on data structures, algorithms, and problem-solving strategies to prepare for technical interviews.",
      impact:
        "Gained practical experience through weekly coding challenges and peer collaboration.",
    },
    {
      year: "Summer 2024 – Spring 2025",
      title: "Mentorship Director",
      organization: "Member Leadership Program",
      description:
        "Directed the mentorship program, overseeing mentor-mentee pairings and organizing events to foster academic, professional, and personal growth within the Hispanic Student Association.",
      impact:
        "Matched 40 mentor-mentee pairings in a two-week long recruitment series.",
    },
    {
      year: "Spring 2024",
      title: "Service Committee Member",
      organization:
        "Hispanic-Latine Student Association's Member Leadership Program",
      description:
        "Collaborated with committee members to plan and execute service initiatives that encouraged community involvement and leadership development the 40+ student cohort.",
      impact:
        "Contributed to 3 service events that strengthened the Gainesville community.",
    },
    {
      year: "Fall 2023",
      title: "First-Year Leadership Program Member",
      organization: "Society of Hispanic Professional Engineers",
      description:
        "Selected to join a cohort of first-year students focused on developing leadership, professionalism, and teamwork skills through weekly meetings and interactive workshops.",
      impact:
        "Participated in the Guppy Tank competition, presenting an innovative project idea to SHPE UF leadership.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      id="journey"
    >
      {/* --- Smooth Static Background Image --- */}
      <div className="absolute -inset-1 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/flamboyan.jpg')] bg-cover bg-center scale-105"
          style={{
            filter: "blur(16px) brightness(0.6)",
            transform: "translateZ(0)",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Aura Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-75"
        style={{
          background: `radial-gradient(500px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(255,255,255,0.1), transparent 50%)`,
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Title */}
        <HeaderWithAura
          text="My Journey"
          className="text-4xl font-semibold text-[#F6F4D2] mb-12 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
          mouseX={mouseX}
          mouseY={mouseY}
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#FFC459]/40 transform -translate-x-1/2 hidden md:block" />
          {involvements.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- Subcomponents --- */

const HeaderWithAura = ({ text, className = "", mouseX, mouseY }: any) => (
  <h3 className={className}>
    {splitLetters(text).map((letter, i) => (
      <LetterSpan
        key={i}
        letter={letter}
        mouseX={mouseX}
        mouseY={mouseY}
        initialColor="#F6F4D2"
      />
    ))}
  </h3>
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

const TimelineCard = ({ item, index }: any) => {
  const [flip, setFlip] = useState(false);
  const even = index % 2 === 0;

  return (
    <motion.div
      className={`relative mb-12 md:w-1/2 ${
        even ? "md:pr-12" : "md:pl-12 md:ml-auto"
      }`}
      initial={{ opacity: 0, x: even ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Timeline Connector Line & Circle */}
      <div className="hidden md:block">
        {/* Circle on Timeline */}
        <motion.div
          className={`absolute top-1/2 ${
            even ? "right-0" : "left-0"
          } w-4 h-4 bg-[#FFC459] rounded-full border-4 border-white/20 shadow-lg transform -translate-y-1/2 ${
            even ? "translate-x-1/2" : "-translate-x-1/2"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        />
        
        {/* Connecting Line */}
        <motion.div
          className={`absolute top-1/2 ${
            even ? "right-0" : "left-0"
          } h-0.5 bg-gradient-to-${even ? "r" : "l"} from-[#FFC459] to-transparent transform -translate-y-1/2`}
          style={{ width: even ? "48px" : "48px" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        />
      </div>

      <div
        className="relative h-64 cursor-pointer perspective-1000"
        onMouseEnter={() => setFlip(true)}
        onMouseLeave={() => setFlip(false)}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: flip ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-[#FFC459] font-semibold mb-2">{item.year}</div>
            <h4 className="text-2xl font-bold text-[#F6F4D2] mb-2">
              {item.title}
            </h4>
            <p className="text-[#F6F4D2]/80 font-medium mb-4">
              {item.organization}
            </p>
            <p className="text-[#F6F4D2]/60 text-sm">Hover to learn more</p>
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full bg-[#FFC459]/20 backdrop-blur-md rounded-2xl p-6 border border-[#FFC459]/60 shadow-[0_4px_30px_rgba(255,196,89,0.25)]"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="text-[#F6F4D2]/90 mb-4">{item.description}</p>
            <div className="mt-auto">
              <div className="inline-block bg-[#FFC459] text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                {item.impact}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutJourney;