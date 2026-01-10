import Navbar from "@/components/Navbar";

const Book = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="border-b border-border/60 bg-background/80 backdrop-blur">
          <div className="container mx-auto px-4 py-4 text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Our Book</p>
            <h1 className="text-xl md:text-2xl font-bold mt-1">
              Adventure With Python
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Chapter 5: Loops - Lab Of Rhythm (SAMPLE)
            </p>
          </div>
        </div>
        <div className="h-[calc(100vh-4rem-96px)] w-full">
          <iframe
            title="Adventure With Python Book"
            src="https://drive.google.com/file/d/12YGFeNgtFEfKc0S9RWDpCPZAwAuvG-0u/preview"
            className="h-full w-full"
            allow="autoplay"
          />
        </div>
      </main>
    </div>
  );
};

export default Book;
