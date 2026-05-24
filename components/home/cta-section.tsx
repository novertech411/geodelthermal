import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 bg-[#14101f] relative overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-8">
        {/* CTA Panel Container */}
        <div 
          className="relative rounded-[24px] border border-white/10 p-[56px] md:p-[80px_56px] text-center overflow-hidden flex flex-col items-center"
          style={{
            background: "radial-gradient(circle at 100% 0%, rgba(139, 108, 255, 0.18) 0%, transparent 60%), radial-gradient(circle at 0% 100%, rgba(91, 63, 224, 0.18) 0%, transparent 60%), #1c1730",
            backgroundImage: `
              radial-gradient(circle at 100% 0%, rgba(139, 108, 255, 0.18) 0%, transparent 60%),
              radial-gradient(circle at 0% 100%, rgba(91, 63, 224, 0.18) 0%, transparent 60%),
              linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 100% 100%, 40px 40px, 40px 40px",
            backgroundColor: "#1c1730"
          }}
        >
          {/* Tag-pill above */}
          <div className="tag-pill mb-8">
            06 — WHY GEODEL // VISION
          </div>
          
          {/* Display Headline */}
          <h2 className="h2 text-white leading-tight max-w-3xl text-center">
            Building the intelligence layer{" "}
            <span className="block mt-1">
              for <em>critical minerals.</em>
            </span>
          </h2>
          
          {/* Lede Text */}
          <p className="lede mt-6 text-center max-w-2xl">
            The future of mineral infrastructure depends on predictive systems, operational visibility, and hydrological intelligence. Geodel connects hydrology, mineral systems, and predictive analytics.
          </p>
          
          {/* Accent Button */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="/contact" 
              className="rounded-[20px] bg-[#8B6CFF] hover:bg-[#7c5eff] text-white text-sm font-semibold px-8 py-4 flex items-center gap-2 transition-all duration-300 shadow-md inline-flex"
            >
              Schedule a Demo <span className="text-sm">→</span>
            </Link>
            <Link 
              href="/contact" 
              className="rounded-[20px] border border-white/22 bg-white/4 hover:bg-white/8 text-white text-sm font-semibold px-8 py-4 flex items-center gap-2 transition-all duration-300 inline-flex"
            >
              Contact Geodel
            </Link>
          </div>

          {/* Bottom Meta Row */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-12 border-t border-white/10 pt-8 w-full max-w-2xl">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-[2px] mb-2">Systems Expertise</span>
              <span className="text-base font-semibold text-white">Hydrology + Mineral Recovery</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-[2px] mb-2">Operational Goal</span>
              <span className="text-base font-semibold text-white">Optimize Water Balance</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-[2px] mb-2">Deployability</span>
              <span className="text-base font-semibold text-[#d6ccff]">Edge Telemetry Ingest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
