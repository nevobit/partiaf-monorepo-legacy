import Image from "next/image";
import PersonWriting from "public/images/personWriting.jpg";

export default function AboutSection(): JSX.Element {
  return (
    <div id="empresas" className="w-11/12 pt-4 lg:pt-20 pb-7">
      <div className="bussinesTitles">
        <div className="lineYellow" />
        <p>PARTIAF</p>
      </div>
      <div className="grid md:grid-cols-2 gap-x-3 gap-y-3 justify-items-center items-center">
        <div>
          <p className="businessSubtitles">
            Somos una Startup con un modelo B2B y B2C de rápido crecimiento que
            está revolucionando el mundo del entretenimiento.
          </p>
          <p className="businessDescription">
            Una solución fácil, segura y exclusiva para que tus clientes puedan
            comprar, reservar e interactuar en tiempo real con tu negocio. Esto
            mejorará su experiencia al interactuar con tu empresa, te permitirá
            conocer mejor a tus clientes y adaptar tu negocio a sus necesidades.
          </p>
        </div>
        <div className="md:justify-self-end">
          <Image
            src={PersonWriting}
            alt="person writing"
            className="bussinesImages"
          />
        </div>
      </div>
    </div>
  );
}
