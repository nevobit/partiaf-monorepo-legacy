import {
  Layout,
  Hero,
  PartiafCarousel,
  AboutSection,
  ManagementSection,
  BenefitsSection,
  GoalsSection,
  Reviews,
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
      <Reviews />
      <ArticlesSection />
    </Layout>
  );
}
