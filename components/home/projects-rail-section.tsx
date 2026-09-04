"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

const projects = [
  {
    title: "Philadelphia Urban Campus Thermal Grid",
    kicker: "District thermal network",
    badge: "Campus",
    img: "/images/geothermal/philly_network.png",
  },
  {
    title: "Subsurface Drilling Intelligence Trial",
    badge: "Field testing",
    blurb: "Cutting field time per borehole through pre-drill geology models.",
    img: "/images/site_drilling.jpeg",
    featured: true,
  },
  {
    title: "Seasonal Underground Thermal Storage",
    kicker: "Subsurface heat balancing",
    badge: "STES",
    img: "/images/groundwater_aquifer.png",
  },
  {
    title: "Multifamily Residential Loop Retrofit",
    kicker: "Connected heat pumps",
    badge: "Retrofit",
    img: "/images/insights_banner.png",
  },
  {
    title: "Philadelphia Drilling & HVAC Field Lab",
    kicker: "Trades training",
    badge: "Workforce",
    img: "/images/geothermal/workforce.png",
  },
]

export function ProjectsRailSection() {
  const railRef = useRef<HTMLDivElement>(null)

  const scrollRail = (dir: number) => {
    railRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" })
  }

  return (
    <section id="projects" className="bg-[#0B1211] text-white py-24">
      <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,34px)]">
        <div className="text-xs font-medium text-white/[0.44] mb-[26px]">Our work</div>
        <Reveal className="flex flex-wrap justify-between items-end gap-12">
          <h2 className="m-0 font-[family-name:var(--font-poppins)] font-semibold text-[28px] sm:text-[34px] leading-[1.15] tracking-[-0.03em] text-white">
            Real ground.
            <br />
            Measurable heat.
          </h2>
          <p className="m-0 max-w-[300px] text-[12.5px] leading-[1.6] text-white/[0.55]">
            Field deployments across dense commercial, academic and municipal buildings — each one instrumented and
            reported.
          </p>
        </Reveal>
      </div>

      <div
        ref={railRef}
        className="gd-scroll flex gap-3.5 mt-10 px-[clamp(16px,4vw,34px)] pb-[18px] overflow-x-auto scroll-smooth"
      >
        {projects.map((p) =>
          p.featured ? (
            <div
              key={p.title}
              className="relative flex-none w-[300px] sm:w-[340px] h-[330px] rounded-2xl overflow-hidden bg-[#EDEBE6]"
            >
              <Image src={p.img} alt={p.title} fill className="object-cover" />
              <span className="absolute top-3.5 right-3.5 flex w-[30px] h-[30px] rounded-full bg-[#6D3BD4] items-center justify-center text-[13px]">
                ↗
              </span>
              <div className="absolute bottom-3.5 left-3.5 right-3.5 p-4 rounded-xl bg-[#6D3BD4]">
                <span className="inline-block px-2.5 py-[5px] rounded-full bg-white/20 text-[10px] font-semibold">
                  {p.badge}
                </span>
                <div className="font-[family-name:var(--font-poppins)] font-semibold text-[17px] leading-[1.25] mt-2.5">
                  {p.title}
                </div>
                <div className="text-[11px] leading-[1.5] text-white/[0.82] mt-1.5">{p.blurb}</div>
              </div>
            </div>
          ) : (
            <div key={p.title} className="relative flex-none w-[300px] h-[330px] rounded-2xl overflow-hidden bg-[#1A2220]">
              <Image src={p.img} alt={p.title} fill className="object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(11,18,17,0) 40%, rgba(11,18,17,.85) 100%)" }}
              />
              <span className="absolute top-3.5 left-3.5 px-2.5 py-1.5 rounded-full bg-[#F7F6F3]/90 text-[#0B1211] text-[10.5px] font-semibold">
                {p.badge}
              </span>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-[10.5px] text-white/60">{p.kicker}</div>
                <div className="font-[family-name:var(--font-poppins)] font-semibold text-[17px] leading-[1.25] mt-1">
                  {p.title}
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      <div className="flex justify-center gap-2.5 mt-[22px]">
        <button
          onClick={() => scrollRail(-1)}
          aria-label="Scroll projects left"
          className="w-10 h-10 rounded-full border border-white/[0.22] bg-transparent text-white text-sm cursor-pointer hover:bg-white/[0.14] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2"
        >
          ←
        </button>
        <Link
          href="/thermal-networks"
          className="px-6 py-[13px] rounded-full bg-[#6D3BD4] text-white text-[13px] font-semibold hover:bg-[#5628B8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2"
        >
          View all projects
        </Link>
        <button
          onClick={() => scrollRail(1)}
          aria-label="Scroll projects right"
          className="w-10 h-10 rounded-full border border-white/[0.22] bg-transparent text-white text-sm cursor-pointer hover:bg-white/[0.14] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2"
        >
          →
        </button>
      </div>
    </section>
  )
}
