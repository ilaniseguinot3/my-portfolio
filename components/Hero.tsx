"use client";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1 * i },
    }),
  };

  return (
    <section id="hero" className="relative w-full bg-[#172A3A] text-[#EDE4D3]">
      <div className="min-h-screen flex flex-col">
        {/* Main hero content */}
        <div className="flex-1 max-w-7xl mx-auto w-full px-8 lg:px-12 pt-36 pb-20 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left: intro */}
          <motion.div initial="hidden" animate="visible">
            <motion.h1
              custom={0}
              variants={fadeUp}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95]"
            >
              Ilani
              <br />
              Seguinot
            </motion.h1>

            <motion.div custom={1} variants={fadeUp} className="mt-6">
              <p className="text-[#C2A36B] text-sm uppercase tracking-[0.25em] font-semibold">
                Software Engineer &amp; Designer
              </p>
              <span className="block w-12 h-px bg-[#9B2D22] mt-3" />
            </motion.div>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-6 max-w-md text-[#EDE4D3]/70 leading-relaxed"
            >
              I build thoughtful digital experiences that blend design, code, and
              community to solve real problems and create meaningful impact.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              className="mt-9 flex items-center gap-8"
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="bg-[#9B2D22] text-[#EDE4D3] text-xs font-semibold uppercase tracking-[0.2em] px-7 py-4 rounded-sm shadow-md"
                whileHover={{ scale: 1.05, backgroundColor: "#B23728" }}
                whileTap={{ scale: 0.96 }}
              >
                View My Work →
              </motion.button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#C2A36B] text-xs font-semibold uppercase tracking-[0.2em] underline underline-offset-8 decoration-[#C2A36B]/40 hover:decoration-[#C2A36B] transition"
              >
                About Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right: image + overlapping card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl">
              <img
                src="/flamboyan.jpg"
                alt="Flamboyan tree painting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* BASED IN card */}
            <motion.div
              className="relative mt-6 lg:mt-0 lg:absolute lg:-bottom-12 lg:-left-12 w-full max-w-xs bg-[#AE9D80] text-[#172A3A] p-7 shadow-xl rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] font-semibold">
                Student at the
              </p>
              <span className="block w-8 h-px bg-[#172A3A]/40 my-4" />
              <p className="text-xl font-medium">University of Florida</p>
              <a
                href="https://www.linkedin.com/in/ilani-seguinot"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs uppercase tracking-[0.2em] font-semibold underline underline-offset-4 decoration-[#172A3A]/50 hover:decoration-[#172A3A]"
              >
                Available for Internships →
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom cream band */}
        <div className="bg-[#ECE5D8] text-[#172A3A]">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 py-8 flex items-center justify-between gap-6">
            <div className="flex items-start gap-6">
              <span className="text-xs tracking-[0.2em] pt-2 font-semibold">
                01
              </span>
              <div className="w-px h-16 bg-[#172A3A]/30" />
              <p className="text-2xl lg:text-3xl max-w-xl leading-snug">
                I design and build beautiful, functional things for the web.
              </p>
            </div>
            <motion.button
              onClick={() => scrollToSection("about")}
              aria-label="Scroll to about section"
              className="shrink-0 text-[#172A3A]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m0 0l-6-6m6 6l6-6"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
