import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Zap, 
  Database, 
  GitBranch 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Technologies",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3"]
    },
    {
      icon: Palette,
      title: "Styling & Design",
      skills: ["Tailwind CSS", "Styled Components", "SASS", "Figma", "Adobe XD", "Material-UI"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Responsive",
      skills: ["React Native", "Progressive Web Apps", "Mobile-First Design", "Cross-Browser Testing"]
    },
    {
      icon: Zap,
      title: "Performance & SEO",
      skills: ["Lighthouse Optimization", "Core Web Vitals", "Lazy Loading", "SEO Best Practices"]
    },
    {
      icon: Database,
      title: "Backend Integration",
      skills: ["REST APIs", "GraphQL", "Firebase", "Supabase", "Node.js", "Express"]
    },
    {
      icon: GitBranch,
      title: "Development Tools",
      skills: ["Git", "Webpack", "Vite", "Docker", "Jest", "Cypress"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:bg-card-hover transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-skill-gradient rounded-lg group-hover:animate-pulse-glow">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-sm font-medium border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;