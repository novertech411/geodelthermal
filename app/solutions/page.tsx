"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import GlassCard from "@/components/GlassCard"
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
    glow: "shadow-[0_0_30px_rgba(239,68,68,0.15)]",
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
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
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
    glow: "shadow-[0_0_30_rgba(16,185,129,0.15)]",
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--primary)/0.03_0%,transparent_50%)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <StatusBadge label="Sector" value="Intelligence" className="justify-center mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance">
              <span className="gradient-text">Solutions</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized subsurface intelligence for the unique challenges of energy and resource development.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                      
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-8">
                        {solution.title}
                      </h2>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                        {solution.description}
                      </p>
                      
                      {/* Features Grid */}
                      <div className="mt-10 grid sm:grid-cols-2 gap-6">
                        {solution.features.map((feature) => (
                          <div key={feature.text} className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-all">
                              <feature.icon className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-foreground/80 group-hover:text-foreground transition-colors font-medium">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-12 flex items-center gap-6">
                        <Button asChild variant="neon" className="px-8 py-6 h-auto text-base">
                          <Link href="/contact" className="flex items-center">
                            Start System Project
                            <ArrowRight className="ml-3 h-5 w-5" />
                          </Link>
                        </Button>
                        <div className="hidden sm:flex flex-col">
                          <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-1">Status</span>
                          <span className="text-xs font-semibold text-primary">AVAILABLE</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Visual */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                      <GlassCard className={`aspect-square p-12 border-white/10 bg-black/40 overflow-hidden group ${solution.glow}`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-20`} />
                        
                        {/* Abstract Visual Cluster */}
                        <div className="relative h-full flex items-center justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-150 animate-pulse-slow" />
                            <solution.icon className="h-40 w-40 text-primary/80 relative z-10" />
                          </div>
                        </div>
                        
                        {/* Grid overlay */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                      </GlassCard>
                      {/* Technical Frame Accents */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-primary/20" />
                      <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-primary/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Geodel Section */}
        <section className="py-24 relative bg-black/40 border-y border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <StatusBadge label="Benchmarking" value="Performance" className="justify-center mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Why Choose <span className="gradient-text">Geodel</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
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
                <GlassCard key={item.title} className="group border-white/5 hover:border-primary/20 transition-all duration-500">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/10">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <StatusBadge label="REF" value={item.code} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground tracking-tight mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
          
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <GlassCard className="py-20 border-white/5 bg-black/20">
              <StatusBadge label="Engagement" value="System Ready" className="mb-8" />
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-8">
                Ready to <span className="gradient-text">Get Started?</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                Tell us about your project and discover how Geodel can help.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" variant="neon" className="px-10 py-7 h-auto text-lg">
                  <Link href="/contact" className="flex items-center">
                    Initiate System Contact
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
