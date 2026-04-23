import { Database, Cpu, Eye, FileOutput } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamlessly combine geological surveys, well logs, seismic data, and more into a single coherent dataset.",
  },
  {
    icon: Cpu,
    title: "Modeling",
    description: "Build and refine subsurface models using machine learning and geostatistical methods.",
  },
  {
    icon: Eye,
    title: "Interpretation",
    description: "Visualize complex 3D structures and identify key features with interactive tools.",
  },
  {
    icon: FileOutput,
    title: "Output",
    description: "Generate comprehensive reports, maps, and recommendations ready for stakeholders.",
  },
]

export function PlatformSection() {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            One Integrated Platform
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Everything you need to understand and act on subsurface data, unified in a single powerful system.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-5 sm:p-6 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
