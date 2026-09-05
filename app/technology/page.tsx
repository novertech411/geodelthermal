"use client"

import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/ui/site-header"
import { SiteFooter } from "@/components/ui/site-footer"
import { Reveal } from "@/components/reveal"
import { CheckCircle2, ArrowRight, Activity, Wrench, Layers, Database, Cpu } from "lucide-react"

const techPillars = [
  {
    num: "01",
    name: "Geodel Drill",
    icon: Activity,
    subtitle: "Predictable, Repeatable Borehole Construction",
    desc: "The hole in the ground is one of geothermal's biggest opportunities for cost reduction. Geodel is combining geoscience, field instrumentation, drilling data and engineering to make borehole construction predictable and repeatable.",
    image: "/images/geothermal/hero_drilling.png",
    points: [
      "Smarter site characterization: know more before the rig arrives.",
      "Drilling intelligence: capture useful field data during construction.",
      "Borehole optimization: design around geology, thermal performance and project requirements.",
      "Automation and repeatability: reduce unnecessary field complexity.",
      "Cost focus: drive down installed cost per unit of thermal capacity.",
    ],
  },
  {
    num: "02",
    name: "Geodel Exchange",
    icon: Wrench,
    subtitle: "Long-Life Ground Loop Thermal Infrastructure",
    desc: "The ground loop is not buried plumbing. It is long-life thermal infrastructure. We are working on borehole heat exchangers, loop architecture, manifolds, materials, sensors, flow control and installation methods that improve how heat moves between the ground and buildings.",
    image: "/images/groundwater_aquifer.png",
    points: [
      "High thermal conductivity grout formulations and piping materials.",
      "Advanced manifold and multi-loop flow balancing systems.",
      "Integrated sensor arrays for real-time thermal conductivity tracking.",
      "Durable installation methods engineered for 50+ year asset life.",
    ],
  },
  {
    num: "03",
    name: "Geodel Heat",
    icon: Cpu,
    subtitle: "Integrated Heat-Pump Equipment Layer",
    desc: "We are developing the heat-pump layer around the realities of American buildings: retrofits, multifamily properties, schools, universities, commercial buildings and new developments. The objective is compact, connected equipment designed to work as part of an integrated geothermal system.",
    image: "/images/geothermal/hardware.png",
    points: [
      "Engineered specifically for American commercial and residential retrofits.",
      "Compact footprint for dense mechanical room integrations.",
      "Connected controls communicating directly with subsurface ground loops.",
    ],
  },
  {
    num: "04",
    name: "Geodel Store",
    icon: Layers,
    subtitle: "Underground & Seasonal Thermal Energy Storage (STES)",
    desc: "Thermal energy does not always need to be used when it is produced. Geodel is exploring underground and system-level thermal storage that can shift useful heat across hours and seasons, balance building loads and strengthen thermal networks.",
    image: "/images/solutions_banner.png",
    points: [
      "Summer heat stored deep underground for winter district heating delivery.",
      "Winter cooling energy retained for high-demand summer air conditioning.",
      "Subsurface energy balancing that strengthens thermal grid stability.",
    ],
  },
  {
    num: "05",
    name: "Geodel Intelligence",
    icon: Database,
    subtitle: "Subsurface Geophysics & Performance Analytics",
    desc: "Geodel began with the subsurface. We are extending that capability into geothermal through geophysics, geology, hydrogeology, sensors and data analytics.",
    image: "/images/predictive_resource.png",
    points: [
      "Characterize sites before major capital is committed.",
      "Improve borefield placement and underground design.",
      "Monitor thermal behavior underground during year-round operation.",
      "Connect subsurface performance with building energy performance.",
      "Use field data to continuously improve future system deployments.",
    ],
  },
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F3] text-[#0B1211] font-sans selection:bg-[#6D3BD4] selection:text-white">
      {/* Hero Header */}
      <section className="relative w-full min-h-[60vh] bg-[#0B1211] text-white flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/geothermal/hero_drilling.png"
            alt="Geodel Drilling Technology Hero"
            fill
            priority
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(11,18,17,.72) 0%, rgba(11,18,17,.28) 45%, rgba(11,18,17,.82) 100%)",
            }}
          />
        </div>

        <SiteHeader />

        <div className="relative z-10 max-w-[1200px] mx-auto px-[clamp(16px,4vw,34px)] pt-36 pb-16 w-full space-y-4">
          <span className="text-xs font-medium text-white/50">Technology stack</span>
          <h1 className="font-[family-name:var(--font-poppins)] font-semibold text-4xl sm:text-6xl tracking-[-0.035em] text-balance">
            Better geothermal starts underground.
          </h1>
          <p className="text-base sm:text-xl text-white/[0.74] max-w-[65ch] leading-relaxed font-normal">
            We are developing technologies across the physical geothermal system: from understanding the subsurface before drilling begins to controlling how thermal energy moves through a building after installation.
          </p>
        </div>
      </section>

      {/* Main Technology Pillars */}
      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto space-y-24">
        {techPillars.map((pillar, index) => (
          <section
            key={pillar.num}
            id={pillar.name.toLowerCase().replace(/\s+/g, "-")}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-[#E4E1DB] last:border-0"
          >
            <Reveal className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="flex items-center gap-3">
                <span className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-[#6D3BD4]">{pillar.num}</span>
                <span className="h-px w-8 bg-[#6D3BD4]/40" />
                <span className="text-xs font-medium text-[#9A968E]">{pillar.subtitle}</span>
              </div>

              <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-4xl tracking-[-0.03em] text-[#0B1211] text-balance">
                {pillar.name}
              </h2>

              <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-[65ch]">
                {pillar.desc}
              </p>

              <ul className="space-y-3.5 pt-2">
                {pillar.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#0B1211]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#6D3BD4] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className={`lg:col-span-6 relative h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-[#E4E1DB] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <Image
                src={pillar.image}
                alt={pillar.name}
                fill
                className="object-cover"
              />
            </Reveal>
          </section>
        ))}

        {/* Closing Core Belief Statement */}
        <section className="rounded-[22px] bg-[#0B1211] text-white p-10 sm:p-16 text-center space-y-6 relative overflow-hidden">
          <Reveal className="max-w-3xl mx-auto space-y-4">
            <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-2xl sm:text-4xl tracking-[-0.03em] text-balance">
              We don't want to install geothermal blind.
            </h3>
            <p className="text-base sm:text-xl text-white/[0.74] leading-relaxed">
              We want to understand the ground before construction, observe it during operation and learn from every system we deploy.
            </p>
          </Reveal>
          <div className="pt-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-[#6D3BD4] hover:bg-[#5628B8] active:scale-95 text-white font-semibold text-sm sm:text-base transition-all duration-300 ease-out flex items-center gap-2 mx-auto">
                Build with Geodel <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
