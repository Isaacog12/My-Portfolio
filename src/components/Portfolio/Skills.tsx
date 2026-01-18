import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, Database, Palette, 
  Terminal, Globe, Cpu 
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Artistry",
    description: "Interfaces that feel natural.",
    skills: ["React", "Next.js", "TS", "Tailwind"],
    className: "md:col-span-2 md:row-span-1",
    accent: "from-blue-500/10 to-transparent"
  },
  {
    icon: Database,
    title: "Backend",
    description: "Scalable data structures.",
    skills: ["Node", "Postgres", "Supabase"],
    className: "md:col-span-1 md:row-span-1",
    accent: "from-emerald-500/10 to-transparent"
  },
  {
    icon: Palette,
    title: "Visuals",
    description: "Design to functional code.",
    skills: ["Figma", "Motion", "UX"],
    className: "md:col-span-1 md:row-span-1",
    accent: "from-purple-500/10 to-transparent"
  },
  {
    icon: Terminal,
    title: "Systems",
    description: "Deployment & CI/CD flow.",
    skills: ["Git", "Vercel"],
    className: "md:col-span-2 md:row-span-1",
    accent: "from-orange-500/10 to-transparent"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Compact Header */}
        <div className="flex flex-col mb-12 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-zinc-600 font-bold text-[10px] tracking-[0.4em] uppercase">skills</span>
            <div className="h-[1px] w-8 bg-zinc-800" />
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Tools and Technologies.
          </h2>
        </div>

        {/* Contained Grid with Edges */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/5 bg-[#0d0d0d] rounded-2xl overflow-hidden shadow-2xl">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative p-8 border-white/5 border-[0.5px] transition-all duration-500 hover:bg-white/[0.02] ${cat.className}`}
            >
              {/* Subtle Gradient Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-white/5 text-zinc-500 group-hover:text-white transition-colors">
                      <cat.icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-medium tracking-tight text-zinc-200">{cat.title}</h3>
                  </div>
                  
                  <p className="text-sm text-zinc-500 leading-relaxed font-light line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded bg-black/40 border border-white/5 text-zinc-500 group-hover:text-zinc-300 group-hover:border-white/10 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;