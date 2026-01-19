import Navbar from "@/components/Navbar";
import { Link, useParams } from "react-router-dom";
import { pythonChapters } from "@/data/learning";
import { useMemo, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { CometCard } from "@/components/ui/comet-card";

const LearnFlashcards = () => {
  const { topic } = useParams<{ topic: string }>();
  const chapter = pythonChapters.find((item) => item.id === topic);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-semibold">Topic not found</h1>
            <p className="text-muted-foreground mt-2">
              Pick a chapter to explore the flashcards.
            </p>
            <Link to="/learn/python" className="inline-flex mt-6 text-primary font-semibold">
              Back to Python chapters
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const [flippedByIndex, setFlippedByIndex] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedByIndex((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const cards = useMemo(() => chapter.flashcards, [chapter.flashcards]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Flashcards</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">{chapter.title}</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Tap through each card and test your memory.
            </p>
          </div>

          <Carousel className="mx-auto max-w-3xl">
            <CarouselContent>
              {cards.map((card, index) => {
                const isFlipped = Boolean(flippedByIndex[index]);
                return (
                  <CarouselItem key={`${chapter.id}-${index}`} className="md:basis-full">
                    <CometCard className="mx-auto w-full max-w-xl">
                      <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#111827] p-6 shadow-[0_20px_60px_-30px_rgba(56,189,248,0.6)] transition duration-300 hover:border-white/30 hover:bg-white/5 hover:backdrop-blur-md">
                        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.25),_transparent_60%)] opacity-80" />
                        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" />
                        <div className="relative h-80 w-full [perspective:1200px]">
                          <div
                            className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
                            style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                          >
                            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e1b4b]/80 via-[#0f172a]/80 to-[#0f766e]/80 p-8 text-center [backface-visibility:hidden]">
                              <p className="text-xs uppercase tracking-[0.3em] text-slate-200/80">
                                Question
                              </p>
                              <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-white">
                                {card.question}
                              </h2>
                            </div>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7c3aed]/80 via-[#db2777]/80 to-[#f59e0b]/80 p-8 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                              <div className="flex h-full w-full flex-col items-center justify-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
                                <div className="flex max-w-md flex-col items-center md:items-start">
                                  <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                                    Answer
                                  </p>
                                  <p className="mt-5 text-lg md:text-xl font-semibold text-white">
                                    {card.answer}
                                  </p>
                                  {card.exampleCode && (
                                    <div className="mt-6 flex flex-col items-center gap-3 text-white md:items-start">
                                      <div className="rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
                                        Example
                                      </div>
                                      <div className="rounded-xl bg-black/30 px-4 py-2 font-mono text-sm">
                                        {card.exampleCode}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              {card.exampleCode && (
                                <div className="flex w-full flex-col items-center justify-center md:w-auto">
                                  <div className="relative flex h-44 w-44 flex-col items-center justify-center">
                                    <div className="value-drop infinite-drop absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-cyan-200/90 px-4 py-1 text-sm font-semibold text-slate-900 shadow-[0_8px_18px_-6px_rgba(34,211,238,0.9)] [transform:translateX(-52%)]">
                                      {card.variableValue}
                                    </div>
                                    <img
                                      src="https://raw.githubusercontent.com/schooloffuturetechnology-wq/website-assets/main/var.png"
                                      alt="Variable box"
                                      className="h-36 w-36 object-contain translate-x-[15px]"
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative mt-6 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-between">
                          <p className="text-xs uppercase tracking-[0.3em] text-slate-200/70">
                            Card {index + 1} of {cards.length}
                          </p>
                          <Button
                            type="button"
                            onClick={() => toggleFlip(index)}
                            className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-6 text-slate-900 shadow-lg shadow-cyan-500/30 hover:from-cyan-300 hover:via-sky-400 hover:to-indigo-400"
                          >
                            {isFlipped ? "Show question" : "Show answer"}
                          </Button>
                        </div>
                      </div>
                    </CometCard>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="mt-6 flex items-center justify-center gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>

          <div className="text-center mt-10">
            <Link to="/learn/python" className="inline-flex text-primary font-semibold">
              Back to Python chapters
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearnFlashcards;
