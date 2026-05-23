import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#14101f] flex flex-col overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/hero-2.png')",
            backgroundPosition: "center 40%"
          }}
        />
        {/* Editorial wash: radial highlight + gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14101f]/60 via-[#14101f]/10 to-[#14101f]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14101f]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.15)] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-8 flex-1 flex flex-col justify-between pt-48 pb-12">
        {/* Top content: prefix tag, heading, and description/buttons */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Tagline prefix */}
          <div className="text-[#c2b29f] font-mono text-[11px] tracking-[0.3em] uppercase mb-8">
            01 – Subsurface Platform • V2.4
          </div>

          {/* Main Heading using signature editorial serif italic */}
          <h1 className="display text-white mb-16 max-w-4xl">
            See the earth
            <span className="block mt-3">
              <em>before you drill it.</em>
            </span>
          </h1>

          {/* Row with description and buttons */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16 w-full">
            <div className="max-w-xl">
              <p className="lede">
                A single platform for integrating geological surveys, modeling thermal gradients, and producing exploration-ready reports — used by teams working the world's hardest basins.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-row items-center gap-4">
              {/* Start Exploration Button */}
              <Link 
                href="/contact" 
                className="group flex items-center justify-between rounded-2xl bg-white text-[#14101f] hover:bg-white/95 px-6 py-4 w-44 transition-all duration-300 shadow-[0_8px_30px_rgba(255,255,255,0.05)]"
              >
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-wider text-[#14101f]/50 font-bold leading-none mb-1">Start</span>
                  <span className="text-sm font-extrabold text-[#14101f] leading-none">Exploration</span>
                </div>
                <span className="text-lg text-[#14101f] font-bold group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              {/* Watch Demo Button */}
              <Link 
                href="/platform" 
                className="group flex items-center justify-between rounded-2xl border border-white/22 bg-white/4 hover:bg-white/8 text-white px-6 py-4 w-44 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold leading-none mb-1">Watch</span>
                  <span className="text-sm font-extrabold text-white leading-none">demo</span>
                </div>
                {/* Spacer to match width alignment */}
                <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Info Row */}
        <div className="mt-16 w-full">
          {/* Divider line */}
          <div className="w-full h-px bg-white/10 mb-6" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">
            <div>LAT 48.21°N • LON 7.06°W</div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <span>SURVEY 042 / ACTIVE</span>
              <span>DEPTH 0-8000M</span>
              <span>CLASS A • GPU-ACCELERATED</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/60">
              SCROLL TO EXPLORE <span className="text-xs animate-bounce">↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
