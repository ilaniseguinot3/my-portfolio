"use client";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="relative bg-gradient-to-b from-[#849F8C] to-[#27321F] py-20 px-6 overflow-hidden"
      id="contact"
    >
      <motion.div
        className="relative max-w-6xl mx-auto z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Call to Action */}
        <motion.div className="text-center mt-0 mb-20" variants={itemVariants}>
          <p className="text-[#F6F4D2] text-xl mb-6">
            Want to work together or just say hi?
          </p>
          <motion.a
            href="https://www.linkedin.com/in/ilani-seguinot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#FFC459] text-gray-900 font-semibold rounded-full text-lg shadow-lg shadow-[#FFC459]/40"
            whileHover={{ scale: 1.05, backgroundColor: "#FFD380" }}
            whileTap={{ scale: 0.95 }}
          >
            Connect on LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;