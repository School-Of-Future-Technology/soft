import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.png";
import heroVideo from "@/assets/bg_vid.mp4";

const HeroSection = () => {
  const [ripple, setRipple] = useState({ x: 50, y: 50, active: false });
  const [videoReady, setVideoReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const demoFormUrl = "https://forms.gle/8aE7Ht9NmtdY6sdL9";

  const rippleStyle = useMemo(
    () => ({
      backgroundImage: `radial-gradient(circle 160px at ${ripple.x}% ${ripple.y}%, hsl(var(--primary) / ${
        ripple.active ? 0.22 : 0
      }) 0%, transparent 60%)`,
    }),
    [ripple]
  );

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;
        setRipple({ x, y, active: true });
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        if (videoReady) {
          videoRef.current?.play();
        }
      }}
      onMouseLeave={() => {
        setRipple((prev) => ({ ...prev, active: false }));
        setIsHovered(false);
        if (videoReady && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {/* Background Image + Video */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${videoReady && isHovered ? "opacity-100" : "opacity-0"}`}
        ref={videoRef}
        muted
        loop
        playsInline
        onLoadedData={() => setVideoReady(true)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/80 hero-gradient" />

      {/* Ripple Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={rippleStyle}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)/0.1) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)/0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now enrolling for 2026 batches
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            We don't just teach coding.
            <br />
            <span className="gradient-text">We help children BUILD with AI.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            AI • Coding • Python • Java • C • C++ • Web Dev • App Dev • Game Dev • GCSE
            <br />
            <span className="text-foreground font-medium">Grades 7–12 | India • UK • Australia • Singapore • USA</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button asChild variant="hero" size="xl" className="group">
              <a href={demoFormUrl} target="_blank" rel="noreferrer">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book a Free Demo Class
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Attend a Free Parent Webinar
            </Button>
            <Button asChild variant="hero-outline" size="lg" className="group">
              <a
                href="https://chat.whatsapp.com/DIr1sEmxFJzA3RlWf3lCcL"
                target="_blank"
                rel="noreferrer"
              >
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Join our community for free study resources
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>500+ Students Taught</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Small Batch Size (4-6)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Industry Experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
