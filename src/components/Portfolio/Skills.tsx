"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Code2, Palette, Smartphone, Database, 
  GitBranch, Terminal, Cpu, Globe, Layers 
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Tech",
    skills: ["React", "TypeScript", "Next.js", "HTML5", "CSS3"],
    color: "from-blue-500/20 to-cyan-500/20",
    span: "md:col-span-2"
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Tailwind", "Figma", "Styled Components"],
    color: "from-purple-500/20 to-pink-500/20",
    span: "md:col-span-1"
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Firebase", "Supabase", "Node.js", "PostgreSQL"],
    color: "from-orange-500/20 to-yellow-500/20",
    span: "md:col-span-1"
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: ["React Native", "PWA", "Expo"],
    color: "from-green-500/20 to-emerald-500/20",
    span: "md:col-span-1"
  },
  {
    icon: GitBranch,
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "Vite", "CI/CD", "Jest"],
    color: "from-red-500/20 to-rose-500/20",
    span: "md:col-span-1"
  }
];

const Skills = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4"
          >
            Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Technical <span className="text-muted-foreground italic font-serif">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            Building high-performance applications with the latest industry-standard technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={category.span}
            >
              <Card className="relative h-full overflow-hidden border-border/50 bg-card/30 backdrop-blur-md hover:border-primary/50 transition-colors group">
                {/* Gradient Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-3 bg-background/80 rounded-2xl border border-border shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-xs font-mono text-muted-foreground/50">0{index + 1}</div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 tracking-tight">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-background/50 text-xs font-medium border border-border/50 group-hover:border-primary/20 group-hover:bg-background transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
