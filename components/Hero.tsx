"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const splitLetters = (text: string) => text.split("");

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [typedChars1, setTypedChars1] = useState(0);
  const [typedChars2, setTypedChars2] = useState(0);
  const [typedChars3, setTypedChars3] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

    // Tree-inspired palette
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
      }, 60);
      return () => clearTimeout(timer);
    } else if (typedChars2 < line2.length) {
      const timer = setTimeout(() => {
        setTypedChars2(typedChars2 + 1);
      }, 60);
      return () => clearTimeout(timer);
    } else if (typedChars3 < line3.length) {
      const timer = setTimeout(() => {
        setTypedChars3(typedChars3 + 1);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [typedChars1, typedChars2, typedChars3]);

  // Mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    // Hero Section with Background Image and Canvas Overlay
    <div 
      ref={heroRef}
      className="relative h-screen w-full flex justify-center items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
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
        initial={{ opacity: 1}}
        animate={{ opacity: 1}}
        transition={{ duration: 2 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-white">
          {splitLetters(line1).map((letter, index) => (
            index < typedChars1 ? (
              <LetterSpan
                key={index}
                letter={letter}
                mouseX={mouseX}
                mouseY={mouseY}
                initialColor="#FFFFFF"
              />
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
              <LetterSpan
                key={index}
                letter={letter}
                mouseX={mouseX}
                mouseY={mouseY}
                initialColor="#D3E4E4"
              />
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
              <LetterSpan
                key={index}
                letter={letter}
                mouseX={mouseX}
                mouseY={mouseY}
                initialColor="#D3E4E4"
              />
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

const LetterSpan: React.FC<{
  letter: string;
  mouseX: any;
  mouseY: any;
  initialColor: string;
}> = ({ letter, mouseX, mouseY, initialColor }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    const unsubscribeX = mouseX.onChange((latestX: number) => {
      const latestY = mouseY.get();
      updateColor(latestX, latestY);
    });

    const unsubscribeY = mouseY.onChange((latestY: number) => {
      const latestX = mouseX.get();
      updateColor(latestX, latestY);
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY]);

  const updateColor = (x: number, y: number) => {
    if (!letterRef.current) return;
    
    const rect = letterRef.current.getBoundingClientRect();
    const letterCenterX = rect.left + rect.width / 2;
    const letterCenterY = rect.top + rect.height / 2;
    
    // Get the hero section to calculate relative position
    const heroElement = letterRef.current.closest('.relative.h-screen');
    if (!heroElement) return;
    
    const heroRect = heroElement.getBoundingClientRect();
    const relativeLetterX = letterCenterX - heroRect.left;
    const relativeLetterY = letterCenterY - heroRect.top;
    
    const distance = Math.sqrt(
      Math.pow(x - relativeLetterX, 2) + 
      Math.pow(y - relativeLetterY, 2)
    );
    
    const maxDistance = 250;
    const colorIntensity = Math.max(0, 1 - distance / maxDistance);
    
    if (colorIntensity === 0) {
      setColor(initialColor);
      return;
    }
    
    // Interpolate between initialColor and #FFC459 (orange)
    let startR, startG, startB;
    
    if (initialColor === "#FFFFFF") {
      // White
      startR = 255;
      startG = 255;
      startB = 255;
    } else {
      // #D3E4E4 (light blue)
      startR = 211;
      startG = 228;
      startB = 228;
    }
    
    const r = Math.round(startR + (255 - startR) * colorIntensity);
    const g = Math.round(startG + (196 - startG) * colorIntensity);
    const b = Math.round(startB + (89 - startB) * colorIntensity);
    
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <motion.span
      ref={letterRef}
      style={{ color, display: 'inline-block' }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

export default Hero;