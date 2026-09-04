"use client"

import { useState } from "react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    label: "Subsurface survey & site characterisation",
    body: "Geophysics, hydrogeology and existing well data build a model of the ground before capital is committedgeology, groundwater and thermal conductivity.",
  },
  {
    label: "Borefield & loop design",
    body: "Building load profiles are matched against subsurface capacity to place boreholes, size the loop field and design the exchange strategy.",
  },
  {
    label: "Drilling & borehole construction",
    body: "Instrumented drilling with continuous logging, so each borehole informs the next and field time falls across the programme.",
  },
  {
    label: "Heat pump integration & commissioning",
    body: "Distributed water-source heat pumps, hydronic distribution and controls brought online building by building with measured performance.",
  },
  {
    label: "Network operations & optimisation",
    body: "Loop temperatures, seasonal balance and heat-pump performance monitored continuously, then tuned across the network.",
  },
]

export function ProcessAccordionSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,34px)] pt-[104px] sm:pt-[110px] pb-[100px]">
      <div className="text-xs font-medium text-[#9A968E] mb-[34px]">Seamless journey</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[70px] items-start">
        <Reveal>
          <h2 className="m-0 font-[family-name:var(--font-poppins)] font-semibold text-[28px] sm:text-[34px] leading-[1.15] tracking-[-0.03em] max-w-[420px] text-[#0B1211]">
            From first survey to a working thermal network
          </h2>
          <p className="mt-[18px] mb-[34px] text-[13.5px] leading-[1.65] text-[#9A968E] max-w-[420px]">
            A staged process designed to take uncertaintyand costout of the ground before capital is
            committed.
          </p>
          <div>
            {steps.map((step, i) => {
              const isOpen = open === i
              return (
                <div key={step.label} className="border-t border-[#E4E1DB]">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex items-center gap-[18px] w-full py-5 px-0.5 border-0 bg-transparent text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6D3BD4] focus-visible:outline-offset-2"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs text-[#ABA7A0] min-w-[30px]">{`(0${i + 1})`}</span>
                    <span
                      className="flex-1 text-[15px] font-medium"
                      style={{ color: isOpen ? "#0B1211" : "#4B5563" }}
                    >
                      {step.label}
                    </span>
                    <span className="text-[17px] text-[#6B7280]">{isOpen ? "–" : "+"}</span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-[320ms] ease-in-out"
                    style={{ maxHeight: isOpen ? "200px" : "0px" }}
                  >
                    <p className="m-0 mb-5 ml-12 text-[13px] leading-[1.65] text-[#6B7280] max-w-[400px]">
                      {step.body}
                    </p>
                  </div>
                </div>
              )
            })}
            <div className="border-t border-[#E4E1DB]" />
          </div>
        </Reveal>
        <Reveal delay={120} className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] rounded-[18px] overflow-hidden bg-[#DDD9D2]">
          <Image src="/images/predictive_resource.png" alt="Subsurface characterisation" fill className="object-cover" />
        </Reveal>
      </div>
    </section>
  )
}
