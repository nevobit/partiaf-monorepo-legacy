import Image from "next/image";
import PersonWriting from "public/images/personWriting.jpg";

export default function AboutSection(): JSX.Element {
  return (
    <div className="w-11/12 pt-8">
      <div className="flex flex-col items-center lg:mb-20">
        <div className="w-28 bg-primary h-2 rounded-xl" />
        <p className="font-bold text-4xl">PARTIAF</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-x-10 gap-y-3 justify-items-center items-center">
        <div>
          <p className="font-bold text-3xl leading-[45px]">
            Somos una Startup con un modelo B2B y B2C de rápido crecimiento que
            está revolucionando el mundo del entretenimiento.
          </p>
          <p className="text-lg leading-7 text-[#676767]">
            Una solución fácil, segura y exclusiva para que tus clientes puedan
            comprar, reservar e interactuar en tiempo real con tu negocio. Esto
            mejorará su experiencia al interactuar con tu empresa, te permitirá
            conocer mejor a tus clientes y adaptar tu negocio a sus necesidades.
          </p>
        </div>
        <div>
          <Image
            src={PersonWriting}
            alt="person writing"
            className="w-full md:h-full lg:h-[500px] h-80"
          />
        </div>
      </div>
    </div>
  );
}
