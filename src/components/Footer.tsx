import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-gradient mb-2 inline-block">
              MS
            </a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Marcos Santos. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/drickchote"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/marcosadev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:marcosadrianodev@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};
