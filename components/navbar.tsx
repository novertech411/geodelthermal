"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/technology", label: "Technology" },
  { href: "/thermal-networks", label: "Thermal Networks" },
  { href: "/field-lab", label: "Field Lab" },
  { href: "/about", label: "About" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full px-[clamp(16px,4vw,34px)] py-[26px]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8">
        {/* Left: Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white font-[family-name:var(--font-poppins)] font-semibold text-[19px] tracking-[-0.02em] rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2"
        >
          <Image src="/images/logo.png" alt="Geodel" width={26} height={26} className="object-contain" />
          Geodel
        </Link>

        {/* Center: Nav pill */}
        <nav className="hidden md:flex items-center gap-1 p-[5px] rounded-full bg-white/10 backdrop-blur-[14px] border border-white/[0.14]">
          {navLinks.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`px-4 py-[9px] rounded-full text-[13.5px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2 ${
                  active ? "bg-[#F7F6F3] text-[#0B1211]" : "text-white/[0.82] hover:text-white hover:bg-white/[0.12]"
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        {/* Right: CTA */}
        <a
          href="https://calendly.com/geodel543/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-[22px] py-3 rounded-full bg-[#6D3BD4] text-white text-[13.5px] font-semibold hover:bg-[#5628B8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2"
        >
          Book a Demo
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/[0.14] text-white backdrop-blur-[14px]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 bg-[#0B1211] z-[999] md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-[family-name:var(--font-poppins)] font-semibold text-xl text-white tracking-[-0.02em]"
            onClick={() => setIsOpen(false)}
          >
            <Image src="/images/newlogo.png" alt="Geodel" width={24} height={24} className="object-contain" />
            Geodel
          </Link>
          <button onClick={() => setIsOpen(false)} className="text-white p-2" aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xl font-medium text-white/[0.82] hover:text-white flex items-center justify-between"
              onClick={() => setIsOpen(false)}
            >
              <span>{link.label}</span>
            </Link>
          ))}
          <div className="pt-6 border-t border-white/10">
            <a
              href="https://calendly.com/geodel543/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 rounded-full bg-[#6D3BD4] hover:bg-[#5628B8] text-white text-sm font-semibold flex items-center justify-center transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
