"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { href: "#technology", label: "Technology" },
  { href: "#thermal-networks", label: "Thermal Networks" },
  { href: "#field-lab", label: "Field Lab" },
  { href: "#about", label: "About" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full px-6 sm:px-12 lg:px-16 pt-6 sm:pt-8">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 flex items-center justify-center text-white">
            <Image src="/images/logo.png" alt="Geodel Logo" width={28} height={28} className="object-contain" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            eodel
          </span>
        </Link>

        {/* Center: Clean Primary Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Book a Demo CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://calendly.com/geodel543/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-sm transition-all flex items-center gap-2 backdrop-blur-md hover:scale-105 shadow-md"
          >
            Book a Demo <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-white bg-white/15 backdrop-blur-md rounded-md w-10 h-10 border border-white/25"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 bg-[#0c0915] z-[999] md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <a href="#" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Image src="/images/newlogo.png" alt="Geodel Logo" width={24} height={24} className="object-contain" />
            <span className="text-xl font-bold text-white">Geodel</span>
          </a>
          <button onClick={() => setIsOpen(false)} className="text-white p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xl font-medium text-white/90 hover:text-white flex items-center justify-between"
              onClick={() => setIsOpen(false)}
            >
              <span>{link.label}</span>
            </a>
          ))}
          <div className="pt-6 border-t border-white/10">
            <a
              href="https://calendly.com/geodel543/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 rounded-full bg-white text-[#14101f] font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
