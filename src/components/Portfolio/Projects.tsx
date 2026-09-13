import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Market",
    status: "In Progress",
    tech: ["React", "TypeScript", "Chart.js"],
    github: "https://github.com/Isaacog12/E-Market",
    demo: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
  },
  {
    title: "Humanoid",
    status: "Production",
    tech: ["Vite", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Isaacog12/Humanoid",
    demo: "https://humanoid-vercel.vercel.app/",
    image: "https://i.postimg.cc/wvYWXv3f/5663820f-6c97-4492-9210-9eaa1a8dc415.jpg",
  },
  {
    title: "Task Management",
    status: "Production",
    tech: ["Next.js", "Supabase", "Framer Motion"],
    github: "https://github.com/Isaacog12/task-manager-app",
    demo: "https://task-manager-appone.vercel.app/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
  },
  {
    title: "Weather App",
    status: "Production",
    tech: ["Vue.js", "TypeScript", "Mapbox"],
    github: "https://github.com/Isaacog12/Weather-app",
    demo: "https://weather-55.vercel.app/",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80",
  },
  {
    title: "Learning Platform",
    status: "In Progress",
    tech: ["Next.js", "Prisma", "Stripe"],
    github: "https://github.com/Isaacog12/learning-platform",
    demo: "#",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&q=80",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-zinc-500 font-semibold text-xs tracking-widest uppercase">Showcase</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Selected Works</h2>
          </div>
          
          <a 
            href="https://github.com/Isaacog12" 
            target="_blank" 
            rel="noreferrer"
            className="text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-widest font-semibold border-b border-zinc-600 hover:border-white pb-1"
          >
            View GitHub Archive
          </a>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group flex flex-col h-full bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-colors duration-500">
                
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden border-b border-white/10 bg-zinc-900">
                  <div 
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute top-4 right-4 bg-black text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 border border-white/10">
                    {project.status}
                  </div>
                </div>

                {/* Content Layer */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium text-white tracking-tight">{project.title}</h3>
                      <div className="flex gap-4">
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                          <Github size={18} strokeWidth={1.5} />
                        </a>
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                          <ArrowUpRight size={20} strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-widest font-semibold px-2 py-1 bg-white/5 border border-white/10 text-zinc-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;