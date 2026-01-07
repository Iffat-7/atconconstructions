import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Layers, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="ATCON Construction site at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,10%,0.85)] via-[hsl(220,20%,10%,0.7)] to-[hsl(220,20%,10%,0.5)]" />
      </div>

      {/* Content */}
      <div className="relative container-wide pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-white/90">Premium Construction Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-display text-white mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            We Build{' '}
            <span className="relative inline-block">
              Great
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent rounded-full" />
            </span>{' '}
            Projects
          </h1>

          {/* Subheading */}
          <p className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            From iconic structures to sustainable solutions, ATCON Construction delivers excellence 
            in every project. Civil construction, premium pavers, exquisite carpets, and renewable energy — 
            all under one trusted name.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <Link to="/services#construction" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Construction</span>
            </Link>
            <Link to="/services#pavers" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">ATCON Pavers</span>
            </Link>
            <Link to="/services#carpets" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9h16M4 15h16M9 4v16M15 4v16" />
                </svg>
              </div>
              <span className="text-sm font-medium">Ather Carpets</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
