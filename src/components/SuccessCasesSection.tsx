import { CheckCircle2, TrendingUp, Zap, Users } from "lucide-react";

const successCases = [
  {
    id: "conecta-gabinete-case",
    project: "Conecta Gabinete",
    title: "Streamlining Political Office Operations",
    description:
      "Developed a comprehensive platform that revolutionized how political offices manage their operations. The system integrates seamlessly with Google services and WhatsApp, enabling real-time communication and scheduling.",
    achievements: [
      "Migrated web functionalities to mobile with full feature parity",
      "Integrated Google Maps for constituency visualization",
      "Automated document generation for PDF and Excel reports",
      "Implemented WhatsApp integration for constituent communication",
    ],
    icon: Users,
  },
  {
    id: "olgari-case",
    project: "Olgari",
    title: "Modern Web Experience Delivery",
    description:
      "Built a modern, responsive web platform that delivers exceptional user experiences. The project focused on performance optimization and accessibility standards.",
    achievements: [
      "Achieved high performance scores through optimization techniques",
      "Implemented responsive design for all device sizes",
      "Built with modern TypeScript and React best practices",
      "Delivered a seamless, accessible user interface",
    ],
    icon: Zap,
  },
  {
    id: "kinvo-case",
    project: "Kinvo App",
    title: "Real-Time Investment Tracking Innovation",
    description:
      "Transformed the investment tracking experience by implementing real-time data streaming and cryptocurrency support. Users now receive instant updates on their portfolios.",
    achievements: [
      "Integrated WebSocket for real-time stock price updates",
      "Created dedicated Bitcoin Connection screen for crypto enthusiasts",
      "Implemented API streaming for instant market data",
      "Enhanced portfolio tracking with live updates",
    ],
    icon: TrendingUp,
  },
  {
    id: "loteamentos-case",
    project: "Sistema de Loteamentos",
    title: "Revolutionizing Real Estate Processing",
    description:
      "Dramatically improved financial processing efficiency for real estate operations. The PJBank integration eliminated manual work and reduced processing time significantly.",
    achievements: [
      "Reduced boleto processing from 2+ hours to instant execution",
      "Built amortization simulator for financing scenarios",
      "Automated payment slip generation with PJBank",
      "Optimized financial transaction workflows",
    ],
    icon: CheckCircle2,
  },
];

export const SuccessCasesSection = () => {
  return (
    <section id="success-cases" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">Real results</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Success <span className="text-gradient">Cases</span>
          </h2>
        </div>

        <div className="space-y-8">
          {successCases.map((caseItem, index) => (
            <article
              key={caseItem.id}
              id={caseItem.id}
              className="card-glass p-6 md:p-10 scroll-mt-24"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Icon and Title */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <caseItem.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-mono text-primary">{caseItem.project}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{caseItem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{caseItem.description}</p>
                </div>

                {/* Achievements */}
                <div className="lg:w-2/3 lg:border-l lg:border-border lg:pl-8">
                  <h4 className="text-lg font-semibold mb-6 text-foreground">Key Achievements</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {caseItem.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
