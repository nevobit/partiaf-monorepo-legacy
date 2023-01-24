import Image from "next/image";
import Party from "public/images/party.png";

export default function SectionWhatWeDo(): JSX.Element {
  return (
    <section className="relative w-11/12 min-h-screen h-full grid lg:grid-cols-2 justify-items-center items-center my-28 gap-9 lg:gap-0">
      <div className="lg:self-end">
        <p className="sectionTitle">QUE HACEMOS</p>
        <p className="sectionDescription">
          <span className="bg-primary">Conecta </span>con las personas que están
          cerca y hacen parte de la comunidad partiaf
        </p>
      </div>
      <div className="lg:grid  lg:row-start-1 lg:row-end-3 lg:col-span-1">
        <Image
          src={Party}
          alt="party"
          className="2xl:w-[595px] 2xl:h-[892px]"
        />
      </div>
      <div className="text-2xl 2xl:text-4xl w-auto lg:justify-self-start lg:self-start">
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
