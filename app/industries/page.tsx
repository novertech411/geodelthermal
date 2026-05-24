"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import StatusBadge from "@/components/StatusBadge"
import { 
  CheckCircle,
  Database,
  Waves,
  Droplets,
  Activity,
  Compass,
  Cpu,
  ShieldAlert
} from "lucide-react"

const industriesList = [
  {
    id: "lithium",
    title: "Lithium",
    subtitle: "Hydrological Intelligence for Lithium Systems",
    description: "Lithium brine extraction is highly sensitive to groundwater movement. Geodel delivers the precise modeling needed to track brine concentrations and manage aquifer dynamics.",
    points: [
      "Brine monitoring and chemical tracking",
      "Groundwater analytics and aquifer pathing",
      "Water balance intelligence and recycling metrics",
      "Resource forecasting and extraction planning",
      "Operational hydrology and process integration",
      "Extraction system visibility"
    ],
    code: "LITH-NODE",
    icon: Droplets,
    image: "/images/lithium_brine.png"
  },
  {
    id: "copper",
    title: "Copper",
    subtitle: "Water Intelligence for Large-Scale Extraction",
    description: "Copper mining requires intense process water volumes and rigorous tailings safety management. Geodel ensures visibility across water flows and storage conditions.",
    points: [
      "Process water systems and flow efficiency",
      "Tailings infrastructure and safety monitoring",
      "Groundwater conditions and drawdown limits",
      "Water recovery operations and reuse optimization",
      "Resource system performance indicators"
    ],
    code: "COPP-NODE",
    icon: Waves,
    image: "/images/copper_hydrology.png"
  },
  {
    id: "rare-earths",
    title: "Rare Earths",
    subtitle: "Hydrological Intelligence for Strategic Infrastructure",
    description: "Strategic rare earth sites operate under strict environmental thresholds. Geodel provides the monitoring layers needed to secure watershed safety.",
    points: [
      "Environmental monitoring and runoff mapping",
      "Groundwater intelligence and aquifer profiling",
      "Hydrological forecasting and stress models",
      "Water optimization analytics",
      "Operational visibility and compliance indicators"
    ],
    code: "RARE-NODE",
    icon: Compass,
    image: "/images/rare_earths_hydrology.png"
  },
  {
    id: "graphite",
    title: "Graphite",
    subtitle: "Resource Intelligence for Battery Material Infrastructure",
    description: "Processing graphite to battery-grade quality requires optimized water loops. Geodel tracks usage efficiency and recycling loops.",
    points: [
      "Water systems tracking and loss detection",
      "Recycling performance and efficiency scoring",
      "Hydrological monitoring and stream telemetry",
      "Resource efficiency indicators",
      "Operational forecasting"
    ],
    code: "GRPH-NODE",
    icon: Cpu,
    image: "/images/graphite_processing_water.png"
  },
  {
    id: "uranium",
    title: "Uranium",
    subtitle: "Groundwater and Hydrological Intelligence",
    description: "Uranium operations require deep groundwater isolation and aquifer protection systems. Geodel tracks aquifer vectors to ensure zero seepage migration.",
    points: [
      "Groundwater monitoring and migration mapping",
      "Aquifer analytics and stress profiling",
      "Water system forecasting and volume planning",
      "Environmental intelligence and compliance support",
      "Operational visibility"
    ],
    code: "URAN-NODE",
    icon: ShieldAlert,
    image: "/images/uranium_groundwater_isolation.png"
  },
]

export default function IndustriesPage() {
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
            <StatusBadge label="Market Scope" value="Supported Sectors" className="justify-center mb-8" />
            <h1 className="display text-white max-w-5xl mx-auto mb-8 text-balance">
              Supporting critical mineral <em>infrastructure.</em>
            </h1>
            <p className="lede mt-6 max-w-3xl mx-auto text-white/70">
              Geodel delivers hydrological intelligence across the mineral systems driving the future global economy.
            </p>
          </div>
        </section>

        {/* Industries Details */}
        <section className="py-24 relative border-t border-white/5">
          <div className="mx-auto max-w-7xl px-8">
            <div className="space-y-32">
              {industriesList.map((ind, index) => (
                <div
                  key={ind.id}
                  id={ind.id}
                  className="scroll-mt-32"
                >
                  <div className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <StatusBadge label={ind.subtitle} value="ACTIVE" />
                        <StatusBadge label="CLASS" value={ind.code} />
                      </div>
                      
                      <h2 className="h2 text-white mb-6">
                        {ind.title}
                      </h2>
                      
                      <p className="text-base text-white/75 leading-relaxed mb-8">
                        {ind.description}
                      </p>
                      
                      {/* Points Grid */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {ind.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#8B6CFF] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-white/75">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Visual Card */}
                    <div className="relative">
                      <div className="card aspect-[4/3] p-0 border-white/10 bg-black/40 overflow-hidden relative group">
                        <img
                          src={ind.image}
                          alt={ind.title}
                          className="w-full h-full object-cover opacity-80 filter saturate-[0.85] transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-6 left-6 right-6 flex justify-between items-center pointer-events-none">
                          <span className="font-mono text-xs text-[#d6ccff] bg-black/50 backdrop-blur px-2.5 py-1 rounded">SECTOR_TELEMETRY</span>
                          <StatusBadge label="SYS-ID" value={ind.code} />
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 text-center pointer-events-none">
                          <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">INTELLIGENCE PLATFORM LINK ACTIVE</span>
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

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[#1c1730]" />
          <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.18)] via-transparent to-transparent opacity-85" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          
          <div className="relative mx-auto max-w-[1100px] px-6">
            <div className="rounded-[24px] border border-white/18 bg-[rgba(255,255,255,0.04)] px-8 py-20 overflow-hidden text-center relative">
              <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.15)] via-transparent to-transparent opacity-80" />
              <div className="relative z-10 flex flex-col items-center">
                <StatusBadge label="Next Step" value="Contact Us" className="mb-8" />
                <h2 className="display text-white mb-8 max-w-3xl mx-auto">
                  Optimize your <em>water systems.</em>
                </h2>
                <p className="lede max-w-2xl mx-auto mb-12 text-white/70">
                  Ready to deploy real-time monitoring across your mining systems?
                </p>
                <Link 
                  href="/contact" 
                  className="rounded-[20px] bg-[#8B6CFF] hover:bg-[#7c5eff] text-white text-base font-semibold px-8 py-4 inline-flex items-center gap-2 transition-all duration-300 shadow-md"
                >
                  Request System Access <span className="text-base">→</span>
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
