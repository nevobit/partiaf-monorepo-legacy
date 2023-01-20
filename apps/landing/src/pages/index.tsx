import { Layout } from "@/components";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWhatWeDo from "@/components/SectionWhatWeDo";
import RankingSection from "@/components/RankingSection";
import AboutUsSection from "@/components/AboutUsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <Layout title="Incio" description="Conecta con las personas que están cerca y hacen parte de la comunidad partiaf, ¡Una solución segura y exclusiva donde lo conectamos con los sitios de 'Restaurantes, Bares y Discotecas' que mas les guste!">
      <div className="w-full h-auto relative flex flex-col items-center">
        <Image
          className="absolute left-0 top-0  mix-blend-exclusion md:hidden"
          src="/shapes/shape.svg"
          alt="shape"
          width={328}
          height={900}
        />
        <Image
          className="absolute left-0 top-0  mix-blend-exclusion hidden md:block"
          src="/shapes/shape4.svg"
          alt="shape"
          width={700}
          height={900}
        />
        <Image
          className="absolute right-0 top-[1533px] mix-blend-exclusion"
          src="/shapes/shape2.svg"
          alt="shape"
          width={428}
          height={2056}
        />
        <Image
          className="absolute left-0 bottom-[250px] mix-blend-exclusion"
          src="/shapes/shape3.svg"
          alt="shape"
          width={428}
          height={2056}
        />
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
