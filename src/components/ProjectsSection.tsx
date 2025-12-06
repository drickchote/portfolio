import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    id: "conecta-gabinete",
    name: "Conecta Gabinete",
    description:
      "A comprehensive platform for political office management, featuring integrations with Google Maps, Google Calendar, and WhatsApp. Includes mobile app with real-time data sync and PDF/Excel generation capabilities.",
    techs: ["TypeScript", "React", "React Native", "Node.js", "Tailwind", "AWS"],
    link: "https://conectagabinete.com.br/",
    successCaseId: "conecta-gabinete-case",
  },
  {
    id: "olgari",
    name: "Olgari",
    description:
      "A modern web platform built with cutting-edge technologies, delivering seamless user experiences with responsive design and optimized performance.",
    techs: ["TypeScript", "React", "Tailwind CSS", "Modern Web APIs"],
    link: "https://olgari.com.br",
    successCaseId: "olgari-case",
  },
  {
    id: "kinvo-app",
    name: "Kinvo App",
    description:
      "A fintech investment tracking application featuring real-time WebSocket data streaming for stock prices and portfolio changes. Includes a dedicated Bitcoin Connection screen and instant market updates.",
    techs: ["TypeScript", "React Native", "Redux", "MobX", "WebSocket"],
    link: "https://play.google.com/store/apps/details?id=com.everestti.kinvo",
    successCaseId: "kinvo-case",
  },
  {
    id: "sistema-loteamentos",
    name: "Sistema de Loteamentos",
    description:
      "Real estate management system with amortization simulator for financing calculations. Features automated boleto generation with PJBank integration, reducing processing time from 2+ hours to instant execution.",
    techs: ["JavaScript", "PHP", "Laravel", "Bootstrap", "Firebird"],
    link: "https://jcompanyti.com.br/sistema.php?para=sistema-loteamentos",
    successCaseId: "loteamentos-case",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">My portfolio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="card-glass p-6 md:p-8 group hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-gradient transition-all duration-300">
                  {project.name}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Visit Project →
                </a>
                <a
                  href={`#${project.successCaseId}`}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  View Success Case
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
