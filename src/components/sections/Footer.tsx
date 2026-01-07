import planetScholarsLogo from "@/assets/planet-scholars-logo.jpg";
import youngThinksLogo from "@/assets/young-thinks-logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logos */}
          <div className="flex items-center gap-6">
            <img 
              src={planetScholarsLogo} 
              alt="Planet Scholars" 
              className="h-14 w-auto"
            />
            <div className="h-10 w-px bg-border/50" />
            <img 
              src={youngThinksLogo} 
              alt="Young Thinks - Parent Company" 
              className="h-10 w-auto"
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#programs" className="hover:text-foreground transition-colors">Programs</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Student Projects</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <span className="text-lg">💬</span>
            </a>
            <a
              href="mailto:hello@codefuture.com"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <span className="text-lg">✉️</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© 2025 Planet Scholars. A Young Thinks Venture.</p>
          <p className="mt-1">
            Teaching AI, Coding & Computer Science to students in USA, UK, Australia & Singapore.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
