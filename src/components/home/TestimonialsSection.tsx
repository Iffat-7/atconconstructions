import { useState, useEffect } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    content: "ATCON Construction delivered our corporate headquarters on time and exceeded our quality expectations. Their professionalism and attention to detail are unmatched.",
    author: "Ahmad Khan",
    position: "CEO, TechVision Ltd",
  },
  {
    id: 2,
    content: "Working with ATCON on our university campus was a pleasure. Their team understood our vision and brought it to life with remarkable precision.",
    author: "Dr. Fatima Malik",
    position: "Director, Educational Trust",
  },
  {
    id: 3,
    content: "The quality of ATCON Pavers transformed our commercial plaza. Their products are durable, aesthetically pleasing, and competitively priced.",
    author: "Rashid Ali",
    position: "Property Developer",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Testimonials</span>
            <h2 className="heading-section text-foreground mt-3">
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-16 h-16 text-accent/20" />
              
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-medium border border-border/50">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={cn(
                      "transition-all duration-500",
                      index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                    )}
                  >
                    <p className="text-xl md:text-2xl text-foreground font-heading italic leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === activeIndex ? "bg-accent w-8" : "bg-border hover:bg-muted-foreground"
                  )}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
