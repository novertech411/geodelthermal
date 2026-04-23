import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRight, 
  Flame, 
  MapPin, 
  Building,
  CheckCircle,
  Thermometer,
  Droplets,
  Mountain,
  Pickaxe,
  Search,
  BarChart3,
  FileCheck,
  Layers
} from "lucide-react"

const solutions = [
  {
    id: "geothermal",
    icon: Flame,
    title: "Geothermal Development",
    description: "Unlock the potential of geothermal energy with comprehensive subsurface characterization. From initial exploration to reservoir management, Geodel provides the intelligence needed for successful geothermal projects.",
    features: [
      { icon: Thermometer, text: "Thermal gradient modeling" },
      { icon: Droplets, text: "Fluid flow simulation" },
      { icon: Mountain, text: "Reservoir characterization" },
      { icon: BarChart3, text: "Production forecasting" },
    ],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "exploration",
    icon: MapPin,
    title: "Subsurface Exploration",
    description: "Support mineral and resource exploration with advanced subsurface intelligence. Integrate geophysical, geological, and geochemical data to identify high-potential targets and reduce exploration risk.",
    features: [
      { icon: Pickaxe, text: "Target identification" },
      { icon: Search, text: "Anomaly detection" },
      { icon: Layers, text: "Structural analysis" },
      { icon: BarChart3, text: "Probability mapping" },
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "site-assessment",
    icon: Building,
    title: "Site Assessment",
    description: "Evaluate subsurface conditions for infrastructure, construction, and environmental projects. Understand ground conditions, identify risks, and support informed site selection and design decisions.",
    features: [
      { icon: FileCheck, text: "Ground condition analysis" },
      { icon: Search, text: "Hazard identification" },
      { icon: Layers, text: "Foundation assessment" },
      { icon: BarChart3, text: "Risk quantification" },
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-background opacity-30" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Solutions
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized subsurface intelligence for the unique challenges of energy and resource development.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  id={solution.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <solution.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm text-primary font-medium">Solution</span>
                      </div>
                      
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        {solution.title}
                      </h2>
                      
                      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        {solution.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mt-8 grid sm:grid-cols-2 gap-4">
                        {solution.features.map((feature) => (
                          <div key={feature.text} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <feature.icon className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-foreground">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8">
                        <Button asChild className="bg-primary hover:bg-primary/90">
                          <Link href="/contact">
                            Start a Project
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Visual */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className={`aspect-square rounded-2xl glass border border-border/50 glow-purple p-8 relative overflow-hidden`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-50`} />
                        
                        {/* Abstract Visual */}
                        <div className="relative h-full flex items-center justify-center">
                          <div className="relative">
                            <solution.icon className="h-32 w-32 text-primary/80 animate-float" />
                            
                            {/* Orbiting elements */}
                            {[0, 1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="absolute w-4 h-4 rounded-full bg-primary/60 animate-pulse-slow"
                                style={{
                                  top: `${50 + 45 * Math.sin((i * Math.PI) / 2)}%`,
                                  left: `${50 + 45 * Math.cos((i * Math.PI) / 2)}%`,
                                  transform: 'translate(-50%, -50%)',
                                  animationDelay: `${i * 0.5}s`,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Grid overlay */}
                        <div className="absolute inset-0 grid-background opacity-20" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Geodel Section */}
        <section className="py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Why Choose Geodel
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A partner that understands subsurface complexity.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Domain Expertise", desc: "Built by geoscientists for geoscientists" },
                { title: "Proven Methods", desc: "Rigorous, validated approaches to subsurface analysis" },
                { title: "Integrated Platform", desc: "One system from data to decision" },
                { title: "Clear Outputs", desc: "Actionable intelligence, not just data" },
                { title: "Rapid Delivery", desc: "Fast turnaround without compromising quality" },
                { title: "Collaborative", desc: "We work alongside your team" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-background opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about your project and discover how Geodel can help.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-purple">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
