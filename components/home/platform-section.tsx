import { Database, Cpu, Eye, FileOutput } from "lucide-react"
import GlassCard from "@/components/GlassCard"
import StatusBadge from "@/components/StatusBadge"

const features = [
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamlessly combine geological surveys, well logs, seismic data, and more into a single coherent dataset.",
    tag: "ETL-ENGINE"
  },
  {
    icon: Cpu,
    title: "Modeling",
    description: "Build and refine subsurface models using machine learning and geostatistical methods.",
    tag: "ML-KERNEL"
  },
  {
    icon: Eye,
    title: "Interpretation",
    description: "Visualize complex 3D structures and identify key features with interactive tools.",
    tag: "RTX-VIEW"
  },
  {
    icon: FileOutput,
    title: "Output",
    description: "Generate comprehensive reports, maps, and recommendations ready for stakeholders.",
    tag: "O-PROCESS"
  },
]

export function PlatformSection() {
  return (
    <section className="py-24 relative bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <StatusBadge label="Infrastructure" value="Integrated" className="justify-center mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="text-foreground/90">One</span>{" "}
            <span className="gradient-text">Integrated Platform</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
            Everything you need to understand and act on subsurface data, unified in a single powerful system.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <GlassCard
              key={feature.title}
              className="group border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 border border-white/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
                  {feature.description}
                </p>

                <div className="mt-auto">
                  <StatusBadge label="LINK" value={feature.tag} />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      
        {/* Technical Showcase */}
        <div className="mt-20">
          <GlassCard className="border-white/10 bg-black/40 p-4">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 group">
                  <img 
                    src="/images/geological/seismic_viz.png" 
                    alt="Seismic Data Visualization" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Status Overlay */}
                  <div className="absolute top-6 left-6">
                    <StatusBadge label="MODE" value="INTERPRETATION-v4" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-8 pr-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">High-Fidelity <span className="gradient-text">Seismic Interpretation</span></h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our platform processes raw seismic datasets into high-resolution 3D stratigraphic models. Identify fault lines, sediment distributions, and geothermal hotspots with unprecedented clarity.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "RESOLUTION", value: "2.4m / Pixel" },
                    { label: "DEPTH_RANGE", value: "0 - 8000m" },
                    { label: "PROCESSING", value: "GPU-ACCELERATED" },
                    { label: "ACCURACY", value: "CLASS-A" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">{stat.label}</div>
                      <div className="text-sm font-bold text-foreground">{stat.value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <StatusBadge label="SYSTEM_READY" value="ALL_NODES_STABLE" />
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
