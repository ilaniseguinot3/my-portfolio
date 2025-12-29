  "use client";
  import { motion } from "framer-motion";

  const Hero: React.FC = () => {
    return (
      <motion.div
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#F19C79] to-[#F6F4D2] text-[#A44A3F]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-xl font-bold mb-4">Hi, I'm Ilani</h1>
        <p className="text-3xl">I am a full stack software developer.</p>
      </motion.div>
    );
  };

  export default Hero;
