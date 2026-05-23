import Link from "next/link"

const capabilities = [
  {
    title: "Geothermal field",
    italicTitle: "mapping.",
    subtitle: "02 — High-resolution interpretation",
    description: "Our proprietary engine processes raw field measurements into actionable 3D stratigraphic maps. We identify hotspots with 92% confidence by correlating thermal gradients with fluid flow dynamics.",
    image: "/images/geological/site_drilling.png",
    points: [
      { name: "Thermal Gradient Analysis", desc: "Correlating deep heat flow data with structural trends." },
      { name: "Fluid Migration Pathing", desc: "Simulating reservoir dynamics and permeability zones." },
      { name: "Fracture Network Modeling", desc: "Generating high-fidelity discrete fracture networks." }
    ],
    tag: "GEO-FIELD-v4"
  },
  {
    title: "Seismic data",
    italicTitle: "synthesis.",
    subtitle: "03 — Deep structural insights",
    description: "Transform complex seismic arrays into unified structural volumes. Geodel's synthesis layer removes noise and highlights stratigraphic traps that standard processing misses.",
    image: "/images/geological/volcanic_wireframe.png",
    points: [
      { name: "Automated Fault Tracking", desc: "Identifying fault slip structures through machine learning." },
      { name: "Velocity Model Inversion", desc: "Refining rock density estimates from wave reflections." },
      { name: "Subsurface Target Selection", desc: "Optimizing drilling routes for geothermal or gas traps." }
    ],
    tag: "SEIS-SYNTH-X"
  }
]

export function FeaturesSplitSection() {
  return (
    <section className="py-32 bg-[#14101f] relative overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-8">
        <div className="space-y-48">
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
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/60">NODE // {cap.tag}</span>
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
                    <em>{cap.italicTitle}</em>
                  </h2>
                  
                  {/* Lede style paragraph */}
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {cap.description}
                  </p>

                  {/* Horizontal Rule Divided Feature List */}
                  <div className="divide-y divide-white/10 border-y border-white/10 py-2 mt-8">
                    {cap.points.map((point, pIndex) => (
                      <div key={point.name} className="py-4 flex gap-6 items-baseline">
                        <span className="text-[11px] font-mono text-[#d6ccff] w-8">
                          {`0${pIndex + 1}`}
                        </span>
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
                    href="/platform" 
                    className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[2px] text-[#d6ccff] hover:text-white transition-colors"
                  >
                    Explore Capability <span className="transition-transform group-hover:translate-x-1">→</span>
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
