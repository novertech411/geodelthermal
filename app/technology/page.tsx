"use client"

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
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
      "Smarter site characterization — know more before the rig arrives.",
      "Drilling intelligence — capture useful field data during construction.",
      "Borehole optimization — design around geology, thermal performance and project requirements.",
      "Automation and repeatability — reduce unnecessary field complexity.",
      "Cost focus — drive down installed cost per unit of thermal capacity.",
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
    desc: "We are developing the heat-pump layer around the realities of American buildings — retrofits, multifamily properties, schools, universities, commercial buildings and new developments. The objective is compact, connected equipment designed to work as part of an integrated geothermal system.",
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
    <div className="min-h-screen bg-white text-[#14101f] font-sans selection:bg-[#8B6CFF] selection:text-white">
      {/* Hero Header */}
      <section className="relative w-full min-h-[60vh] bg-[#0c0a14] text-white flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/geothermal/hero_drilling.png"
            alt="Geodel Drilling Technology Hero"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a14] via-black/40 to-transparent" />
        </div>

        <Navbar />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 pt-36 pb-16 w-full space-y-4">
          <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF]">TECHNOLOGY STACK</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Better geothermal starts underground.
          </h1>
          <p className="text-base sm:text-xl text-white/80 max-w-3xl leading-relaxed font-normal">
            We are developing technologies across the physical geothermal system — from understanding the subsurface before drilling begins to controlling how thermal energy moves through a building after installation.
          </p>
        </div>
      </section>

      {/* Main Technology Pillars */}
      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto space-y-24">
        {techPillars.map((pillar, index) => (
          <section
            key={pillar.num}
            id={pillar.name.toLowerCase().replace(/\s+/g, "-")}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-gray-100 last:border-0"
          >
            <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-bold text-[#8B6CFF]">{pillar.num}</span>
                <span className="h-px w-8 bg-[#8B6CFF]/40" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#14101f]/60 font-semibold">{pillar.subtitle}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14101f] tracking-tight">
                {pillar.name}
              </h2>

              <p className="text-base sm:text-lg text-[#14101f]/80 leading-relaxed">
                {pillar.desc}
              </p>

              <ul className="space-y-3.5 pt-2">
                {pillar.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#14101f]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6CFF] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`lg:col-span-6 relative h-80 sm:h-[420px] rounded-[32px] overflow-hidden border border-gray-200 shadow-xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <Image
                src={pillar.image}
                alt={pillar.name}
                fill
                className="object-cover"
              />
            </div>
          </section>
        ))}

        {/* Closing Core Belief Statement */}
        <section className="rounded-[32px] bg-[#14101f] text-white p-10 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">
              We don't want to install geothermal blind.
            </h3>
            <p className="text-base sm:text-xl text-white/80 leading-relaxed">
              We want to understand the ground before construction, observe it during operation and learn from every system we deploy.
            </p>
          </div>
          <div className="pt-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-[#8B6CFF] hover:bg-[#7a5be0] text-white font-extrabold text-sm sm:text-base transition-all shadow-lg flex items-center gap-2 mx-auto">
                BUILD WITH GEODEL <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
