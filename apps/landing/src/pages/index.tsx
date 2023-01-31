import {
  Layout,
  Hero,
  SectionWhatWeDo,
  RankingSection,
  AboutUsSection,
  ReviewsSection,
  ContactSection,
  GraphicElements,
} from "@/components/People";

export default function Home(): JSX.Element {
  return (
    <Layout title="home" description="home">
      <div className="flex w-full h-auto relative flex-col items-center">
        <GraphicElements />
        <Hero />
        <SectionWhatWeDo />
        <RankingSection />
        <AboutUsSection />
        <ReviewsSection />
        <ContactSection />
      </div>
    </Layout>
  );
}
