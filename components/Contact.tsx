"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Contact: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="relative bg-[#172A3A] text-[#EDE4D3] py-24 px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="05"
          label="Contact"
          title="Let's Connect"
          dark
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Call to action */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center md:text-left"
          >
            <h3 className="font-cormorant text-4xl font-bold mb-4">
              Want to work together or just say hi?
            </h3>
            <span className="block w-12 h-px bg-[#C2A36B] mb-6 mx-auto md:mx-0" />
            <p className="text-[#EDE4D3]/70 leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
              I&apos;m actively seeking software engineering and front-end design
              internships. Reach out — I&apos;d love to connect and explore how we
              can build something great together.
            </p>
            <motion.a
              href="https://www.linkedin.com/in/ilani-seguinot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#9B2D22] text-[#EDE4D3] font-semibold rounded-sm text-xs uppercase tracking-[0.2em] shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#B23728" }}
              whileTap={{ scale: 0.95 }}
            >
              Connect on LinkedIn →
            </motion.a>
          </motion.div>

          {/* Right: LinkedIn Post Embed */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#C2A36B] mb-4">
              Latest Post
            </p>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7417249858044198912?collapsed=1"
              height="500"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post"
              className="rounded-sm shadow-lg max-w-[504px]"
            ></iframe>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[#EDE4D3]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#EDE4D3]/50 text-xs uppercase tracking-[0.2em]">
          <span>
            I<span className="text-[#C2A36B]"> / </span>S
          </span>
          <span>Ilani Seguinot — Built with Next.js</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
