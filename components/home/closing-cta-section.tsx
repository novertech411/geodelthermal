import Image from "next/image"

export function ClosingCtaSection() {
  return (
    <section className="relative min-h-[420px] sm:min-h-[560px] flex items-center justify-center text-center overflow-hidden bg-[#0B1211]">
      <Image src="/images/site_drilling.jpeg" alt="Geodel drilling site" fill className="object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(11,18,17,.62) 0%, rgba(11,18,17,.80) 55%, #0B1211 100%)",
        }}
      />
      <div className="relative max-w-[620px] px-[clamp(16px,4vw,34px)] py-[60px] sm:py-[90px]">
        <h2 className="m-0 font-[family-name:var(--font-poppins)] font-semibold text-[32px] sm:text-[46px] leading-[1.12] tracking-[-0.035em] text-white text-balance">
          Powering buildings with the ground beneath them.
        </h2>
        <p className="mt-[22px] mx-auto max-w-[420px] text-[13.5px] leading-[1.7] text-white/[0.78]">
          Whether you are cutting emissions, replacing aging boilers, or planning a shared thermal network, our
          engineers can model your site and show you the numbers.
        </p>
        <a
          href="https://calendly.com/geodel543/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-[34px] px-[30px] py-[15px] rounded-full bg-[#A78BFA] text-[#0B1211] text-[13.5px] font-semibold hover:bg-[#C4B5FD] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  )
}
