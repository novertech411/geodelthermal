import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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
          <div className="absolute inset-0 grid-background opacity-30" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              The Geodel Platform
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              A unified system for subsurface intelligence. From data integration to decision support, everything you need in one powerful environment.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-purple">
                <Link href="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* One System Section */}
        <section className="py-20 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Layers className="h-4 w-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Unified Approach</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  One System
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Stop juggling multiple tools and fragmented workflows. Geodel brings together data management, modeling, analysis, and reporting into a single cohesive platform designed specifically for subsurface intelligence.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl glass border border-border/50 glow-purple p-8 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {[Database, Brain, BarChart3].map((Icon, i) => (
                      <div key={i} className="aspect-square rounded-xl bg-primary/10 flex items-center justify-center animate-pulse-slow" style={{ animationDelay: `${i * 0.3}s` }}>
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrated Data Section */}
        <section className="py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-video rounded-2xl glass border border-border/50 overflow-hidden">
                  <svg viewBox="0 0 400 225" className="w-full h-full">
                    <defs>
                      <linearGradient id="data-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="oklch(0.65 0.25 285 / 0.6)" />
                        <stop offset="100%" stopColor="oklch(0.55 0.28 285 / 0.4)" />
                      </linearGradient>
                    </defs>
                    {/* Data Layers Visualization */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <rect
                        key={i}
                        x="50"
                        y={40 + i * 35}
                        width="300"
                        height="25"
                        rx="4"
                        fill={`oklch(${0.65 - i * 0.08} ${0.25 - i * 0.03} 285 / ${0.6 - i * 0.1})`}
                        className="animate-pulse-slow"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                    {/* Connection dots */}
                    {[0, 1, 2].map((i) => (
                      <circle key={i} cx={100 + i * 100} cy="112" r="6" fill="oklch(0.98 0 0)" className="animate-glow" />
                    ))}
                  </svg>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Database className="h-4 w-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Data Management</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Integrated Data
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Combine geological surveys, well logs, seismic data, satellite imagery, and more. Our platform normalizes and integrates diverse data sources, creating a unified foundation for analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reliable Models Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Advanced Modeling</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Reliable Models
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Generate robust subsurface models using a combination of machine learning, geostatistics, and physics-based algorithms. Our modeling engine is designed for accuracy, transparency, and uncertainty quantification.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl glass border border-border/50 glow-purple p-6">
                  <div className="h-full flex flex-col gap-4">
                    <div className="flex-1 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Box className="h-16 w-16 text-primary animate-float" />
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1 h-12 rounded-lg bg-accent/20 animate-pulse-slow" />
                      <div className="flex-1 h-12 rounded-lg bg-primary/20 animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clear Outputs Section */}
        <section className="py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Clear Outputs
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform complex analysis into actionable deliverables.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: LineChart, title: "Interactive Visualizations", desc: "Explore 3D models and data in real-time" },
                { icon: FileText, title: "Automated Reports", desc: "Generate comprehensive documentation" },
                { icon: BarChart3, title: "Risk Assessments", desc: "Quantified uncertainty analysis" },
                { icon: Zap, title: "Action Plans", desc: "Clear recommendations for next steps" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built to Expand Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Built to Expand
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A platform that grows with your needs and the evolving energy landscape.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Globe, title: "Multi-Region Support", desc: "Deploy across global projects" },
                { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant infrastructure" },
                { icon: Workflow, title: "API Integration", desc: "Connect with existing workflows" },
                { icon: Settings, title: "Custom Workflows", desc: "Tailor the platform to your needs" },
                { icon: Database, title: "Scalable Storage", desc: "Handle petabytes of subsurface data" },
                { icon: Brain, title: "AI Roadmap", desc: "Continuous model improvements" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-colors">
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mock Dashboard Section */}
        <section className="py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Platform Preview
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A glimpse into the Geodel workspace.
              </p>
            </div>
            
            {/* Mock Dashboard UI */}
            <div className="rounded-2xl glass border border-border/50 overflow-hidden glow-purple">
              <div className="flex">
                {/* Sidebar */}
                <div className="w-16 lg:w-56 bg-card border-r border-border/50 p-4 hidden sm:block">
                  <div className="space-y-4">
                    {[
                      { icon: Database, label: "Data" },
                      { icon: Box, label: "Models" },
                      { icon: LineChart, label: "Analysis" },
                      { icon: FileText, label: "Reports" },
                      { icon: Settings, label: "Settings" },
                    ].map((item, i) => (
                      <div key={item.label} className={`flex items-center gap-3 p-2 rounded-lg ${i === 1 ? 'bg-primary/20' : 'hover:bg-secondary'} transition-colors cursor-pointer`}>
                        <item.icon className={`h-5 w-5 ${i === 1 ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className={`text-sm hidden lg:block ${i === 1 ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="flex-1 p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* 3D Model Viewer */}
                    <div className="lg:col-span-2 aspect-video rounded-xl bg-background/50 border border-border/50 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 grid-background opacity-20" />
                      <div className="relative">
                        <Box className="h-24 w-24 text-primary/50 animate-float" />
                        <p className="text-sm text-muted-foreground mt-4 text-center">3D Model Viewer</p>
                      </div>
                    </div>
                    
                    {/* Side Panel */}
                    <div className="space-y-4">
                      {/* Data Upload */}
                      <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                        <div className="flex items-center gap-2 mb-3">
                          <Upload className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">Data Upload</span>
                        </div>
                        <div className="h-16 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">Drop files here</span>
                        </div>
                      </div>
                      
                      {/* Quick Stats */}
                      <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                        <div className="flex items-center gap-2 mb-3">
                          <BarChart3 className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">Statistics</span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { label: "Data Points", value: "1.2M" },
                            { label: "Layers", value: "12" },
                            { label: "Confidence", value: "87%" },
                          ].map((stat) => (
                            <div key={stat.label} className="flex justify-between text-xs">
                              <span className="text-muted-foreground">{stat.label}</span>
                              <span className="text-foreground font-medium">{stat.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-background opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Experience the Platform
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how Geodel can transform your subsurface workflows.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-purple">
                <Link href="/contact">
                  Schedule a Demo
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
