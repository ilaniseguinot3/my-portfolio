"use client";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Ilani</h1>
      <p className="text-xl">I build interactive, modern web experiences.</p>
    </motion.div>
  );
};

export default Hero;
