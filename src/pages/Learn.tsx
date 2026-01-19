import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { technologies } from "@/data/learning";

const Learn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Learn With Fun</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Pick a Technology</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Explore bite-sized lessons. Start with Python for chapter lists and flashcards.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <Link
                key={tech.id}
                to={`/learn/${tech.id}`}
                className="glass-card p-6 card-hover border border-border/60 hover:border-primary/60 transition-colors"
              >
                <h2 className="text-lg font-semibold">{tech.name}</h2>
                <p className="text-sm text-muted-foreground mt-2">{tech.description}</p>
                {tech.id === "python" && (
                  <p className="text-xs uppercase tracking-wider text-primary mt-4">
                    Learn Python in fun way
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Learn;
