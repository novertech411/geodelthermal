"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import GlassCard from "@/components/GlassCard"
import StatusBadge from "@/components/StatusBadge"
import { 
  ArrowRight, 
  Target,
  ShieldCheck,
  Compass,
  FileText,
  BarChart3,
  Box,
  CheckCircle,
  PieChart,
  TrendingUp,
  AlertTriangle,
  Map
} from "lucide-react"

const reportTypes = [
  {
    icon: Target,
    title: "Target Reports",
    description: "Detailed analysis of identified high-potential zones with coordinates, depths, and confidence levels.",
    items: ["Location coordinates", "Depth estimates", "Target ranking", "Supporting data"],
    code: "TGT-ANALYSIS",
  },
  {
    icon: ShieldCheck,
    title: "Risk Assessments",
    description: "Quantified uncertainty analysis and risk factors to inform your decision-making process.",
    items: ["Probability distributions", "Sensitivity analysis", "Scenario modeling", "Risk matrices"],
    code: "RSK-QUANT",
  },
  {
    icon: Compass,
    title: "Recommendations",
    description: "Clear, actionable guidance based on analysis results and project objectives.",
    items: ["Next steps", "Drilling programs", "Data acquisition", "Timeline suggestions"],
    code: "REC-ACTION",
  },
]

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary)/0.03_0%,transparent_50%)]" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <StatusBadge label="Deliverables" value="Intelligence-v4" className="justify-center mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance">
              <span className="gradient-text">Decision-Level Reporting</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Clear, actionable intelligence delivered in formats designed to support confident decision-making.
            </p>
          </div>
        </section>

        {/* Report Types */}
        <section className="py-24 relative border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {reportTypes.map((report) => (
                <GlassCard
                  key={report.title}
                  className="group border-white/5 hover:border-primary/30 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary/10 transition-colors">
                      <report.icon className="h-8 w-8 text-primary" />
                    </div>
                    <StatusBadge label="CODE" value={report.code} />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">
                    {report.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {report.description}
                  </p>
                  
                  <ul className="space-y-4 pt-8 border-t border-white/5">
                    {report.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                        <span className="text-sm text-foreground/70 group-hover/item:text-foreground transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Mock Report Preview */}
        <section className="py-24 relative bg-black/40 border-y border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <StatusBadge label="Visualizer" value="System v4.0" className="justify-center mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Report <span className="gradient-text">Preview</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A glimpse at the high-fidelity deliverables you can expect.
              </p>
            </div>

            {/* Mock Report UI */}
            <GlassCard className="border-white/10 p-0 overflow-hidden bg-black/60 shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)]">
              {/* Report Header */}
              <div className="p-8 border-b border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <FileText className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground tracking-tight">Project Alpha - Subsurface Assessment</h3>
                    <p className="text-sm font-mono text-white/30 uppercase tracking-widest mt-1">Ref ID: GEODEL-2026-ALPHA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge label="VERSION" value="v1.2.0" />
                  <StatusBadge label="STATUS" value="FINAL-APPROVED" valueClassName="bg-green-500/10 text-green-400 border-green-500/20" />
                </div>
              </div>

              {/* Report Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* 3D Model Preview */}
                  <div className="lg:col-span-2 aspect-video rounded-2xl bg-black border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    
                    {/* Mock 3D Visualization */}
                    <svg viewBox="0 0 600 300" className="w-full h-full opacity-60">
                      <defs>
                        <linearGradient id="report-layer1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                      <path d="M50,80 Q150,60 300,85 Q450,110 550,75 L550,120 Q450,155 300,130 Q150,105 50,125 Z" fill="url(#report-layer1)" className="stroke-primary/30" strokeWidth="1" />
                      <path d="M50,125 Q150,105 300,130 Q450,155 550,120 L550,180 Q450,215 300,190 Q150,165 50,185 Z" fill="url(#report-layer1)" fillOpacity="0.6" className="stroke-primary/30" strokeWidth="1" />
                      
                      {/* Target Points */}
                      <circle cx="200" cy="150" r="6" fill="var(--primary)" className="animate-pulse" />
                      <circle cx="350" cy="130" r="6" fill="var(--accent)" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                    </svg>
                    
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <StatusBadge label="RENDER" value="STABLE-v4" />
                      <span className="text-[10px] font-mono text-white/30">3 IDENTIFIED TARGETS</span>
                    </div>
                  </div>

                  {/* Stats Panel */}
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-3 mb-6">
                        <Target className="h-5 w-5 text-primary" />
                        <span className="font-bold text-foreground">Target Intelligence</span>
                      </div>
                      <div className="space-y-4">
                        {[
                          { name: "Alpha-1", conf: 87, risk: "Low" },
                          { name: "Beta-2", conf: 72, risk: "Medium" },
                        ].map((target) => (
                          <div key={target.name} className="p-4 rounded-xl bg-black border border-white/5 space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-semibold text-foreground/80">{target.name}</span>
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                                target.risk === "Low" ? "border-green-500/20 text-green-400 bg-green-500/5" : "border-yellow-500/20 text-yellow-400 bg-yellow-500/5"
                              }`}>{target.risk.toUpperCase()}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: `${target.conf}%` }} />
                              </div>
                              <span className="text-[10px] font-mono text-white/40">{target.conf}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                        <PieChart className="h-5 w-5 text-primary mx-auto mb-3" />
                        <span className="text-xl font-bold text-foreground block">87%</span>
                        <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mt-1">Confidence</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                        <TrendingUp className="h-5 w-5 text-accent mx-auto mb-3" />
                        <span className="text-xl font-bold text-foreground block">3</span>
                        <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mt-1">Viable Zones</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations Section */}
                <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3 mb-6">
                    <Compass className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground">Actionable Recommendations</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      { icon: Target, text: "Prioritize Alpha-1 for initial drilling program" },
                      { icon: Map, text: "Acquire high-res seismic data in western sector" },
                      { icon: AlertTriangle, text: "Monitor salt tectonic risk near Beta-2" },
                    ].map((rec, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-black border border-white/5 group hover:border-primary/20 transition-all">
                        <rec.icon className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors leading-relaxed">{rec.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Report Features */}
        <section className="py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <StatusBadge label="Quality" value="Standard-v4" className="justify-center mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                What Makes Our Reports <span className="gradient-text">Different</span>
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: CheckCircle, title: "Actionable", desc: "Clear next steps, not just data dumps" },
                { icon: BarChart3, title: "Quantified", desc: "Uncertainty and confidence measures" },
                { icon: Box, title: "Visual", desc: "Interactive 3D models and mappings" },
                { icon: FileText, title: "Comprehensive", desc: "Full documentation and methodology" },
              ].map((item) => (
                <GlassCard key={item.title} className="text-center group border-white/5 hover:border-primary/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden bg-black/40 border-t border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
          
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <GlassCard className="py-20 border-white/5 bg-black/20">
              <StatusBadge label="Acquisition" value="Data-Ready" className="mb-8" />
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-8">
                See Sample <span className="gradient-text">Reports</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Request a sample report to see the quality and technical depth of our subsurface deliverables.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" variant="neon" className="px-10 py-7 h-auto text-lg">
                  <Link href="/contact" className="flex items-center">
                    Request Quality Samples
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
