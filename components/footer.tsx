"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Linkedin, Twitter, Instagram, MapPin, ArrowRight, Check } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
]

const socialLinks = [
  { href: "https://x.com/Geodelinc", icon: Twitter, label: "Twitter" },
  { href: "https://www.instagram.com/geodelinc?igsh=", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/geodel", icon: Linkedin, label: "LinkedIn" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="mt-16 w-full rounded-t-[32px] bg-[#14101f] border-t border-white/10 text-white py-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#8B6CFF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Brand Info & Newsletter */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-[#8B6CFF]/20 border border-[#8B6CFF]/40 flex items-center justify-center">
                <Image src="/images/logo.png" alt="Enerza Geodel Logo" width={30} height={30} className="object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-2xl text-white tracking-tight">Enerza</span>
                <span className="ml-2 text-xs font-mono uppercase text-[#D6CCFF] px-2 py-0.5 rounded bg-[#8B6CFF]/20 border border-[#8B6CFF]/30">GEODEL</span>
              </div>
            </div>

            <p className="text-white/70 text-base max-w-md leading-relaxed">
              Pioneering intelligent solar & underground geothermal infrastructure. Delivering reliable, affordable, and sustainable thermal power across American cities and institutions.
            </p>

            {/* Newsletter Input */}
            <div className="pt-2 max-w-md">
              <p className="text-xs font-mono uppercase tracking-[2px] text-[#D6CCFF] mb-2 font-semibold">Stay Updated With Enerza</p>
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="w-full h-12 rounded-full bg-white/5 border border-white/15 px-5 pr-36 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#8B6CFF] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 h-9 px-5 rounded-full bg-[#8B6CFF] hover:bg-[#7a5be0] text-white font-bold text-xs flex items-center gap-1.5 hover:scale-105 transition-all shadow-[0_0_15px_rgba(139,108,255,0.4)]"
                >
                  {subscribed ? (
                    <>Subscribed <Check className="w-3.5 h-3.5" /></>
                  ) : (
                    <>Subscribe <ArrowRight className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[2px] text-white/50">Sitemap</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#D6CCFF] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#8B6CFF] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[2px] text-white/50">Location & Socials</h4>
            <div className="flex items-start gap-2.5 text-xs text-white/70 font-mono">
              <MapPin className="w-4 h-4 text-[#8B6CFF] shrink-0 mt-0.5" />
              <span>Philadelphia, Pennsylvania<br />United States</span>
            </div>

            <div className="pt-3 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#D6CCFF] hover:bg-white/10 hover:border-[#8B6CFF]/40 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Enerza Geodel Inc. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-wider text-white/50">INTELLIGENT ENERGY INFRASTRUCTURE</p>
        </div>
      </div>
    </footer>
  )
}
