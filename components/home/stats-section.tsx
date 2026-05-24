const stats = [
  { label: "Active Sites & Basins", value: "3" },
  { label: "Avg Water Recovered", value: "92%" },
  { label: "Telemetry Sensors Linked", value: "4" },
  { label: "Model Confidence", value: "96%" }
]

export function StatsSection() {
  return (
    <section className="py-20 border-y border-white/10 bg-[#14101f]">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => {
            // Separate numbers from units (e.g. "92" and "%") to style units in italics
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
                    <span className="text-3xl ml-1 text-[#d6ccff] font-normal">
                      {unit}
                    </span>
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
