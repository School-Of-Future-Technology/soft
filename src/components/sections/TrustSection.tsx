import { GraduationCap } from "lucide-react";
import akashImage from "@/assets/akash_.png";
import akshatImage from "@/assets/akshat3.png";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Link } from "react-router-dom";

const instructors = [
  {
    id: "akshat",
    name: "Akshat Mehta",
    role: "Founder, Young Thinks & Planet Scholars",
    credentials: "B.Tech and M.Tech IIT Bombay",
    bio: "Our mission is to strengthen students’ foundations in Maths, Science, Coding, and AI. As a Maths educator and founder, I focus on helping learners develop clarity in concepts, confidence in problem-solving, and curiosity for STEM. We want every student to feel capable and excited about the technologies shaping their future.",
    imageUrl: akshatImage,
    icon: GraduationCap,
    initials: "CH",
  },
  {
    id: "akash",
    name: "Akash Kumar Roy",
    role: "Software & AI Engineer, Lead Instructor",
    credentials: "GATE All India Rank 3462 (CSE)",
    bio: "As a Software and AI Engineer, I believe every student should learn how to think, create, and solve problems using technology. I combine real industry knowledge with step-by-step teaching to ensure students not only learn Python and AI, but also build meaningful projects that make them proud.",
    imageUrl: akashImage,
  },
];

const techLogos = [
  { name: "Python", logoUrl: "https://cdn.simpleicons.org/python/3776ab" },
  { name: "AI/ML", logoUrl: "https://cdn.simpleicons.org/openai/10a37f" },
  { name: "GitHub", logoUrl: "https://cdn.simpleicons.org/github/ffffff" },
  { name: "VS Code", logoUrl: "https://cdn.simpleicons.org/visualstudiocode/22c1f6" },
  { name: "TensorFlow", logoUrl: "https://cdn.simpleicons.org/tensorflow/ff6f00" },
  { name: "Web Dev", logoUrl: "https://cdn.simpleicons.org/html5/e34f26" },
  { name: "Java", logoUrl: "https://cdn.simpleicons.org/java/007396" },
  { name: "C", logoUrl: "https://cdn.simpleicons.org/c/a8b9cc" },
  { name: "C++", logoUrl: "https://cdn.simpleicons.org/cplusplus/00599c" },
  { name: "App Dev", logoUrl: "https://cdn.simpleicons.org/android/3ddc84" },
  { name: "Operating Systems", logoUrl: "https://cdn.simpleicons.org/linux/fcc624" },
  { name: "Database", logoUrl: "https://cdn.simpleicons.org/postgresql/4169e1" },
  { name: "Computer Networks", logoUrl: "https://cdn.simpleicons.org/cisco/1ba0d7" },
  { name: "DSA", logoUrl: "https://cdn.simpleicons.org/leetcode/ffa116" },
];

const TrustSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Link
            to="/book"
            className="ring-badge mx-auto mb-6 inline-flex items-center justify-center rounded-full bg-secondary/70 px-5 py-2.5 text-sm font-semibold tracking-wide text-foreground transition-colors hover:bg-secondary"
          >
            our book: Adventure With Python
          </Link>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn from <span className="gradient-text">Industry Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our instructors are software engineers and AI specialists who bring real-world experience to every lesson.
          </p>
        </div>

        {/* Instructor Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {instructors.map((instructor, index) => (
            <CardContainer
              key={index}
              containerClassName="py-0"
              className="w-full"
            >
              <CardBody className="h-auto w-full">
                <CardItem translateZ={20} className="w-full">
                  <div
                    className="glass-card p-6 card-hover animated-border"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      {instructor.imageUrl ? (
                        <img
                          src={instructor.imageUrl}
                          alt={instructor.name}
                          className="h-16 w-16 rounded-full object-cover border border-border/60 shrink-0"
                        />
                      ) : (
                        <div className="h-16 w-16 rounded-full bg-secondary/70 border border-border/60 flex items-center justify-center shrink-0 text-sm font-semibold text-foreground">
                          {instructor.initials}
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{instructor.name}</h3>
                        <p className="text-primary text-sm font-medium">{instructor.role}</p>
                        <p className="text-muted-foreground text-sm mt-2">{instructor.credentials}</p>
                        {instructor.bio && (
                          <p className="text-muted-foreground text-sm mt-3">{instructor.bio}</p>
                        )}
                        <Link
                          to={`/resume?id=${instructor.id}`}
                          className="inline-flex mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          View resume
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "500+", label: "Students Taught" },
            { value: "4-6", label: "Batch Size" },
            { value: "100%", label: "Project-Based" },
            { value: "4.9 stars", label: "Parent Rating" },
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
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium hover:border-primary/50 transition-colors leading-none"
              >
                <img
                  src={tech.logoUrl}
                  alt={`${tech.name} logo`}
                  className="h-4 w-4 shrink-0"
                />
                <span className="whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
