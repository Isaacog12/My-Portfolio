import React from "react";
import { Card } from "@/components/ui/card";
import { 
  Code2, Palette, Smartphone, Database, 
  GitBranch, Terminal, Cpu, Globe, Layers 
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Architecting scalable user interfaces",
    skills: ["React", "TypeScript", "Next.js", "Tailwind"],
    className: "md:col-span-2 md:row-span-1",
    accent: "group-hover:text-blue-400"
  },
  {
    icon: Palette,
    title: "Design System",
    description: "Figma to Code",
    skills: ["Figma", "Motion", "UX"],
    className: "md:col-span-1 md:row-span-1",
    accent: "group-hover:text-purple-400"
  },
  {
    icon: Database,
    title: "Backend & Data",
    description: "Server-side logic and DB management",
    skills: ["Node.js", "PostgreSQL", "Prisma"],
    className: "md:col-span-1 md:row-span-1",
    accent: "group-hover:text-emerald-400"
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description: "Deployment pipelines and Git",
    skills: ["Docker", "Actions", "Vercel"],
    className: "md:col-span-2 md:row-span-1",
    accent: "group-hover:text-orange-400"
  }
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-[#030712] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            The stack I use to build <br /> 
            <span className="text-muted-foreground italic">the future.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {skillCategories.map((cat, i) => (
            <Card 
              key={i}
              className={`group relative overflow-hidden border-white/5 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-white/20 ${cat.className}`}
            >
              {/* Animated Gradient Background */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-[50px] transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-150" />
              
              <div className="flex flex-col h-full p-8 justify-between relative z-10">
                <div>
                  <div className={`mb-4 transition-colors duration-300 ${cat.accent}`}>
                    <cat.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-2">{cat.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-[200px]">{cat.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-300 group-hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
