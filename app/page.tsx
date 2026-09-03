"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  ChevronRight,
  Plus,
  Minus,
  CheckCircle2,
  ChevronLeft,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Activity,
  Layers,
  Wrench,
  Building2,
  Compass,
} from "lucide-react"

// Services Data for Accordion Section (Adapted to "From the borehole to the building" Geothermal Stack)
const stackServicesData = [
  {
    id: "01",
    title: "Subsurface Intelligence & Site Characterization",
    desc: "We don't want to install geothermal blind. We use geophysics, hydrogeology, sensors, and data analytics to understand the ground before capital is committed.",
    image: "/images/predictive_resource.png",
    features: [
      "Characterize geology and groundwater before major drilling begins",
      "Smarter borefield placement and thermal loop design",
      "Connect subsurface performance with building energy demand",
    ],
  },
  {
    id: "02",
    title: "Advanced Geothermal Drilling & Borehole Construction",
    desc: "The hole in the ground is geothermal's biggest opportunity for cost reduction. Combining field instrumentation, drilling data, and engineering to make drilling predictable.",
    image: "/images/geothermal/hero_drilling.png",
    features: [
      "Smarter site characterization before the rig arrives",
      "Real-time drilling data capture during construction",
      "Lower installed cost per unit of thermal capacity",
    ],
  },
  {
    id: "03",
    title: "Ground Exchange & Borehole Heat Exchangers",
    desc: "The ground loop is not buried plumbing — it is long-life thermal infrastructure. High-performance loop architecture, manifolds, and flow control.",
    image: "/images/groundwater_aquifer.png",
    features: [
      "High thermal conductivity grout and materials",
      "Integrated sensor array for flow and pressure monitoring",
      "Optimized heat transfer between ground and building loops",
    ],
  },
  {
    id: "04",
    title: "Thermal Storage & Seasonal Energy Balancing",
    desc: "Thermal energy does not always need to be used when produced. Underground storage shifts useful heat across hours and seasons to balance building loads.",
    image: "/images/solutions_banner.png",
    features: [
      "Seasonal Thermal Energy Storage (STES) underground",
      "Store excess summer heat for winter heating delivery",
      "Strengthen district thermal network stability",
    ],
  },
  {
    id: "05",
    title: "Integrated Heat Pumps & Network Operations",
    desc: "Developing the heat-pump layer around the realities of American buildings: retrofits, multifamily housing, schools, universities, and commercial campuses.",
    image: "/images/geothermal/hardware.png",
    features: [
      "Compact, connected heat-pump equipment",
      "Multi-building shared loop load balancing",
      "24/7 telemetry monitoring and operation analytics",
    ],
  },
]

// Portfolio Case Studies Data (Reflecting Geodel Infrastructure Deployments)
const portfolioProjects = [
  {
    title: "Philadelphia Urban Campus Thermal Grid",
    category: "District Thermal Network",
    image: "/images/geothermal/philly_network.png",
    aspect: "col-span-1 md:col-span-7",
    tag: "Campus Infrastructure",
  },
  {
    title: "Subsurface Drilling Intelligence Field Trial",
    category: "Borehole Optimization",
    image: "/images/site_drilling.jpeg",
    aspect: "col-span-1 md:col-span-5",
    tag: "Field Testing",
  },
  {
    title: "Seasonal Underground Thermal Storage",
    category: "Subsurface Heat Balancing",
    image: "/images/groundwater_aquifer.png",
    aspect: "col-span-1 md:col-span-5",
    tag: "STES Technology",
  },
  {
    title: "Multifamily Residential Loop Retrofit",
    category: "Connected Heat Pumps",
    image: "/images/insights_banner.png",
    aspect: "col-span-1 md:col-span-7",
    tag: "Retrofit Project",
  },
]

// Testimonials / Quotes Data
const testimonials = [
  {
    quote:
      "Geodel's subsurface intelligence and borefield optimization significantly reduced our drilling field time and thermal loop installation costs.",
    name: "Dr. Marcus Vance",
    role: "Director of Infrastructure & Campus Energy",
    avatar: "/images/avatar.jpg",
  },
  {
    quote:
      "Connecting multiple university buildings to a shared ambient geothermal network transformed our campus sustainability roadmap.",
    name: "Sarah Jenkins",
    role: "VP Facilities & Sustainability Operations",
    avatar: "/images/placeholder-user.jpg",
  },
  {
    quote:
      "The Geodel Academy hands-on training gave our HVAC technicians and drillers the exact field skills needed to execute ground-loop installations efficiently.",
    name: "David Reynolds",
    role: "Operations Partner, Mid-Atlantic Energy Trades",
    avatar: "/images/avatar.jpg",
  },
]

// Client / Partner Logos for Ticker
const clientLogos = [
  { name: "TEMPLE UNIVERSITY", text: "TEMPLE UNIV" },
  { name: "PENNSYLVANIA POWER", text: "PA ENERGY" },
  { name: "PHILLY METRO", text: "PHILLY METRO" },
  { name: "DRILLING CORP", text: "EAST DRILLING" },
  { name: "HVAC TRADES", text: "HVAC TRADES" },
  { name: "US ENERGY LAB", text: "US CLEAN LAB" },
]

export default function HomePage() {
  const [activeAccordion, setActiveAccordion] = useState<string>("01")
  const [isYearly, setIsYearly] = useState(false)
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  const handlePrevTestimonial = () => {
    setTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNextTestimonial = () => {
    setTestimonialIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-white text-[#14101f] selection:bg-[#8B6CFF] selection:text-white font-sans overflow-x-hidden">
      {/* HERO SECTION - Full-Bleed Clean Landscape */}
      <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between bg-[#0c0a14] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/newhero.png"
            alt="Geodel Geothermal Drilling and Subsurface Infrastructure"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Subtle Dark Shade Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>

        {/* SECTION A: Navigation Header */}
        <Navbar />

        {/* Hero Main Copy Block: 2 Major Text Elements */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 pt-36 sm:pt-44 pb-20 flex-1 flex flex-col justify-center">
          <div className="max-w-4xl space-y-6">
            {/* Major Text 1: Big Headline */}
            <h1 className="text-8xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.03]">
            Geodel<br></br> Geothermal.
            </h1>

            {/* Major Text 2: Subtitle Description */}
            <p className="text-lg sm:text-2xl text-white/90 max-w-2xl leading-relaxed font-normal pt-2">
              Building the next generation of geothermal heating and cooling infrastructure in America.
            </p>

            {/* Action Links */}
            <div className="pt-8 flex flex-wrap items-center gap-8">
              <Link
                href="/technology"
                className="group inline-flex items-center gap-2 text-white font-semibold text-lg pb-1 border-b-2 border-white hover:border-[#8B6CFF] transition-all"
              >
                Explore The Platform
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 opacity-90 text-[#8B6CFF]" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-white font-semibold text-lg pb-1 border-b-2 border-white hover:border-[#8B6CFF] transition-all"
              >
                Book a Demo
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 opacity-90 text-[#8B6CFF]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PERSISTENT BRAND STRIP */}
      <section className="bg-[#14101f] text-white py-6 px-6 sm:px-12 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#D6CCFF] uppercase font-bold">
            WE STARTED UNDERGROUND.
          </p>
          <p className="text-sm sm:text-base text-white/90 font-medium">
            The future of heating and cooling is under our feet.
          </p>
        </div>
      </section>

      {/* PARTNER / CLIENT LOGOS BANNER TICKER */}
      <section className="bg-[#FAF9F5] border-b border-gray-200 py-8 px-6 sm:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-8 opacity-80 grayscale hover:grayscale-0 transition-all">
          {clientLogos.map((client) => (
            <div key={client.name} className="flex items-center gap-2">
              <span className="font-extrabold tracking-tighter text-xl sm:text-2xl text-[#14101f]/80 uppercase">
                {client.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT BODY */}
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto space-y-24 sm:space-y-32">
        {/* SECTION 1: Geothermal works. Deployment is the problem. */}
        <section id="about" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF] font-semibold">INFRASTRUCTURE RECOVERY</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14101f] tracking-tight">
              Geothermal works. Deployment is the problem.
            </h2>
            <p className="text-base sm:text-lg text-[#14101f]/80 leading-relaxed">
              The physics is proven. The challenge is turning geothermal into infrastructure that can be deployed repeatedly across American buildings and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Drilling",
                desc: "Reduce uncertainty, field time and borehole cost across complex ground geology.",
                icon: Activity,
              },
              {
                title: "Hardware",
                desc: "Improve ground exchange, heat-pump integration and total system performance.",
                icon: Wrench,
              },
              {
                title: "Networks",
                desc: "Move beyond one building at a time to shared underground thermal grids.",
                icon: Layers,
              },
              {
                title: "Workforce",
                desc: "Expand the number of skilled people capable of building and maintaining systems.",
                icon: Building2,
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[24px] bg-slate-50 border border-gray-200 flex flex-col justify-between min-h-[240px] group hover:border-[#8B6CFF]/50 transition-all duration-300 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#8B6CFF]/10 text-[#8B6CFF] flex items-center justify-center group-hover:bg-[#8B6CFF] group-hover:text-white transition-colors">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#14101f]">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-[#14101f]/70 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: From the borehole to the building (Pipeline & Stack Accordion) */}
        <section id="technology" className="rounded-[32px] bg-[#14101f] text-white border border-black/10 p-8 sm:p-14 lg:p-20 space-y-12 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#D6CCFF]">THE GEOTHERMAL STACK</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              From the borehole to the building.
            </h2>
            <p className="text-sm sm:text-base text-white/70">
              Geodel is working across the geothermal stack: subsurface intelligence, drilling, ground exchange, thermal storage, heat pumps and network operations.
            </p>

            {/* Stack Pipeline Steps */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D6CCFF] bg-white/5 py-3 px-6 rounded-full border border-white/10">
              <span>UNDERSTAND THE GROUND</span>
              <span>→</span>
              <span>DRILL</span>
              <span>→</span>
              <span>EXCHANGE</span>
              <span>→</span>
              <span>STORE</span>
              <span>→</span>
              <span>DELIVER</span>
            </div>
          </div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {stackServicesData.map((item) => {
              const isActive = activeAccordion === item.id

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-400 overflow-hidden ${
                    isActive
                      ? "bg-white/5 border-[#8B6CFF] shadow-[0_8px_30px_rgba(139,108,255,0.25)]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <button
                    onClick={() => setActiveAccordion(isActive ? "" : item.id)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`font-mono text-xl sm:text-2xl font-bold transition-colors ${isActive ? "text-[#D6CCFF]" : "text-white/40"}`}>
                        {item.id}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isActive ? "bg-[#8B6CFF] text-white rotate-180" : "bg-white/10 text-white"}`}>
                      {isActive ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>

                  {isActive && (
                    <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 transition-all duration-500">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 border-t border-white/10">
                        <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-xl overflow-hidden border border-white/15">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="lg:col-span-7 space-y-6">
                          <p className="text-base text-white/80 leading-relaxed font-normal">
                            {item.desc}
                          </p>

                          <ul className="space-y-3">
                            {item.features.map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-white/90">
                                <CheckCircle2 className="w-4 h-4 text-[#8B6CFF] shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="pt-2">
                            <Link href="/technology">
                              <button className="rounded-full bg-[#8B6CFF] hover:bg-[#7a5be0] text-white text-xs sm:text-sm font-bold px-6 py-3 transition-all duration-300 flex items-center gap-2 group hover:scale-[1.03] shadow-md">
                                Learn More
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* SECTION 3: What if an entire neighborhood could share the ground beneath it? */}
        <section id="thermal-networks" className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF] font-semibold">SHARED INFRASTRUCTURE</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14101f] tracking-tight leading-tight">
                What if an entire neighborhood could share the ground beneath it?
              </h2>
              <p className="text-base sm:text-lg text-[#14101f]/80 leading-relaxed">
                We are developing geothermal systems that move beyond individual properties: shared borefields, connected loops, distributed heat pumps, thermal storage and intelligent controls. One underground thermal infrastructure can serve many buildings.
              </p>
              <div className="pt-2">
                <Link href="/thermal-networks">
                  <button className="px-8 py-4 rounded-full bg-[#14101f] hover:bg-[#14101f]/90 text-white font-bold text-sm transition-all shadow-lg flex items-center gap-2">
                    DISCOVER THERMAL NETWORKS <ArrowUpRight className="w-4 h-4 text-[#8B6CFF]" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[360px] sm:h-[420px] rounded-[32px] overflow-hidden border border-gray-200 shadow-xl group">
              <Image
                src="/images/geothermal/philly_network.png"
                alt="Philadelphia Thermal Network Graphic Cutaway"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D6CCFF]">PHILADELPHIA DISTRICT GRID</span>
                <h3 className="text-xl font-bold">Ambient Shared Geothermal Network</h3>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Portfolio Showcase Grid */}
        <section className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF] font-semibold">FIELD DEPLOYMENTS</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14101f] tracking-tight mt-1">
                Subsurface Infrastructure Projects
              </h2>
            </div>
            <p className="text-sm text-[#14101f]/70 max-w-md">
              Demonstrating thermal energy networks across dense commercial, academic, and municipal buildings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
            {portfolioProjects.map((project, idx) => (
              <div
                key={idx}
                className={`${project.aspect} group relative rounded-[24px] bg-[#14101f] overflow-hidden min-h-[340px] flex flex-col justify-end p-7 transition-all duration-500 hover:shadow-2xl border border-gray-100`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-wider text-white">
                    {project.tag}
                  </span>
                </div>

                <div className="relative z-10 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D6CCFF]">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#D6CCFF] transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center group-hover:bg-[#8B6CFF] group-hover:border-[#8B6CFF] transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Starting Here (Philadelphia & Pennsylvania Proving Ground) */}
        <section id="field-lab" className="rounded-[32px] bg-slate-50 border border-gray-200 p-8 sm:p-14 lg:p-16 space-y-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#8B6CFF] font-semibold">REAL-WORLD PROVING GROUND</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14101f] tracking-tight">
                Starting here.
              </h2>
              <p className="text-base sm:text-lg text-[#14101f]/80 leading-relaxed">
                Philadelphia gives Geodel a demanding real-world proving ground: dense buildings, universities, schools, hospitals, multifamily housing, experienced trades and a long history of engineering and energy work.
              </p>

              <div className="flex flex-wrap gap-3 pt-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
                {["RESEARCH HERE.", "DRILL HERE.", "BUILD HERE.", "TRAIN HERE.", "SCALE FROM HERE."].map((step, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-[#14101f] text-white shadow-sm flex items-center gap-1"
                  >
                    <Compass className="w-4 h-4 text-[#8B6CFF]" />
                    {step}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-[24px] overflow-hidden border border-gray-200 shadow-md">
              <Image
                src="/images/geothermal/workforce.png"
                alt="Geodel Technicians and University Researchers in Philadelphia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 6: Customer & Partner Testimonials */}
        <section className="rounded-[32px] bg-[#14101f] text-white border border-black/10 p-8 sm:p-14 lg:p-16 space-y-10 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#D6CCFF]">FIELD PARTNERS & EXPERTS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                What Industry Leaders Say
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevTestimonial}
                aria-label="Previous Testimonial"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/15 text-white flex items-center justify-center hover:bg-[#8B6CFF] hover:border-[#8B6CFF] transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextTestimonial}
                aria-label="Next Testimonial"
                className="w-12 h-12 rounded-full bg-[#8B6CFF] text-white flex items-center justify-center hover:scale-105 transition-all shadow-[0_0_15px_rgba(139,108,255,0.4)] cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 relative h-80 sm:h-96 rounded-[24px] overflow-hidden border border-white/15 shadow-xl">
              <Image
                src={testimonials[testimonialIdx].avatar}
                alt={testimonials[testimonialIdx].name}
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-8 p-8 sm:p-12 rounded-[24px] bg-white text-[#14101f] shadow-2xl relative space-y-6">
              <div className="text-5xl text-[#8B6CFF] font-serif font-black leading-none select-none">
                “
              </div>

              <blockquote className="text-xl sm:text-3xl font-semibold leading-snug tracking-tight text-[#14101f]">
                "{testimonials[testimonialIdx].quote}"
              </blockquote>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-200">
                  <Image
                    src={testimonials[testimonialIdx].avatar}
                    alt={testimonials[testimonialIdx].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#14101f]">
                    {testimonials[testimonialIdx].name}
                  </h4>
                  <p className="text-xs font-medium text-[#14101f]/60">
                    {testimonials[testimonialIdx].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Final CTA Section (The future of heating and cooling may already be beneath us.) */}
        <section className="rounded-[32px] bg-gradient-to-r from-[#14101f] via-[#1C0F42] to-[#14101f] text-white p-10 sm:p-16 lg:p-20 text-center space-y-8 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#8B6CFF]/20 blur-[140px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#D6CCFF]">JOIN THE INFRASTRUCTURE TRANSITION</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              The future of heating and cooling may already be beneath us.
            </h2>
            <p className="text-xl text-white/90 font-medium">
              Let's put it to work.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex flex-wrap items-center justify-center gap-5">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-[#8B6CFF] hover:bg-[#7a5be0] text-white font-extrabold text-sm sm:text-base transition-all shadow-[0_0_30px_rgba(139,108,255,0.5)] hover:scale-105">
                PARTNER WITH US
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-sm sm:text-base transition-all backdrop-blur-md hover:scale-105">
                PILOT WITH US
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
