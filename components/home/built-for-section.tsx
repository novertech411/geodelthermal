import Image from "next/image"
import Link from "next/link"
import GlassCard from "@/components/GlassCard"
import StatusBadge from "@/components/StatusBadge"

const sectors = [
  {
    title: "Geothermal",
    description: "Identify and characterize geothermal reservoirs for sustainable energy development.",
    href: "/solutions#geothermal",
    image: "/images/geothermal.jpg",
    sectorId: "THRM-01"
  },
  {
    title: "Exploration",
    description: "Support mineral and resource exploration with advanced subsurface intelligence.",
    href: "/solutions#exploration",
    image: "/images/exploration.jpg",
    sectorId: "EXPL-02"
  },
  {
    title: "Site Assessment",
    description: "Evaluate subsurface conditions for infrastructure and construction projects.",
    href: "/solutions#site-assessment",
    image: "/images/site-assessment.jpg",
    sectorId: "SITE-03"
  },
]

export function BuiltForSection() {
  return (
    <section className="py-24 relative bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)/0.02_0%,transparent_70%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <StatusBadge label="Sectors" value="Direct Application" className="justify-center mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="text-foreground/90">Built for</span>{" "}
            <span className="gradient-text">Energy Projects</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
            Specialized solutions for the unique challenges of energy and resource development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectors.map((sector) => (
            <Link
              key={sector.title}
              href={sector.href}
              className="group block h-full"
            >
              <GlassCard className="h-full p-0 border-white/5 group-hover:border-primary/40 transition-all duration-500 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden border-b border-white/10">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 z-20">
                    <StatusBadge label="ID" value={sector.sectorId} />
                  </div>
                </div>
                
                <div className="relative p-6">
                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight">
                    {sector.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {sector.description}
                  </p>
                  
                  {/* Arrow Action */}
                  <div className="mt-6 flex items-center text-primary font-mono text-[10px] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                    <span>Explore Solutions</span>
                    <svg className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
