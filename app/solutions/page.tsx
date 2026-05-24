"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import StatusBadge from "@/components/StatusBadge"
import { 
  Flame, 
  MapPin, 
  Building,
  CheckCircle,
  Thermometer,
  Droplets,
  Mountain,
  Pickaxe,
  Search,
  BarChart3,
  FileCheck,
  Layers,
  Waves,
  ShieldAlert,
  Compass,
  Cpu
} from "lucide-react"

const solutions = [
  {
    id: "water-balance",
    code: "WAT-BAL",
    icon: Waves,
    title: "Water Balance Intelligence",
    subtitle: "Operational Visibility Across Water Systems",
    description: "Geodel tracks water movement throughout mining infrastructure, providing insight into usage, recycling performance, operational demand, storage conditions, water efficiency, and resource availability.",
    image: "/images/water_balance_solution.png",
    features: [
      { icon: Droplets, text: "Water accounting" },
      { icon: BarChart3, text: "Flow analytics" },
      { icon: Search, text: "Water loss detection" },
      { icon: Waves, text: "Recycling analysis" },
      { icon: Cpu, text: "Water forecasting" },
      { icon: Layers, text: "Resource monitoring" },
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "tailings",
    code: "TAIL-INT",
    icon: ShieldAlert,
    title: "Tailings Intelligence",
    subtitle: "Real-Time Tailings Hydrology",
    description: "Geodel provides visibility into tailings water systems, seepage conditions, water storage behavior, hydrological performance, recovery conditions, and operational trends.",
    image: "/images/tailings_monitoring.png",
    features: [
      { icon: Search, text: "Tailings monitoring" },
      { icon: BarChart3, text: "Water level analytics" },
      { icon: Cpu, text: "Seepage forecasting" },
      { icon: Layers, text: "Groundwater interaction" },
      { icon: ShieldAlert, text: "Risk intelligence" },
      { icon: Droplets, text: "Operational alerts" },
    ],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "groundwater",
    code: "GRND-INT",
    icon: Compass,
    title: "Groundwater Intelligence",
    subtitle: "Groundwater Analytics for Extraction Environments",
    description: "Geodel delivers groundwater visibility across critical mineral operations through aquifer monitoring, groundwater analytics, drawdown forecasting, recharge estimation, water movement analysis, and hydrological forecasting.",
    image: "/images/groundwater_aquifer.png",
    features: [
      { icon: Search, text: "Monitoring well analytics" },
      { icon: Layers, text: "Groundwater modeling" },
      { icon: Cpu, text: "Resource forecasting" },
      { icon: Droplets, text: "Hydrological mapping" },
      { icon: BarChart3, text: "Operational intelligence" },
      { icon: Compass, text: "Long-term trend analysis" },
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "predictive",
    code: "PRED-RES",
    icon: Cpu,
    title: "Predictive Resource Intelligence",
    subtitle: "Forecasting Resource System Performance",
    description: "Geodel combines predictive analytics and hydrological intelligence to forecast operational conditions, water-related system changes, resource availability, hydrological trends, infrastructure performance, and environmental conditions.",
    image: "/images/predictive_resource.png",
    features: [
      { icon: ShieldAlert, text: "Predictive alerts" },
      { icon: Cpu, text: "Forecast modeling" },
      { icon: BarChart3, text: "Operational analytics" },
      { icon: Search, text: "Resource scoring" },
      { icon: Layers, text: "Trend intelligence" },
      { icon: Compass, text: "AI-assisted tips" },
    ],
    gradient: "from-purple-500/20 to-indigo-500/20",
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#14101f]">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 relative overflow-hidden flex flex-col justify-center min-h-[60vh]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.12)] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14101f]/30 to-[#14101f]" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-8 text-center flex flex-col items-center justify-center">
            <StatusBadge label="Sector" value="Intelligence" className="justify-center mb-8" />
            <h1 className="display text-white max-w-4xl mx-auto mb-8 text-balance">
              Hydrological Solutions
            </h1>
            <p className="lede mt-6 max-w-3xl mx-auto text-white/70">
              Geodel provides operational intelligence solutions that support extraction, recovery, and water system performance across critical mineral operations.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-8">
            <div className="space-y-32">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  id={solution.id}
                  className="scroll-mt-32"
                >
                  <div className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <StatusBadge label={solution.subtitle} value="v2.0" />
                        <StatusBadge label="SYS-ID" value={solution.code} />
                      </div>
                      
                      <h2 className="h2 text-white mb-6">
                        {solution.title}
                      </h2>
                      
                      <p className="text-base text-white/75 leading-relaxed mb-10">
                        {solution.description}
                      </p>
                      
                      {/* Features Grid */}
                      <div className="mt-10 grid sm:grid-cols-2 gap-6">
                        {solution.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-[12px] bg-[#8B6CFF]/5 flex items-center justify-center border border-[#8B6CFF]/10 group-hover:border-[#8B6CFF]/30 transition-all">
                              <feature.icon className="h-5 w-5 text-[#8B6CFF]/70 group-hover:text-[#8B6CFF] transition-colors" />
                            </div>
                            <span className="text-white/70 group-hover:text-white transition-colors font-medium text-sm">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-12 flex items-center gap-6">
                        <Link 
                          href="/contact" 
                          className="rounded-[20px] bg-[#8B6CFF] hover:bg-[#7c5eff] text-white text-sm font-semibold px-6 py-3.5 inline-flex items-center gap-2 transition-all duration-300 shadow-md"
                        >
                          Start system project <span className="text-sm">→</span>
                        </Link>
                        <div className="hidden sm:flex flex-col">
                          <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-1">Status</span>
                          <span className="text-xs font-semibold text-[#8B6CFF]">AVAILABLE</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Visual Card */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                      <div className="card aspect-square p-0 border-white/10 bg-black/40 overflow-hidden relative group">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover opacity-80 filter saturate-[0.85] transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Status chip overlay */}
                        <div className="absolute bottom-6 left-6 pointer-events-none">
                          <StatusBadge label="INTELLIGENCE" value="VISUALIZATION" />
                        </div>
                      </div>
                      {/* Technical Frame Accents */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-white/10" />
                      <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-white/10" />
                    </div>
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
                <StatusBadge label="Engagement" value="System Ready" className="mb-8" />
                <h2 className="display text-white mb-8 max-w-3xl mx-auto">
                  Ready to Get Started?
                </h2>
                <p className="lede max-w-2xl mx-auto mb-12 text-white/70">
                  Tell us about your critical mineral operations and discover how Geodel can help optimize your water systems.
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
