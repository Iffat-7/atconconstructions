import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section text-primary-foreground mb-6">
              Ready to Build Your Vision?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-10 leading-relaxed">
              Let's discuss your project requirements. Our team of experts is ready to help 
              you bring your construction dreams to life with quality and precision.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outlineLight" size="xl" asChild>
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/60">
              <a href="tel:+924235340515" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>+92-42-35340515</span>
              </a>
              <a href="mailto:info@atconconstruction.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@atconconstruction.com</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
