"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Linkedin, Twitter, Instagram, MapPin, ArrowRight, Check } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/thermal-networks", label: "Thermal Networks" },
  { href: "/field-lab", label: "Field Lab" },
  { href: "/contact", label: "Contact" },
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
    <footer className="mt-16 w-full bg-[#0B1211] text-white pt-[78px] pb-[22px] px-[clamp(16px,4vw,34px)]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/[0.14]">
          {/* Column 1: Brand Info & Newsletter */}
          <div className="lg:col-span-6 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 font-[family-name:var(--font-poppins)] font-semibold text-2xl tracking-[-0.02em] text-white w-fit">
              <Image src="/images/newlogo.png" alt="Geodel" width={28} height={28} className="object-contain" />
              Geodel
            </Link>

            <p className="text-[12.5px] leading-[1.6] text-white/[0.55] max-w-[400px]">
              Pioneering intelligent solar and underground geothermal infrastructure. Delivering reliable, affordable and sustainable thermal power across American cities and institutions.
            </p>

            {/* Newsletter Input */}
            <div className="pt-2 max-w-md">
              <p className="text-[10px] font-semibold tracking-[.12em] uppercase text-white/[0.42] mb-2">Stay updated with Geodel</p>
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="w-full h-12 rounded-full bg-white/[0.05] border border-white/[0.14] px-5 pr-36 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#A78BFA] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 h-9 px-5 rounded-full bg-[#6D3BD4] hover:bg-[#5628B8] text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
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
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="text-[10px] font-semibold tracking-[.12em] uppercase text-white/[0.42]">Sitemap</div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12.5px] text-white/[0.78] hover:text-[#A78BFA] transition-colors w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A78BFA] focus-visible:outline-offset-2"
              >
                › {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="text-[10px] font-semibold tracking-[.12em] uppercase text-white/[0.42]">Location & Socials</div>
            <div className="flex items-start gap-2.5 text-[12.5px] text-white/[0.78]">
              <MapPin className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
              <span>Philadelphia, Pennsylvania<br />United States</span>
            </div>

            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-[30px] h-[30px] rounded-full bg-white/[0.12] items-center justify-center text-white/[0.78] hover:bg-[#A78BFA] hover:text-[#0B1211] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11.5px] text-white/[0.55]">
          <p>&copy; {new Date().getFullYear()} Geodel Inc. All rights reserved.</p>
          <p className="text-[10px] font-semibold tracking-[.12em] uppercase text-white/[0.42]">Intelligent energy infrastructure</p>
        </div>
      </div>
    </footer>
  )
}
