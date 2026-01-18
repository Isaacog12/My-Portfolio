import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Market",
    status: "In Progress",
    tech: ["React", "TS", "Chart.js"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
  },
  {
    title: "Humanoid",
    status: "Production",
    tech: ["Vite", "TS", "Tailwind"],
    github: "https://github.com/Isaacog12/Humanoid",
    demo: "https://humanoid-vercel.vercel.app/",
    image: "https://i.postimg.cc/wvYWXv3f/5663820f-6c97-4492-9210-9eaa1a8dc415.jpg",
  },
  {
    title: "Task Management",
    status: "Production",
    tech: ["Next.js", "Supabase", "Motion"],
    github: "https://github.com/Isaacog12/task-manager-app",
    demo: "https://task-manager-appone.vercel.app/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
  },
  {
    title: "Weather App",
    status: "Production",
    tech: ["Vue.js", "TS", "Mapbox"],
    github: "https://github.com/Isaacog12/Weather-app",
    demo: "https://weather-55.vercel.app/",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80",
  },
  {
    title: "Learning Platform",
    status: "In Progress",
    tech: ["Next.js", "Prisma", "Stripe"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&q=80",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        
        {/* Compact Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              <span className="text-zinc-400 font-bold text-[10px] tracking-[0.3em] uppercase">Showcase</span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-white">Projects</h2>
          </div>
          
          <a 
            href="https://github.com/Isaacog12" 
            target="_blank" 
            rel="noreferrer"
            className="text-[10px] text-zinc-500 hover:text-blue-400 transition-colors uppercase tracking-widest font-bold hidden sm:block"
          >
            View GitHub Archive
          </a>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative h-[300px] overflow-hidden border border-white/10 bg-[#111] rounded-2xl transition-all duration-500 hover:border-blue-500/50">
                
                {/* Image Overlay - Increased base opacity from 0.3 to 0.6 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 contrast-[1.1] brightness-[0.8] group-hover:brightness-[0.9]"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Gradient Wash - Lightened up */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                {/* Content Layer */}
                <div className="relative h-full p-6 flex flex-col justify-between z-10">
                  {/* Top: Tech Tags - Subtle presence even without hover */}
                  <div className="flex flex-wrap gap-1.5 opacity-40 group-hover:opacity-100 transition-all duration-300">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-blue-500/20 border border-blue-500/30 text-blue-300 backdrop-blur-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom: Info & Links */}
                  <div className="space-y-3 bg-black/20 backdrop-blur-sm p-3 -m-3 rounded-b-2xl border-t border-white/5 group-hover:bg-black/40 transition-all">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white tracking-tight drop-shadow-md">{project.title}</h3>
                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
                          <Github size={16} />
                        </a>
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-white/70 hover:text-blue-400 transition-colors">
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'In Progress' ? 'bg-yellow-400' : 'bg-blue-400'} shadow-sm`} />
                      <span className="text-[9px] uppercase tracking-widest font-bold text-zinc-200">{project.status}</span>
                    </div>
                  </div>
                </div>

                {/* Glass Inner Border */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-blue-500/20 rounded-2xl pointer-events-none transition-all duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;