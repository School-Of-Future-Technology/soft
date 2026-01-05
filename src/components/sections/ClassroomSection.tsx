import { Users, MessageCircle, Target, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Small batches of 4-6 students",
    description: "Every child gets individual attention",
  },
  {
    icon: MessageCircle,
    title: "We explain until they understand",
    description: "No child left behind. Ever.",
  },
  {
    icon: Target,
    title: "Real projects, not just theory",
    description: "Learning by doing is our core philosophy",
  },
];

const ClassroomSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                A Classroom Experience
                <br />
                <span className="gradient-text">Like No Other</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Watch how our teachers interact with students — explaining concepts, 
                debugging code together, and celebrating every small win.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 glass-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="flex flex-wrap gap-4 pt-4">
              {["Live interaction", "Screen sharing", "Doubt clearing", "Recording available"].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Video Placeholder */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden glow-effect glass-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-400/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm">Watch a real class in action</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Live Class</div>
                  <div className="text-xs text-muted-foreground">In Progress</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 glass-card p-3 rounded-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="text-2xl">👨‍💻</div>
                <div className="text-sm">
                  <div className="font-medium">6 Students</div>
                  <div className="text-xs text-muted-foreground">Online now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassroomSection;
