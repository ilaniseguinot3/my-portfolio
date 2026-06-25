"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const AboutJourney: React.FC = () => {
  const involvements = [
    {
      year: "Summer 2026",
      title: "Foundations of AI Engineering 110 & Technical Interview Prep 102",
      organization: "Codepath",
      description:
        "Enrolled in CodePath's AI110 and Technical Interview Prep 102, building AI fundamentals and advanced interview problem-solving.",
      impact: "Advancing AI and technical interview skills.",
    },
    {
      year: "Spring 2026 - Present",
      title: "Engineering Leadership Circle",
      organization: "UF Herbert Wertheim College of Engineering",
      description:
        "Selected for UF's Engineering Leadership Circle, an honor society recognizing engineering students who demonstrate exceptional leadership, academic achievement, and service within the college.",
      impact: "Inducted into UF's engineering leadership honor society.",
    },
    {
      year: "Spring 2026 - Present",
      title: "Cardiac Data Device Software Developer",
      organization: "Dream Team Engineering",
      description:
        "Built a React Native/Expo app for a wearable cardiac device that surfaces real-time vitals and trends, integrating BLE data alongside hardware and ML sub-teams.",
      impact:
        "Synced BLE vitals — blood pressure, heart rate, oxygen & temperature.",
    },
    {
      year: "Spring 2026 - Present",
      title: "Lead UX/UI Director",
      organization: "Society of Hispanic Professional Engineers",
      description:
         "Set design priorities with the VP of Technology and created Figma wireframes and high-fidelity prototypes across iOS, Android, and web, aligned with SHPE branding.",
      impact: "Led a team of 7 to design interfaces used by 300+ members across iOS, Android & web.",
    },
    {
      year: "Fall 2025 - Spring 2026",
      title: "Reitz Scholar",
      organization: "University of Florida",
      description:
        "Selected as a Reitz Scholar to participate in a year-long leadership development program focused on personal growth, community engagement, and professional excellence.",
      impact:
        "Strengthened leadership skills through faculty and professional mentor 1:1's, service projects, and reflective essays.",
    },
    {
      year: "Summer 2025 - Spring 2026",
      title: "Secretary",
      organization: "Hispanic-Latine Student Association",
      description:
        "Supervised organizational operations and digital engagement for 200+ members by managing event logistics and overseeing a communications team that maintained a React/Firebase member portal for attendance tracking and voting eligibility.",
      impact: "Enhanced digital engagement for 200+ members",
    },
    {
      year: "Spring 2025",
      title: "Technical Interview Prep 101",
      organization: "Codepath",
      description:
        "Completed CodePath's Technical Interview Prep 101 course, a hands-on program focused on data structures, algorithms, and problem-solving strategies to prepare for technical interviews.",
      impact:
        "Gained practical experience through weekly coding challenges and peer collaboration.",
    },
    {
      year: "Fall 2024 – Fall 2025",
      title: "UX/UI Director",
      organization: "Society of Hispanic Professional Engineers",
      description:
        "Designed user-friendly website and mobile app interfaces in Figma for over 300 members, making technology more accessible and intuitive.",
      impact: "Improved user experience for 300+ members",
    },
    {
      year: "Summer 2024 – Spring 2025",
      title: "Mentorship Director",
      organization: "Hispanic-Latine Student Association's Member Leadership Program",
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
      id="journey"
      className="relative bg-[#172A3A] text-[#EDE4D3] py-24 px-8 lg:px-12"
    >
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          number="03"
          label="My Journey"
          title="Where I've Been"
          dark
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#C2A36B]/30 transform -translate-x-1/2 hidden md:block" />
          {involvements.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

type TimelineItem = {
  year: string;
  title: string;
  organization: string;
  description: string;
  impact: string;
};

const TimelineCard = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => {
  const [flip, setFlip] = useState(false);
  const even = index % 2 === 0;

  return (
    <motion.div
      className={`relative mb-12 md:w-1/2 ${
        even ? "md:pr-12" : "md:pl-12 md:ml-auto"
      }`}
      initial={{ opacity: 0, x: even ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Timeline marker */}
      <div className="hidden md:block">
        <motion.div
          className={`absolute top-1/2 ${
            even ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
          } w-3.5 h-3.5 bg-[#C2A36B] rounded-full ring-4 ring-[#172A3A] transform -translate-y-1/2`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        />
        <motion.div
          className={`absolute top-1/2 ${
            even ? "right-0" : "left-0"
          } h-px bg-[#C2A36B]/40 transform -translate-y-1/2`}
          style={{ width: "48px" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        />
      </div>

      <div
        className="relative h-60 cursor-pointer"
        style={{ perspective: 1000 }}
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
            className="absolute w-full h-full bg-[#EDE4D3]/[0.05] backdrop-blur-sm rounded-sm p-6 border border-[#EDE4D3]/15 flex flex-col"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-[#C2A36B] text-sm font-semibold tracking-wide mb-3">
              {item.year}
            </div>
            <h4 className="text-2xl font-bold text-[#EDE4D3] mb-2">
              {item.title}
            </h4>
            <p className="text-[#EDE4D3]/70 font-medium mb-4">
              {item.organization}
            </p>
            <p className="mt-auto text-xs uppercase tracking-[0.2em] text-[#EDE4D3]/50">
              Hover to learn more →
            </p>
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full bg-[#9B2D22]/15 backdrop-blur-sm rounded-sm p-6 border border-[#9B2D22]/50 flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-[#EDE4D3]/90 text-sm leading-relaxed mb-4 overflow-y-auto">
              {item.description}
            </p>
            <div className="mt-auto">
              <span className="inline-block bg-[#C2A36B] text-[#172A3A] px-4 py-2 rounded-sm text-xs font-semibold">
                {item.impact}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutJourney;
