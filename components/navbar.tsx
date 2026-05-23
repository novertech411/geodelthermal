"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/reports", label: "Reports" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <nav className="w-full max-w-[1320px] h-[60px] rounded-full border border-white/8 bg-[rgba(14,11,31,0.85)] backdrop-blur-[18px] saturate-[180%] px-6 sm:px-8 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B6CFF] to-[#5B3FE0] text-white font-extrabold text-lg shadow-[0_0_15px_rgba(139,108,255,0.4)]">
            G
          </div>
          <span className="font-bold text-lg tracking-tight text-white font-sans">Geodel</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-mono uppercase tracking-[2px] text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="rounded-full bg-white text-[#14101f] hover:bg-white/90 text-xs font-bold px-5 py-2.5 h-auto transition-all shadow-md">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-[#14101f]/98 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: "0", paddingTop: "80px" }}
      >
        <nav className="flex flex-col items-center justify-start h-full gap-8 px-6 pt-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl font-medium text-white/80 hover:text-white transition-colors"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg" className="rounded-full bg-white text-[#14101f] hover:bg-white/90 w-full max-w-xs mt-6 py-4 font-bold">
            <Link href="/contact" onClick={closeMenu}>Get Started</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
