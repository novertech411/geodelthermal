import { Upload, Box, Search, CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Data",
    description: "Import your geological, geophysical, and well data into a unified environment.",
  },
  {
    icon: Box,
    title: "Build Models",
    description: "Generate robust subsurface models using advanced algorithms and AI.",
  },
  {
    icon: Search,
    title: "Interpret Results",
    description: "Analyze outputs with interactive visualizations and clear reporting.",
  },
  {
    icon: CheckCircle,
    title: "Make Decisions",
    description: "Act on data-driven insights with confidence and precision.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            From Data to Decision
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined workflow that transforms raw subsurface data into actionable intelligence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
