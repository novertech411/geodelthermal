"use client"

import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/ui/site-header"
import { SiteFooter } from "@/components/ui/site-footer"
import { Reveal } from "@/components/reveal"
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
    <div className="min-h-screen bg-[#F7F6F3] text-[#0B1211] font-sans selection:bg-[#6D3BD4] selection:text-white">
      {/* Hero Header */}
      <section className="relative w-full min-h-[60vh] bg-[#0B1211] text-white flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_banner.png"
            alt="Geodel Team and Subsurface Operations in Philadelphia"
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
          <span className="text-xs font-medium text-white/50">American geothermal technology</span>
          <h1 className="font-[family-name:var(--font-poppins)] font-semibold text-4xl sm:text-6xl tracking-[-0.035em] text-balance">
            An American geothermal company with a global foundation.
          </h1>
          <p className="text-base sm:text-xl text-white/[0.74] max-w-[65ch] leading-relaxed font-normal">
            Geodel is building next-generation geothermal technologies from Philadelphia, Pennsylvania. Our roots are in geoscience, subsurface intelligence, water and field technology. Our U.S. mission is focused: make geothermal easier to build, cheaper to deploy and possible at much greater scale.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto space-y-24">
        {/* Why Geodel Exists & We Started Underground */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6 space-y-6">
            <span className="text-xs font-medium text-[#9A968E]">Our foundation</span>
            <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-4xl tracking-[-0.03em] text-[#0B1211] text-balance">
              Why Geodel exists
            </h2>
            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-[65ch]">
              We believe one of America's most overlooked energy infrastructure opportunities is underneath the buildings we already use every day. Our job is to develop the technology, systems and workforce that make accessing that resource economical.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#E4E1DB] space-y-3 shadow-[0_24px_60px_rgba(11,18,17,0.06)]">
              <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-xl text-[#6D3BD4]">We started underground.</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Geodel's background in geoscience, hydrogeology, geophysics, sensing and subsurface intelligence shapes how we approach geothermal. We are connecting that underground capability with drilling, thermal exchange, storage, heat pumps and network operations.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 p-8 rounded-[22px] bg-[#0B1211] text-white space-y-6 border border-white/10">
            <span className="text-xs font-medium text-white/50">Global experience</span>
            <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-2xl text-white tracking-[-0.025em]">Global experience. Built in America.</h3>
            <p className="text-sm sm:text-base text-white/[0.78] leading-relaxed">
              Our broader innovation journey includes work and engagement with international development institutions including UNDP, UNIDO and the World Bank. We are bringing that experience into an American geothermal platform built from Philadelphia and designed to scale across the United States.
            </p>
          </Reveal>
        </section>

        {/* Our U.S. Mission */}
        <section className="space-y-10">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-medium text-[#9A968E]">Core commitments</span>
            <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-5xl tracking-[-0.035em] text-[#0B1211] text-balance">Our U.S. mission</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usMissionPoints.map((point, idx) => (
              <Reveal key={idx} delay={(idx % 3) * 90} className="p-6 rounded-2xl bg-white border border-[#E4E1DB] flex items-start gap-4 h-full shadow-[0_24px_60px_rgba(11,18,17,0.06)] hover:border-[#6D3BD4]/40 hover:-translate-y-1 transition-all duration-300 ease-out">
                <CheckCircle2 className="w-5 h-5 text-[#6D3BD4] shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-[#0B1211]/90 leading-relaxed">{point}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Build With Us Sector Grid */}
        <section className="space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-medium text-[#9A968E]">Partnerships</span>
            <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-5xl tracking-[-0.035em] text-[#0B1211] text-balance">Build with us</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerSectors.map((sector, idx) => (
              <Reveal key={idx} delay={(idx % 3) * 90} className="p-8 rounded-2xl bg-[#0B1211] text-white flex flex-col justify-between space-y-4 h-full border border-white/10 hover:border-[#A78BFA]/40 hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="w-12 h-12 rounded-xl bg-white/[0.12] text-[#A78BFA] flex items-center justify-center">
                  <sector.icon className="w-6 h-6" />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-xl">{sector.title}</h3>
                <p className="text-sm text-white/[0.7] leading-relaxed">{sector.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Closing Banner */}
        <section className="rounded-[22px] bg-[#0B1211] text-white p-10 sm:p-16 text-center space-y-6 relative overflow-hidden">
          <Reveal className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-5xl tracking-[-0.035em] text-balance">
              There is energy beneath every building.
            </h2>
            <p className="text-lg sm:text-xl text-[#A78BFA] font-medium">
              We're building the technology to reach it.
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
