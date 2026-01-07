import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Award, Users, Building2 } from 'lucide-react';

const values = [
  { icon: Award, title: 'Quality Excellence', description: 'Uncompromising standards in every project we undertake.' },
  { icon: Users, title: 'Client Partnership', description: 'Building lasting relationships through trust and transparency.' },
  { icon: Target, title: 'Innovation', description: 'Embracing modern techniques and sustainable practices.' },
  { icon: Heart, title: 'Integrity', description: 'Ethical business practices and honest communication.' },
];

const timeline = [
  { year: '1998', title: 'Foundation', description: 'ATCON Construction established in Lahore.' },
  { year: '2005', title: 'Ather Corporation', description: 'Launched premium carpet and rug division.' },
  { year: '2012', title: 'ATCON Pavers', description: 'Expanded into concrete products and pavers.' },
  { year: '2020', title: 'Renewable Energy', description: 'Entered sustainable energy solutions market.' },
  { year: '2024', title: '500+ Projects', description: 'Milestone of 500 completed projects.' },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">About Us</span>
              <h1 className="heading-display text-foreground mt-3 mb-6">
                Building Pakistan's Future, One Project at a Time
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over two decades, ATCON Construction has been at the forefront of Pakistan's 
                construction industry, delivering excellence in civil construction, premium pavers, 
                exquisite carpets, and sustainable energy solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="p-8 bg-primary rounded-2xl text-primary-foreground h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">Our Mission</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To deliver exceptional construction services that exceed client expectations through 
                  innovation, quality craftsmanship, and sustainable practices. We strive to be the 
                  most trusted construction partner in Pakistan, building structures that stand the 
                  test of time.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="p-8 bg-card rounded-2xl border border-border/50 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading construction conglomerate in Pakistan, recognized for our 
                  integrated solutions spanning construction, manufacturing, and renewable energy. 
                  We envision transforming communities through sustainable development and 
                  architectural excellence.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section-padding bg-secondary/30">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Leadership</span>
              <h2 className="heading-section text-foreground mt-3">
                Visionary Leaders Driving Excellence
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-heading font-bold text-primary">MS</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                  Mian Muhammad Saeed
                </h3>
                <p className="text-accent font-medium mb-4">Founder & Chairman</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A visionary entrepreneur who established ATCON Construction with a commitment to 
                  quality and excellence. With decades of experience in the construction industry, 
                  he has guided the company's growth into a diversified conglomerate serving multiple 
                  sectors across Pakistan.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
                <div className="w-24 h-24 rounded-full bg-accent/10 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-heading font-bold text-accent">FS</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                  Engr. Faakhir Saeed
                </h3>
                <p className="text-accent font-medium mb-4">Managing Director</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A qualified civil engineer leading ATCON's operations with modern management 
                  practices and technical expertise. His strategic vision has expanded the company 
                  into renewable energy and enhanced its project management capabilities, 
                  ensuring consistent quality delivery.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Values</span>
              <h2 className="heading-section text-foreground mt-3">
                Principles That Guide Us
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="p-6 bg-card rounded-xl border border-border/50 text-center h-full">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Associated Businesses */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Ecosystem</span>
              <h2 className="heading-section text-primary-foreground mt-3">
                Associated Businesses
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
                <Building2 className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                  ATCON Pavers & Concrete
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Premium interlocking pavers, concrete blocks, and landscaping products manufactured 
                  to the highest quality standards.
                </p>
                <Link to="/services#pavers" className="text-accent text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
                <svg className="w-10 h-10 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9h16M4 15h16M9 4v16M15 4v16" />
                </svg>
                <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                  Ather Corporation
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Hand-knotted premium wool carpets and rugs, crafted with traditional artistry 
                  and exported worldwide.
                </p>
                <Link to="/services#carpets" className="text-accent text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
                <svg className="w-10 h-10 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                  Renewable Energy Division
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Sustainable solar and clean energy solutions for commercial and residential 
                  applications across Pakistan.
                </p>
                <Link to="/services#energy" className="text-accent text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Journey</span>
              <h2 className="heading-section text-foreground mt-3">
                Milestones of Excellence
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 100}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold font-heading">{item.year}</span>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-3">
                    <h3 className="font-heading font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 25, suffix: '+', label: 'Years Experience' },
              { value: 500, suffix: '+', label: 'Projects Completed' },
              { value: 150, suffix: '+', label: 'Team Members' },
              { value: 4, suffix: '', label: 'Business Divisions' },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-12 border border-border/50 text-center max-w-3xl mx-auto">
              <h2 className="heading-section text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how ATCON can bring your construction vision to life.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
