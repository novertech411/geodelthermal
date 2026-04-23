import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[400px] md:w-[600px] h-72 sm:h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          Make Better Subsurface Decisions
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Ready to transform your subsurface data into actionable intelligence? Start a conversation with our team today.
        </p>
        
        <div className="mt-8 sm:mt-10 px-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-purple text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 w-full sm:w-auto">
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
