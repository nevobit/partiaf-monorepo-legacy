import { Layout } from "@/components";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWhatWeDo from "@/components/SectionWhatWeDo";
import RankingSection from "@/components/RankingSection";
import AboutUsSection from "@/components/AboutUsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import useTranslation from "next-translate/useTranslation";
import ReviewCard from "@/components/ReviewCard";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout
      title={t("common:home")}
      description={t("common:banner-description")}
    >
      <div className="w-full h-auto relative flex flex-col items-center">
        <Image
          className="absolute left-0 top-0  mix-blend-exclusion"
          src="/shapes/shape.svg"
          alt="shape"
          width={428}
          height={2056}
        />
        <Image
          className="absolute right-0 top-[1533px] mix-blend-exclusion"
          src="/shapes/shape2.svg"
          alt="shape"
          width={428}
          height={2056}
        />
        <Hero />
        <SectionWhatWeDo />
        <RankingSection />
        <AboutUsSection />
        <ReviewsSection />
        <ReviewCard />
        <ContactSection />
      </div>
    </Layout>
  );
}
