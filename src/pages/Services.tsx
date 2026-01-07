import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Building2, HardHat, Layers, Zap, 
  ClipboardCheck, Truck, Ruler, Sun, Home, Building, 
  GraduationCap, Landmark, Shield, CheckCircle 
} from 'lucide-react';

const constructionServices = [
  { icon: Home, title: 'Residential Construction', description: 'Custom homes, villas, and housing societies with premium finishes.' },
  { icon: Building, title: 'Commercial Buildings', description: 'Office complexes, shopping centers, and business parks.' },
  { icon: GraduationCap, title: 'Educational Facilities', description: 'Schools, colleges, and university campuses.' },
  { icon: Landmark, title: 'Institutional Buildings', description: 'Hospitals, government offices, and public facilities.' },
];

const machinery = [
  'Tower Cranes', 'Mobile Cranes', 'Concrete Batching Plants', 
  'Concrete Pumps', 'Excavators', 'Bulldozers', 'Loaders', 'Compactors'
];

const paverProducts = [
  'Interlocking Pavers', 'Concrete Blocks', 'Boundary Walls', 
  'Garden Curbs', 'Drainage Covers', 'Custom Designs'
];

const carpetTypes = [
  'Hand-Knotted Wool', 'Silk Blend Rugs', 'Traditional Designs',
  'Contemporary Patterns', 'Custom Orders', 'Restoration Services'
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Services</span>
              <h1 className="heading-display text-foreground mt-3 mb-6">
                Comprehensive Solutions for Every Need
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From construction to carpets, pavers to solar panels — ATCON's integrated 
                ecosystem delivers excellence across multiple industries.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Construction Services */}
      <section id="construction" className="section-padding bg-background scroll-mt-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-accent" />
                </div>
                <h2 className="heading-section text-foreground mb-6">
                  Civil & Structural Construction
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  ATCON Construction delivers comprehensive civil engineering and construction 
                  services. From foundation to finishing, our expert teams ensure quality at 
                  every stage with modern techniques and materials.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {constructionServices.map((service) => (
                    <div key={service.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="gold" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                  alt="Construction site"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Project Management */}
      <section id="management" className="section-padding bg-secondary/30 scroll-mt-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-strong lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                  alt="Project management"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="lg:order-2">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <HardHat className="w-7 h-7 text-accent" />
                </div>
                <h2 className="heading-section text-foreground mb-6">
                  Project Management & Supervision
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our experienced project managers ensure seamless execution from planning to 
                  handover. We provide comprehensive supervision, quality assurance, and 
                  logistics management.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: ClipboardCheck, text: 'Quality Assurance & Control' },
                    { icon: Truck, text: 'Logistics & Supply Chain Management' },
                    { icon: Ruler, text: 'Technical Supervision' },
                    { icon: Shield, text: 'Safety Compliance' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Machinery */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="heading-section text-primary-foreground mb-4">
                Machinery & Plant Resources
              </h2>
              <p className="text-primary-foreground/70">
                Modern equipment fleet for efficient project execution
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {machinery.map((item) => (
                <div
                  key={item}
                  className="px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20"
                >
                  <span className="text-primary-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ATCON Pavers */}
      <section id="pavers" className="section-padding bg-background scroll-mt-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Layers className="w-7 h-7 text-accent" />
                </div>
                <h2 className="heading-section text-foreground mb-6">
                  ATCON Pavers & Concrete Products
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Transform your landscapes with our premium interlocking pavers and concrete 
                  products. Manufactured to international standards, our products combine 
                  durability with aesthetic excellence.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {paverProducts.map((product) => (
                    <div key={product} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{product}</span>
                    </div>
                  ))}
                </div>

                <Button variant="gold" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    View Products <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
                  alt="Paver installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ather Carpets */}
      <section id="carpets" className="section-padding bg-secondary/30 scroll-mt-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-strong lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1200&q=80"
                  alt="Traditional carpet weaving"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="lg:order-2">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9h16M4 15h16M9 4v16M15 4v16" />
                  </svg>
                </div>
                <h2 className="heading-section text-foreground mb-6">
                  Ather Corporation — Carpets & Rugs
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Experience the artistry of hand-knotted premium wool carpets from Ather 
                  Corporation. Each piece is a masterwork of traditional craftsmanship, 
                  exported to discerning clients worldwide.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {carpetTypes.map((type) => (
                    <div key={type} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{type}</span>
                    </div>
                  ))}
                </div>

                <Button variant="gold" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Explore Collection <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Renewable Energy */}
      <section id="energy" className="section-padding bg-background scroll-mt-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-accent" />
                </div>
                <h2 className="heading-section text-foreground mb-6">
                  Renewable Energy Solutions
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Embrace sustainable energy with ATCON's renewable energy division. We design, 
                  install, and maintain solar power systems for commercial and residential 
                  applications, reducing your carbon footprint and energy costs.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Sun, text: 'Solar Panel Installation' },
                    { icon: Zap, text: 'Grid-Tied Systems' },
                    { icon: Building, text: 'Commercial Solutions' },
                    { icon: Home, text: 'Residential Systems' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Button variant="gold" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                  alt="Solar panels installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-section text-primary-foreground mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-primary-foreground/70 mb-10">
                Our team is ready to discuss your specific requirements and provide 
                tailored solutions for your project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Us <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outlineLight" size="xl" asChild>
                  <Link to="/projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
