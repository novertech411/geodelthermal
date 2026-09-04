import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function ImpactSection() {
  return (
    <section id="impact" className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,34px)] pt-[104px]">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,.7fr)] gap-8 md:gap-[60px] items-end">
        <Reveal>
          <h2 className="m-0 font-[family-name:var(--font-poppins)] font-semibold text-[28px] sm:text-[34px] leading-[1.15] tracking-[-0.03em] max-w-[420px] text-[#0B1211]">
            Driving measurable impact through the ground
          </h2>
        </Reveal>
        <Reveal delay={80} className="md:justify-self-end">
          <p className="m-0 text-[12.5px] leading-[1.6] text-[#9A968E] max-w-[300px]">
            What building owners get when heating and cooling move underground.
          </p>
        </Reveal>
      </div>

      <div className="mt-[54px]">
        <Reveal
          as="div"
          className="grid grid-cols-1 sm:grid-cols-[60px_minmax(0,220px)_minmax(0,1fr)_auto] gap-3 sm:gap-6 items-start sm:items-center py-7 border-t border-[#E4E1DB]"
        >
          <span className="text-xs text-[#ABA7A0]">(01)</span>
          <span className="text-[12.5px] text-[#9A968E]">Cost efficiency</span>
          <span className="font-[family-name:var(--font-poppins)] font-semibold text-[19px] tracking-[-0.02em] text-[#0B1211]">
            Lower operating expenses
          </span>
          <Link
            href="/technology"
            className="justify-self-start px-[18px] py-2.5 rounded-lg border border-[#DAD6CF] text-xs font-semibold text-[#0B1211] hover:border-[#0B1211] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0B1211] focus-visible:outline-offset-2"
          >
            Learn more
          </Link>
        </Reveal>

        <Reveal
          as="div"
          delay={60}
          className="grid grid-cols-1 sm:grid-cols-[60px_minmax(0,220px)_minmax(0,1fr)_auto] gap-3 sm:gap-6 items-start sm:items-center py-7 border-t border-[#E4E1DB]"
        >
          <span className="text-xs text-[#ABA7A0]">(02)</span>
          <span className="text-[12.5px] text-[#9A968E]">Decarbonisation</span>
          <span className="font-[family-name:var(--font-poppins)] font-semibold text-[19px] tracking-[-0.02em] text-[#0B1211]">
            Cut building carbon at the source
          </span>
          <Link
            href="/technology"
            className="justify-self-start px-[18px] py-2.5 rounded-lg bg-[#6D3BD4] text-white text-xs font-semibold hover:bg-[#5628B8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6D3BD4] focus-visible:outline-offset-2"
          >
            Learn more
          </Link>
        </Reveal>

        <Reveal
          as="div"
          delay={120}
          className="grid grid-cols-1 sm:grid-cols-[60px_minmax(0,220px)_minmax(0,1fr)] gap-3 sm:gap-6 items-start sm:items-center py-[34px] border-t border-[#E4E1DB]"
        >
          <div className="relative w-[60px] h-[60px] rounded-[10px] overflow-hidden bg-[#DDD9D2]">
            <Image src="/images/geothermal/workforce.png" alt="Geodel field crew" fill className="object-cover" />
          </div>
          <div className="font-[family-name:var(--font-poppins)] font-semibold text-[44px] sm:text-[62px] leading-none tracking-[-0.04em] whitespace-nowrap text-[#0B1211]">
            4,000+
          </div>
          <p className="m-0 text-[12.5px] leading-[1.65] text-[#6B7280] max-w-[460px]">
            Tons of CO₂ targeted for avoidance annually once pilot borefields and connected heat pumps reach full
            operation across Philadelphia.* Every ton comes out of heating and cooling — the largest single load in
            most buildings.
          </p>
        </Reveal>

        <Reveal
          as="div"
          delay={180}
          className="grid grid-cols-1 sm:grid-cols-[60px_minmax(0,220px)_minmax(0,1fr)_auto] gap-3 sm:gap-6 items-start sm:items-center py-7 border-t border-b border-[#E4E1DB]"
        >
          <span className="text-xs text-[#ABA7A0]">(03)</span>
          <span className="text-[12.5px] text-[#9A968E]">Asset value</span>
          <span className="font-[family-name:var(--font-poppins)] font-semibold text-[19px] tracking-[-0.02em] text-[#0B1211]">
            Increase property value
          </span>
          <Link
            href="/technology"
            className="justify-self-start px-[18px] py-2.5 rounded-lg border border-[#DAD6CF] text-xs font-semibold text-[#0B1211] hover:border-[#0B1211] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0B1211] focus-visible:outline-offset-2"
          >
            Learn more
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
