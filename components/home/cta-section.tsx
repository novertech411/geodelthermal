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
            Ready to deploy — v2.4 Online
          </div>
          
          {/* Display Headline */}
          <h2 className="h2 text-white leading-tight max-w-2xl text-center">
            Make better{" "}
            <span className="block sm:inline">
              <em>subsurface decisions.</em>
            </span>
          </h2>
          
          {/* Lede Text */}
          <p className="lede mt-6 text-center max-w-xl">
            Ready to transform your subsurface data into actionable intelligence? Start a conversation with our team today.
          </p>
          
          {/* Accent Button */}
          <div className="mt-10">
            <Link 
              href="/contact" 
              className="rounded-[20px] bg-[#8B6CFF] hover:bg-[#7c5eff] text-white text-sm font-semibold px-8 py-4 flex items-center gap-2 transition-all duration-300 shadow-md inline-flex"
            >
              Get started now <span className="text-sm">→</span>
            </Link>
          </div>

          {/* Bottom Meta Row */}
          <div className="mt-16 flex items-center justify-center gap-12 border-t border-white/10 pt-8 w-full max-w-lg">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-[2px] mb-2">Response Time</span>
              <span className="text-lg font-medium text-white tracking-[-0.03em]">{"< 24"} <em className="font-serif italic font-normal text-sm text-[#d6ccff]">Hours</em></span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-[2px] mb-2">Infrastructure</span>
              <span className="text-lg font-medium text-white tracking-[-0.03em]">AWS HI-PERF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
