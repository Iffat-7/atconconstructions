import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { StatsSection } from '@/components/home/StatsSection';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ProjectsPreview } from '@/components/home/ProjectsPreview';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutPreview />
      <ProjectsPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
