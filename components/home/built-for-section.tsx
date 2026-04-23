import Image from "next/image"
import Link from "next/link"

const sectors = [
  {
    title: "Geothermal",
    description: "Identify and characterize geothermal reservoirs for sustainable energy development.",
    href: "/solutions#geothermal",
    image: "/images/geothermal.jpg",
  },
  {
    title: "Exploration",
    description: "Support mineral and resource exploration with advanced subsurface intelligence.",
    href: "/solutions#exploration",
    image: "/images/exploration.jpg",
  },
  {
    title: "Site Assessment",
    description: "Evaluate subsurface conditions for infrastructure and construction projects.",
    href: "/solutions#site-assessment",
    image: "/images/site-assessment.jpg",
  },
]

export function BuiltForSection() {
  return (
    <section className="py-16 sm:py-24 relative bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Built for Energy Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Specialized solutions for the unique challenges of energy and resource development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectors.map((sector) => (
            <Link
              key={sector.title}
              href={sector.href}
              className="group relative rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              
              <div className="relative p-6">
                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {sector.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {sector.description}
                </p>
                
                {/* Arrow */}
                <div className="mt-4 flex items-center text-primary font-medium text-sm sm:text-base">
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
