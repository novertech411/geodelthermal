import StatusBadge from "@/components/StatusBadge"

const stats = [
  { label: "Basins Analyzed", value: "185+" },
  { label: "Successful Wells", value: "420k" },
  { label: "Data Processed", value: "1.2PB" },
  { label: "Prediction Accuracy", value: "94%" }
]

export function StatsSection() {
  return (
    <section className="py-32 border-y border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-4 p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
              <h3 className="text-5xl sm:text-6xl font-bold tracking-tighter text-foreground">
                {stat.value}
              </h3>
              <div className="flex justify-center">
                <StatusBadge label="METRIC" value={stat.label} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
