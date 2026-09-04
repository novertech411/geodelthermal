import Link from "next/link"
import Image from "next/image"

const mainPages = [
  { href: "#technology", label: "Technology" },
  { href: "#networks", label: "Thermal networks" },
  { href: "#projects", label: "Field lab" },
  { href: "#impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
]

const platformLinks = [
  { href: "#technology", label: "Subsurface intelligence" },
  { href: "#technology", label: "Drilling" },
  { href: "#technology", label: "Ground exchange" },
  { href: "#technology", label: "Thermal storage" },
]

const companyLinks = [
  { href: "#impact", label: "About us" },
  { href: "/contact", label: "Careers" },
  { href: "#networks", label: "Insights" },
  { href: "https://calendly.com/geodel543/30min", label: "Book a demo" },
]

const socials = [
  { href: "https://www.linkedin.com/company/geodel", label: "in" },
  { href: "https://x.com/Geodelinc", label: "X" },
  { href: "https://www.instagram.com/geodelinc", label: "ig" },
  { href: "https://www.youtube.com/@geodelinc", label: "yt" },
]

export function HomepageFooter() {
  return (
    <footer className="relative bg-[#0B1211] text-white pt-[78px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,34px)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,.8fr))] gap-10 lg:gap-12">
          <div>
            <div className="flex items-center gap-0.5 font-[family-name:var(--font-poppins)] font-semibold text-2xl tracking-[-0.02em] text-white">
              <Image src="/images/logo.png" alt="Geodel" width={30} height={30} className="object-contain" />
              eodel
            </div>
            <p className="mt-5 text-[12.5px] leading-[1.6] text-white/[0.55] max-w-[300px]">
              We build intelligent underground energy infrastructure for American cities.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-semibold tracking-[.12em] uppercase text-white/[0.42]">Main pages</div>
            {mainPages.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[12.5px] text-white/[0.78] hover:text-[#A78BFA] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A78BFA] focus-visible:outline-offset-2 w-fit"
              >
                › {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-semibold tracking-[.12em] uppercase text-white/[0.42]">Platform</div>
            {platformLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[12.5px] text-white/[0.78] hover:text-[#A78BFA] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A78BFA] focus-visible:outline-offset-2 w-fit"
              >
                › {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-semibold tracking-[.12em] uppercase text-white/[0.42]">Company</div>
            {companyLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[12.5px] text-white/[0.78] hover:text-[#A78BFA] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A78BFA] focus-visible:outline-offset-2 w-fit"
              >
                › {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2.5 mt-12">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex w-[30px] h-[30px] rounded-full bg-white/[0.12] items-center justify-center text-[10.5px] font-semibold text-white hover:bg-[#A78BFA] hover:text-[#0B1211] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-[26px] pt-[22px] border-t border-white/[0.14] text-[11.5px] text-white/[0.55]">
          <div className="flex gap-[26px]">
            <Link href="/contact" className="hover:text-[#A78BFA] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A78BFA] focus-visible:outline-offset-2">
              Privacy policy
            </Link>
            <Link href="/contact" className="hover:text-[#A78BFA] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A78BFA] focus-visible:outline-offset-2">
              Terms and conditions
            </Link>
          </div>
          <span>Copyright 2026 © Enerza Geodel Inc.</span>
        </div>

        <div className="hidden sm:flex items-center justify-center gap-[10px] mt-9 pb-[22px]">
          <Image
            src="/images/logo.png"
            alt=""
            width={168}
            height={168}
            className="object-contain opacity-90 flex-none w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[168px] lg:h-[168px]"
          />
          <div
            className="font-[family-name:var(--font-poppins)] font-semibold leading-none tracking-[-0.05em] text-[#F4F0FC]"
            style={{ fontSize: "clamp(60px, 14vw, 200px)" }}
          >
            eodel
          </div>
        </div>
      </div>
    </footer>
  )
}
