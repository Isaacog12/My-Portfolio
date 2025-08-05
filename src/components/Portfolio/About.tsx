import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional user experiences through code
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I am Ogbomo Isaac, a dedicated frontend developer with a passion for creating beautiful, 
              functional, and user-friendly web applications. With expertise in modern 
              JavaScript frameworks and a keen eye for design, I transform ideas into 
              digital experiences.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My journey in web development has led me to work with cutting-edge 
              technologies, always staying up-to-date with the latest trends and 
              best practices in the industry.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Problem Solving", "Clean Code", "User-Centric Design", 
                "Performance Optimization", "Collaborative Spirit"
              ].map((trait) => (
                <span 
                  key={trait}
                  className="px-4 py-2 bg-skill-gradient border border-primary/20 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:bg-card-hover transition-colors duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Years of Experience</span>
                  <span className="font-bold text-xl text-accent">3+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-bold text-xl text-accent">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Technologies Mastered</span>
                  <span className="font-bold text-xl text-accent">12+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Coffee Consumed</span>
                  <span className="font-bold text-xl text-accent">∞</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;