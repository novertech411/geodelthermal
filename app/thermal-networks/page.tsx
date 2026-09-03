"use client"

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
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
    <div className="min-h-screen bg-white text-[#14101f] font-sans selection:bg-[#8B6CFF] selection:text-white">
      {/* Hero Header */}
      <section className="relative w-full min-h-[60vh] bg-[#0c0a14] text-white flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/geothermal/philly_network.png"
            alt="Shared District Thermal Network"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a14] via-black/40 to-transparent" />
        </div>

        <Navbar />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 pt-36 pb-16 w-full space-y-4">
          <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF]">DISTRICT ENERGY UTILITY</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            One Ground. Many Buildings.
          </h1>
          <p className="text-base sm:text-xl text-white/80 max-w-3xl leading-relaxed font-normal">
            Geothermal does not have to stop at the property line. Geodel is developing shared thermal infrastructure for buildings, campuses and communities.
          </p>
        </div>
      </section>

      {/* Signature Graphic & How It Works */}
      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto space-y-24">
        {/* Signature Cutaway Image */}
        <section className="space-y-8">
          <div className="relative h-[380px] sm:h-[500px] rounded-[32px] overflow-hidden border border-gray-200 shadow-2xl">
            <Image
              src="/images/geothermal/philly_network.png"
              alt="Philadelphia Street and Campus District Thermal Network Cutaway"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#8B6CFF] text-white text-xs font-mono uppercase tracking-wider">PRIMARY ARCHITECTURAL VISUAL</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Shared Ambient Geothermal Loop Infrastructure</h2>
            </div>
          </div>
        </section>

        {/* How It Works Steps */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF]">SYSTEM ARCHITECTURE</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">How it works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="p-6 rounded-[24px] bg-slate-50 border border-gray-200 flex flex-col justify-between space-y-4 shadow-sm hover:border-[#8B6CFF]/50 transition-all">
                <span className="font-mono text-2xl font-extrabold text-[#8B6CFF]">{item.step}</span>
                <h3 className="text-xl font-bold text-[#14101f]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#14101f]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Where We Start */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF]">TARGET DEPLOYMENT</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Where we start</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetSectors.map((sector, idx) => (
              <div key={idx} className="p-8 rounded-[24px] bg-[#14101f] text-white flex flex-col justify-between space-y-4 shadow-xl border border-white/10 hover:border-[#8B6CFF]/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#8B6CFF]/20 text-[#8B6CFF] flex items-center justify-center">
                  <sector.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{sector.name}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Geothermal as Infrastructure */}
        <section className="rounded-[32px] bg-slate-50 border border-gray-200 p-10 sm:p-16 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF] font-semibold">THERMAL UTILITY VISION</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14101f] tracking-tight">
              Geothermal as infrastructure.
            </h2>
            <p className="text-lg text-[#14101f]/80 leading-relaxed font-semibold">
              We do not see a collection of heat pumps. We see a thermal utility.
            </p>
            <p className="text-base text-[#14101f]/70 leading-relaxed">
              The pipes beneath a district can become shared infrastructure. Borefields can become long-life energy assets. Buildings can become participants in a thermal network. The system can then be monitored, maintained and improved over decades.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-[#8B6CFF] hover:bg-[#7a5be0] text-white font-extrabold text-sm sm:text-base transition-all shadow-lg flex items-center gap-2">
                BUILD A THERMAL NETWORK WITH US <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
