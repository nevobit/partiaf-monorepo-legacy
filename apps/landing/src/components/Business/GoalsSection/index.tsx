import Image from "next/image";
import location from "public/images/location.jpg";
import men from "public/images/men.jpg";

export default function GoalsSection(): JSX.Element {
  return (
    <div className="pt-28 w-11/12">
      <div className="businessTitles">
        <div className="lineYellow" />
        <p>POSICIÓNATE ENTRE LOS MEJORES</p>
      </div>
      <div className="grid md:grid-cols-2 gap-y-16 gap-x-3 justify-items-center items-center mt-6 mb-32">
        <div>
          <p className="businessSubtitles">
            Aparecer en el mapa de Partiaf te ayudará a aumentar la visibilidad
            de tu negocio, atraer más clientes y mejorar la confianza en tu
            empresa.
          </p>
        </div>
        <div className="md:justify-self-end">
          <Image src={location} alt="location" className="businessImages" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-y-7 md:gap-y-0 gap-x-3 justify-items-center items-center lg:py-20">
        <div className="md:col-start-2 md:justify-self-start md:col-end-3 md:self-end">
          <p className="businessSubtitles mb-5">Todo en un solo portal</p>
        </div>
        <div className="md:row-start-1 md:row-end-3 md:justify-self-start">
          <Image src={men} alt="location" className="businessImages" />
        </div>
        <div className="md:self-start">
          <p className="businessDescription  md:col-start-1 md:col-end-2">
            Maneja todas las necesidades de tu empresa. Podrás crear tickets,
            recibir reservas, gestionar pagos, analizar el comportamiento de tus
            clientes, mejorar la eficiencia de tus operaciones. Con nuestra
            plataforma, podrás ahorrar tiempo y esfuerzo al automatizar tus
            procesos y obtener un mejor conocimiento sobre tu negocio.
          </p>
        </div>
      </div>

    </div>
  );
}
