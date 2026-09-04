"use client"

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { CheckCircle2, ArrowRight, Building, GraduationCap, Hospital, Home, Compass } from "lucide-react"

const howItWorks = [
  { step: "01", title: "Connect", desc: "Buildings connect to shared underground thermal infrastructure." },
  { step: "02", title: "Exchange", desc: "Individual heat pumps move thermal energy into or out of each building." },
  { step: "03", title: "Balance", desc: "Different building loads can help balance the network across time." },
  { step: "04", title: "Store", desc: "The ground and dedicated storage can hold useful thermal energy for later use." },
  { step: "05", title: "Learn", desc: "Geodel's monitoring and control layer tracks performance and improves operations." },
]

const targetSectors = [
  { name: "Universities and Campuses", desc: "Concentrated buildings, long-term ownership and research potential.", icon: GraduationCap },
  { name: "Schools and Public Facilities", desc: "Repeatable assets with community visibility.", icon: Building },
  { name: "Multifamily Housing", desc: "Dense thermal demand and strong retrofit potential.", icon: Home },
  { name: "Hospitals & Healthcare", desc: "Year-round thermal loads and critical reliability needs.", icon: Hospital },
  { name: "New Developments", desc: "Design shared geothermal infrastructure from the beginning.", icon: Compass },
  { name: "Neighborhood & Municipal Projects", desc: "Build thermal infrastructure at community scale.", icon: Building },
]

export default function ThermalNetworksPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F3] text-[#0B1211] font-sans selection:bg-[#6D3BD4] selection:text-white">
      {/* Hero Header */}
      <section className="relative w-full min-h-[60vh] bg-[#0B1211] text-white flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/geothermal/philly_network.png"
            alt="Shared District Thermal Network"
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

        <Navbar />

        <div className="relative z-10 max-w-[1200px] mx-auto px-[clamp(16px,4vw,34px)] pt-36 pb-16 w-full space-y-4">
          <span className="text-xs font-medium text-white/50">District energy utility</span>
          <h1 className="font-[family-name:var(--font-poppins)] font-semibold text-4xl sm:text-6xl tracking-[-0.035em] text-balance">
            One ground. Many buildings.
          </h1>
          <p className="text-base sm:text-xl text-white/[0.74] max-w-[65ch] leading-relaxed font-normal">
            Geothermal does not have to stop at the property line. Geodel is developing shared thermal infrastructure for buildings, campuses and communities.
          </p>
        </div>
      </section>

      {/* Signature Graphic & How It Works */}
      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto space-y-24">
        {/* Signature Cutaway Image */}
        <Reveal as="section" className="space-y-8">
          <div className="relative h-[380px] sm:h-[500px] rounded-[22px] overflow-hidden border border-[#E4E1DB]">
            <Image
              src="/images/geothermal/philly_network.png"
              alt="Philadelphia Street and Campus District Thermal Network Cutaway"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(11,18,17,0) 40%, rgba(11,18,17,.85) 100%)" }}
            />
            <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl space-y-2">
              <span className="inline-block px-3.5 py-[7px] rounded-full bg-[rgba(247,246,243,0.9)] text-[#0B1211] text-[10.5px] font-semibold tracking-[.1em] uppercase">Primary architectural visual</span>
              <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-2xl sm:text-3xl tracking-[-0.03em] text-balance">Shared Ambient Geothermal Loop Infrastructure</h2>
            </div>
          </div>
        </Reveal>

        {/* How It Works Steps */}
        <section className="space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-medium text-[#9A968E]">System architecture</span>
            <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-5xl tracking-[-0.035em] text-balance">How it works</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {howItWorks.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 80} className="p-6 rounded-2xl bg-white border border-[#E4E1DB] flex flex-col justify-between space-y-4 h-full shadow-[0_24px_60px_rgba(11,18,17,0.06)] hover:border-[#6D3BD4]/40 hover:-translate-y-1 transition-all duration-300 ease-out">
                <span className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-[#6D3BD4]">{item.step}</span>
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-xl text-[#0B1211]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Where We Start */}
        <section className="space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-medium text-[#9A968E]">Target deployment</span>
            <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-5xl tracking-[-0.035em] text-balance">Where we start</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetSectors.map((sector, idx) => (
              <Reveal key={idx} delay={(idx % 3) * 90} className="p-8 rounded-2xl bg-[#0B1211] text-white flex flex-col justify-between space-y-4 h-full border border-white/10 hover:border-[#A78BFA]/40 hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="w-12 h-12 rounded-xl bg-white/[0.12] text-[#A78BFA] flex items-center justify-center">
                  <sector.icon className="w-6 h-6" />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-xl">{sector.name}</h3>
                <p className="text-sm text-white/[0.7] leading-relaxed">{sector.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Geothermal as Infrastructure */}
        <section className="rounded-[22px] bg-[#F4F0FC] border border-[#E6DDF9] p-10 sm:p-16 space-y-8">
          <Reveal className="max-w-3xl space-y-4">
            <span className="text-xs font-medium text-[#4C1D95]">Thermal utility vision</span>
            <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-4xl tracking-[-0.03em] text-[#2E1065] text-balance">
              Geothermal as infrastructure.
            </h2>
            <p className="text-lg text-[#5B5470] leading-relaxed font-semibold max-w-[65ch]">
              We do not see a collection of heat pumps. We see a thermal utility.
            </p>
            <p className="text-base text-[#5B5470] leading-relaxed max-w-[65ch]">
              The pipes beneath a district can become shared infrastructure. Borefields can become long-life energy assets. Buildings can become participants in a thermal network. The system can then be monitored, maintained and improved over decades.
            </p>
          </Reveal>

          <div className="pt-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-[#6D3BD4] hover:bg-[#5628B8] active:scale-95 text-white font-semibold text-sm sm:text-base transition-all duration-300 ease-out flex items-center gap-2">
                Build a thermal network with us <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
