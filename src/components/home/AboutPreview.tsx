import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function AboutPreview() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                  alt="ATCON Construction team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-strong max-w-xs hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ISO Certified</p>
                    <p className="text-sm text-muted-foreground">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <ScrollReveal delay={200}>
            <div>
              <span className="text-accent font-medium text-sm tracking-wider uppercase">About ATCON</span>
              <h2 className="heading-section text-foreground mt-3 mb-6">
                A Legacy of Excellence in Construction
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Founded with a vision to transform Pakistan's construction landscape, ATCON Construction 
                  has grown into a trusted name delivering premium-quality projects across residential, 
                  commercial, educational, and institutional sectors.
                </p>
                <p>
                  Our integrated ecosystem includes ATCON Pavers & Concrete Products for landscaping excellence, 
                  Ather Corporation for hand-knotted carpets and rugs, and a growing Renewable Energy division 
                  focused on sustainable solutions.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Experienced Leadership',
                  'Quality Assurance',
                  'Timely Delivery',
                  'Client-Centric Approach',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <Button variant="gold" size="lg" asChild>
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
