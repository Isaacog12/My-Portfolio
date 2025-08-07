import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online store operations with real-time analytics and inventory management.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
     
    {
      title: "Humanoid",
      description: "Humanoid is a modern web application designed to be smart, responsive, and developer-friendly. It serves as a scalable base for building intelligent interfaces — whether for personal tools, healthcare dashboards, admin panels, or advanced UI experiences.",
      tech: ["React", "Vite","TypeScript", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/Isaacog12/Humanoid",
      demo: "https://humanoid-vercel.vercel.app/",
      image: "https://i.postimg.cc/wvYWXv3f/5663820f-6c97-4492-9210-9eaa1a8dc415.jpg"
    },
    
    {
      title: "Task Management App",
      description: "Collaborative task management platform with real-time updates, team collaboration features, and progress tracking.",
      tech: ["Next.js", "React", "Supabase", "Framer Motion"],
      github: "https://github.com/Isaacog12/task-manager-app",
      demo: "https://task-manager-appone.vercel.app/",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop"
    },
    {
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["Vue.js", "TypeScript", "OpenWeather API", "Mapbox"],
      github: "https://github.com/Isaacog12/Weather-app",
      demo: "https://weather-55.vercel.app/",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
    },
    {
      title: "Learning Platform",
      description: "Online learning platform with video streaming, progress tracking, and interactive coding exercises.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:bg-card-hover transition-all duration-300 hover:scale-105 group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-skill-gradient border border-primary/20 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
