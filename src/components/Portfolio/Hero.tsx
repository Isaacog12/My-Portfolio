import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  const [time, setTime] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Working 12-hour Clock Logic
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. Fluid Mouse Parallax (Gentler than before)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 20);
    mouseY.set((clientY / innerHeight - 0.5) * 20);
  };

  const springConfig = { stiffness: 50, damping: 20 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  // 3. Subtle Scroll Fade
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0a0a0a] selection:bg-zinc-800 selection:text-white"
    >
      {/* --- Organic Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Grain */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
        
        {/* Fluid Light Blooms */}
        <motion.div style={{ x: dx, y: dy }} className="absolute inset-0">
          <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[15%] w-[35vw] h-[35vw] bg-zinc-500/5 rounded-full blur-[100px]" />
        </motion.div>
      </div>

      {/* --- Main Content --- */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-5xl px-8 flex flex-col items-center text-center"
      >
        {/* Intro Tag */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-6 font-medium"
        >
          Independent Developer & Researcher
        </motion.p>

        {/* The Title: Elegant & Modern */}
        <div className="relative mb-10">
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="text-7xl md:text-[11rem] font-medium tracking-tight text-white leading-[0.8]"
          >
            FULL <br />
            <span className="font-serif italic font-light text-zinc-400">STACK DEVLOPER</span>
           
          </motion.h1>
        </div>

        {/* Narrative Description (Humanized) */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-xl text-lg md:text-xl text-zinc-500 font-light leading-relaxed mb-12"
        >
          Dedicated to building digital products that feel 
          <span className="text-zinc-300"> effortless </span> 
          and perform with <span className="text-zinc-300"> uncompromising logic.</span>
        </motion.p>
        
        {/* Sophisticated CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-10 items-center"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative flex items-center gap-4 text-white uppercase text-xs tracking-[0.3em] font-bold"
          >
            <span>View Recent Works</span>
            <div className="w-8 h-px bg-zinc-700 group-hover:w-12 transition-all duration-500" />
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-8">
            {[
              { Icon: Github, href: "https://github.com/isaacog12" },
              { Icon: Linkedin, href: "#" },
              { Icon: Mail, href: "mailto:isaacnerds@gmail.com" }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-zinc-600 hover:text-white transition-colors duration-500"
              >
                <Icon size={20} strokeWidth={1.2} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* --- Minimalist Footer --- */}
      <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-center text-zinc-600">
        <div className="text-[10px] tracking-[0.2em] uppercase font-medium">
          Based in Nigeria
        </div>
        
        {/* Simple Working Clock */}
        <div className="flex items-center gap-4">
           <div className="w-1 h-1 bg-zinc-800 rounded-full" />
           <p className="text-[11px] font-mono tracking-tighter text-zinc-500 uppercase">
            Local / {time || "00:00 AM"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;