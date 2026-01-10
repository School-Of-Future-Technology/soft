import Navbar from "@/components/Navbar";
import { Link, useSearchParams } from "react-router-dom";

const resumes = [
  {
    id: "akash",
    name: "Akash Kumar Roy",
    title: "Software & AI Engineer",
    previewUrl:
      "https://docs.google.com/document/d/1tkIDsT3f3R434t30j3xGCunVFfnqEb6k/preview",
    available: true,
  },
  {
    id: "akshat",
    name: "Akshat Mehta",
    title: "Founder, Young Thinks & Planet Scholars",
    previewUrl: "",
    available: false,
  },
];

const Resume = () => {
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("id") ?? resumes[0].id;
  const current = resumes.find((resume) => resume.id === selectedId) ?? resumes[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="border-b border-border/60 bg-background/80 backdrop-blur">
          <div className="container mx-auto px-4 py-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Our Team
            </p>
            <h1 className="text-xl md:text-2xl font-bold mt-1">Resume Library</h1>
            <p className="text-sm text-muted-foreground mt-1">
             
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {resumes.map((resume) => (
                <Link
                  key={resume.id}
                  to={`/resume?id=${resume.id}`}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    resume.id === current.id
                      ? "border-primary/60 bg-primary/10 text-foreground"
                      : "border-border/60 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {resume.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-4rem-140px)] w-full">
          {current.available ? (
            <iframe
              title={`${current.name} Resume`}
              src={current.previewUrl}
              className="h-full w-full"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <div className="text-center max-w-md px-6">
                <p className="text-lg font-semibold text-foreground">
                  {current.name}'s resume is coming soon.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  We will add it here once it is uploaded.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Resume;
