"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import GlassCard from "@/components/GlassCard"
import StatusBadge from "@/components/StatusBadge"
import { 
  ArrowRight, 
  Layers, 
  Database, 
  Brain, 
  BarChart3, 
  Zap,
  Upload,
  Box,
  LineChart,
  FileText,
  Settings,
  Globe,
  Shield,
  Workflow
} from "lucide-react"

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent)/0.03_0%,transparent_50%)]" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <StatusBadge label="Infrastructure" value="Enterprise-v4" className="justify-center mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance">
              <span className="text-foreground/90">The</span>{" "}
              <span className="gradient-text">Geodel Platform</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A unified system for subsurface intelligence. From data integration to decision support, everything you need in one powerful environment.
            </p>
            <div className="mt-12">
              <Button asChild size="lg" variant="neon" className="px-10 py-7 h-auto text-lg shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                <Link href="/contact" className="flex items-center">
                  Request System Demo
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* One System Section */}
        <section className="py-24 relative border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <StatusBadge label="Core" value="Unified Engine" className="mb-6" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                  One <span className="text-primary/80">System</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Stop juggling multiple tools and fragmented workflows. Geodel brings together data management, modeling, analysis, and reporting into a single cohesive platform designed specifically for subsurface intelligence.
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-1">Architecture</span>
                    <span className="text-sm font-semibold text-foreground/80">Cloud-Native HPC</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-1">Compliance</span>
                    <span className="text-sm font-semibold text-foreground/80">SOC2 Type II</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <GlassCard className="aspect-video p-12 flex items-center justify-center border-white/10 bg-black/40">
                  <div className="grid grid-cols-3 gap-6 w-full">
                    {[Database, Brain, BarChart3].map((Icon, i) => (
                      <div key={i} className="aspect-square rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/20 shadow-[inset_0_0_20px_rgba(var(--primary-rgb),0.1)]">
                        <Icon className="h-12 w-12 text-primary/80" />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
                </GlassCard>
                {/* Decorative Accents */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-primary/30" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-primary/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Integrated Data Section */}
        <section className="py-24 relative bg-black/20 border-y border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <GlassCard className="aspect-video overflow-hidden border-white/10 p-0 bg-black">
                  <svg viewBox="0 0 400 225" className="w-full h-full opacity-80">
                    <defs>
                      <linearGradient id="data-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    {/* Technical Grid Overlay */}
                    <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.1" strokeOpacity="0.2"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                    
                    {/* Data Layers Visualization */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <rect
                        key={i}
                        x="50"
                        y={40 + i * 35}
                        width="300"
                        height="20"
                        rx="2"
                        className="fill-primary/20 stroke-primary/30"
                        strokeWidth="1"
                      />
                    ))}
                    {/* Scan Line */}
                    <rect x="50" y="40" width="300" height="1" className="fill-primary shadow-[0_0_10px_var(--primary)]">
                      <animate transform="translateY" attributeName="y" from="40" to="200" dur="4s" repeatCount="indefinite" />
                    </rect>
                  </svg>
                  <div className="absolute bottom-4 left-4">
                    <StatusBadge label="LINK" value="ACTIVE-STREAM" />
                  </div>
                </GlassCard>
              </div>
              <div className="order-1 lg:order-2">
                <StatusBadge label="Module-01" value="Data Engine" className="mb-6" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                  Integrated <span className="gradient-text">Data</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Combine geological surveys, well logs, seismic data, satellite imagery, and more. Our platform normalizes and integrates diverse data sources, creating a unified foundation for analysis.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-sm font-mono text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Multi-source Normalization
                  </div>
                  <div className="flex items-center gap-3 text-sm font-mono text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Real-time Stream Integration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reliable Models Section */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <StatusBadge label="Module-02" value="Modeling Core" className="mb-6" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                  Reliable <span className="gradient-text">Models</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Generate robust subsurface models using a combination of machine learning, geostatistics, and physics-based algorithms. Our modeling engine is designed for accuracy, transparency, and uncertainty quantification.
                </p>
              </div>
              <div className="relative">
                <GlassCard className="aspect-video p-10 bg-black/60 border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)/0.05_0%,transparent_100%)]" />
                  <div className="h-full flex flex-col gap-6 relative z-10">
                    <div className="flex-1 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-primary/[0.02] transition-colors">
                      <Box className="h-20 w-20 text-primary/40 group-hover:text-primary/60 transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="h-14 rounded-xl border border-white/5 bg-white/[0.02] flex items-center px-4">
                        <StatusBadge label="KER" value="v4.0-ML" />
                      </div>
                      <div className="h-14 rounded-xl border border-white/5 bg-white/[0.02] flex items-center px-4">
                        <StatusBadge label="STAT" value="READY" />
                      </div>
                    </div>
                  </div>
                </GlassCard>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Clear Outputs Section */}
        <section className="py-24 relative bg-black/20 border-y border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <StatusBadge label="Output" value="Deliverables" className="justify-center mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Clear <span className="gradient-text">Outputs</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Transform complex analysis into actionable intelligence.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: LineChart, title: "Interactive Visualizations", desc: "Explore 3D models and data in real-time", id: "VIS-01" },
                { icon: FileText, title: "Automated Reports", desc: "Generate comprehensive documentation", id: "REP-02" },
                { icon: BarChart3, title: "Risk Assessments", desc: "Quantified uncertainty analysis", id: "RSK-03" },
                { icon: Zap, title: "Action Plans", desc: "Clear recommendations for next steps", id: "ACT-04" },
              ].map((item) => (
                <GlassCard key={item.title} className="group border-white/5 hover:border-primary/30 transition-all duration-500">
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-all">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-foreground tracking-tight">{item.title}</h3>
                      <StatusBadge label="ID" value={item.id} />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Built to Expand Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <StatusBadge label="Scalability" value="Universal" className="justify-center mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Built to <span className="gradient-text">Expand</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A platform that grows with your needs and the evolving energy landscape.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Globe, title: "Multi-Region Support", desc: "Deploy across global projects", tag: "GLOBAL" },
                { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant infrastructure", tag: "SECURE" },
                { icon: Workflow, title: "API Integration", desc: "Connect with existing workflows", tag: "RESTFUL" },
                { icon: Settings, title: "Custom Workflows", desc: "Tailor the platform to your needs", tag: "FLEXIBLE" },
                { icon: Database, title: "Scalable Storage", desc: "Handle petabytes of subsurface data", tag: "PETABYTE" },
                { icon: Brain, title: "AI Roadmap", desc: "Continuous model improvements", tag: "AI-DRIVEN" },
              ].map((item) => (
                <GlassCard key={item.title} className="group border-white/10 hover:border-accent/40 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center border border-accent/20 group-hover:bg-accent/10 transition-all">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground tracking-tight">{item.title}</h3>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-accent/60">{item.tag}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {item.desc}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
          {/* Depth Glow */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden bg-black/40 border-t border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
          
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <GlassCard className="py-20 border-white/5 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col items-center">
                <StatusBadge label="Next Step" value="SYSTEM ACCESS" className="mb-8" />
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-balance mb-8">
                  <span className="text-foreground/90">Experience the</span>{" "}
                  <span className="gradient-text">Geodel Platform</span>
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                  See how Geodel can transform your subsurface workflows.
                </p>
                <Button asChild size="lg" variant="neon" className="px-10 py-7 h-auto text-lg shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                  <Link href="/contact" className="flex items-center">
                    Schedule a System Demo
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/40" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/40" />
            </GlassCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
