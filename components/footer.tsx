import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  // { href: "/about", label: "About" },
  // { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-[#14101f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl text-white">Geodel</span>
            </div>
            <p className="text-sm text-white/50 text-center md:text-left">
              Hydrological Intelligence for Critical Minerals
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Geodel Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
