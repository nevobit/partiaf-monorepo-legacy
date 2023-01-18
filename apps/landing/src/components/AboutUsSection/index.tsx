import Image from "next/legacy/image";
import Idea from "/public/images/ideas.png";

export default function AboutUsSection() {
  return (
    <section className="relative w-11/12 lg:w-4/5 h-full flex flex-col justify-items-center items-center my-28 gap-9 lg:flex-row">
      <div className="max-w-[552px]">
        <p className="text-base-300 text-2xl">QUIENES SOMOS</p>
        <p className="text-3xl font-medium leading-[48px]">
          ¡Somos una <span className="bg-primary"> Startup </span>con un modelo
          B2B y B2C de rápido crecimiento que está revolucionando el mundo de
          ocio y entretenimiento!
        </p>
        <p className="text-base-300 text-2xl">
          ¡Una solución segura y exclusiva donde lo conectamos con los sitios de
          "Restaurantes, Bares y Discotecas" que mas les guste!
        </p>
      </div>
      <Image src={Idea} alt="idea image" />
    </section>
  );
}
