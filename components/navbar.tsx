"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [

  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  // { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track window scroll to switch navigation modes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    // Run once on load to catch initial state
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header
      className={`fixed left-0 right-0 z-50 flex justify-center w-full transition-all duration-500 ease-in-out ${isScrolled ? "top-5 px-3 sm:px-4" : "top-0 px-0"
        }`}
    >
      <nav
        className={`w-full flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled
          ? "max-w-[1320px] h-[64px] rounded-full border border-white/8 bg-[rgba(14,11,31,0.85)] backdrop-blur-[18px] saturate-[180%] px-4 sm:px-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          : "max-w-none h-[70px] sm:h-[80px] rounded-none border-b border-white/10  bg-[rgba(14,11,31,0.85)] backdrop-blur-sm px-4 sm:px-8 lg:px-12"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Image src="/images/logo.png" alt="Logo" width={44} height={44} className="transition-all duration-500" />
          <div className="flex flex-col">
            <span className="text-[20px] font-bold text-white leading-none">Geodel</span>
            <span className="text-[10px] text-white/50 tracking-wider mt-0.5">Backed by  <span className=" font-semibold text-[#B480FF]"> EWOR </span></span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] capitalize font-medium tracking-[2px] text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button in sleek technical gray */}
        <div className="hidden md:block">
          <Link href="https://goodel-dashboard.vercel.app/login">
            <button className="rounded-[20px] bg-zinc-800 hover:bg-zinc-700 text-white text-[13px] font-semibold px-6 py-3 border border-white/10 transition-all duration-300 shadow-md">
              Get started <span className="text-sm ml-1">→</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-white relative z-50 bg-[#8B6CFF] rounded-lg w-9 h-9"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-[#14101f] z-40 md:hidden transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://goodel-dashboard.vercel.app/login"
            onClick={closeMenu}
            className="mt-4 rounded-[20px] bg-[#8B6CFF] hover:bg-[#7c5eff] text-white text-sm font-semibold py-4 w-full max-w-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
          >
            Get started <span className="text-sm">→</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
