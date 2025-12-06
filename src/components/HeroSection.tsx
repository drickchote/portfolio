import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpeg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-mono text-sm mb-4 animate-fade-up opacity-0">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up opacity-0 delay-100">
              Marcos <span className="text-gradient">Adriano</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up opacity-0 delay-200">
              Senior Full-Stack Engineer
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up opacity-0 delay-300 leading-relaxed">
              Nearly 7 years of experience crafting decoupled, testable, and scalable applications. 
              Specializing in React, TypeScript, and distributed systems with API integrations.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-up opacity-0 delay-400">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#about">About Me</a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-up opacity-0 delay-500">
              <a
                href="https://github.com/drickchote"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/marcosadev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-up opacity-0 delay-300">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-2xl animate-pulse-glow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 glow-effect">
                <img
                  src={profileImage}
                  alt="Marcos Adriano"
                  className="w-full h-full object-cover object-[center_-125px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
