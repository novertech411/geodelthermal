import { Layers, Activity } from "lucide-react"
import GlassCard from "@/components/GlassCard"
import StatusBadge from "@/components/StatusBadge"

export function UnderstandSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <StatusBadge label="Module" value="Intelligence Layer" className="mb-6" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
              <span className="text-foreground/90">Understand the</span>{" "}
              <span className="gradient-text">Subsurface</span>
            </h2>
            
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              The subsurface is complex. Traditional methods leave gaps in understanding, leading to uncertain decisions and missed opportunities. Geodel brings clarity to what lies beneath.
            </p>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our platform integrates diverse data sources, builds robust geological models, and delivers actionable intelligence that helps you make confident decisions.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-white/5 bg-white/5">
                <StatusBadge label="Processing" value="Real-time" />
                <p className="text-sm text-foreground/70 mt-2 font-medium">Seismic Inversion</p>
              </div>
              <div className="p-4 rounded-lg border border-white/5 bg-white/5">
                <StatusBadge label="Accuracy" value="99.2%" />
                <p className="text-sm text-foreground/70 mt-2 font-medium">Predictive Modeling</p>
              </div>
            </div>
          </div>

          {/* Visual - Layered Geological Model */}
          <div className="relative order-1 lg:order-2">
            <GlassCard className="aspect-square max-w-md mx-auto lg:max-w-none relative border-white/10">
              {/* Technical Overlay */}
              <div className="absolute top-6 right-6 z-20">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
                  <Activity className="h-3 w-3 text-primary animate-pulse" />
                  <span className="font-mono text-[10px] tracking-tighter text-white/80">LIVE MODELING...</span>
                </div>
              </div>

              {/* Animated Layers */}
              <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 opacity-80">
                <defs>
                  <linearGradient id="layer1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.65 0.25 285 / 0.8)" />
                    <stop offset="100%" stopColor="oklch(0.55 0.28 285 / 0.6)" />
                  </linearGradient>
                  <linearGradient id="layer2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.55 0.28 285 / 0.7)" />
                    <stop offset="100%" stopColor="oklch(0.45 0.25 285 / 0.5)" />
                  </linearGradient>
                  <linearGradient id="layer3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.45 0.25 285 / 0.6)" />
                    <stop offset="100%" stopColor="oklch(0.35 0.2 285 / 0.4)" />
                  </linearGradient>
                  <linearGradient id="layer4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.35 0.2 285 / 0.5)" />
                    <stop offset="100%" stopColor="oklch(0.25 0.15 285 / 0.3)" />
                  </linearGradient>
                </defs>
                
                {/* Surface Layer */}
                <path
                  d="M0,80 Q100,60 200,85 T400,75 L400,140 Q300,150 200,135 T0,145 Z"
                  fill="url(#layer1)"
                  className="animate-pulse-slow"
                />
                
                {/* Second Layer */}
                <path
                  d="M0,145 Q100,135 200,150 T400,140 L400,210 Q300,230 200,205 T0,220 Z"
                  fill="url(#layer2)"
                  className="animate-pulse-slow"
                  style={{ animationDelay: "0.5s" }}
                />
                
                {/* Third Layer */}
                <path
                  d="M0,220 Q100,200 200,225 T400,210 L400,290 Q300,310 200,285 T0,300 Z"
                  fill="url(#layer3)"
                  className="animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                />
                
                {/* Deep Layer */}
                <path
                  d="M0,300 Q100,280 200,305 T400,290 L400,400 L0,400 Z"
                  fill="url(#layer4)"
                  className="animate-pulse-slow"
                  style={{ animationDelay: "1.5s" }}
                />
              </svg>

              {/* Technical scan line effect */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-primary/20 animate-[scan_4s_linear_infinite] shadow-[0_0_10px_var(--primary)]" />
            </GlassCard>
            
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-primary/5 blur-[80px] rounded-full -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
