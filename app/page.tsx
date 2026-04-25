import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { FeaturesSplitSection } from "@/components/home/features-split-section"
import { PlatformSection } from "@/components/home/platform-section"
import { BuiltForSection } from "@/components/home/built-for-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSplitSection />
        <PlatformSection />
        <BuiltForSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
