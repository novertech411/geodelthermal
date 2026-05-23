"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import StatusBadge from "@/components/StatusBadge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Twitter,
  Globe,
  Clock,
  Settings,
  Shield,
  Zap
} from "lucide-react"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-[#14101f]">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 relative overflow-hidden flex flex-col justify-center min-h-[50vh]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-radial-gradient from-[rgba(139,108,255,0.12)] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14101f]/30 to-[#14101f]" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-8 text-center flex flex-col items-center justify-center">
            <StatusBadge label="Communication" value="System v1.0" className="justify-center mb-8" />
            <h1 className="display text-white max-w-4xl mx-auto mb-8 text-balance">
              Contact Our <em>Team</em>
            </h1>
            <p className="lede mt-6 max-w-3xl mx-auto text-white/70">
              Connect with our experts to discuss your subsurface intelligence requirements and project objectives.
            </p>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Contact Information */}
              <div className="space-y-12">
                <div>
                  <h2 className="h2 text-white mb-8">System Node Info</h2>
                  <div className="grid gap-6">
                    {[
                      { icon: Mail, label: "Email Node", value: "info@geodel.io", code: "MAIL-SEC-01" },
                      { icon: Phone, label: "Phone Node", value: "+1 (555) 000-0000", code: "PHO-SEC-02" },
                      { icon: MapPin, label: "Geo Location", value: "San Francisco, CA", code: "GEO-SEC-03" },
                    ].map((item) => (
                      <div key={item.label} className="card group border-white/5 hover:border-[#8B6CFF]/20 transition-all duration-500">
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-xl bg-white/[0.02] flex items-center justify-center border border-white/10 group-hover:bg-[#8B6CFF]/10 transition-colors">
                            <item.icon className="h-6 w-6 text-[#8B6CFF]" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{item.label}</span>
                              <StatusBadge label="NODE" value={item.code} />
                            </div>
                            <p className="text-base font-semibold text-white tracking-tight">{item.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Digital Presence</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, label: "LinkedIn" },
                      { icon: Twitter, label: "Twitter" },
                      { icon: Globe, label: "Website" },
                    ].map((platform) => (
                      <button 
                        key={platform.label} 
                        className="w-12 h-12 rounded-xl border border-white/10 hover:bg-[#8B6CFF]/5 hover:border-[#8B6CFF]/30 transition-all group flex items-center justify-center"
                        title={platform.label}
                      >
                        <platform.icon className="h-5 w-5 text-white/60 group-hover:text-[#8B6CFF] transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* System Specs Mock */}
                <div className="card bg-black/40 border-white/5 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="h-5 w-5 text-[#8B6CFF]" />
                    <span className="font-bold text-white">Operational Status</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: Clock, label: "Response Time", value: "< 24 Hours", status: "OK" },
                      { icon: Settings, label: "Consultation", value: "Available", status: "ONLINE" },
                      { icon: Shield, label: "Security", value: "End-to-End", status: "ACTIVE" },
                    ].map((spec) => (
                      <div key={spec.label} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                        <div className="flex items-center gap-3">
                          <spec.icon className="h-4 w-4 text-white/30" />
                          <span className="text-sm text-white/70">{spec.label}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-semibold text-white">{spec.value}</span>
                          <span className="text-[10px] font-mono text-[#8B6CFF] bg-[#8B6CFF]/10 px-2 py-0.5 rounded border border-[#8B6CFF]/20">{spec.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="relative">
                <div className="card bg-black/60 border-white/10 p-10 shadow-[0_0_50px_rgba(139,108,255,0.03)]">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.02] flex items-center justify-center border border-white/10">
                      <Send className="h-6 w-6 text-[#8B6CFF]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white tracking-tight">Initiate Contact</h2>
                      <p className="text-xs font-mono text-white/30 uppercase tracking-widest mt-1">Ref: GEODEL-CONTACT-BETA</p>
                    </div>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Identity/Name</label>
                        <input
                          type="text"
                          className="w-full bg-white/[0.03] border border-white/10 focus:border-[#8B6CFF]/50 focus:ring-1 focus:ring-[#8B6CFF]/50 rounded-xl px-4 py-3 text-white transition-all outline-none"
                          placeholder="Node Identifier"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                        <input
                          type="email"
                          className="w-full bg-white/[0.03] border border-white/10 focus:border-[#8B6CFF]/50 focus:ring-1 focus:ring-[#8B6CFF]/50 rounded-xl px-4 py-3 text-white transition-all outline-none"
                          placeholder="node@domain.io"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Target Subject</label>
                      <select className="w-full bg-white/[0.03] border border-white/10 focus:border-[#8B6CFF]/50 focus:ring-1 focus:ring-[#8B6CFF]/50 rounded-xl px-4 py-3 text-white transition-all outline-none appearance-none">
                        <option className="bg-[#14101f]">General Inquiry</option>
                        <option className="bg-[#14101f]">Platform Demo</option>
                        <option className="bg-[#14101f]">Technical Support</option>
                        <option className="bg-[#14101f]">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Intelligence / Message</label>
                      <textarea
                        rows={6}
                        className="w-full bg-white/[0.03] border border-white/10 focus:border-[#8B6CFF]/50 focus:ring-1 focus:ring-[#8B6CFF]/50 rounded-xl px-4 py-3 text-white transition-all outline-none resize-none"
                        placeholder="Transmission data..."
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full rounded-[20px] bg-[#8B6CFF] hover:bg-[#7c5eff] text-white text-base font-semibold py-4 flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(139,108,255,0.3)]"
                    >
                      Transmit signal <Send className="h-5 w-5" />
                    </button>
                    <div className="flex justify-center pt-4">
                      <StatusBadge label="VERIFICATION" value="READY-TO-SEND" />
                    </div>
                  </form>
                </div>
                
                {/* Visual Accent */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#8B6CFF]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#8B6CFF]/20 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
