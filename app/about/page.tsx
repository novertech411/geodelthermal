"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import StatusBadge from "@/components/StatusBadge"
import { 
  Shield, 
  Target, 
  Cpu, 
  Droplets,
  Waves,
  Compass,
  CheckCircle
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#14101f]">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 relative overflow-hidden flex flex-col justify-center min-h-[60vh]">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/about_banner.png')",
                backgroundPosition: "center 50%"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#14101f]/75 via-[#14101f]/10 to-[#14101f]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14101f]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.12)] via-transparent to-transparent opacity-80" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-8 text-center flex flex-col items-center justify-center">
            <StatusBadge label="Infrastructure" value="Intelligence Layer" className="justify-center mb-8" />
            <h1 className="display text-white max-w-5xl mx-auto mb-8 text-balance">
              Building intelligence for <span className="text-[#d6ccff]">critical minerals.</span>
            </h1>
            <p className="lede mt-6 max-w-3xl mx-auto text-white/70">
              Geodel develops hydrological intelligence systems that support extraction, recovery, and operational visibility across critical mineral infrastructure.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 relative border-t border-white/5 bg-black/20">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <StatusBadge label="Purpose" value="Mission" className="mb-6" />
                <h2 className="h2 text-white mb-6">
                  Operational Intelligence for <span className="text-[#d6ccff]">Resource Systems.</span>
                </h2>
                <p className="text-base text-white/70 leading-relaxed">
                  Our mission is to provide critical mineral operations with the hydrological intelligence required to optimize water systems, strengthen operational resilience, and support long-term infrastructure performance.
                </p>
              </div>
              <div className="relative">
                <div className="card p-12 border-white/10 bg-black/40">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-[#8B6CFF]">SYS_FOCUS</span>
                    <StatusBadge label="TARGET" value="WATER-BALANCE" />
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    By combining hydrological models with mineral systems analysis, we enable extraction environments to monitor recycling efficiency, detect system stress, and optimize storage operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24 relative border-b border-white/5">
          <div className="mx-auto max-w-7xl px-8">
            <div className="text-center mb-16">
              <StatusBadge label="Competencies" value="Expertise" className="justify-center mb-6" />
              <h2 className="h2 text-white mb-6">
                Hydrology. Mineral Systems. <span className="text-[#d6ccff]">Operational Intelligence.</span>
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Hydrological Expertise", desc: "Modeling fluid behaviors, recharge flows, and drainage dynamics." },
                { title: "Resource System Analysis", desc: "Understanding the role water recovery plays in mineral processing." },
                { title: "Data Infrastructure", desc: "Connecting SCADA networks, edge sensors, and climate data streams." },
                { title: "Predictive Analytics", desc: "Modeling and forecasting drawdown limits and future seepage hazards." },
                { title: "Operational Monitoring", desc: "Real-time dashboards indicating resource efficiency patterns." },
                { title: "Critical Mineral Intelligence", desc: "Domain-specific intelligence optimized for battery and transition minerals." },
              ].map((item) => (
                <div key={item.title} className="card group border-white/5 hover:border-[#8B6CFF]/20 transition-all duration-500">
                  <div className="flex flex-col h-full">
                    <div className="w-10 h-10 rounded-[12px] bg-[#8B6CFF]/10 flex items-center justify-center border border-[#8B6CFF]/10 mb-6">
                      <CheckCircle className="h-5 w-5 text-[#8B6CFF]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white tracking-tight mb-3">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 relative overflow-hidden bg-black/40 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="card aspect-video border-white/10 bg-black flex items-center justify-center">
                  <Cpu className="h-28 w-28 text-[#8B6CFF]/30" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <StatusBadge label="Roadmap" value="Vision" className="mb-6" />
                <h2 className="h2 text-white mb-6">
                  The Future of <span className="text-[#d6ccff]">Critical Mineral Intelligence.</span>
                </h2>
                <p className="text-base text-white/70 leading-relaxed">
                  Geodel is building the intelligence infrastructure that connects hydrology, resource systems, operational forecasting, mineral extraction, and infrastructure resilience across the next generation of critical mineral operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#1c1730]" />
          <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.18)] via-transparent to-transparent opacity-85" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          
          <div className="relative mx-auto max-w-[1100px] px-6">
            <div className="rounded-[24px] border border-white/18 bg-[rgba(255,255,255,0.04)] px-8 py-20 overflow-hidden text-center relative">
              <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.15)] via-transparent to-transparent opacity-80" />
              <div className="relative z-10 flex flex-col items-center">
                <StatusBadge label="Next Step" value="Contact Us" className="mb-8" />
                <h2 className="display text-white mb-8 max-w-3xl mx-auto">
                  Partner with <span className="text-[#d6ccff]">Geodel</span>
                </h2>
                <p className="lede max-w-2xl mx-auto mb-12 text-white/70">
                  Ready to optimize water performance and operational resilience?
                </p>
                <Link 
                  href="/contact" 
                  className="rounded-[20px] bg-[#8B6CFF] hover:bg-[#7c5eff] text-white text-base font-semibold px-8 py-4 inline-flex items-center gap-2 transition-all duration-300 shadow-md"
                >
                  Initiate System Contact <span className="text-base">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
