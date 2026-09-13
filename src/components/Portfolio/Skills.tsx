import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, Database, Palette, 
  Terminal 
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Interfaces that feel natural and performant.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    className: "md:col-span-2 md:row-span-1"
  },
  {
    icon: Database,
    title: "Backend",
    description: "Scalable data structures and APIs.",
    skills: ["Node.js", "PostgreSQL", "Supabase", "Redis"],
    className: "md:col-span-1 md:row-span-1"
  },
  {
    icon: Palette,
    title: "Visuals",
    description: "From design to functional code.",
    skills: ["Figma", "Framer Motion", "UX Design"],
    className: "md:col-span-1 md:row-span-1"
  },
  {
    icon: Terminal,
    title: "Systems",
    description: "Deployment & CI/CD flow.",
    skills: ["Git", "Vercel", "Docker", "AWS"],
    className: "md:col-span-2 md:row-span-1"
  }
];

const Skills = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col mb-16 space-y-4">
          <span className="text-zinc-500 font-semibold text-xs tracking-widest uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Tools & Technologies
          </h2>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 bg-[#0a0a0a] hover:bg-white/[0.03] transition-colors duration-300 flex flex-col justify-between ${cat.className}`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <cat.icon size={20} strokeWidth={1.5} className="text-white" />
                  <h3 className="text-lg font-medium tracking-tight text-white">{cat.title}</h3>
                </div>
                
                <p className="text-sm text-zinc-500 leading-relaxed font-light">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-10">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 border border-white/10 text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;