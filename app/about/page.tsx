"use client"

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, ArrowRight, Building, GraduationCap, Zap, Compass, Users, Wrench } from "lucide-react"

const usMissionPoints = [
  "Lower the installed cost of geothermal.",
  "Advance geothermal drilling and field intelligence.",
  "Build better ground-exchange, heat-pump and thermal-storage systems.",
  "Develop thermal networks for campuses, developments and communities.",
  "Expand American geothermal installation capacity.",
  "Train technicians and create pathways into geothermal careers.",
  "Work with universities to move research into real infrastructure.",
]

const partnerSectors = [
  {
    title: "Cities + Public Agencies",
    desc: "Explore public-building retrofits, district systems and demonstration projects.",
    icon: Building,
  },
  {
    title: "Universities",
    desc: "Turn research, campuses and students into a geothermal innovation platform.",
    icon: GraduationCap,
  },
  {
    title: "Utilities",
    desc: "Develop and test thermal-network infrastructure and operating models.",
    icon: Zap,
  },
  {
    title: "Developers + Building Owners",
    desc: "Integrate geothermal into new projects and existing building portfolios.",
    icon: Compass,
  },
  {
    title: "Drilling + HVAC Companies",
    desc: "Expand geothermal deployment capacity with training, technology and field collaboration.",
    icon: Wrench,
  },
  {
    title: "Manufacturers",
    desc: "Co-develop equipment and systems designed for scalable U.S. deployment.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#14101f] font-sans selection:bg-[#8B6CFF] selection:text-white">
      {/* Hero Header */}
      <section className="relative w-full min-h-[60vh] bg-[#0c0a14] text-white flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_banner.png"
            alt="Geodel Team and Subsurface Operations in Philadelphia"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a14] via-black/40 to-transparent" />
        </div>

        <Navbar />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 pt-36 pb-16 w-full space-y-4">
          <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF]">AMERICAN GEOTHERMAL TECHNOLOGY</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            An American geothermal company with a global foundation.
          </h1>
          <p className="text-base sm:text-xl text-white/80 max-w-3xl leading-relaxed font-normal">
            Geodel is building next-generation geothermal technologies from Philadelphia, Pennsylvania. Our roots are in geoscience, subsurface intelligence, water and field technology. Our U.S. mission is focused: make geothermal easier to build, cheaper to deploy and possible at much greater scale.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto space-y-24">
        {/* Why Geodel Exists & We Started Underground */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF]">OUR FOUNDATION</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14101f] tracking-tight">
              Why Geodel exists
            </h2>
            <p className="text-base sm:text-lg text-[#14101f]/80 leading-relaxed">
              We believe one of America's most overlooked energy infrastructure opportunities is underneath the buildings we already use every day. Our job is to develop the technology, systems and workforce that make accessing that resource economical.
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 space-y-3">
              <h3 className="text-xl font-bold text-[#8B6CFF]">We started underground.</h3>
              <p className="text-sm text-[#14101f]/75 leading-relaxed">
                Geodel's background in geoscience, hydrogeology, geophysics, sensing and subsurface intelligence shapes how we approach geothermal. We are connecting that underground capability with drilling, thermal exchange, storage, heat pumps and network operations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-[32px] bg-[#14101f] text-white space-y-6 shadow-2xl border border-white/10">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#D6CCFF]">GLOBAL EXPERIENCE</span>
            <h3 className="text-2xl font-bold text-white">Global experience. Built in America.</h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Our broader innovation journey includes work and engagement with international development institutions including UNDP, UNIDO and the World Bank. We are bringing that experience into an American geothermal platform built from Philadelphia and designed to scale across the United States.
            </p>
          </div>
        </section>

        {/* Our U.S. Mission */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF]">CORE COMMITMENTS</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14101f] tracking-tight">Our U.S. mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usMissionPoints.map((point, idx) => (
              <div key={idx} className="p-6 rounded-[24px] bg-slate-50 border border-gray-200 flex items-start gap-4 shadow-sm hover:border-[#8B6CFF]/50 transition-all">
                <CheckCircle2 className="w-5 h-5 text-[#8B6CFF] shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-[#14101f]/90 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Build With Us Sector Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF]">PARTNERSHIPS</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14101f] tracking-tight">Build with us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerSectors.map((sector, idx) => (
              <div key={idx} className="p-8 rounded-[24px] bg-[#14101f] text-white flex flex-col justify-between space-y-4 shadow-xl border border-white/10 hover:border-[#8B6CFF]/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#8B6CFF]/20 text-[#8B6CFF] flex items-center justify-center">
                  <sector.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{sector.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Banner */}
        <section className="rounded-[32px] bg-gradient-to-r from-[#14101f] via-[#1C0F42] to-[#14101f] text-white p-10 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              There is energy beneath every building.
            </h2>
            <p className="text-lg sm:text-xl text-[#D6CCFF] font-medium">
              We're building the technology to reach it.
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
