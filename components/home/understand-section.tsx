import { Layers } from "lucide-react"

export function UnderstandSection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
              <Layers className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Deep Understanding</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Understand the Subsurface
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              The subsurface is complex. Traditional methods leave gaps in understanding, leading to uncertain decisions and missed opportunities. Geodel brings clarity to what lies beneath.
            </p>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our platform integrates diverse data sources, builds robust geological models, and delivers actionable intelligence that helps you make confident decisions.
            </p>
          </div>

          {/* Visual - Layered Geological Model */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square max-w-md mx-auto lg:max-w-none relative rounded-2xl overflow-hidden glass border border-border/50 glow-purple">
              {/* Animated Layers */}
              <svg viewBox="0 0 400 400" className="w-full h-full">
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
                
                {/* Data Points */}
                <circle cx="80" cy="120" r="4" fill="oklch(0.98 0 0)" className="animate-glow" />
                <circle cx="200" cy="180" r="4" fill="oklch(0.98 0 0)" className="animate-glow" style={{ animationDelay: "0.3s" }} />
                <circle cx="320" cy="250" r="4" fill="oklch(0.98 0 0)" className="animate-glow" style={{ animationDelay: "0.6s" }} />
                <circle cx="150" cy="280" r="4" fill="oklch(0.98 0 0)" className="animate-glow" style={{ animationDelay: "0.9s" }} />
                
                {/* Connection Lines */}
                <path
                  d="M80,120 L200,180 L320,250 L150,280"
                  stroke="oklch(0.65 0.25 285 / 0.5)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
