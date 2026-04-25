import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Cpu, Globe } from "lucide-react"
import GlassCard from "@/components/GlassCard"
import StatusBadge from "@/components/StatusBadge"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)/0.03_0%,transparent_80%)]" />

      {/* Dynamic Background Texture (Subtle Geological Overlay) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="/images/geological/hero_interpretation.png"
          alt=""
          className="w-full h-full object-cover mix-blend-screen"
        />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <StatusBadge label="System Status" value="Active v2.1.4" className="mb-8" />

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
          <span className="gradient-text">Subsurface Intelligence</span>
          <br />
          <span className="text-foreground/90">Redefined for Scale</span>
        </h1>

        <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
          Geodel transforms raw geological datasets into actionable exploration intelligence. Integrated, precise, and built for the mining industry's most challenging basins.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-20">
          <Button asChild size="lg" variant="neon" className="px-10 py-7 h-auto text-lg">
            <Link href="/contact">
              Start Exploration <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/10 glass bg-white/5 px-10 py-7 h-auto text-lg">
            <Link href="/platform">View System</Link>
          </Button>
        </div>

        {/* Featured Monitor Asset */}
        <div className="relative w-full max-w-6xl mx-auto group perspective-1000">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 rounded-[2.5rem] blur-3xl opacity-10 group-hover:opacity-30 transition duration-1000" />

          <div className="relative glass border border-white/20 rounded-[2.5rem] p-4 backdrop-blur-3xl shadow-[0_0_80px_rgba(var(--primary-rgb),0.1)] transition-all duration-700 group-hover:shadow-[0_0_100px_rgba(var(--primary-rgb),0.2)] group-hover:border-primary/50 group-hover:-translate-y-2">
            <div className="absolute top-10 left-10 z-20 flex items-center gap-4">
              <StatusBadge label="ENGINE" value="SUBSURFACE-CORE-01" />
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-500/80 uppercase tracking-tighter">Live Connection</span>
              </div>
            </div>

            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[1.8rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/geological/hero.jpg"
                alt="Geodel Subsurface Monitoring Interface"
                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.02]"
              />

              {/* Refined Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--primary)/0.1,transparent_70%)] pointer-events-none" />

              {/* Technical Marker Overlays */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="space-y-2">
                  <div className="h-[2px] w-24 bg-gradient-to-r from-primary to-transparent" />
                  <div className="text-[10px] font-mono text-white/70 tracking-[0.2em] uppercase">
                    Spatial Analysis Unit // 01.44.2
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="hidden md:flex gap-4 text-[9px] font-mono text-white/30 tracking-widest uppercase">
                    <span>X: 442.11</span>
                    <span>Y: 882.04</span>
                    <span>Z: -2,440m</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/80 animate-pulse shadow-[0_0_8px_var(--primary)]" />
                    <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

