import Image from "next/image";
import PersonWriting from "public/images/personWriting.jpg";

export default function AboutSection(): JSX.Element {
  return (
    <div id="empresas" className="w-11/12 pt-16 lg:pt-20 pb-7">
      <div className="businessTitles">
        <div className="lineYellow" />
        <p>PARTIAF</p>
      </div>
      <div className="grid md:grid-cols-2 grid-rows-[grid-rows-[auto_200px_200px_200px] gap-x-3 gap-y-3 justify-items-center items-center">
        <div className="self-end">
          <p className="businessSubtitles">
            Somos una Startup con un modelo B2B y B2C de rápido crecimiento que
            está revolucionando el mundo del entretenimiento.
          </p>
        </div>
        <div className="md:justify-self-end row-span-2">
          <Image
            src={PersonWriting}
            alt="person writing"
            className="businessImages"
          />
        </div>
        <div className="row-start-2 row-end-3">
          <p className="businessDescription">
            Una solución fácil, segura y exclusiva para que tus clientes puedan
            comprar, reservar e interactuar en tiempo real con tu negocio. Esto
            mejorará su experiencia al interactuar con tu empresa, te permitirá
            conocer mejor a tus clientes y adaptar tu negocio a sus necesidades.
          </p>
        </div>
      </div>
    </div>
  );
}
