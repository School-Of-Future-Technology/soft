import { Code2, GraduationCap, Award, Users } from "lucide-react";

const instructors = [
  {
    name: "Lead Instructor",
    role: "Software & AI Engineer",
    credentials: "Ex-FAANG, IIT Graduate",
    icon: Code2,
  },
  {
    name: "Curriculum Head",
    role: "Education Specialist",
    credentials: "10+ years teaching UK & International students",
    icon: GraduationCap,
  },
];

const techLogos = [
  { name: "Python", icon: "🐍" },
  { name: "AI/ML", icon: "🤖" },
  { name: "GitHub", icon: "⚡" },
  { name: "VS Code", icon: "💻" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Web Dev", icon: "🌐" },
];

const TrustSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn from <span className="gradient-text">Industry Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our instructors are software engineers and AI specialists who bring real-world experience to every lesson.
          </p>
        </div>

        {/* Instructor Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="glass-card p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <instructor.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{instructor.name}</h3>
                  <p className="text-primary text-sm font-medium">{instructor.role}</p>
                  <p className="text-muted-foreground text-sm mt-1">{instructor.credentials}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "500+", label: "Students Taught" },
            { value: "4-6", label: "Batch Size" },
            { value: "100%", label: "Project-Based" },
            { value: "5★", label: "Parent Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 glass-card">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">Technologies We Teach</p>
          <div className="flex flex-wrap justify-center gap-4">
            {techLogos.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium hover:border-primary/50 transition-colors"
              >
                <span className="text-lg">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
