import { Upload, Box, Search, CheckCircle, ArrowRight } from "lucide-react"
import GlassCard from "@/components/GlassCard"
import StatusBadge from "@/components/StatusBadge"

const steps = [
  {
    icon: Upload,
    title: "Upload Data",
    description: "Import your geological, geophysical, and well data into a unified environment.",
    metric: "1.2GB/s"
  },
  {
    icon: Box,
    title: "Build Models",
    description: "Generate robust subsurface models using advanced algorithms and AI.",
    metric: "AI-DRIVEN"
  },
  {
    icon: Search,
    title: "Interpret Results",
    description: "Analyze outputs with interactive visualizations and clear reporting.",
    metric: "4K RESOLUTION"
  },
  {
    icon: CheckCircle,
    title: "Make Decisions",
    description: "Act on data-driven insights with confidence and precision.",
    metric: "CONFIRMED"
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 relative bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent)/0.03_0%,transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <StatusBadge label="Workflow" value="ST-4.0" className="justify-center mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="text-foreground/90">From Data to</span>{" "}
            <span className="gradient-text">Decision</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
            A streamlined workflow that transforms raw subsurface data into actionable intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative h-full">
              <GlassCard className="h-full border-white/5 group hover:border-primary/30 transition-all duration-500">
                {/* Step Number */}
                <div className="mb-6">
                  <StatusBadge label="STEP" value={`0${index + 1}`} />
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
                  {step.description}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary/60">
                    STATUS: {step.metric}
                  </span>
                </div>
              </GlassCard>
              
              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20 pointer-events-none">
                  <ArrowRight className="h-5 w-5 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
