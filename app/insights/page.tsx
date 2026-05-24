"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import StatusBadge from "@/components/StatusBadge"
import { 
  FileText, 
  ArrowUpRight, 
  Calendar, 
  User,
  Clock
} from "lucide-react"

const articles = [
  {
    title: "Water as Infrastructure in Critical Mineral Operations",
    description: "Hydrological systems increasingly shape extraction performance, resource continuity, and operational resilience across modern mining environments.",
    date: "May 24, 2026",
    readTime: "8 min read",
    author: "Dr. Elena Vance",
    category: "RESEARCH",
    tag: "INFRASTRUCTURE"
  },
  {
    title: "Tailings Intelligence and Operational Visibility",
    description: "Real-time hydrological monitoring strengthens operational awareness across tailings storage and recovery systems, reducing hazard probabilities.",
    date: "May 18, 2026",
    readTime: "6 min read",
    author: "Marcus Thorne",
    category: "OPERATIONAL",
    tag: "TAILINGS"
  },
  {
    title: "Groundwater Systems in Lithium Extraction",
    description: "Groundwater dynamics play a central role in lithium brine systems, water availability, and long-term extraction performance in hyper-arid zones.",
    date: "April 29, 2026",
    readTime: "11 min read",
    author: "Dr. Elena Vance",
    category: "GEOLOGY",
    tag: "LITHIUM"
  },
  {
    title: "Predictive Hydrology in Resource Infrastructure",
    description: "Predictive analytics and hydrological intelligence enable operators to forecast operational conditions, manage water balance, and optimize resource systems.",
    date: "April 15, 2026",
    readTime: "9 min read",
    author: "Sarah Jenkins",
    category: "ANALYTICS",
    tag: "FORECASTING"
  }
]

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#14101f]">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 relative overflow-hidden flex flex-col justify-center min-h-[60vh]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.12)] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14101f]/30 to-[#14101f]" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-8 text-center flex flex-col items-center justify-center">
            <StatusBadge label="Publications" value="Technical Library" className="justify-center mb-8" />
            <h1 className="display text-white max-w-5xl mx-auto mb-8 text-balance">
              Hydrological Insights
            </h1>
            <p className="lede mt-6 max-w-3xl mx-auto text-white/70">
              Research, operational intelligence, and technical perspectives on the future of hydrological systems in critical mineral operations.
            </p>
          </div>
        </section>

        {/* Featured Briefing */}
        <section className="py-12 bg-gradient-to-b from-[#14101f] to-black/20 relative border-t border-white/5">
          <div className="mx-auto max-w-7xl px-8">
            <div className="card p-0 overflow-hidden border-white/10 bg-black/40 group">
              <div className="grid lg:grid-cols-5 gap-0 items-stretch">
                <div className="lg:col-span-3 relative aspect-video lg:aspect-auto">
                  <img
                    src="/images/insights_mineral_water.png"
                    alt="Featured Briefing: Hydrological Systems"
                    className="w-full h-full object-cover filter saturate-[0.85] transition-transform duration-1000 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="lg:col-span-2 p-10 md:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest text-[#8B6CFF] bg-[#8B6CFF]/10 px-3 py-1 rounded border border-[#8B6CFF]/20">
                        FEATURED BRIEFING
                      </span>
                      <StatusBadge label="VOLUME" value="Q2 2026" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                      Systemic Water Balance in Hyper-Arid Extraction Zones
                    </h2>
                    <p className="text-white/60 text-sm leading-relaxed">
                      An analysis of groundwater drawdown vectors and recycling optimization systems in critical mineral operations throughout water-stressed regions.
                    </p>
                  </div>
                  <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-white/40">Dr. Elena Vance • 15 min read</span>
                    <Link
                      href="/contact"
                      className="rounded-[20px] bg-white/4 border border-white/10 hover:bg-white/8 text-white text-xs font-semibold px-4 py-2 flex items-center gap-1 transition-all duration-300"
                    >
                      Download PDF <span className="text-[10px]">↓</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles Grid */}
        <section className="py-24 relative bg-black/20 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-8">
            <div className="mb-12 flex justify-between items-center">
              <h2 className="h2 text-white">Featured Articles</h2>
              <StatusBadge label="CATALOG" value="4 AVAILABLE" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <div
                  key={article.title}
                  className="card group border-white/5 hover:border-[#8B6CFF]/30 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Meta info */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono tracking-widest text-[#8B6CFF] bg-[#8B6CFF]/10 px-3 py-1 rounded border border-[#8B6CFF]/20 uppercase">
                        {article.category}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">REF // {article.tag}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#d6ccff] transition-colors flex justify-between items-start gap-4">
                      {article.title}
                      <ArrowUpRight className="h-5 w-5 text-white/20 group-hover:text-[#8B6CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
                    </h3>
                    
                    <p className="text-white/60 mb-8 leading-relaxed text-sm">
                      {article.description}
                    </p>
                  </div>

                  {/* Footer details */}
                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5 text-xs text-white/40 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[#1c1730]" />
          <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.18)] via-transparent to-transparent opacity-85" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          
          <div className="relative mx-auto max-w-[1100px] px-6">
            <div className="rounded-[24px] border border-white/18 bg-[rgba(255,255,255,0.04)] px-8 py-20 overflow-hidden text-center relative">
              <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.15)] via-transparent to-transparent opacity-80" />
              <div className="relative z-10 flex flex-col items-center">
                <StatusBadge label="Updates" value="Newsletter" className="mb-8" />
                <h2 className="display text-white mb-8 max-w-3xl mx-auto">
                  Stay informed
                </h2>
                <p className="lede max-w-2xl mx-auto mb-12 text-white/70">
                  Receive our latest technical perspectives and mineral hydrology findings.
                </p>
                <Link 
                  href="/contact" 
                  className="rounded-[20px] bg-[#8B6CFF] hover:bg-[#7c5eff] text-white text-base font-semibold px-8 py-4 inline-flex items-center gap-2 transition-all duration-300 shadow-md"
                >
                  Subscribe to Technical Briefs <span className="text-base">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
