import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Award, FileDown, HardHat, ClipboardCheck, Leaf, Users } from 'lucide-react';

const qualityPillars = [
  {
    icon: ClipboardCheck,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes at every project stage ensuring compliance with international standards.',
  },
  {
    icon: HardHat,
    title: 'Safety First',
    description: 'Comprehensive safety protocols protecting our workers, clients, and project sites.',
  },
  {
    icon: Award,
    title: 'Material Excellence',
    description: 'Premium-grade materials sourced from certified suppliers for lasting durability.',
  },
  {
    icon: Users,
    title: 'Client Satisfaction',
    description: 'Client-centric approach with regular updates and transparent communication.',
  },
];

const certifications = [
  'ISO 9001:2015 Quality Management',
  'ISO 14001 Environmental Management',
  'OHSAS 18001 Safety Standards',
  'Pakistan Engineering Council Registered',
];

const safetyFeatures = [
  'Regular safety training and drills',
  'Personal protective equipment (PPE) compliance',
  'Site safety inspections and audits',
  'Emergency response protocols',
  'Hazard identification and reporting',
  'Incident investigation and prevention',
];

export default function QualitySafety() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Quality & Safety</span>
              <h1 className="heading-display text-foreground mt-3 mb-6">
                Uncompromising Standards in Every Project
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At ATCON, quality and safety are not just policies—they are the foundation 
                of everything we build. Our commitment ensures excellence in every structure.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 100}>
                <div className="p-8 bg-card rounded-2xl border border-border/50 h-full text-center card-hover">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <pillar.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* QA/QC Section */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <h2 className="heading-section text-primary-foreground mb-6">
                  Quality Assurance & Quality Control
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Our QA/QC system ensures that every aspect of construction meets or exceeds 
                  specified requirements. From material testing to workmanship inspection, 
                  we maintain stringent quality standards throughout the project lifecycle.
                </p>

                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-primary-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: 100, suffix: '%', label: 'Quality Compliance' },
                  { value: 0, suffix: '', label: 'Major Incidents' },
                  { value: 500, suffix: '+', label: 'Projects Inspected' },
                  { value: 98, suffix: '%', label: 'Client Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 text-center">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    <p className="text-primary-foreground/70 text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                  alt="Construction safety"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <HardHat className="w-7 h-7 text-accent" />
                </div>
                <h2 className="heading-section text-foreground mb-6">
                  Safety Protocols & Standards
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Safety is our top priority. We implement comprehensive safety management 
                  systems that protect our workforce, clients, and communities. Our safety 
                  record reflects our unwavering commitment to incident-free operations.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {safetyFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Environmental */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <h2 className="heading-section text-foreground mb-6">
                Environmental Responsibility
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We are committed to sustainable construction practices. Our environmental 
                management system ensures minimal ecological impact while maximizing 
                efficiency. From waste reduction to energy conservation, we build 
                responsibly for future generations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Waste Management', 'Energy Efficiency', 'Sustainable Materials', 'Green Building'].map((item) => (
                  <span key={item} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="heading-section text-foreground mb-4">
                Resources & Documentation
              </h2>
              <p className="text-muted-foreground">
                Download our brochures and documentation to learn more about our 
                quality and safety standards.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: 'Company Profile', desc: 'Complete overview of ATCON Construction' },
                { title: 'Quality Policy', desc: 'Our QA/QC standards and procedures' },
                { title: 'Safety Manual', desc: 'Comprehensive safety guidelines' },
              ].map((doc) => (
                <div key={doc.title} className="p-6 bg-card rounded-xl border border-border/50 text-center">
                  <FileDown className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-foreground mb-2">{doc.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{doc.desc}</p>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-section text-primary-foreground mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-xl text-primary-foreground/70 mb-10">
                Experience the ATCON difference. Let us build your project with 
                uncompromising quality and safety standards.
              </p>
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
