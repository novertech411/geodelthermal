"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

const tabs = [
  {
    label: "Universities & campuses",
    title: "Universities & campuses",
    blurb:
      "Dense clusters of buildings with year-round simultaneous heating and cooling loadsthe strongest case for a shared borefield. We characterise the ground first, then size one loop field to serve many buildings.",
    img: "/images/geothermal/workforce.png",
  },
  {
    label: "Multifamily housing",
    title: "Multifamily housing",
    blurb:
      "Retrofit boilers and window units out, distributed water-source heat pumps in. One ambient loop per building, tenant-level control, and no combustion left on site.",
    img: "/images/insights_banner.png",
  },
  {
    label: "Municipal & institutional",
    title: "Municipal & institutional",
    blurb:
      "Schools, libraries, hospitals and civic buildings with long asset horizons. Predictable operating cost, decades of service life, and compliance with local emissions rules.",
    img: "/images/predictive_resource.png",
  },
  {
    label: "Commercial & mixed-use",
    title: "Commercial & mixed-use",
    blurb:
      "Offices and mixed-use blocks where cooling load dominates. Heat rejected by one use becomes heat delivered to another across a connected thermal network.",
    img: "/images/geothermal/philly_network.png",
  },
]

export function SolutionsTabsSection() {
  const [tab, setTab] = useState(0)
  const active = tabs[tab]

  return (
    <section className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,34px)] pt-[104px] sm:pt-[110px]">
      <div className="text-xs font-medium text-[#9A968E] mb-[34px]">Solutions</div>
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,.85fr)] gap-8 md:gap-[60px] items-start">
        <Reveal>
          <h2 className="m-0 font-[family-name:var(--font-poppins)] font-semibold text-[28px] sm:text-[34px] leading-[1.15] tracking-[-0.03em] text-[#0B1211]">
            Geothermal solutions for every building type
          </h2>
        </Reveal>
        <Reveal delay={80} className="md:justify-self-end">
          <p className="mt-1.5 md:mt-0 text-[13.5px] leading-[1.6] text-[#9A968E] max-w-[340px]">
            We match each borefield and loop design to the real thermal profile of the building and the geology
            under it.
          </p>
        </Reveal>
      </div>

      <Reveal
        delay={120}
        className="mt-11 grid grid-cols-1 md:grid-cols-2 gap-8 p-5 rounded-[22px] bg-white items-stretch shadow-[0_24px_60px_rgba(11,18,17,.06)]"
      >
        <div className="relative w-full min-h-[380px] rounded-2xl overflow-hidden bg-[#DDD9D2]">
          <Image src={active.img} alt={active.title} fill className="object-cover" />
        </div>
        <div className="flex flex-col md:pr-[22px] md:py-[22px]">
          <h3 className="m-0 font-[family-name:var(--font-poppins)] font-semibold text-[27px] tracking-[-0.025em] text-[#0B1211]">
            {active.title}
          </h3>
          <p className="mt-3 text-[13.5px] leading-[1.65] text-[#6B7280] max-w-[380px]">{active.blurb}</p>
          <Link
            href="/contact"
            className="self-start mt-[22px] px-5 py-3 rounded-[9px] bg-[#6D3BD4] text-white text-[13px] font-semibold hover:bg-[#5628B8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6D3BD4] focus-visible:outline-offset-2"
          >
            Get a feasibility study
          </Link>
          <div className="mt-auto pt-[34px] flex flex-col">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setTab(i)}
                className="flex items-center justify-between gap-4 w-full py-[17px] px-1 border-0 border-t border-[#EDEBE6] bg-transparent text-[13.5px] text-left cursor-pointer transition-colors hover:text-[#6D3BD4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6D3BD4] focus-visible:outline-offset-2"
                style={{ color: i === tab ? "#6D3BD4" : "#0B1211" }}
              >
                <span>{t.label}</span>
                <span className="text-[15px] text-[#ABA7A0]">›</span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
