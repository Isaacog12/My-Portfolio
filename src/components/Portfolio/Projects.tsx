import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Market",
    status: "In Progress",
    description: "A comprehensive admin dashboard for managing online store operations with real-time analytics.",
    tech: ["React", "TypeScript", "Tailwind", "Chart.js"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    title: "Humanoid",
    status: "Production",
    description: "Modern web application designed to be smart, responsive, and developer-friendly. A scalable base for intelligent interfaces.",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    github: "https://github.com/Isaacog12/Humanoid",
    demo: "https://humanoid-vercel.vercel.app/",
    image: "https://i.postimg.cc/wvYWXv3f/5663820f-6c97-4492-9210-9eaa1a8dc415.jpg"
  },
  {
    title: "Task Management",
    status: "Production",
    description: "Collaborative platform with real-time updates, team features, and progress tracking.",
    tech: ["Next.js", "Supabase", "Framer Motion"],
    github: "https://github.com/Isaacog12/task-manager-app",
    demo: "https://task-manager-appone.vercel.app/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
  },
  {
    title: "Weather App",
    status: "Production",
    description: "Beautiful weather application with location-based forecasts and interactive maps.",
    tech: ["Vue.js", "TypeScript", "OpenWeather", "Mapbox"],
    github: "https://github.com/Isaacog12/Weather-app",
    demo: "https://weather-55.vercel.app/",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
  },
  {
    title: "Learning Platform",
    status: "In Progress",
    description: "Online learning platform with video streaming and interactive coding exercises.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80"
  }
];

const Projects = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Featured <span className="text-muted-foreground italic font-serif">Creations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              A selection of digital experiences built with precision and passion.
            </p>
          </div>
          <div className="hidden md:block h-px flex-grow mx-8 bg-border mb-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative h-[450px] overflow-hidden border-none bg-zinc-900 rounded-3xl"
            >
              {/* Background Image with Zoom */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Gradient Overlay (Darkens on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content Container */}
              <div className="relative h-full p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                
                {/* Status Badge */}
                <div className="mb-4">
                  <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border ${
                    project.status === "In Progress" 
                    ? "border-yellow-500/50 text-yellow-500 bg-yellow-500/10" 
                    : "border-emerald-500/50 text-emerald-500 bg-emerald-500/10"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </h3>

                {/* Description (Expands on hover) */}
                <p className="text-zinc-300 text-sm mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] text-zinc-400 bg-white/10 backdrop-blur-md px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="bg-white text-black hover:bg-zinc-200 rounded-full" asChild>
                    <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
