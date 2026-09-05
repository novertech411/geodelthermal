import { HeroSection } from "@/components/home/hero-section"
import { BentoSection } from "@/components/home/bento-section"
import { SolutionsTabsSection } from "@/components/home/solutions-tabs-section"
import { ProcessAccordionSection } from "@/components/home/process-accordion-section"
import { ProjectsRailSection } from "@/components/home/projects-rail-section"
import { ImpactSection } from "@/components/home/impact-section"
import { InsightsSection } from "@/components/home/insights-section"
import { OwnersSection } from "@/components/home/owners-section"
import { TestimonialSection } from "@/components/home/testimonial-section"
import { ClosingCtaSection } from "@/components/home/closing-cta-section"
import { SiteFooter } from "@/components/ui/site-footer"

export default function HomePage() {
  return (
    <div className="bg-[#F7F6F3] text-[#0B1211] selection:bg-[#6D3BD4] selection:text-white overflow-x-hidden">
      <HeroSection />
      <BentoSection />
      <SolutionsTabsSection />
      <ProcessAccordionSection />
      <ProjectsRailSection />
      <ImpactSection />
      <InsightsSection />
      <OwnersSection />
      <TestimonialSection />
      <ClosingCtaSection />
      <SiteFooter />
    </div>
  )
}
