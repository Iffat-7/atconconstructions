import { Building2, Layers, Zap, HardHat, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const services = [
  {
    icon: Building2,
    title: 'Civil & Structural Construction',
    description: 'Complete construction solutions for residential, commercial, educational, and institutional buildings.',
    link: '/services#construction',
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description: 'Expert supervision, QA/QC, logistics, and machinery deployment for seamless project execution.',
    link: '/services#management',
  },
  {
    icon: Layers,
    title: 'ATCON Pavers & Concrete',
    description: 'Premium interlocking pavers, concrete blocks, and landscaping products for lasting beauty.',
    link: '/services#pavers',
  },
  {
    icon: TrendingUp,
    title: 'Pre-Construction Planning',
    description: 'Feasibility studies, cost estimation, and strategic planning for project success.',
    link: '/services#planning',
  },
  {
    icon: Zap,
    title: 'Renewable Energy',
    description: 'Sustainable solar and clean energy solutions for commercial and residential applications.',
    link: '/services#energy',
  },
  {
    icon: Shield,
    title: 'Ather Carpets & Rugs',
    description: 'Hand-knotted premium wool carpets and rugs, crafted with traditional artistry.',
    link: '/services#carpets',
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">What We Do</span>
            <h2 className="heading-section text-foreground mt-3 mb-4">
              Comprehensive Solutions Under One Roof
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From groundbreaking construction to exquisite interiors, we deliver excellence across multiple 
              industries through our integrated business ecosystem.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <Link
                to={service.link}
                className="group block p-8 bg-card rounded-2xl border border-border/50 card-hover h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
