"use client"

import { SiteHeader } from "@/components/ui/site-header"
import { SiteFooter } from "@/components/ui/site-footer"
import { Reveal } from '@/components/reveal'
import { MapPin, Mail, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0B1211] text-white selection:bg-[#6D3BD4] selection:text-white">
      <SiteHeader />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-[clamp(16px,4vw,34px)] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <Reveal as="div" className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="text-xs font-medium text-white/50">
                  Build with uspartnership & pilots
                </div>
                <h1 className="font-[family-name:var(--font-poppins)] font-semibold text-4xl sm:text-5xl tracking-[-0.035em] text-white leading-tight text-balance">
                  Let's put geothermal to work.
                </h1>
                <p className="text-base sm:text-lg text-white/[0.74] leading-relaxed max-w-[65ch]">
                  Whether you are a city official, university administrator, real estate developer, utility leader, driller, or manufacturer, we want to connect.
                </p>
              </div>

              {/* Office Details */}
              <div className="space-y-6 pt-4 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-[#A78BFA]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Philadelphia Office</h4>
                    <p className="text-sm text-white/[0.7]">Philadelphia, Pennsylvania, USA</p>
                    <p className="text-xs text-[#A78BFA] mt-1">Starting in PAscaling across East Coast & U.S.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-[#A78BFA]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Inquiries & Pilots</h4>
                    <p className="text-sm text-white/[0.7]">contact@geodel.io</p>
                  </div>
                </div>
              </div>

              {/* Persistent Language Tag */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-[10px] font-semibold tracking-[.12em] uppercase text-white/[0.42]">Persistent language</span>
                <p className="text-sm font-semibold text-white">We started underground.</p>
                <p className="text-xs text-white/[0.55]">The future of heating and cooling is under our feet.</p>
              </div>
            </Reveal>

            {/* Right Interactive Form Column */}
            <Reveal delay={120} as="div" className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-6">
              <div className="space-y-1">
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-2xl text-white">Start a conversation</h3>
                <p className="text-xs sm:text-sm text-white/[0.55]">Fill out your project details and partner track below.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/[0.7] mb-1.5">First & Last Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/[0.7] mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@organization.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/[0.7] mb-1.5">Organization / Entity</label>
                    <input
                      type="text"
                      placeholder="University / Agency / Firm"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/[0.7] mb-1.5">Partner Track</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#1A2220] border border-white/10 text-white text-sm focus:outline-none focus:border-[#A78BFA] transition-colors">
                      <option value="cities">Cities + Public Agencies</option>
                      <option value="universities">Universities</option>
                      <option value="utilities">Utilities</option>
                      <option value="developers">Developers + Building Owners</option>
                      <option value="contractors">Drilling + HVAC Companies</option>
                      <option value="manufacturers">Manufacturers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/[0.7] mb-1.5">Project Scope / Inquiry Details</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your site, campus, fleet, or technology inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#6D3BD4] hover:bg-[#5628B8] active:scale-[0.98] text-white text-sm font-semibold transition-all duration-300 ease-out flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Submit inquiry
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
