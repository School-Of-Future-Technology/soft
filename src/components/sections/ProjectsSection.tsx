import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Image Generator",
    description: "Built by a Grade 8 student in 4 weeks",
    tech: "Python + OpenAI API",
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: "🎨",
  },
  {
    title: "AI Chatbot",
    description: "Built by a Grade 9 student in 3 weeks",
    tech: "Python + NLP",
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: "🤖",
  },
  {
    title: "Snake Game",
    description: "Built by a Grade 7 student in 2 weeks",
    tech: "Python + Pygame",
    gradient: "from-green-500/20 to-emerald-500/20",
    icon: "🎮",
  },
  {
    title: "Data Dashboard",
    description: "Built by a Grade 10 student in 5 weeks",
    tech: "Python + Matplotlib",
    gradient: "from-orange-500/20 to-yellow-500/20",
    icon: "📊",
  },
  {
    title: "Personal Portfolio",
    description: "Built by a Grade 8 student in 3 weeks",
    tech: "HTML/CSS/JavaScript",
    gradient: "from-blue-500/20 to-indigo-500/20",
    icon: "🌐",
  },
  {
    title: "ML Prediction App",
    description: "Built by a Grade 11 student in 6 weeks",
    tech: "Python + Scikit-learn",
    gradient: "from-red-500/20 to-rose-500/20",
    icon: "🧠",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            MOST IMPORTANT
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Students <span className="gradient-text">Actually Build</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real projects. Real skills. Built by students just like yours.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card overflow-hidden card-hover cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Video Placeholder */}
              <div className={`relative aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-6xl">{project.icon}</span>
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                </div>
                <div className="mt-3 inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary text-xs font-medium text-muted-foreground">
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            See Your Child Build Something Amazing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
