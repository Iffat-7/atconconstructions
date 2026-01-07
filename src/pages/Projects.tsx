import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const categories = ['All', 'Educational', 'Commercial', 'Residential', 'Religious'];

const projects = [
  {
    id: 1,
    title: 'Lahore Business Center',
    category: 'Commercial',
    location: 'Lahore',
    description: 'A state-of-the-art 15-story commercial complex featuring modern office spaces, retail areas, and underground parking.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 2,
    title: 'University Campus Complex',
    category: 'Educational',
    location: 'Islamabad',
    description: 'Complete university campus development including academic blocks, library, auditorium, and sports facilities.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 3,
    title: 'Grand Mosque Restoration',
    category: 'Religious',
    location: 'Lahore',
    description: 'Meticulous restoration and expansion of a historic mosque preserving traditional architecture while adding modern amenities.',
    image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 4,
    title: 'Luxury Villa Estate',
    category: 'Residential',
    location: 'DHA Lahore',
    description: 'Premium residential development featuring 50 luxury villas with contemporary design and smart home integration.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 5,
    title: 'Corporate Tower',
    category: 'Commercial',
    location: 'Karachi',
    description: 'A 20-story corporate headquarters featuring sustainable design, green terraces, and energy-efficient systems.',
    image: 'https://images.unsplash.com/photo-1577760258779-e787a1733016?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1577760258779-e787a1733016?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 6,
    title: 'Modern School Complex',
    category: 'Educational',
    location: 'Multan',
    description: 'K-12 educational facility with smart classrooms, science labs, sports complex, and performing arts center.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 7,
    title: 'Community Mosque',
    category: 'Religious',
    location: 'Faisalabad',
    description: 'Modern mosque design blending traditional Islamic architecture with contemporary elements.',
    image: 'https://images.unsplash.com/photo-1564769625688-5f3c63d04186?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1564769625688-5f3c63d04186?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 8,
    title: 'Residential Apartments',
    category: 'Residential',
    location: 'Lahore',
    description: 'High-end apartment complex with 200 units, rooftop amenities, and dedicated parking.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 9,
    title: 'Shopping Mall',
    category: 'Commercial',
    location: 'Rawalpindi',
    description: 'Multi-level shopping destination with international brands, food court, and entertainment zone.',
    image: 'https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?auto=format&fit=crop&w=1200&q=80',
    ],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Portfolio</span>
              <h1 className="heading-display text-foreground mt-3 mb-6">
                Projects That Define Excellence
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our diverse portfolio of completed projects across educational, 
                commercial, residential, and religious sectors.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-medium"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-card border border-border/50 card-hover"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-xs font-medium text-charcoal rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <p className="text-accent text-sm font-medium">
                      📍 {project.location}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-card rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video">
              <img
                src={selectedProject.images[0]}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl font-heading font-semibold text-foreground mt-3">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {selectedProject.description}
              </p>
              <p className="text-accent font-medium">
                📍 {selectedProject.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
