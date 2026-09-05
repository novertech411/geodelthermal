"use client"

import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/ui/site-header"
import { SiteFooter } from "@/components/ui/site-footer"
import { Reveal } from "@/components/reveal"
import { ArrowRight, CheckCircle2, GraduationCap, Wrench, Compass, Layers } from "lucide-react"

const careerTransitions = [
  { from: "HVAC technicians", to: "geothermal technicians" },
  { from: "Water-well drillers", to: "geothermal drillers" },
  { from: "Plumbers", to: "ground-loop specialists" },
  { from: "Electricians", to: "geothermal controls specialists" },
  { from: "Geologists & geoscientists", to: "geothermal site specialists" },
  { from: "Students", to: "geothermal engineers and field technologists" },
]

export default function FieldLabPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F3] text-[#0B1211] font-sans selection:bg-[#6D3BD4] selection:text-white">
      {/* Hero Header */}
      <section className="relative w-full min-h-[60vh] bg-[#0B1211] text-white flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/geothermal/workforce.png"
            alt="Geodel Technicians in Field Lab"
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
          <span className="text-xs font-medium text-white/50">Workforce & field testing</span>
          <h1 className="font-[family-name:var(--font-poppins)] font-semibold text-4xl sm:text-6xl tracking-[-0.035em] text-balance">
            Build the technology. Build the people who deploy it.
          </h1>
          <p className="text-base sm:text-xl text-white/[0.74] max-w-[65ch] leading-relaxed font-normal">
            Geothermal will scale only as fast as the people capable of designing, drilling, installing, commissioning and maintaining the systems. Geodel is building workforce development alongside the technology.
          </p>
        </div>
      </section>

      {/* Geodel Academy & Career Pathways */}
      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto space-y-24">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6 space-y-6">
            <span className="text-xs font-medium text-[#9A968E]">Geodel Academy</span>
            <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-4xl tracking-[-0.03em] text-[#0B1211] text-balance">
              Practical geothermal training across Pennsylvania & the East Coast.
            </h2>
            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-[65ch]">
              We are developing practical geothermal training with academic institutions, trade schools, manufacturers and industry partners.
            </p>

            <ul className="space-y-3.5 pt-2">
              {[
                "Geothermal drilling: site preparation, borehole construction, field operations and safety.",
                "Ground-loop installation: piping, fusion, manifolds, pressure testing and commissioning.",
                "Geothermal HVAC: heat pumps, hydronics, controls, retrofits and diagnostics.",
                "Digital geothermal: sensors, monitoring, field data and performance analytics.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#0B1211]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#6D3BD4] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 p-8 rounded-[22px] bg-[#0B1211] text-white space-y-6 border border-white/10">
            <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-2xl tracking-[-0.025em] text-[#A78BFA]">
              You already have skills. We help take them underground.
            </h3>
            <div className="space-y-3">
              {careerTransitions.map((t, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-sm transition-colors duration-300 hover:border-[#A78BFA]/40 hover:bg-white/[0.07]">
                  <span className="text-white/[0.7] font-medium">{t.from}</span>
                  <span className="text-[#A78BFA]">→</span>
                  <span className="text-white font-semibold">{t.to}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Geodel Field Lab & 3-Image Grid */}
        <section className="space-y-12">
          <Reveal className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-medium text-[#9A968E]">Real-world proving ground</span>
            <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-5xl tracking-[-0.035em] text-[#0B1211] text-balance">
              Geodel Field Lab
            </h2>
            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-[65ch] mx-auto">
              Some geothermal technologies can be designed behind a desk. They cannot be proven there. Geodel Field Lab is intended to create a real-world environment where researchers, manufacturers, drillers, technicians and students can test new geothermal systems in the field.
            </p>
          </Reveal>

          {/* Restrained 3-Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal className="relative h-72 rounded-2xl overflow-hidden border border-[#E4E1DB] group">
              <Image src="/images/site_drilling.jpeg" alt="Drilling Field Operations" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(11,18,17,0) 40%, rgba(11,18,17,.85) 100%)" }}
              />
              <span className="absolute bottom-4 left-4 text-xs font-semibold text-white">Drilling Field Operations</span>
            </Reveal>
            <Reveal delay={90} className="relative h-72 rounded-2xl overflow-hidden border border-[#E4E1DB] group">
              <Image src="/images/geothermal/hardware.png" alt="Hardware Prototype Testing" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(11,18,17,0) 40%, rgba(11,18,17,.85) 100%)" }}
              />
              <span className="absolute bottom-4 left-4 text-xs font-semibold text-white">Hardware & Loop Prototypes</span>
            </Reveal>
            <Reveal delay={180} className="relative h-72 rounded-2xl overflow-hidden border border-[#E4E1DB] group">
              <Image src="/images/geothermal/workforce.png" alt="Technicians & Students Commissioning System" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(11,18,17,0) 40%, rgba(11,18,17,.85) 100%)" }}
              />
              <span className="absolute bottom-4 left-4 text-xs font-semibold text-white">System Commissioning</span>
            </Reveal>
          </div>
        </section>

        {/* Universities + Geodel */}
        <section className="rounded-[22px] bg-[#F4F0FC] border border-[#E6DDF9] p-10 sm:p-16 space-y-8">
          <Reveal className="max-w-3xl space-y-4">
            <span className="text-xs font-medium text-[#4C1D95]">Academic collaboration</span>
            <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-4xl tracking-[-0.03em] text-[#2E1065] text-balance">
              Universities + Geodel
            </h2>
            <p className="text-base sm:text-lg text-[#5B5470] leading-relaxed max-w-[65ch]">
              We want campuses to become living geothermal laboratories. Academic partners can research, prototype, drill, measure and validate technologies on real infrastructure while students gain experience that follows them into industry.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[.1em] text-[#4C1D95] bg-white py-3 px-6 rounded-full border border-[#C9B8EE] w-fit">
              <span>Research</span>
              <span>→</span>
              <span>Prototype</span>
              <span>→</span>
              <span>Drill</span>
              <span>→</span>
              <span>Measure</span>
              <span>→</span>
              <span>Improve</span>
              <span>→</span>
              <span>Deploy</span>
            </div>
          </Reveal>

          <div className="pt-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-[#0B1211] hover:bg-[#0B1211]/90 active:scale-95 text-white font-semibold text-sm sm:text-base transition-all duration-300 ease-out flex items-center gap-2">
                Work with Geodel <ArrowRight className="w-4 h-4 text-[#A78BFA]" />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
