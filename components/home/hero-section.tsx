"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const heroCards = [
  {
    title: "Temple Campus Loop",
    blurb: "Shared borefield serving four academic buildings.",
    img: "/images/geothermal/philly_network.png",
  },
  {
    title: "Drilling Field Trial",
    blurb: "Pre-drill geology models cutting field time per borehole.",
    img: "/images/site_drilling.jpeg",
  },
  {
    title: "Seasonal Storage",
    blurb: "Balancing summer heat rejection against winter demand.",
    img: "/images/groundwater_aquifer.png",
  },
]

const navLinks = [
  { href: "#technology", label: "Technology", active: true },
  { href: "#networks", label: "Thermal Networks" },
  { href: "#projects", label: "Field Lab" },
  { href: "#impact", label: "About" },
]

export function HeroSection() {
  const [hero, setHero] = useState(0)
  const card = heroCards[hero]
  const index = `0${hero + 1} / 0${heroCards.length}`

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0B1211]">
      <Image
        src="/images/newhero.png"
        alt="Geodel geothermal drilling site"
        fill
        priority
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,18,17,.72) 0%, rgba(11,18,17,.28) 45%, rgba(11,18,17,.82) 100%)",
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between gap-8 px-[clamp(16px,4vw,34px)] py-[26px]">
        <Link
          href="/"
          className="flex items-center gap-0.5 text-white font-[family-name:var(--font-poppins)] font-semibold text-[19px] tracking-[-0.02em] rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2"
        >
          <Image src="/images/logo.png" alt="Geodel" width={26} height={26} className="object-contain" />
          eodel
        </Link>

        <nav className="hidden md:flex items-center gap-1 p-[5px] rounded-full bg-white/10 backdrop-blur-[14px] border border-white/[0.14]">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`px-4 py-[9px] rounded-full text-[13.5px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2 ${
                l.active ? "bg-[#F7F6F3] text-[#0B1211]" : "text-white/[0.82] hover:text-white hover:bg-white/[0.12]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://calendly.com/geodel543/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="px-[22px] py-3 rounded-full bg-[#6D3BD4] text-white text-[13.5px] font-semibold hover:bg-[#5628B8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2"
        >
          Book a Demo
        </a>
      </header>

      {/* Bottom row */}
      <div className="relative z-10 mt-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] items-end gap-8 lg:gap-12 px-[clamp(16px,4vw,34px)] pb-[clamp(20px,4vw,34px)]">
        <div className="max-w-[640px]">
          <h1 className="m-0 font-[family-name:var(--font-poppins)] font-semibold text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.04] tracking-[-0.035em] text-white text-balance">
            Power your buildings with the ground beneath them.
          </h1>
          <p className="mt-6 max-w-[460px] text-[15px] leading-[1.6] text-white/[0.74]">
            We design, drill and operate building-scale geothermal heating and coolingfrom subsurface survey to
            shared thermal networks. Built for dense American cities, starting in Philadelphia.
          </p>
          <div className="flex flex-wrap gap-3 mt-[30px]">
            <Link
              href="/technology"
              className="px-[26px] py-[15px] rounded-[10px] bg-[#6D3BD4] text-white text-sm font-semibold hover:bg-[#5628B8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2"
            >
              Explore the platform
            </Link>
            <Link
              href="/contact"
              className="px-[26px] py-[15px] rounded-[10px] bg-white/[0.12] border border-white/[0.22] text-white text-sm font-semibold hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2"
            >
              Book a demo
            </Link>
          </div>
        </div>

        {/* <div className="hidden lg:flex gap-2.5 items-stretch">
          <div className="flex-1 flex gap-3 p-3 rounded-[14px] bg-[#F7F6F3]/[0.94] backdrop-blur-[10px] min-w-0">
            <div className="relative w-[74px] h-[74px] rounded-[10px] overflow-hidden flex-none bg-[#DDD9D2]">
              <Image src={card.img} alt={card.title} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <div className="font-[family-name:var(--font-poppins)] font-semibold text-sm text-[#0B1211] truncate">
                {card.title}
              </div>
              <div className="text-[11.5px] leading-[1.4] text-[#6B7280]">{card.blurb}</div>
              <div className="flex items-center justify-between mt-auto text-[10.5px] font-semibold tracking-[.06em] uppercase text-[#0B1211]">
                <span>See project</span>
                <span className="text-[#9A968E]">{index}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-none">
            <button
              onClick={() => setHero((h) => (h + 1) % heroCards.length)}
              aria-label="Next project"
              className="w-[38px] h-[38px] rounded-[10px] border border-white/24 bg-white/[0.12] text-white text-[15px] hover:bg-[#6D3BD4] hover:border-[#6D3BD4] transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2"
            >
              →
            </button>
            <button
              onClick={() => setHero((h) => (h - 1 + heroCards.length) % heroCards.length)}
              aria-label="Previous project"
              className="w-[38px] h-[38px] rounded-[10px] border border-white/24 bg-white/[0.12] text-white text-[15px] hover:bg-[#6D3BD4] hover:border-[#6D3BD4] transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2"
            >
              ←
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}
