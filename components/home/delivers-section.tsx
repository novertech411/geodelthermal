import { Target, Boxes, ShieldCheck, Compass } from "lucide-react"

const deliverables = [
  {
    icon: Target,
    title: "Defined Targets",
    description: "Precise identification of high-potential zones and drilling locations based on integrated analysis.",
  },
  {
    icon: Boxes,
    title: "Subsurface Models",
    description: "Detailed 3D geological and geophysical models that reveal underground structures.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Confidence",
    description: "Quantified uncertainty assessments that help you understand and manage project risks.",
  },
  {
    icon: Compass,
    title: "Recommended Actions",
    description: "Clear, actionable recommendations tailored to your project goals and constraints.",
  },
]

export function DeliversSection() {
  return (
    <section className="py-16 sm:py-24 relative bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            What Geodel Delivers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Tangible outputs that drive better decisions and reduce project uncertainty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="group relative p-5 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-purple-sm">
                    <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
