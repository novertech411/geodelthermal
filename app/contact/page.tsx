"use client"

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { MapPin, Mail, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#14101f] text-white selection:bg-[#8B6CFF] selection:text-white">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#8B6CFF]/15 blur-[160px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-[3px] text-[#D6CCFF]">
                  BUILD WITH US • PARTNERSHIP & PILOTS
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                  Let's put geothermal to work.
                </h1>
                <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                  Whether you are a city official, university administrator, real estate developer, utility leader, driller, or manufacturer — we want to connect.
                </p>
              </div>

              {/* Office Details */}
              <div className="space-y-6 pt-4 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#8B6CFF]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Philadelphia Office</h4>
                    <p className="text-sm text-white/70">Philadelphia, Pennsylvania, USA</p>
                    <p className="text-xs text-[#D6CCFF] font-mono mt-1">Starting in PA • Scaling across East Coast & U.S.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#8B6CFF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Inquiries & Pilots</h4>
                    <p className="text-sm text-white/70">contact@geodel.io</p>
                  </div>
                </div>
              </div>

              {/* Persistent Language Tag */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-xs font-mono text-[#D6CCFF] font-bold uppercase">PERSISTENT LANGUAGE</span>
                <p className="text-sm font-bold text-white">We started underground.</p>
                <p className="text-xs text-white/60">The future of heating and cooling is under our feet.</p>
              </div>
            </div>

            {/* Right Interactive Form Column */}
            <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">Start a Conversation</h3>
                <p className="text-xs sm:text-sm text-white/60">Fill out your project details and partner track below.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-1.5">First & Last Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#8B6CFF] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@organization.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#8B6CFF] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-1.5">Organization / Entity</label>
                    <input
                      type="text"
                      placeholder="University / Agency / Firm"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#8B6CFF] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-1.5">Partner Track</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#1c1730] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8B6CFF] transition-colors">
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
                  <label className="block text-xs font-mono uppercase text-white/70 mb-1.5">Project Scope / Inquiry Details</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your site, campus, fleet, or technology inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#8B6CFF] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#8B6CFF] hover:bg-[#7a5be0] text-white text-sm font-extrabold transition-all shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                >
                  SUBMIT INQUIRY
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
