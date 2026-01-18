import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Zap, Globe, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-20 items-start">
          
          {/* Left Side: Narrative */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-zinc-600 text-xs tracking-[0.4em] uppercase font-bold">
                Philosophy
              </h2>
              <h3 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                Engineering with <br />
                <span className="font-serif italic text-zinc-500 font-light">Intuition.</span>
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 max-w-xl"
            >
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                I am <span className="text-white">Ogbomo Isaac</span>. I don't just write code; I architect 
                digital environments. I believe that a backend should be as 
                <span className="text-zinc-200"> robust </span> as the frontend is 
                <span className="text-zinc-200 font-serif italic"> fluid</span>.
              </p>

              <p className="text-lg text-zinc-500 leading-relaxed">
                Based in Nigeria, I bridge the gap between complex logic and human-centered delivery. 
                Whether it's a blockchain verification system or a real-time messaging server, 
                my goal is to eliminate the friction between the user and the technology.
              </p>

              {/* Service Pill Tags */}
              <div className="flex flex-wrap gap-4 pt-4">
                {["Blockchain", "Full Stack", "NLP Research", "Scalable UI"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] uppercase tracking-widest text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: The "Metrics" Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:mt-20"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl rounded-[3rem]" />
            
            <Card className="bg-[#111] border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl">
              <CardContent className="p-12 space-y-12">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Status</p>
                    <p className="text-sm text-zinc-200">Open for Collaborations</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-10">
                  {[
                    { label: "Built with Purpose", value: "07", desc: "Production-ready apps deployed.", icon: Zap },
                    { label: "Technical Range", value: "12", desc: "Modern frameworks & languages mastered.", icon: Globe },
                    { label: "Industry Focus", value: "03", desc: "Years of engineering high-load systems.", icon: Shield },
                  ].map((stat, i) => (
                    <div key={i} className="group flex items-start gap-6">
                      <div className="mt-1">
                        <stat.icon size={18} className="text-zinc-600 group-hover:text-blue-400 transition-colors" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-3">
                          <span className="text-4xl font-light text-white tracking-tighter">{stat.value}</span>
                          <span className="text-zinc-500 text-xs uppercase tracking-widest font-bold font-mono">{stat.label}</span>
                        </div>
                        <p className="text-xs text-zinc-600 leading-relaxed max-w-[200px]">{stat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/5">
                  <button className="w-full py-4 rounded-xl bg-white/[0.03] border border-white/5 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:bg-white hover:text-black transition-all duration-500">
                    Download Résumé
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;