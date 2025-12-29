"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    for (let i = 0; i < 120; i++) {
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

  return (
    <div className="relative h-screen w-screen flex justify-center items-center overflow-hidden">
      <img
        src="/monet.jpg"
        alt="Impression, Sunrise"
        className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      ></canvas>

      <motion.div
        className="z-10 text-center relative -translate-y-10 overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Ilani</h1>
        <p className="text-2xl md:text-3xl">I am a full stack software developer.</p>
      </motion.div>
    </div>
  );
};

export default Hero;
