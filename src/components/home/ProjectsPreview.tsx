import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';

const categories = ['All', 'Educational', 'Commercial', 'Residential', 'Religious'];

const projects = [
  {
    id: 1,
    title: 'Lahore Business Center',
    category: 'Commercial',
    location: 'Lahore',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'University Campus Complex',
    category: 'Educational',
    location: 'Islamabad',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Grand Mosque Restoration',
    category: 'Religious',
    location: 'Lahore',
    image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Luxury Villa Estate',
    category: 'Residential',
    location: 'DHA Lahore',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Corporate Tower',
    category: 'Commercial',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1577760258779-e787a1733016?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Modern School Complex',
    category: 'Educational',
    location: 'Multan',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
];

export function ProjectsPreview() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Portfolio</span>
            <h2 className="heading-section text-foreground mt-3 mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Explore our diverse portfolio of completed projects showcasing excellence in design, 
              quality, and execution.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <Link
                to={`/projects/${project.id}`}
                className="group block rounded-2xl overflow-hidden card-hover"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-accent text-xs font-medium text-charcoal rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-heading font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm">{project.location}</p>
                  </div>
                </div>
                <div className="p-6 bg-card border border-border/50 group-hover:border-accent/30 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.location}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal delay={300}>
          <div className="text-center mt-12">
            <Button variant="outlineDark" size="lg" asChild>
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
