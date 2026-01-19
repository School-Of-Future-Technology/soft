import Navbar from "@/components/Navbar";
import { Link, useParams } from "react-router-dom";
import { pythonChapters, technologies } from "@/data/learning";

const LearnTech = () => {
  const { tech } = useParams<{ tech: string }>();
  const selectedTech = technologies.find((item) => item.id === tech);

  if (!selectedTech) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-semibold">Technology not found</h1>
            <p className="text-muted-foreground mt-2">Pick a different track from the list.</p>
            <Link to="/learn" className="inline-flex mt-6 text-primary font-semibold">
              Back to Learn With Fun
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const isPython = selectedTech.id === "python";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Learn With Fun</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">{selectedTech.name}</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              {selectedTech.description}
            </p>
          </div>

          {isPython ? (
            <div className="grid gap-6 md:grid-cols-2">
              {pythonChapters.map((chapter) => (
                <Link
                  key={chapter.id}
                  to={`/learn/python/${chapter.id}`}
                  className="glass-card p-6 card-hover border border-border/60 hover:border-primary/60 transition-colors"
                >
                  <h2 className="text-lg font-semibold">{chapter.title}</h2>
                  <p className="text-sm text-muted-foreground mt-2">{chapter.summary}</p>
                  <p className="text-xs uppercase tracking-wider text-primary mt-4">
                    Open flashcards
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="glass-card p-8 text-center">
              <h2 className="text-xl font-semibold">Curriculum coming soon</h2>
              <p className="text-muted-foreground mt-2">
                We are preparing fun lessons and flashcards for {selectedTech.name}.
              </p>
              <Link to="/learn" className="inline-flex mt-6 text-primary font-semibold">
                Browse other technologies
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LearnTech;
