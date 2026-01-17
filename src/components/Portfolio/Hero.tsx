import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Sparkles, MoveRight } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* 1. Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Orbs using your new glow-pulse animation */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-glow-pulse [animation-delay:2s]" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="space-y-8">
          
          {/* Availability Badge - Fade Up First */}
          <div className="opacity-0 animate-fade-up [animation-delay:200ms] [animation-fill-mode:forwards]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-medium text-zinc-300 tracking-wider uppercase">Open for collaborations</span>
            </div>
          </div>

          {/* Main Title - Fade Up Second */}
          <h1 className="opacity-0 animate-fade-up [animation-delay:400ms] [animation-fill-mode:forwards] text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
            Full-Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-500 italic font-serif">
              Developer
            </span>
          </h1>

          {/* Subtext - Fade Up Third */}
          <p className="opacity-0 animate-fade-up [animation-delay:600ms] [animation-fill-mode:forwards] text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            I build high-performance web applications that merge 
            <span className="text-white font-medium"> technical precision</span> with 
            <span className="text-white font-serif italic"> exceptional design.</span>
          </p>
          
          {/* Action Buttons - Fade Up Last */}
          <div className="opacity-0 animate-fade-up [animation-delay:800ms] [animation-fill-mode:forwards] flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="h-14 px-8 rounded-full bg-white text-black hover:bg-zinc-200 transition-all group font-bold text-md"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects
              <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 rounded-full border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 font-bold text-md"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="opacity-0 animate-fade-up [animation-delay:1000ms] [animation-fill-mode:forwards] flex gap-8 justify-center pt-8">
            {[
              { icon: Github, href: "https://github.com/isaacog12" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:isaacnerds@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                className="text-zinc-500 hover:text-white transition-all transform hover:scale-110"
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Entrance with long delay */}
      <div className="opacity-0 animate-fade-up [animation-delay:1200ms] [animation-fill-mode:forwards] absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Scroll</span>
        <button 
          onClick={scrollToAbout}
          className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1 hover:border-white/30 transition-colors"
        >
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
