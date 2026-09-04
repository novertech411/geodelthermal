import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function BentoSection() {
  return (
    <section id="technology" className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,34px)] pt-[104px] sm:pt-[110px]">
      <div className="text-xs font-medium text-[#9A968E] mb-[34px]">Who we are</div>
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] gap-8 md:gap-[60px] items-start">
        <Reveal>
          <h2 className="m-0 font-[family-name:var(--font-poppins)] font-semibold text-[28px] sm:text-[34px] leading-[1.15] tracking-[-0.03em] text-[#0B1211]">
            Built for building-scale geothermal
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="m-0 text-lg sm:text-[21px] leading-[1.5] text-[#9A968E] text-pretty">
            <span className="text-[#0B1211]">
              Geodel works the full geothermal stacksubsurface intelligence, drilling, ground exchange, thermal
              storage and network operations.
            </span>{" "}
            The physics is proven; deployment is the problem. Every system we design is engineered for repeatability
            across real American building stock, from a single multifamily retrofit to a shared campus borefield.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-14">
        {/* Card 1 */}
        <Reveal className="relative rounded-2xl overflow-hidden bg-[#EDEBE6] min-h-[250px] p-[18px] flex flex-col">
          <div className="flex justify-between items-center text-[10.5px] font-semibold tracking-[.05em] uppercase text-[#6B7280]">
            <span className="flex w-[26px] h-[26px] rounded-lg bg-white items-center justify-center text-[#0B1211]">
              ◇
            </span>
            <span>Borehole design</span>
          </div>
          <div className="relative w-full h-[118px] rounded-[10px] my-3.5 mt-3.5 mb-auto overflow-hidden">
            <Image src="/images/groundwater_aquifer.png" alt="Borefield model" fill className="object-cover" />
          </div>
          <div className="font-[family-name:var(--font-poppins)] font-semibold text-[26px] tracking-[-0.02em] text-[#0B1211]">
            600 ft
          </div>
          <div className="text-[11.5px] text-[#6B7280]">typical loop depth*</div>
        </Reveal>

        {/* Card 2 */}
        <Reveal delay={80} className="rounded-2xl bg-[#6D3BD4] text-white min-h-[250px] p-[18px] flex flex-col">
          <div className="flex justify-between items-start gap-2.5">
            <div className="font-[family-name:var(--font-poppins)] font-semibold text-[15px] leading-[1.25] max-w-[90px]">
              System efficiency
            </div>
            <span className="flex w-[26px] h-[26px] rounded-full bg-white/[0.22] items-center justify-center text-xs flex-none">
              ✳
            </span>
          </div>
          <div className="mt-auto text-[11px] text-white/[0.78]">of delivered heat from the ground</div>
          <div className="font-[family-name:var(--font-poppins)] font-semibold text-[46px] leading-none tracking-[-0.035em]">
            4.1 COP*
          </div>
          <div className="inline-flex self-start gap-1.5 items-center mt-3.5 px-3 py-[7px] rounded-full bg-white/[0.18] text-[11px] font-semibold">
            ＋ Live loop telemetry
          </div>
        </Reveal>

        {/* Card 3 */}
        <Reveal delay={160} className="relative rounded-2xl overflow-hidden bg-[#DDD9D2] min-h-[250px]">
          <Image src="/images/site_drilling.jpeg" alt="Drilling crew on site" fill className="object-cover" />
        </Reveal>

        {/* Card 4 */}
        <Reveal delay={240} className="rounded-2xl bg-[#DCE5E2] min-h-[250px] p-[18px] flex flex-col justify-between">
          <div>
            <div className="text-[10.5px] font-semibold tracking-[.05em] uppercase text-[#4E6963]">
              Retrofit performance
            </div>
            <div className="font-[family-name:var(--font-poppins)] font-semibold text-[27px] leading-[1.15] tracking-[-0.025em] mt-2 text-[#0B1211]">
              Up to 68%
              <br />
              lower heating energy*
            </div>
          </div>
          <div className="flex justify-between items-end p-3.5 rounded-xl bg-white/[0.66]">
            <div>
              <div className="text-[10px] font-semibold tracking-[.05em] uppercase text-[#6B7280]">Loop field</div>
              <div className="text-xs font-semibold text-[#1F9D6B]">Active</div>
            </div>
            <div className="font-[family-name:var(--font-poppins)] font-semibold text-[22px] tracking-[-0.02em] text-[#0B1211]">
              54.3°F
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mt-3.5 text-[11.5px] text-[#ABA7A0]">
        * Design targets from modelling and pilot instrumentationconfirm before publishing.
      </div>
    </section>
  )
}
