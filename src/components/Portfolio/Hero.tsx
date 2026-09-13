import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Mail, ArrowDownRight } from "lucide-react";

const Hero = () => {
  const [time, setTime] = useState("");

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

  return (
    <section className="min-h-screen relative flex items-center bg-[#0a0a0a] pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        
        {/* Main Typography Column */}
        <div className="lg:col-span-8 flex flex-col justify-end">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-zinc-500 text-xs font-semibold tracking-widest uppercase mb-8"
          >
            Software Engineer / Designer
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-6xl sm:text-8xl md:text-[8rem] font-bold tracking-tighter text-white leading-[0.85] uppercase"
          >
            Full Stack<br />
            <span className="text-zinc-400 font-light">Developer</span>
          </motion.h1>
        </div>

        {/* Narrative & Actions Column */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-4 flex flex-col gap-12 lg:pb-4"
        >
          <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-sm">
            Building robust web applications and scalable digital solutions with an emphasis on performance and clean design.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center justify-between w-full sm:w-auto min-w-[200px] h-14 px-6 border border-white/20 hover:border-white transition-colors duration-300"
            >
              <span className="text-white text-xs font-semibold tracking-widest uppercase">View Work</span>
              <ArrowDownRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>

            <div className="flex items-center gap-6 px-2">
              {[
                { Icon: Github, href: "https://github.com/isaacog12" },
                { Icon: Mail, href: "mailto:isaacnerds@gmail.com" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-zinc-500 hover:text-white transition-colors duration-300"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
      
      {/* Status Bar Footer */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto h-16 flex justify-between items-center text-zinc-500 text-xs font-semibold tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-emerald-500/50" />
            <span>Available for Work</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Local Time:</span>
            <span className="text-zinc-300">{time || "00:00"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;