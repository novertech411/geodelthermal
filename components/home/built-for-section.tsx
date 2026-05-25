import Image from "next/image"
import Link from "next/link"

const sectors = [
  {
    title: "Lithium",
    description: "Hydrological intelligence for brine systems, groundwater management, and extraction infrastructure.",
    href: "/industries#lithium",
    image: "/images/lithium_real.png",
    sectorId: "LITH-01"
  },
  {
    title: "Copper",
    description: "Water system analytics for large-scale extraction and tailings-intensive operations.",
    href: "/industries#copper",
    image: "/images/copper_real.png",
    sectorId: "COPP-02"
  },
  {
    title: "Rare Earths",
    description: "Operational intelligence for environmentally sensitive mineral systems.",
    href: "/industries#rare-earths",
    image: "/images/rare_earths_real.png",
    sectorId: "RARE-03"
  },
  {
    title: "Graphite",
    description: "Resource optimization and water intelligence for battery-material infrastructure.",
    href: "/industries#graphite",
    image: "/images/graphite_real.png",
    sectorId: "GRPH-04"
  },
  {
    title: "Uranium",
    description: "Groundwater and hydrological monitoring for complex extraction environments.",
    href: "/industries#uranium",
    image: "/images/uranium_real.png",
    sectorId: "URAN-05"
  },
]

export function BuiltForSection() {
  return (
    <section className="py-16 sm:py-32 bg-[#14101f] relative border-b border-white/5">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16">
          <span className="eyebrow mb-4">  Industries</span>
          <h2 className="h2 text-white leading-tight">
            Supporting the{" "}
            <span className="text-[#d6ccff]">Critical Mineral Economy.</span>
          </h2>
          <p className="lede mt-6">
            Geodel delivers hydrological intelligence across the mineral systems driving the future global economy.
          </p>
        </div>

        {/* Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <Link
              key={sector.title}
              href={sector.href}
              className="group relative aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 bg-[#1c1730] transition-all duration-[400ms] hover:-translate-y-1 shadow-xl block"
            >
              {/* Background Image */}
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="object-cover filter saturate-[0.85] transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Dark Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14101f] via-[#14101f]/35 to-transparent pointer-events-none" />

              {/* Body content in bottom 40% */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-[60%] z-10">
                {/* Mono Label */}
                {/* <span className="text-[10px] font-mono tracking-[0.2em] text-[#d6ccff] uppercase mb-2">
                  SECTOR // {sector.sectorId}
                </span> */}

                {/* 24px Title */}
                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                  {sector.title}
                </h3>

                {/* 14.5px Description */}
                <p className="text-[14.5px] text-white/55 leading-relaxed mb-4">
                  {sector.description}
                </p>

                {/* Mono CTA in accent-soft */}
                <span className="text-[11px] font-mono tracking-[0.2em] text-[#d6ccff] group-hover:text-white uppercase flex items-center gap-1 transition-colors">
                  Explore Solutions <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
