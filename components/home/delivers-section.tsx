import { Target, Boxes, ShieldCheck, Compass } from "lucide-react"
import GlassCard from "@/components/GlassCard"
import StatusBadge from "@/components/StatusBadge"

const deliverables = [
  {
    icon: Target,
    title: "Defined Targets",
    description: "Precise identification of high-potential zones and drilling locations based on integrated analysis.",
    id: "TRGT-X"
  },
  {
    icon: Boxes,
    title: "Subsurface Models",
    description: "Detailed 3D geological and geophysical models that reveal underground structures.",
    id: "3D-VOL"
  },
  {
    icon: ShieldCheck,
    title: "Risk & Confidence",
    description: "Quantified uncertainty assessments that help you understand and manage project risks.",
    id: "Q-CONF"
  },
  {
    icon: Compass,
    title: "Recommended Actions",
    description: "Clear, actionable recommendations tailored to your project goals and constraints.",
    id: "ACT-REQ"
  },
]

export function DeliversSection() {
  return (
    <section className="py-24 relative bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--primary)/0.03_0%,transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <StatusBadge label="Deliverables" value="Priority-A" className="justify-center mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="text-foreground/90">What Geodel</span>{" "}
            <span className="gradient-text">Delivers</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
            Tangible outputs that drive better decisions and reduce project uncertainty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {deliverables.map((item) => (
            <GlassCard
              key={item.title}
              className="group border-white/5 hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] group-hover:scale-105 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground tracking-tight">
                      {item.title}
                    </h3>
                    <StatusBadge label="ID" value={item.id} />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {item.description}
                  </p>
                  
                  {/* Technical Footer */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                      <span className="font-mono text-[9px] text-white/40 uppercase">Ready for export</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
