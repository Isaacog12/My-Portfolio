import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Code2, Rocket, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#030712] relative overflow-hidden">
      {/* Subtle Background Text Layer */}
      <div className="absolute top-20 left-10 text-[10rem] font-bold text-white/[0.02] select-none pointer-events-none hidden lg:block">
        CREATIVE
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col mb-16 space-y-4">
          <div className="flex items-center gap-2 animate-fade-up opacity-0 [animation-fill-mode:forwards]">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">The Developer</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white animate-fade-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            Engineering digital <br />
            <span className="text-muted-foreground italic font-serif">solutions with soul.</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Narrative Content */}
          <div className="space-y-8 animate-fade-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            <p className="text-xl text-zinc-400 leading-relaxed font-light">
              I am <span className="text-white font-medium">Ogbomo Isaac</span>, a full-stack engineer 
              specializing in building high-performance web systems. My philosophy is simple: 
              Code is just a tool; the <span className="italic font-serif text-zinc-300">experience</span> is the product.
            </p>
            
            <p className="text-lg text-zinc-500 leading-relaxed">
              Based in Nigeria, I bridge the gap between complex backend logic and 
              pixel-perfect frontend delivery. Whether it's architecting a blockchain verification 
              system or a real-time messaging app, I focus on clean architecture and 
              user-centric performance.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { label: "Clean Code", icon: Code2 },
                { label: "Modern UX", icon: Heart },
                { label: "Scalability", icon: Rocket },
                { label: "Optimization", icon: Terminal },
              ].map((trait) => (
                <div 
                  key={trait.label}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-tighter text-zinc-300 hover:border-primary/50 transition-colors group"
                >
                  <trait.icon size={14} className="text-primary group-hover:scale-125 transition-transform" />
                  {trait.label}
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Stats Card */}
          <div className="animate-fade-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <Card className="relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border-white/10 p-1 rounded-[2.5rem] group hover:border-primary/30 transition-all duration-500">
              {/* Internal Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-all" />
              
              <CardContent className="p-10">
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-10">Key Metrics</h3>
                <div className="space-y-10">
                  {[
                    { label: "Experience", value: "3+", unit: "Years" },
                    { label: "Production Apps", value: "7+", unit: "Built" },
                    { label: "Technologies", value: "12+", unit: "Mastered" },
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4 group/stat">
                      <div>
                        <p className="text-zinc-500 text-sm mb-1">{stat.label}</p>
                        <p className="text-zinc-400 text-xs italic font-serif uppercase tracking-widest">{stat.unit}</p>
                      </div>
                      <span className="text-5xl font-bold tracking-tighter text-white group-hover/stat:text-primary transition-colors">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                      Currently available for freelance & full-time roles
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
