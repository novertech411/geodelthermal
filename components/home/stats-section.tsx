const stats = [
  { label: "Basins Analyzed", value: "185+" },
  { label: "Successful Wells", value: "420k" },
  { label: "Data Processed", value: "1.2PB" },
  { label: "Prediction Accuracy", value: "94%" }
]

export function StatsSection() {
  return (
    <section className="py-20 border-y border-white/10 bg-[#14101f]">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => {
            // Separate numbers from units (e.g. "1.2" and "PB") to style units in Instrument Serif italics
            const match = stat.value.match(/^([\d.]+)(.*)$/)
            const number = match ? match[1] : stat.value
            const unit = match ? match[2] : ""

            return (
              <div key={stat.label} className="flex flex-col gap-3">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#d6ccff] uppercase">
                  {stat.label}
                </span>
                <h3 className="text-5xl sm:text-6xl font-medium tracking-[-0.04em] text-white">
                  {number}
                  {unit && (
                    <em className="text-3xl ml-1 font-serif italic text-[#d6ccff] font-normal">
                      {unit}
                    </em>
                  )}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
