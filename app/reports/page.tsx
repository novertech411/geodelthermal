import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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
  },
  {
    icon: ShieldCheck,
    title: "Risk Assessments",
    description: "Quantified uncertainty analysis and risk factors to inform your decision-making process.",
    items: ["Probability distributions", "Sensitivity analysis", "Scenario modeling", "Risk matrices"],
  },
  {
    icon: Compass,
    title: "Recommendations",
    description: "Clear, actionable guidance based on analysis results and project objectives.",
    items: ["Next steps", "Drilling programs", "Data acquisition", "Timeline suggestions"],
  },
]

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-background opacity-30" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Decision-Level Reporting
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Clear, actionable intelligence delivered in formats designed to support confident decision-making.
            </p>
          </div>
        </section>

        {/* Report Types */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {reportTypes.map((report) => (
                <div
                  key={report.title}
                  className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 glow-purple-sm">
                    <report.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {report.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {report.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {report.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mock Report Preview */}
        <section className="py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Report Preview
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A glimpse at the deliverables you can expect.
              </p>
            </div>

            {/* Mock Report UI */}
            <div className="rounded-2xl glass border border-border/50 overflow-hidden glow-purple">
              {/* Report Header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Project Alpha - Subsurface Assessment</h3>
                      <p className="text-sm text-muted-foreground">Generated: April 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">Final Report</span>
                  </div>
                </div>
              </div>

              {/* Report Content */}
              <div className="p-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* 3D Model Preview */}
                  <div className="lg:col-span-2 aspect-video rounded-xl bg-background/50 border border-border/50 relative overflow-hidden">
                    <div className="absolute inset-0 grid-background opacity-20" />
                    
                    {/* Mock 3D Visualization */}
                    <svg viewBox="0 0 600 300" className="w-full h-full">
                      <defs>
                        <linearGradient id="report-layer1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="oklch(0.65 0.25 285 / 0.6)" />
                          <stop offset="100%" stopColor="oklch(0.55 0.28 285 / 0.4)" />
                        </linearGradient>
                        <linearGradient id="report-layer2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="oklch(0.55 0.28 285 / 0.5)" />
                          <stop offset="100%" stopColor="oklch(0.45 0.25 285 / 0.3)" />
                        </linearGradient>
                        <linearGradient id="report-layer3" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="oklch(0.45 0.25 285 / 0.4)" />
                          <stop offset="100%" stopColor="oklch(0.35 0.2 285 / 0.2)" />
                        </linearGradient>
                      </defs>
                      
                      {/* Layers */}
                      <path d="M50,80 Q150,60 300,85 Q450,110 550,75 L550,120 Q450,155 300,130 Q150,105 50,125 Z" fill="url(#report-layer1)" />
                      <path d="M50,125 Q150,105 300,130 Q450,155 550,120 L550,180 Q450,215 300,190 Q150,165 50,185 Z" fill="url(#report-layer2)" />
                      <path d="M50,185 Q150,165 300,190 Q450,215 550,180 L550,260 Q450,280 300,270 Q150,260 50,280 Z" fill="url(#report-layer3)" />
                      
                      {/* Target Points */}
                      <circle cx="200" cy="150" r="8" fill="oklch(0.7 0.2 30)" className="animate-pulse-slow" />
                      <circle cx="350" cy="130" r="8" fill="oklch(0.7 0.2 120)" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
                      <circle cx="450" cy="170" r="8" fill="oklch(0.7 0.2 30)" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
                      
                      {/* Labels */}
                      <text x="200" y="135" fill="oklch(0.98 0 0)" fontSize="10" textAnchor="middle">T1</text>
                      <text x="350" y="115" fill="oklch(0.98 0 0)" fontSize="10" textAnchor="middle">T2</text>
                      <text x="450" y="155" fill="oklch(0.98 0 0)" fontSize="10" textAnchor="middle">T3</text>
                    </svg>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>3D Subsurface Model</span>
                        <span>3 Targets Identified</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Panel */}
                  <div className="space-y-4">
                    {/* Target Summary */}
                    <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="h-5 w-5 text-primary" />
                        <span className="font-medium text-foreground">Target Summary</span>
                      </div>
                      <div className="space-y-3">
                        {[
                          { name: "Target 1 (T1)", confidence: 87, risk: "Low" },
                          { name: "Target 2 (T2)", confidence: 72, risk: "Medium" },
                          { name: "Target 3 (T3)", confidence: 65, risk: "Medium" },
                        ].map((target) => (
                          <div key={target.name} className="p-3 rounded-lg bg-card border border-border/50">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-foreground">{target.name}</span>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                target.risk === "Low" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                              }`}>{target.risk}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 rounded-full bg-background">
                                <div 
                                  className="h-2 rounded-full bg-primary"
                                  style={{ width: `${target.confidence}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground">{target.confidence}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-background/50 border border-border/50 text-center">
                        <PieChart className="h-6 w-6 text-primary mx-auto mb-2" />
                        <span className="text-2xl font-bold text-foreground">87%</span>
                        <p className="text-xs text-muted-foreground">Avg Confidence</p>
                      </div>
                      <div className="p-4 rounded-xl bg-background/50 border border-border/50 text-center">
                        <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                        <span className="text-2xl font-bold text-foreground">3</span>
                        <p className="text-xs text-muted-foreground">Viable Targets</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations Section */}
                <div className="mt-6 p-6 rounded-xl bg-background/50 border border-border/50">
                  <div className="flex items-center gap-2 mb-4">
                    <Compass className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">Key Recommendations</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { icon: Target, text: "Prioritize T1 for initial drilling program" },
                      { icon: Map, text: "Acquire additional seismic data in eastern sector" },
                      { icon: AlertTriangle, text: "Monitor fault zone near T3 for risk mitigation" },
                    ].map((rec, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border/50">
                        <rec.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{rec.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Report Features */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                What Makes Our Reports Different
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: CheckCircle, title: "Actionable", desc: "Clear next steps, not just data dumps" },
                { icon: BarChart3, title: "Quantified", desc: "Uncertainty and confidence measures" },
                { icon: Box, title: "Visual", desc: "Interactive 3D models and maps" },
                { icon: FileText, title: "Comprehensive", desc: "Full documentation and methodology" },
              ].map((item) => (
                <div key={item.title} className="text-center p-6 rounded-2xl glass border border-border/50">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-background opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              See Sample Reports
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Request a sample report to see the quality and depth of our deliverables.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-purple">
                <Link href="/contact">
                  Request Samples
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
