"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import StatusBadge from "@/components/StatusBadge"
import { 
  ArrowRight, 
  Database, 
  Cpu, 
  Eye, 
  Layers, 
  Radio, 
  BarChart3, 
  Cloud,
  Network,
  Droplets,
  Waves,
  ShieldAlert,
  Compass
} from "lucide-react"

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-[#14101f]">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 relative overflow-hidden flex flex-col justify-center min-h-[70vh]">
          {/* Background image & overlays */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/platform_banner.png')",
                backgroundPosition: "center 50%"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#14101f]/75 via-[#14101f]/10 to-[#14101f]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14101f]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.15)] via-transparent to-transparent opacity-80" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-8 text-center flex flex-col items-center justify-center">
            <StatusBadge label="Infrastructure" value="Enterprise-v4" className="justify-center mb-8" />
            <h1 className="display text-white max-w-4xl mx-auto mb-8 text-balance">
              The Geodel <span className="text-[#d6ccff]">Platform</span>
            </h1>
            <p className="lede mt-6 max-w-3xl mx-auto text-white/70">
              A hydrological intelligence platform for critical mineral operations. Geodel connects hydrological monitoring, operational analytics, and predictive intelligence into a unified platform designed for modern mineral infrastructure.
            </p>
            <div className="mt-12">
              <Link 
                href="/contact" 
                className="rounded-[20px] bg-[#8B6CFF] hover:bg-[#7c5eff] text-white text-base font-semibold px-8 py-4 inline-flex items-center gap-2 transition-all duration-300 shadow-md"
              >
                Request system demo <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Data Infrastructure Section */}
        <section className="py-24 relative border-t border-white/5">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <StatusBadge label="Module-01" value="Data Infrastructure" className="mb-6" />
                <h2 className="h2 text-white mb-6">
                  Real-Time Resource <span className="text-[#d6ccff]">Monitoring</span>
                </h2>
                <p className="text-base text-white/70 leading-relaxed mb-8">
                  Geodel integrates operational and hydrological data across mining systems in real time. We build the connection between sensor arrays and operational decision points.
                </p>
                
                {/* Integration Inputs List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Groundwater Sensors", desc: "Telemetry tracking aquifer levels and conditions." },
                    { label: "Flow Monitoring", desc: "Continuous pipeline and open-channel flow rates." },
                    { label: "Water Quality Instrumentation", desc: "Chemical profiling, pH, and sediment indicators." },
                    { label: "Telemetry Infrastructure", desc: "Remote edge-transmission systems." },
                    { label: "Tailings Inputs", desc: "Geomechanical and hydro-pressure sensors." },
                    { label: "Climate & Environmental Data", desc: "Weather patterns and watershed context." },
                  ].map((input) => (
                    <div key={input.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <h4 className="text-sm font-semibold text-white mb-1">{input.label}</h4>
                      <p className="text-xs text-white/50">{input.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="card aspect-square p-0 border-white/10 bg-black/40 overflow-hidden relative group">
                  <img
                    src="/images/groundwater_aquifer.png"
                    alt="Real-Time Data Ingestion Stream"
                    className="w-full h-full object-cover opacity-80 filter saturate-[0.85] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-xs text-[#d6ccff] bg-black/50 backdrop-blur px-2.5 py-1 rounded">INGESTION_STREAM</span>
                    <StatusBadge label="RATE" value="1240 / SEC" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs text-white/70 pointer-events-none">
                    <span>ACTIVE INTERFACES: 6/6</span>
                    <span>AQUIFER TELEMETRY</span>
                  </div>
                </div>
                {/* Decorative Accents */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-white/10" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-white/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Hydrological Intelligence Engine Section */}
        <section className="py-24 relative bg-black/20 border-y border-white/5">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="card aspect-video p-0 bg-black/60 border-white/10 relative overflow-hidden group">
                  <img
                    src="/images/platform_dashboard.png"
                    alt="Predictive Analytics Model"
                    className="w-full h-full object-cover opacity-80 filter saturate-[0.85] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-xs text-[#d6ccff] bg-black/50 backdrop-blur px-2.5 py-1 rounded">PREDICTIVE_ENGINE</span>
                    <StatusBadge label="ML-CORE" value="ACTIVE" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs text-white/70 pointer-events-none">
                    <span>ACCURACY: 96%</span>
                    <span>MODEL: STABLE</span>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <StatusBadge label="Module-02" value="Intelligence Engine" className="mb-6" />
                <h2 className="h2 text-white mb-6">
                  Predictive Hydrological <span className="text-[#d6ccff]">Analytics</span>
                </h2>
                <p className="text-base text-white/70 leading-relaxed mb-8">
                  Geodel’s intelligence engine continuously processes historical trends, sensor streams, and mechanical variables.
                </p>
                <div className="space-y-4">
                  {[
                    "Groundwater movement & flow vectors",
                    "Water balance dynamics & recycling volumes",
                    "Tailings hydrology & seepage indicators",
                    "Aquifer stress conditions & drawdown rates",
                    "Resource system behavior & efficiency forecasts",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-white/75">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B6CFF]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Intelligence Section */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <StatusBadge label="Module-03" value="Operational Hub" className="mb-6" />
                <h2 className="h2 text-white mb-6">
                  Actionable Operational <span className="text-[#d6ccff]">Visibility</span>
                </h2>
                <p className="text-base text-white/70 leading-relaxed mb-8">
                  The platform delivers clear, real-time insights designed for engineers, hydrologists, and site managers.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Real-time Dashboards", desc: "Live visualization of active fluid flow systems." },
                    { label: "Predictive Alerts", desc: "Notifications when thresholds approach critical risk values." },
                    { label: "Operational Forecasting", desc: "Scenario models predicting water availability." },
                    { label: "Efficiency Analytics", desc: "Tracking usage, recycle rates, and losses." },
                  ].map((item) => (
                    <div key={item.label} className="space-y-2">
                      <span className="text-sm font-semibold text-white">{item.label}</span>
                      <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="card aspect-video overflow-hidden border-white/10 p-0 bg-black group relative">
                  <img
                    src="/images/predictive_resource.png"
                    alt="Operational Water Balance Dashboard"
                    className="w-full h-full object-cover opacity-80 filter saturate-[0.85] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-6 left-6 pointer-events-none">
                    <span className="font-mono text-xs text-[#d6ccff] bg-black/50 backdrop-blur px-2.5 py-1 rounded">SYS_VISIBILITY</span>
                  </div>
                  <div className="absolute bottom-6 left-6 pointer-events-none">
                    <StatusBadge label="VISUALIZATION" value="ACTIVE-SYSTEM" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Section */}
        <section className="py-24 relative bg-black/20 border-y border-white/5">
          <div className="mx-auto max-w-7xl px-8">
            <div className="text-center mb-16">
              <StatusBadge label="Deployment" value="Global Options" className="justify-center mb-6" />
              <h2 className="h2 text-white mb-6">
                Built for Critical Mineral <span className="text-[#d6ccff]">Infrastructure</span>
              </h2>
              <p className="mt-6 text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
                Flexible and resilient deployment modes to support remote mining sites.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Cloud, title: "Cloud Deployments", desc: "Centralized databases, aggregate metrics, and cross-site trends." },
                { icon: Radio, title: "Edge Monitoring", desc: "Local compute hardware operating without consistent internet connections." },
                { icon: Network, title: "Remote Integration", desc: "Interfaces seamlessly with telemetry and legacySCADA systems." },
                { icon: Layers, title: "Scalable Infrastructure", desc: "Designed to expand as your extraction footprint and monitoring nodes grow." },
              ].map((item) => (
                <div key={item.title} className="card group flex flex-col justify-between border-white/5 hover:border-[#8B6CFF]/30 transition-all duration-500">
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#8B6CFF]/10 flex items-center justify-center mb-6 border border-[#8B6CFF]/20 group-hover:bg-[#8B6CFF]/20 transition-all">
                      <item.icon className="h-6 w-6 text-[#8B6CFF]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white tracking-tight mb-3">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Brand Wash & Grid */}
        <section className="py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[#1c1730]" />
          <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.18)] via-transparent to-transparent opacity-85" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          
          <div className="relative mx-auto max-w-[1100px] px-6">
            <div className="rounded-[24px] border border-white/18 bg-[rgba(255,255,255,0.04)] px-8 py-20 overflow-hidden text-center relative">
              <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.15)] via-transparent to-transparent opacity-80" />
              <div className="relative z-10 flex flex-col items-center">
                <StatusBadge label="Next Step" value="SYSTEM ACCESS" className="mb-8" />
                <h2 className="display text-white mb-8 max-w-3xl mx-auto">
                  Experience the Geodel <span className="text-[#d6ccff]">Platform</span>
                </h2>
                <p className="lede max-w-2xl mx-auto mb-12 text-white/70">
                  See how Geodel can transform water balance and risk forecasting at your critical mineral operations.
                </p>
                <Link 
                  href="/contact" 
                  className="rounded-[20px] bg-[#8B6CFF] hover:bg-[#7c5eff] text-white text-base font-semibold px-8 py-4 inline-flex items-center gap-2 transition-all duration-300 shadow-md"
                >
                  Schedule a System Demo <span className="text-base">→</span>
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
