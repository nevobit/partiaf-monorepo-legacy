import Image from "next/image";
import Idea from "public/images/ideas.png";

export default function AboutUsSection(): JSX.Element {
  const TITLE = "QUIENES SOMOS";
  return (
    <section className="relative w-11/12 lg:w-4/5 min-h-screen h-full flex flex-col justify-items-center justify-center items-center my-28 gap-9 lg:flex-row">
      <div className="max-w-[552px]">
        <p className="sectionTitle">{TITLE}</p>
        <p className="sectionDescription">
          ¡Somos una <span className="bg-primary"> Startup </span>con un modelo
          B2B y B2C de rápido crecimiento que está revolucionando el mundo de
          ocio y entretenimiento!
        </p>
        <p className="sectionTitle">
          ¡Una solución segura y exclusiva donde lo conectamos con los sitios de
          "Restaurantes, Bares y Discotecas" que mas les guste!
        </p>
      </div>
      <Image
        src={Idea}
        alt="idea image"
        className="2xl:w-[657px] 2xl:h-[984px]"
      />
    </section>
  );
}
