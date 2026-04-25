import GlassCard from "@/components/GlassCard"
import StatusBadge from "@/components/StatusBadge"

const timelineSteps = [
  {
    step: "01",
    title: "Project Scoping",
    description: "Define objectives, identify data requirements, and establish success criteria.",
  },
  {
    step: "02",
    title: "Data Collection",
    description: "Gather and import all available subsurface data into the platform.",
  },
  {
    step: "03",
    title: "Model Building",
    description: "Construct integrated geological and geophysical models.",
  },
  {
    step: "04",
    title: "Analysis & QC",
    description: "Validate models, assess uncertainty, and refine interpretations.",
  },
  {
    step: "05",
    title: "Reporting",
    description: "Generate comprehensive deliverables and present findings.",
  },
  {
    step: "06",
    title: "Decision Support",
    description: "Provide ongoing guidance as projects evolve and new data emerges.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <StatusBadge label="Process" value="Standard Methodology" className="justify-center mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="text-foreground/90">How It</span>{" "}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
            A proven methodology that guides your project from inception to actionable results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/10 opacity-30" />

          <div className="space-y-12">
            {timelineSteps.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <GlassCard className="group border-white/5 hover:border-primary/20 transition-all duration-500">
                    <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? "md:items-end" : ""}`}>
                      <StatusBadge label="PHASE" value={item.step} />
                      <h3 className="text-xl font-semibold text-foreground tracking-tight">{item.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {item.description}
                    </p>
                    
                    <div className={`mt-4 pt-4 border-t border-white/5 flex ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                        <div className="w-1 h-3 bg-primary" />
                        <span className="font-mono text-[9px] uppercase tracking-wider">Operational</span>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
