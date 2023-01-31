import Image from "next/image";
import location from "public/images/location.jpg";
import men from "public/images/men.jpg";

export default function GoalsSection(): JSX.Element {
  return (
    <div className="py-32 w-11/12">
      <div className="flex flex-col items-center">
        <div className="w-28 bg-primary h-2 rounded-xl" />
        <p className="font-bold text-3xl leading-[48px] ">
          POSICIÓNATE ENTRE LOS MEJORES
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-16 justify-items-center items-center mt-6 mb-32">
        <div>
          <p className="font-bold text-[28px] leading-10">
            Aparecer en el mapa de Partiaf te ayudará a aumentar la visibilidad
            de tu negocio, atraer más clientes y mejorar la confianza en tu
            empresa.
          </p>
        </div>
        <div>
          <Image src={location} alt="location" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-16 justify-items-center items-center">
        <div className="md:col-start-2 md:col-end-3">
          <p className="font-bold text-[28px] leading-10 mb-5">
            Todo en un solo portal
          </p>
          <p className="text-lg leading-7 text-[#676767]">
            Maneja todas las necesidades de tu empresa. Podrás crear tickets,
            recibir reservas, gestionar pagos, analizar el comportamiento de tus
            clientes, mejorar la eficiencia de tus operaciones. Con nuestra
            plataforma, podrás ahorrar tiempo y esfuerzo al automatizar tus
            procesos y obtener un mejor conocimiento sobre tu negocio.
          </p>
        </div>
        <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
          <Image src={men} alt="location" />
        </div>
      </div>
    </div>
  );
}
