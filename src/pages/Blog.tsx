import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const categories = ['All', 'Construction Tips', 'Interior Design', 'Carpets', 'Pavers', 'Renewable Energy'];

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Tips for Successful Construction Project Management',
    excerpt: 'Learn the key principles that ensure your construction project stays on time and within budget.',
    category: 'Construction Tips',
    author: 'Engr. Faakhir Saeed',
    date: 'January 5, 2026',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Carpet for Your Home',
    excerpt: 'A comprehensive guide to selecting carpets that complement your interior design and lifestyle.',
    category: 'Carpets',
    author: 'Ather Design Team',
    date: 'January 2, 2026',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'The Rise of Solar Energy in Pakistan Construction',
    excerpt: 'Exploring the integration of renewable energy solutions in modern construction projects.',
    category: 'Renewable Energy',
    author: 'ATCON Energy Team',
    date: 'December 28, 2025',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Interlocking Pavers: Design Ideas for Your Outdoor Spaces',
    excerpt: 'Creative paver patterns and designs to transform your driveways, patios, and walkways.',
    category: 'Pavers',
    author: 'ATCON Pavers Team',
    date: 'December 20, 2025',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Modern Interior Design Trends for Commercial Spaces',
    excerpt: 'Stay ahead with the latest interior design trends shaping corporate and retail environments.',
    category: 'Interior Design',
    author: 'Design Department',
    date: 'December 15, 2025',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Sustainable Building Materials: A Complete Guide',
    excerpt: 'Understanding eco-friendly construction materials and their benefits for modern buildings.',
    category: 'Construction Tips',
    author: 'Engr. Faakhir Saeed',
    date: 'December 10, 2025',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Blog & Insights</span>
              <h1 className="heading-display text-foreground mt-3 mb-6">
                Expert Insights & Industry Updates
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stay informed with the latest trends, tips, and insights from the world of 
                construction, interior design, and sustainable development.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border/50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-accent hover:text-charcoal transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 100}>
                <article className="group bg-card rounded-2xl overflow-hidden border border-border/50 card-hover h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Load More */}
          <ScrollReveal delay={300}>
            <div className="text-center mt-12">
              <Button variant="outlineDark" size="lg">
                Load More Articles
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-section text-primary-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-primary-foreground/70 mb-8">
                Get the latest articles, industry updates, and exclusive insights 
                delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
                />
                <Button variant="gold" size="lg">
                  Subscribe
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-12 border border-border/50 text-center max-w-3xl mx-auto">
              <h2 className="heading-section text-foreground mb-4">
                Have a Story to Share?
              </h2>
              <p className="text-muted-foreground mb-8">
                We welcome guest contributions from industry experts. 
                Share your insights with our audience.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Our Editorial Team
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
