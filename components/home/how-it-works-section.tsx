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
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that guides your project from inception to actionable results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/30" />

          <div className="space-y-12">
            {timelineSteps.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div className="p-6 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-colors">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
