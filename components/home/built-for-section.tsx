import { Flame, MapPin, Building } from "lucide-react"
import Link from "next/link"

const sectors = [
  {
    icon: Flame,
    title: "Geothermal",
    description: "Identify and characterize geothermal reservoirs for sustainable energy development.",
    href: "/solutions#geothermal",
  },
  {
    icon: MapPin,
    title: "Exploration",
    description: "Support mineral and resource exploration with advanced subsurface intelligence.",
    href: "/solutions#exploration",
  },
  {
    icon: Building,
    title: "Site Assessment",
    description: "Evaluate subsurface conditions for infrastructure and construction projects.",
    href: "/solutions#site-assessment",
  },
]

export function BuiltForSection() {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Built for Energy Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized solutions for the unique challenges of energy and resource development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <Link
              key={sector.title}
              href={sector.href}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <sector.icon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {sector.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {sector.description}
                </p>
                
                {/* Arrow */}
                <div className="mt-4 flex items-center text-primary font-medium">
                  <span>Learn more</span>
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
