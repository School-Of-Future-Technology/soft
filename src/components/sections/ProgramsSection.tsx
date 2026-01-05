import { Sparkles, Rocket, Globe, Gamepad2, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Sparkles,
    title: "AI & Python Foundations",
    grades: "Grades 7–9",
    duration: "12-16 weeks",
    projects: "AI Image Generator, Chatbot, Games",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Rocket,
    title: "Advanced AI & ML",
    grades: "Grades 10–12",
    duration: "16-20 weeks",
    projects: "ML Models, Data Science, Neural Networks",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    grades: "Grades 7–12",
    duration: "10-14 weeks",
    projects: "Portfolio, Interactive Websites, Web Apps",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    grades: "Grades 7–10",
    duration: "10-14 weeks",
    projects: "2D Games, Arcade Classics, Game Logic",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: GraduationCap,
    title: "GCSE Computer Science",
    grades: "Grades 9–11 (UK)",
    duration: "Full Academic Year",
    projects: "Exam Prep, Coursework Support, Past Papers",
    gradient: "from-orange-500 to-yellow-500",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Programs <span className="gradient-text">We Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Structured learning paths designed for different ages and skill levels.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group glass-card p-6 card-hover relative overflow-hidden"
            >
              {/* Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.gradient}`} />
              
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.gradient} bg-opacity-20 flex items-center justify-center mb-4`}>
                <program.icon className="w-6 h-6 text-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Who:</span>
                  <span className="font-medium">{program.grades}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{program.duration}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-muted-foreground shrink-0">Build:</span>
                  <span className="font-medium">{program.projects}</span>
                </div>
              </div>
              
              {/* CTA */}
              <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary hover:bg-transparent">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
