import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Sparkles, MoveRight } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* 1. Pro Background Integration */}
      <div className="absolute inset-0 z-0">
        <img 
          src="http://googleusercontent.com/image_collection/image_retrieval/15196447018231054855_0"
          alt="Professional Abstract Tech Background"
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
        />
        {/* Layered Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-transparent to-[#030712]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-transparent to-[#030712]" />
        
        {/* Cinematic Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] animate-glow-pulse [animation-delay:2s]" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="space-y-8">
          
          {/* Availability Badge */}
          <div className="opacity-0 animate-fade-up [animation-delay:200ms] [animation-fill-mode:forwards]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-4 shadow-2xl">
              <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="opacity-0 animate-fade-up [animation-delay:400ms] [animation-fill-mode:forwards] text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white leading-[0.85]">
            Full-Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500 italic font-serif font-light tracking-tight">
              Developer
            </span>
          </h1>

          {/* Subtext */}
          <p className="opacity-0 animate-fade-up [animation-delay:600ms] [animation-fill-mode:forwards] text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
            Merging <span className="text-white font-normal">Technical Excellence</span> with <br />
            <span className="text-white italic font-serif">Intuitive Human Design.</span>
          </p>
          
          {/* Action Buttons */}
          <div className="opacity-0 animate-fade-up [animation-delay:800ms] [animation-fill-mode:forwards] flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="h-16 px-10 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 group font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="h-16 px-10 rounded-full border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 font-bold text-lg transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="opacity-0 animate-fade-up [animation-delay:1000ms] [animation-fill-mode:forwards] flex gap-10 justify-center pt-10">
            {[
              { icon: Github, href: "https://github.com/isaacog12" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:isaacnerds@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                className="text-zinc-500 hover:text-white transition-all transform hover:scale-125 duration-300"
              >
                <social.icon size={26} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Refined Scroll Indicator */}
      <div className="opacity-0 animate-fade-up [animation-delay:1400ms] [animation-fill-mode:forwards] absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-black">Explore</span>
        <button 
          onClick={scrollToAbout}
          className="w-[30px] h-[50px] border-2 border-white/10 rounded-full flex justify-center p-1.5 hover:border-primary/50 transition-colors group"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
