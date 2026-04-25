import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import GlassCard from "@/components/GlassCard"
import StatusBadge from "@/components/StatusBadge"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <GlassCard className="text-center py-16 sm:py-20 border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)/0.03_0%,transparent_100%)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <StatusBadge label="Ready to deploy" value="v2.1 ONLINE" className="mb-8" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              <span className="text-foreground/90">Make Better</span>{" "}
              <span className="gradient-text">Subsurface Decisions</span>
            </h2>
            
            <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
              Ready to transform your subsurface data into actionable intelligence? Start a conversation with our team today.
            </p>
            
            <div className="mt-12">
              <Button asChild size="lg" variant="neon" className="text-lg px-10 py-7 h-auto group/btn shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                <Link href="/contact" className="flex items-center">
                  Get Started Now
                  <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 border-t border-white/5 pt-8 w-full">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-1">Response Time</span>
                <span className="text-xl font-bold text-foreground/80">{"< 24H"}</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-1">Infrastructure</span>
                <span className="text-xl font-bold text-foreground/80">AWS HI-PERF</span>
              </div>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/40" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/40" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40" />
        </GlassCard>
      </div>
    </section>
  )
}
