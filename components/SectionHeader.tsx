"use client";
import { motion } from "framer-motion";

type SectionHeaderProps = {
  number: string;
  label: string;
  title: string;
  dark?: boolean;
  align?: "left" | "center";
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  label,
  title,
  dark = false,
  align = "left",
}) => {
  const textColor = dark ? "text-[#EDE4D3]" : "text-[#172A3A]";
  const labelColor = dark ? "text-[#EDE4D3]/70" : "text-[#172A3A]/60";
  const alignClasses =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      className={`flex flex-col ${alignClasses} mb-12`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm tracking-[0.2em] font-semibold text-[#C2A36B]">
          {number}
        </span>
        <span className="w-12 h-px bg-[#C2A36B]/40" />
        <span
          className={`text-xs uppercase tracking-[0.3em] font-semibold ${labelColor}`}
        >
          {label}
        </span>
      </div>
      <h2 className={`font-cormorant text-5xl sm:text-6xl font-bold ${textColor}`}>{title}</h2>
    </motion.div>
  );
};

export default SectionHeader;
