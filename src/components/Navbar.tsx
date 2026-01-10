import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import planetScholarsLogo from "@/assets/planet-scholars-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const demoFormUrl = "https://forms.gle/8aE7Ht9NmtdY6sdL9";
  const bookUrl = "/book";

  const navLinks = [
    { label: "Programs", href: "#programs" },
    { label: "Projects", href: "#projects" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img 
              src={planetScholarsLogo} 
              alt="Planet Scholars" 
              className="h-12 w-12 rounded-full object-cover"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              to={bookUrl}
              className="ring-badge relative inline-flex items-center rounded-full bg-secondary/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-foreground transition-colors hover:bg-secondary"
            >
              our book: Adventure With Python
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Contact
            </Button>
            <Button asChild variant="default" size="sm">
              <a href={demoFormUrl} target="_blank" rel="noreferrer">
                Book Demo
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to={bookUrl}
                className="ring-badge mx-4 inline-flex items-center justify-center rounded-full bg-secondary/70 px-3 py-2 text-xs font-semibold tracking-wide text-foreground transition-colors hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                our book: Adventure With Python
              </Link>
              <div className="flex gap-2 px-4 pt-4 border-t border-border/50 mt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Contact
                </Button>
                <Button asChild variant="default" size="sm" className="flex-1">
                  <a href={demoFormUrl} target="_blank" rel="noreferrer">
                    Book Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
