import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Request submitted
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold">
              Thanks for booking your free session!
            </h1>
            <p className="mt-4 text-muted-foreground">
              We will reach out on WhatsApp within 24 hours to confirm the time.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <a href="/">Back to Home</a>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <a href="/#faq">See FAQs</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
