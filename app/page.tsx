import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { UnderstandSection } from "@/components/home/understand-section"
import { ProcessSection } from "@/components/home/process-section"
import { PlatformSection } from "@/components/home/platform-section"
import { DeliversSection } from "@/components/home/delivers-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { BuiltForSection } from "@/components/home/built-for-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <UnderstandSection />
        <ProcessSection />
        <PlatformSection />
        <DeliversSection />
        <HowItWorksSection />
        <BuiltForSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
