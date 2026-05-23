import { Database, Cpu, Eye, FileOutput } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamlessly combine geological surveys, well logs, seismic data, and more into a single coherent dataset.",
    tag: "ETL-ENGINE"
  },
  {
    icon: Cpu,
    title: "Geothermal Modeling",
    description: "Build and refine subsurface models using machine learning and geostatistical methods.",
    tag: "ML-KERNEL"
  },
  {
    icon: Eye,
    title: "Structural Interpretation",
    description: "Visualize complex 3D structures and identify key features with interactive tools.",
    tag: "RTX-VIEW"
  },
  {
    icon: FileOutput,
    title: "Automated Reporting",
    description: "Generate comprehensive reports, maps, and recommendations ready for stakeholders.",
    tag: "O-PROCESS"
  },
]

export function PlatformSection() {
  return (
    <section className="py-32 bg-[#14101f] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="mx-auto max-w-[1360px] px-8 relative z-10">
        <div className="mb-16">
          <span className="eyebrow mb-4">04 — Infrastructure</span>
          <h2 className="h2 text-white leading-tight">
            One unified{" "}
            <em>data platform.</em>
          </h2>
          <p className="lede mt-6">
            Everything you need to understand and act on subsurface data, unified in a single powerful system.
          </p>
        </div>

        {/* 4-Card Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-[28px] bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.06)] border border-white/10 rounded-[12px] transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Head */}
              <div className="flex items-center justify-between mb-8">
                {/* 40x40 Icon Badge */}
                <div className="w-10 h-10 rounded-lg bg-[rgba(139,108,255,0.18)] flex items-center justify-center border border-white/10">
                  <feature.icon className="h-5 w-5 text-[#d6ccff]" />
                </div>
                <span className="font-mono text-[10px] tracking-[1.5px] text-white/40 uppercase">
                  {feature.tag}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="text-[19px] font-medium tracking-[-0.015em] text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-[14.5px] text-white/55 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      
        {/* Technical Showcase */}
        <div className="mt-20">
          <div className="border border-white/10 bg-[rgba(255,255,255,0.04)] rounded-[24px] p-[28px] md:p-[56px] shadow-2xl">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Image Section */}
              <div className="lg:col-span-3">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <img 
                    src="/images/geological/seismic_viz.png" 
                    alt="Seismic Data Visualization" 
                    className="w-full h-full object-cover filter saturate-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14101f]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Glowing Status badge */}
                  <div className="absolute top-6 left-6 rounded-full border border-white/10 bg-[rgba(14,11,31,0.7)] backdrop-blur-md px-4 py-2 flex items-center gap-2 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/60">SYS-NODE // RTX-VIEW</span>
                  </div>
                </div>
              </div>

              {/* Showcase Specifications */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-white mb-4">
                    High-Fidelity{" "}
                    <span className="block mt-1">
                      <em>Seismic Interpretation</em>
                    </span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Our platform processes raw seismic datasets into high-resolution 3D stratigraphic models. Identify fault lines, sediment distributions, and geothermal hotspots with confidence.
                  </p>
                </div>
                
                {/* 4 Spec Tiles */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "RESOLUTION", value: "2.4m / Pixel" },
                    { label: "DEPTH_RANGE", value: "0 - 8000m" },
                    { label: "PROCESSING", value: "GPU-ACCELERATED" },
                    { label: "ACCURACY", value: "CLASS-A" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-lg bg-[rgba(255,255,255,0.02)] border border-white/5">
                      <div className="text-[9px] font-mono text-white/30 uppercase tracking-[1.5px] mb-1.5">
                        {stat.label}
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
