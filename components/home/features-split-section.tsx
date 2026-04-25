import GlassCard from "@/components/GlassCard"
import StatusBadge from "@/components/StatusBadge"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const capabilities = [
  {
    title: "Geothermal Field Mapping",
    subtitle: "High-Resolution Interpretation",
    description: "Our proprietary engine processes raw field measurements into actionable 3D stratigraphic maps. We identify hotspots with 92% confidence by correlating thermal gradients with fluid flow dynamics.",
    image: "/images/geological/site_drilling.png",
    points: ["Thermal Gradient Analysis", "Fluid Migration Pathing", "Fracture Network Modeling"],
    tag: "GEO-FIELD-v4"
  },
  {
    title: "Seismic Data Synthesis",
    subtitle: "Deep Structural Insights",
    description: "Transform complex seismic arrays into unified structural volumes. Geodel's synthesis layer removes noise and highlights stratigraphic traps that standard processing misses.",
    image: "/images/geological/volcanic_wireframe.png",
    points: ["Automated Fault Tracking", "Velocity Model Inversion", "Subsurface Target Selection"],
    tag: "SEIS-SYNTH-X"
  }
]

export function FeaturesSplitSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-40">
          {capabilities.map((cap, index) => (
            <div key={cap.title} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Column */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                    <img 
                      src={cap.image} 
                      alt={cap.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <StatusBadge label="SOURCE_NODE" value={cap.tag} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-1 space-y-8">
                <div>
                  <h4 className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">{cap.subtitle}</h4>
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">{cap.title}</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>

                <ul className="space-y-4">
                  {cap.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-foreground/80 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Button variant="link" className="text-primary p-0 h-auto text-lg group">
                    Explore Capability 
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
