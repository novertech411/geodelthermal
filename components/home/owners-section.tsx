import Link from "next/link"
import { Reveal } from "@/components/reveal"

export function OwnersSection() {
  return (
    <section className="bg-[#F4F0FC] mt-[104px] pt-24 pb-[74px]">
      <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,34px)] grid grid-cols-1 md:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] gap-10 md:gap-[70px] items-start">
        <Reveal>
          <span className="inline-block px-3.5 py-[7px] rounded-full border border-[#C9B8EE] text-[10.5px] font-semibold tracking-[.1em] uppercase text-[#4C1D95]">
            For building owners
          </span>
          <h2 className="mt-[22px] font-[family-name:var(--font-poppins)] font-semibold text-[32px] sm:text-[40px] leading-[1.14] tracking-[-0.035em] text-[#2E1065] text-balance">
            Underground infrastructure built for long-hold assets.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-[22px]">
          <Reveal delay={90} className="p-[34px] rounded-2xl bg-[#FBF9FF] border border-[#E6DDF9]">
            <h3 className="m-0 font-[family-name:var(--font-poppins)] font-semibold text-[22px] sm:text-[25px] leading-[1.28] tracking-[-0.025em] text-[#2E1065] max-w-[460px]">
              See what the ground under your building is worth.
            </h3>
            <p className="mt-3.5 text-[13.5px] leading-[1.65] text-[#5B5470] max-w-[480px]">
              We model geology, thermal conductivity and building load before anyone puts a rig on site — so
              borefield size, drilling risk and payback are known numbers rather than assumptions.
            </p>
            <Link
              href="/technology"
              className="inline-block mt-6 px-[22px] py-3 rounded-full border border-[#6D3BD4] text-[12.5px] font-semibold text-[#4C1D95] hover:bg-[#6D3BD4] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6D3BD4] focus-visible:outline-offset-2"
            >
              Explore the platform
            </Link>
          </Reveal>

          <Reveal delay={160} className="p-[34px] rounded-2xl bg-[#FBF9FF] border border-[#E6DDF9]">
            <h3 className="m-0 font-[family-name:var(--font-poppins)] font-semibold text-[22px] sm:text-[25px] leading-[1.28] tracking-[-0.025em] text-[#2E1065] max-w-[460px]">
              See how a shared loop changes a whole block.
            </h3>
            <p className="mt-3.5 text-[13.5px] leading-[1.65] text-[#5B5470] max-w-[480px]">
              Field deployments across campus, multifamily and municipal buildings in Philadelphia — each
              instrumented, reported, and designed to connect into a neighbourhood thermal network.
            </p>
            <Link
              href="#projects"
              className="inline-block mt-6 px-[22px] py-3 rounded-full border border-[#6D3BD4] text-[12.5px] font-semibold text-[#4C1D95] hover:bg-[#6D3BD4] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6D3BD4] focus-visible:outline-offset-2"
            >
              View field deployments
            </Link>
          </Reveal>
        </div>
      </div>
      <div className="mt-[72px] text-center font-[family-name:var(--font-poppins)] text-base sm:text-[17px] font-medium text-[#2E1065] px-6">
        Built with utilities, universities and developers across Philadelphia.
      </div>
    </section>
  )
}
