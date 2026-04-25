"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import GlassCard from "@/components/GlassCard"
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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--primary)/0.03_0%,transparent_50%)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <StatusBadge label="Communication" value="System v1.0" className="justify-center mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance">
              <span className="gradient-text">Contact Our Team</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with our experts to discuss your subsurface intelligence requirements and project objectives.
            </p>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Contact Information */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">System Node Info</h2>
                  <div className="grid gap-6">
                    {[
                      { icon: Mail, label: "Email Node", value: "info@geodel.io", code: "MAIL-SEC-01" },
                      { icon: Phone, label: "Phone Node", value: "+1 (555) 000-0000", code: "PHO-SEC-02" },
                      { icon: MapPin, label: "Geo Location", value: "San Francisco, CA", code: "GEO-SEC-03" },
                    ].map((item) => (
                      <GlassCard key={item.label} className="group border-white/5 hover:border-primary/20 transition-all duration-500">
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary/10 transition-colors">
                            <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{item.label}</span>
                              <StatusBadge label="NODE" value={item.code} />
                            </div>
                            <p className="text-lg font-semibold text-foreground tracking-tight">{item.value}</p>
                          </div>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Digital Presence</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, label: "LinkedIn" },
                      { icon: Twitter, label: "Twitter" },
                      { icon: Globe, label: "Website" },
                    ].map((platform) => (
                      <Button key={platform.label} variant="outline" size="icon" className="w-12 h-12 rounded-xl border-white/10 hover:bg-primary/5 hover:border-primary/30 transition-all group">
                        <platform.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Button>
                    ))}
                  </div>
                </div>

                {/* System Specs Mock */}
                <GlassCard className="bg-black/40 border-white/5 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground">Operational Status</span>
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
                          <span className="text-sm text-foreground/70">{spec.label}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                          <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">{spec.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>

              {/* Contact Form */}
              <div className="relative">
                <GlassCard className="bg-black/60 border-white/10 p-10 shadow-[0_0_50px_rgba(var(--primary-rgb),0.05)]">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground tracking-tight">Initiate Contact</h2>
                      <p className="text-xs font-mono text-white/30 uppercase tracking-widest mt-1">Ref: GEODEL-CONTACT-BETA</p>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Identity/Name</label>
                        <input
                          type="text"
                          className="w-full bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-4 py-3 text-foreground transition-all outline-none"
                          placeholder="Node Identifier"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                        <input
                          type="email"
                          className="w-full bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-4 py-3 text-foreground transition-all outline-none"
                          placeholder="node@domain.io"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Target Subject</label>
                      <select className="w-full bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-4 py-3 text-foreground transition-all outline-none appearance-none">
                        <option className="bg-black">General Inquiry</option>
                        <option className="bg-black">Platform Demo</option>
                        <option className="bg-black">Technical Support</option>
                        <option className="bg-black">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Intelligence / Message</label>
                      <textarea
                        rows={6}
                        className="w-full bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-4 py-3 text-foreground transition-all outline-none resize-none"
                        placeholder="Transmission data..."
                      />
                    </div>
                    <Button type="submit" variant="neon" className="w-full py-7 h-auto text-lg group">
                      Transmit Signal
                      <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <div className="flex justify-center pt-4">
                      <StatusBadge label="VERIFICATION" value="READY-TO-SEND" />
                    </div>
                  </form>
                </GlassCard>
                
                {/* Visual Accent */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
