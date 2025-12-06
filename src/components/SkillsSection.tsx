const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "React Native",
      "Next.js",
      "Vite",
      "Redux",
      "Zustand",
      "TanStack Query",
      "Socket.io",
      "TailwindCSS",
      "Styled Components",
      "CSS Modules",
      "Storybook",
      "MaterialUI",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Nest.JS",
      "Express",
      "Java",
      "Spring Boot",
      "PHP",
      "Laravel",
      "REST APIs",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Firebird",
      "AWS",
      "Google Cloud",
      "RabbitMQ",
    ],
  },
  {
    title: "Tools & Architecture",
    skills: [
      "Git",
      "Docker",
      "Grafana",
      "Kibana",
      "Clean Architecture",
      "Event-Driven Architecture",
      "Figma",
      "Adobe XD",
      "Posthog",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">What I work with</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-glass p-6 md:p-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary hover:bg-primary/20 hover:text-primary rounded-lg text-sm transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
