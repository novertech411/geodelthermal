"use client"

import { useState } from "react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

const quotes = [
  {
    text: "“Geodel’s subsurface intelligence and borefield optimisation significantly reduced our drilling field time and thermal loop installation costs.”",
    name: "Dr. Marcus Vance",
    role: "Director of Infrastructure & Campus Energy",
  },
  {
    text: "“They modelled the geology before anyone put a rig on site. That single step is what made the project financeable for us.”",
    name: "Placeholder attribution",
    role: "Owner’s representative, multifamily portfolio",
  },
]

export function TestimonialSection() {
  const [quote, setQuote] = useState(0)
  const active = quotes[quote]

  return (
    <Reveal
      as="section"
      className="max-w-[800px] mx-auto px-[clamp(16px,4vw,34px)] py-[80px] sm:py-[110px] text-center"
    >
      <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#DDD9D2] mx-auto">
        <Image src="/images/avatar.jpg" alt={active.name} fill className="object-cover" />
      </div>
      <p className="mt-[26px] font-[family-name:var(--font-poppins)] font-medium text-xl sm:text-[25px] leading-[1.42] tracking-[-0.02em] text-[#0B1211] text-pretty">
        {active.text}
      </p>
      <div className="mt-[22px] text-[12.5px] font-semibold text-[#0B1211]">{active.name}</div>
      <div className="text-[11.5px] text-[#9A968E]">{active.role}</div>
      <div className="flex justify-center gap-2.5 mt-[30px]">
        <button
          onClick={() => setQuote((q) => (q - 1 + quotes.length) % quotes.length)}
          aria-label="Previous testimonial"
          className="w-[38px] h-[38px] rounded-full border border-[#DAD6CF] bg-transparent text-sm cursor-pointer hover:border-[#0B1211] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0B1211] focus-visible:outline-offset-2"
        >
          ←
        </button>
        <button
          onClick={() => setQuote((q) => (q + 1) % quotes.length)}
          aria-label="Next testimonial"
          className="w-[38px] h-[38px] rounded-full border border-[#DAD6CF] bg-transparent text-sm cursor-pointer hover:border-[#0B1211] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0B1211] focus-visible:outline-offset-2"
        >
          →
        </button>
      </div>
    </Reveal>
  )
}
