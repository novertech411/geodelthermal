import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

const insights = [
  {
    href: "/thermal-networks",
    img: "/images/geothermal/philly_network.png",
    alt: "Neighbourhood thermal loop",
    read: "Draft · 5 minute read",
    title: "What if an entire neighbourhood shared the ground beneath it?",
  },
  {
    href: "/technology",
    img: "/images/predictive_resource.png",
    alt: "Subsurface survey",
    read: "Draft · 6 minute read",
    title: "Why we never install geothermal blind",
  },
]

export function InsightsSection() {
  return (
    <section id="networks" className="max-w-[1200px] mx-auto px-[clamp(16px,4vw,34px)] pt-[104px]">
      <Reveal className="flex flex-wrap justify-between items-start gap-6">
        <h2 className="m-0 font-[family-name:var(--font-poppins)] font-semibold text-[28px] sm:text-[34px] leading-[1.15] tracking-[-0.03em] max-w-[380px] text-[#0B1211]">
          Latest insights on thermal networks
        </h2>
        <Link
          href="/thermal-networks"
          className="px-5 py-[11px] rounded-lg border border-[#DAD6CF] text-xs font-semibold text-[#0B1211] hover:border-[#0B1211] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0B1211] focus-visible:outline-offset-2"
        >
          View all insights
        </Link>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
        {insights.map((post, i) => (
          <Reveal key={post.title} delay={i * 90} as="div">
            <Link href={post.href} className="block group">
              <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden bg-[#DDD9D2]">
                <Image
                  src={post.img}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-[11.5px] text-[#9A968E]">{post.read}</div>
              <h3 className="mt-1.5 font-[family-name:var(--font-poppins)] font-semibold text-[19px] leading-[1.3] tracking-[-0.02em] text-[#0B1211]">
                {post.title}
              </h3>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-4 text-[11.5px] text-[#ABA7A0]">
        Placeholder postsswap in real articles or drop this block.
      </div>
    </section>
  )
}
