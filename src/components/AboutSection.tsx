import { Code2, Globe, GraduationCap, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "7+ Years",
    description: "Professional Experience",
  },
  {
    icon: Globe,
    title: "Remote",
    description: "International Teams",
  },
  {
    icon: Code2,
    title: "Full-Stack",
    description: "Frontend Focused",
  },
  {
    icon: GraduationCap,
    title: "CS Degree",
    description: "UFBA, Brazil",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">Get to know me</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Brazilian Senior Full-Stack Engineer based in Salvador, Bahia. I take a craftsman's 
              approach to building applications - focusing on creating decoupled, testable, maintainable, 
              scalable, and observable solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in distributed systems and API integrations with fintechs and 
              payment providers, I've worked with companies like <span className="text-foreground font-medium">Scrumlaunch</span>, 
              <span className="text-foreground font-medium"> SAP</span>, and <span className="text-foreground font-medium">Kinvo</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I hold a Bachelor's degree in Computer Science from Universidade Federal da Bahia (UFBA), 
              where my thesis focused on fine-tuned model evaluation on Transformer Fragments for 
              Identifying Idiomatic Expressions in Portuguese.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Languages:</span>
              <span className="px-3 py-1 bg-secondary rounded-full text-sm">English (C1)</span>
              <span className="px-3 py-1 bg-secondary rounded-full text-sm">Portuguese (Native)</span>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-glass p-6 text-center hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
