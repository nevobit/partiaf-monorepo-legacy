import {
  Layout,
  Hero,
  PartiafCarousel,
  AboutSection,
  ManagementSection,
  BenefitsSection,
  GoalsSection,
  ReviewsSection,
  ArticlesSection,
} from "../../components/Business/index";

export default function Businesses(): JSX.Element {
  return (
    <Layout title="Business" description="Business">
      <Hero />
      <PartiafCarousel />
      <AboutSection />
      <ManagementSection />
      <BenefitsSection />
      <GoalsSection />
      <ReviewsSection />
      <ArticlesSection />
    </Layout>
  );
}
