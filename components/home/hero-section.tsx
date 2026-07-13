"use client"

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
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-8 flex-1 flex flex-col justify-between pt-28 sm:pt-40 md:pt-48 pb-8 sm:pb-12">
        {/* Top content: prefix tag, heading, and description/buttons */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Tagline prefix */}
          <div className="text-[#c2b29f] font-mono text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-8">

          </div>

          {/* Main Heading using signature editorial display italic */}
          <h1 className="display text-white mb-6 sm:mb-12 w-full text-balance">
            Hydrological Intelligence
            <span className="block mt-1 sm:mt-3">
              for <span className="text-[#d6ccff]">critical minerals.</span>
            </span>
          </h1>

          {/* Row with description and buttons */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16 w-full">
            <div className="max-w-xl">
              <p className="lede">
                Geodel provides real-time hydrological intelligence for critical mineral operations, enabling mining companies to monitor, predict, and optimize the water systems that drive extraction, recovery, and operational performance.
              </p>
              <p className="mt-3 text-[11px] sm:text-xs font-mono text-white/40 uppercase tracking-[1px] hidden sm:block">
                Built for lithium, copper, rare earths, graphite, uranium, and energy transition mineral infrastructure.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Request Demo Button */}
              <Link
                href="https://calendly.com/geodel543/30min"
                className="rounded-[20px] bg-[#8B6CFF] hover:bg-[#7c5eff] text-white text-sm font-semibold px-5 py-3 flex items-center gap-2 transition-all duration-300 shadow-md"
              >
                Request a demo <span className="text-sm">→</span>
              </Link>

              {/* Explore Platform Button */}
              <Link
                href="https://goodel-dashboard.vercel.app/login"
                className="rounded-[20px] border border-white/22 bg-white/4 hover:bg-white/8 text-white text-sm font-semibold px-5 py-3 flex items-center gap-2 transition-all duration-300"
              >
                Explore the platform
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Info Row */}
        <div className="mt-10 sm:mt-16 w-full">
          {/* Divider line */}
          <div className="w-full h-px bg-white/10 mb-4 sm:mb-6" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">



          </div>
        </div>
      </div>
    </section>
  )
}
