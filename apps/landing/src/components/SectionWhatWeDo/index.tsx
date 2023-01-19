import Image from "next/legacy/image";
import Party from "/public/images/party.png";

export default function SectionWhatWeDo() {
  return (
    <section className="relative w-11/12 h-full grid lg:grid-cols-2 justify-items-center items-center my-28 gap-9 lg:gap-0">
      <div>
        <div id="queHacemos" />
        <p className="text-base-300 text-2xl">QUE HACEMOS</p>
        <p className="text-3xl font-medium leading-[48px]">
          <span className="bg-primary">Conecta </span>con las personas que están
          cerca y hacen parte de la comunidad partiaf
        </p>
      </div>
      <div className="lg:grid  lg:row-start-1 lg:row-end-3 lg:col-span-1">
        <Image src={Party} alt="party" />
      </div>
      <div className="text-2xl w-auto lg:justify-self-start lg:self-start">
        <div className="flex items-center gap-1">
          <Image
            src="/icons/checkIcon.svg"
            alt="check icon"
            width={25.31}
            height={18.88}
          />
          <p className="flex-1">Reservas</p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/icons/checkIcon.svg"
            alt="check icon"
            width={25.31}
            height={18.88}
          />
          <p className="flex-1">Compra</p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/icons/checkIcon.svg"
            alt="check icon"
            width={25.31}
            height={18.88}
          />
          <p className="flex-1">Comparte</p>
        </div>
      </div>
    </section>
  );
}
