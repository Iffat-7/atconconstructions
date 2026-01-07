import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const stats = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 150, suffix: '+', label: 'Skilled Professionals' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container-wide relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="heading-section text-primary-foreground">
              Building Trust Through Numbers
            </h2>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="text-center">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-primary-foreground/70 mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
