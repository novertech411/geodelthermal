"use client"

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
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
    <div className="min-h-screen bg-white text-[#14101f] font-sans selection:bg-[#8B6CFF] selection:text-white">
      {/* Hero Header */}
      <section className="relative w-full min-h-[60vh] bg-[#0c0a14] text-white flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/geothermal/workforce.png"
            alt="Geodel Technicians in Field Lab"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a14] via-black/40 to-transparent" />
        </div>

        <Navbar />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 pt-36 pb-16 w-full space-y-4">
          <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF]">WORKFORCE & FIELD TESTING</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Build the technology. Build the people who deploy it.
          </h1>
          <p className="text-base sm:text-xl text-white/80 max-w-3xl leading-relaxed font-normal">
            Geothermal will scale only as fast as the people capable of designing, drilling, installing, commissioning and maintaining the systems. Geodel is building workforce development alongside the technology.
          </p>
        </div>
      </section>

      {/* Geodel Academy & Career Pathways */}
      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto space-y-24">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF]">GEODEL ACADEMY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14101f] tracking-tight">
              Practical geothermal training across Pennsylvania & the East Coast.
            </h2>
            <p className="text-base sm:text-lg text-[#14101f]/80 leading-relaxed">
              We are developing practical geothermal training with academic institutions, trade schools, manufacturers and industry partners.
            </p>

            <ul className="space-y-3.5 pt-2">
              {[
                "Geothermal drilling — site preparation, borehole construction, field operations and safety.",
                "Ground-loop installation — piping, fusion, manifolds, pressure testing and commissioning.",
                "Geothermal HVAC — heat pumps, hydronics, controls, retrofits and diagnostics.",
                "Digital geothermal — sensors, monitoring, field data and performance analytics.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#14101f]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#8B6CFF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 p-8 rounded-[32px] bg-[#14101f] text-white space-y-6 shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-[#D6CCFF]">
              You already have skills. We help take them underground.
            </h3>
            <div className="space-y-3">
              {careerTransitions.map((t, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 text-sm">
                  <span className="text-white/70 font-medium">{t.from}</span>
                  <span className="text-[#8B6CFF]">→</span>
                  <span className="text-white font-bold">{t.to}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Geodel Field Lab & 3-Image Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF]">REAL-WORLD PROVING GROUND</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14101f] tracking-tight">
              Geodel Field Lab
            </h2>
            <p className="text-base sm:text-lg text-[#14101f]/80 leading-relaxed">
              Some geothermal technologies can be designed behind a desk. They cannot be proven there. Geodel Field Lab is intended to create a real-world environment where researchers, manufacturers, drillers, technicians and students can test new geothermal systems in the field.
            </p>
          </div>

          {/* Restrained 3-Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-[24px] overflow-hidden border border-gray-200 shadow-md">
              <Image src="/images/site_drilling.jpeg" alt="Drilling Field Operations" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-mono text-white uppercase tracking-wider font-bold">Drilling Field Operations</span>
            </div>
            <div className="relative h-72 rounded-[24px] overflow-hidden border border-gray-200 shadow-md">
              <Image src="/images/geothermal/hardware.png" alt="Hardware Prototype Testing" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-mono text-white uppercase tracking-wider font-bold">Hardware & Loop Prototypes</span>
            </div>
            <div className="relative h-72 rounded-[24px] overflow-hidden border border-gray-200 shadow-md">
              <Image src="/images/geothermal/workforce.png" alt="Technicians & Students Commissioning System" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-mono text-white uppercase tracking-wider font-bold">System Commissioning</span>
            </div>
          </div>
        </section>

        {/* Universities + Geodel */}
        <section className="rounded-[32px] bg-slate-50 border border-gray-200 p-10 sm:p-16 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF]">ACADEMIC COLLABORATION</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14101f] tracking-tight">
              Universities + Geodel
            </h2>
            <p className="text-base sm:text-lg text-[#14101f]/80 leading-relaxed">
              We want campuses to become living geothermal laboratories. Academic partners can research, prototype, drill, measure and validate technologies on real infrastructure while students gain experience that follows them into industry.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#8B6CFF] bg-white py-3 px-6 rounded-full border border-gray-200 shadow-sm">
              <span>RESEARCH</span>
              <span>→</span>
              <span>PROTOTYPE</span>
              <span>→</span>
              <span>DRILL</span>
              <span>→</span>
              <span>MEASURE</span>
              <span>→</span>
              <span>IMPROVE</span>
              <span>→</span>
              <span>DEPLOY</span>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-[#14101f] hover:bg-[#14101f]/90 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg flex items-center gap-2">
                WORK WITH GEODEL <ArrowRight className="w-4 h-4 text-[#8B6CFF]" />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
