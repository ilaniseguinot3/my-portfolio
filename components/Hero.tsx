"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const splitLetters = (text: string) => text.split("");

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedChars1, setTypedChars1] = useState(0);
  const [typedChars2, setTypedChars2] = useState(0);
  const [typedChars3, setTypedChars3] = useState(0);

  const line1 = "Hello, I'm Ilani";
  const line2 = "I am a full stack";
  const line3 = "software developer.";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Monet-inspired palette (Impression, Sunrise)
    const colors = [
      "rgba(224,138,62,0.6)",   // orange tones
      "rgba(125,158,192,0.4)",  // blue tones
      "rgba(240,200,124,0.5)",  // yellow highlights
      "rgba(68,125,156,0.3)",   // water shadows
    ];

    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      dx: number;
      dy: number;
      alpha: number;
      swayOffset: number;
    }[] = [];

    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.8,
        swayOffset: Math.random() * 1000, // unique offset for sine wave
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now();

      particles.forEach((p, index) => {
        // Sway effect using sine function
        const sway = Math.sin(time * 0.002 + p.swayOffset) * 2; // adjust amplitude

        ctx.beginPath();
        ctx.arc(p.x + sway, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace("0.7", p.alpha.toString());
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Typing animation for line 1
  useEffect(() => {
    if (typedChars1 < line1.length) {
      const timer = setTimeout(() => {
        setTypedChars1(typedChars1 + 1);
      }, 80);
      return () => clearTimeout(timer);
    } else if (typedChars2 < line2.length) {
      const timer = setTimeout(() => {
        setTypedChars2(typedChars2 + 1);
      }, 80);
      return () => clearTimeout(timer);
    } else if (typedChars3 < line3.length) {
      const timer = setTimeout(() => {
        setTypedChars3(typedChars3 + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [typedChars1, typedChars2, typedChars3]);

  // Framer Motion variants for letter animation
  const letterVariants = {
    initial: { color: "#D3E4E4" },
    hover: { color: "#FFC459" }, // orange
  };

  const showCursor = typedChars3 < line3.length;

  return (
    // Hero Section with Background Image and Canvas Overlay
    <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      <img
        src="/flamboyan.jpg"
        alt="Flamboyan"
        className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
      />
      
      {/* Canvas for Particle Animation */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      ></canvas>

      <motion.div
        className="z-10 text-center relative mt-50 -translate-x-132 overflow-hidden"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 2 }}
        whileHover="hover"
      >
        <h1 className="text-5xl font-bold mb-4">
          {splitLetters(line1).map((letter, index) => (
            index < typedChars1 ? (
              <motion.span
                key={index}
                variants={letterVariants}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ) : null
          ))}
          {typedChars1 <= line1.length && typedChars2 === 0 && (
            <motion.span
              className="inline-block w-0.5 h-12 bg-[#FFC459] ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
          )}
        </h1>
        <p className="text-4xl text-[#D3E4E4]">
          {splitLetters(line2).map((letter, index) => (
            index < typedChars2 ? (
              <motion.span
                key={index}
                variants={letterVariants}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ) : null
          ))}
          {typedChars2 > 0 && typedChars2 <= line2.length && typedChars3 === 0 && (
            <motion.span
              className="inline-block w-0.5 h-10 bg-[#FFC459] ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
          )}
        </p>
        <p className="text-4xl text-[#D3E4E4]">
          {splitLetters(line3).map((letter, index) => (
            index < typedChars3 ? (
              <motion.span
                key={index}
                variants={letterVariants}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ) : null
          ))}
          {typedChars3 > 0 && typedChars3 <= line3.length && (
            <motion.span
              className="inline-block w-0.5 h-10 bg-[#FFC459] ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
          )}
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;