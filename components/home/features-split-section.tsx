import Link from "next/link"

const capabilities = [
  {
    title: "Hydrology &",
    italicTitle: "extraction.",
    subtitle: " Hydrological Infrastructure",
    description: "Critical mineral operations rely on water systems for extraction, processing, recovery, and long-term operational continuity. Geodel delivers real-time visibility across resource-constrained sites.",
    image: "/images/geological/site_drilling.jpeg",
    points: [
      { name: "Hydrological Monitoring", desc: "Real-time telemetry tracking water flows, quality, and storage levels." },
      { name: "Water Balance Intelligence", desc: "Integrating recycling rates and process usage to optimize water efficiency." },
      { name: "Groundwater Analytics", desc: "Modeling aquifer behavior, recharge conditions, and drawdown trends." }
    ],
    tag: "HYDR-EXTRACT-v4"
  },
  {
    title: "Tailings &",
    italicTitle: "optimization.",
    subtitle: "Operational Security",
    description: "Geodel delivers the intelligence infrastructure that connects hydrology, mineral systems, and operational decision-making to strengthen safety and operational continuity.",
    image: "/images/geological/volcanic_wireframe.png",
    points: [
      { name: "Tailings Intelligence", desc: "Real-time monitoring of seepage, water storage, and recovery opportunities." },
      { name: "Predictive Forecasting", desc: "AI-assisted risk modeling and hydrological stress forecasting." },
      { name: "Resource Optimization Insights", desc: "Actionable metrics to maximize extraction and recovery performance." }
    ],
    tag: "TAIL-OPTIM-X"
  }
]

export function FeaturesSplitSection() {
  return (
    <section className="py-16 sm:py-32 bg-[#14101f] relative overflow-hidden border-b border-white/5">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        {/* Eyebrow and Section Header */}
        <div className="max-w-3xl mb-24">
          <div className="text-[10px] font-mono text-[#8B6CFF] uppercase tracking-[0.25em] mb-4">THE FUTURE OF CRITICAL MINERALS</div>
          <h2 className="h2 text-white leading-tight">
            Water Intelligence Powers Modern <span className="text-[#d6ccff]">Mineral Infrastructure.</span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-32 lg:space-y-48">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`flex flex-col lg:flex-row items-stretch gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Column */}
              <div className="flex-1 w-full flex items-center">
                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 group shadow-2xl">
                  <img
                    src={cap.image}
                    alt={`${cap.title} ${cap.italicTitle}`}
                    className="w-full h-full object-cover filter saturate-[0.85] transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14101f]/75 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Media Caption Chip */}
                  <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-[rgba(14,11,31,0.7)] backdrop-blur-md px-4 py-2 flex items-center gap-2 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]" />
                    {/* <span className="font-mono text-[9px] uppercase tracking-widest text-white/60">NODE // {cap.tag}</span> */}
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <div className="space-y-6">
                  {/* Eyebrow Label */}
                  <span className="eyebrow">{cap.subtitle}</span>

                  {/* Signature Display Heading */}
                  <h2 className="h2 text-white leading-tight">
                    {cap.title}{" "}
                    <span className="text-[#d6ccff]">{cap.italicTitle}</span>
                  </h2>

                  {/* Lede style paragraph */}
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {cap.description}
                  </p>

                  {/* Horizontal Rule Divided Feature List */}
                  <div className="divide-y divide-white/10 border-y border-white/10 py-2 mt-8">
                    {cap.points.map((point) => (
                      <div key={point.name} className="py-4 flex items-baseline">
                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 flex-1">
                          <span className="text-[17px] font-semibold text-white tracking-tight">
                            {point.name}
                          </span>
                          <span className="text-xs text-white/50 font-normal leading-normal">
                            {point.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore capability action */}
                <div className="pt-8">
                  <Link
                    href="/solutions"
                    className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[2px] text-[#d6ccff] hover:text-white transition-colors"
                  >
                    Explore Solutions <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
