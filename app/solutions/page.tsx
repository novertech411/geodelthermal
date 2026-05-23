"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import StatusBadge from "@/components/StatusBadge"
import { 
  ArrowRight, 
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
  Layers
} from "lucide-react"

const solutions = [
  {
    id: "geothermal",
    code: "GEOT-01",
    icon: Flame,
    title: "Geothermal Development",
    description: "Unlock the potential of geothermal energy with comprehensive subsurface characterization. From initial exploration to reservoir management, Geodel provides the intelligence needed for successful geothermal projects.",
    features: [
      { icon: Thermometer, text: "Thermal gradient modeling" },
      { icon: Droplets, text: "Fluid flow simulation" },
      { icon: Mountain, text: "Reservoir characterization" },
      { icon: BarChart3, text: "Production forecasting" },
    ],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "exploration",
    code: "EXPL-02",
    icon: MapPin,
    title: "Subsurface Exploration",
    description: "Support mineral and resource exploration with advanced subsurface intelligence. Integrate geophysical, geological, and geochemical data to identify high-potential targets and reduce exploration risk.",
    features: [
      { icon: Pickaxe, text: "Target identification" },
      { icon: Search, text: "Anomaly detection" },
      { icon: Layers, text: "Structural analysis" },
      { icon: BarChart3, text: "Probability mapping" },
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "site-assessment",
    code: "SITE-03",
    icon: Building,
    title: "Site Assessment",
    description: "Evaluate subsurface conditions for infrastructure, construction, and environmental projects. Understand ground conditions, identify risks, and support informed site selection and design decisions.",
    features: [
      { icon: FileCheck, text: "Ground condition analysis" },
      { icon: Search, text: "Hazard identification" },
      { icon: Layers, text: "Foundation assessment" },
      { icon: BarChart3, text: "Risk quantification" },
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
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
              Our <em>Solutions</em>
            </h1>
            <p className="lede mt-6 max-w-3xl mx-auto text-white/70">
              Specialized subsurface intelligence for the unique challenges of energy and resource development.
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
                        <StatusBadge label="SERVICE" value="v2.0" />
                        <StatusBadge label="ID" value={solution.code} />
                      </div>
                      
                      <h2 className="h2 text-white mb-6">
                        {solution.title}
                      </h2>
                      
                      <p className="text-base text-white/75 leading-relaxed mb-10">
                        {solution.description}
                      </p>
                      
                      {/* Features Grid */}
                      <div className="mt-10 grid sm:grid-cols-2 gap-6">
                        {solution.features.map((feature) => (
                          <div key={feature.text} className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-[12px] bg-[#8B6CFF]/5 flex items-center justify-center border border-[#8B6CFF]/10 group-hover:border-[#8B6CFF]/30 transition-all">
                              <feature.icon className="h-5 w-5 text-[#8B6CFF]/70 group-hover:text-[#8B6CFF] transition-colors" />
                            </div>
                            <span className="text-white/70 group-hover:text-white transition-colors font-medium">{feature.text}</span>
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
                      <div className="card aspect-square p-12 border-white/10 bg-black/40 overflow-hidden relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-10`} />
                        
                        {/* Abstract Visual Cluster */}
                        <div className="relative h-full flex items-center justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 bg-[#8B6CFF]/10 blur-[60px] rounded-full scale-150 animate-pulse-slow" />
                            <solution.icon className="h-40 w-40 text-[#8B6CFF]/80 relative z-10" />
                          </div>
                        </div>
                        
                        {/* Grid overlay */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
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

        {/* Why Choose Geodel Section */}
        <section className="py-24 relative bg-black/40 border-y border-white/5">
          <div className="mx-auto max-w-7xl px-8">
            <div className="text-center mb-16">
              <StatusBadge label="Benchmarking" value="Performance" className="justify-center mb-6" />
              <h2 className="h2 text-white mb-6">
                Why Choose <em>Geodel</em>
              </h2>
              <p className="mt-6 text-base text-white/70 max-w-2xl mx-auto">
                A partner that understands subsurface complexity.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Domain Expertise", desc: "Built by geoscientists for geoscientists", code: "DOM-01" },
                { title: "Proven Methods", desc: "Rigorous, validated approaches to analysis", code: "PRV-02" },
                { title: "Integrated Platform", desc: "One system from data to decision", code: "INT-03" },
                { title: "Clear Outputs", desc: "Actionable intelligence, not just data", code: "OUT-04" },
                { title: "Rapid Delivery", desc: "Fast turnaround without compromising quality", code: "RAP-05" },
                { title: "Collaborative", desc: "We work alongside your team", code: "COL-06" },
              ].map((item) => (
                <div key={item.title} className="card group border-white/5 hover:border-[#8B6CFF]/20 transition-all duration-500">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded-[12px] bg-[#8B6CFF]/10 flex items-center justify-center border border-[#8B6CFF]/10">
                        <CheckCircle className="h-5 w-5 text-[#8B6CFF]" />
                      </div>
                      <StatusBadge label="REF" value={item.code} />
                    </div>
                    <h3 className="text-lg font-semibold text-white tracking-tight mb-3">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
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
                  Ready to <em>Get Started?</em>
                </h2>
                <p className="lede max-w-2xl mx-auto mb-12 text-white/70">
                  Tell us about your project and discover how Geodel can help.
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
