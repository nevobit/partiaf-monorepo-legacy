import Image from "next/legacy/image";

export default function RankingSection(): JSX.Element {
  return (
    <section className="w-full h-[487px] bg-gradient-to-b from-[#221B00] to-[#4E3D00] z-10">
      <div className="w-full h-full grid grid-cols-autoColumn items-center justify-center px-3 sm:px-20 py-3 gap-y-6 gap-x-1 lg:gap-x-20 2xl:gap-x-40">
        <div className="ratingContainer">
          <div className="ratingImageContainer ">
            <Image
              src="/icons/downloadIcon.svg"
              alt="download icon"
              width={53.56}
              height={37.5}
            />
          </div>
          <div className="ratingTextContainer">
            <p className="rating">1800+</p>
            <p className="ratingTitle">Descargas</p>
          </div>
        </div>
        <div className="ratingContainer">
          <div className="ratingImageContainer ">
            <Image
              src="/icons/heartIcon.svg"
              alt="download icon"
              width={53.56}
              height={37.5}
            />
          </div>
          <div className="ratingTextContainer">
            <p className="rating">1500+</p>
            <p className="ratingTitle">Clientes Felices</p>
          </div>
        </div>
        <div className="ratingContainer">
          <div className="ratingImageContainer ">
            <Image
              src="/icons/usersIcon.svg"
              alt="download icon"
              width={53.56}
              height={37.5}
            />
          </div>
          <div className="ratingTextContainer">
            <p className="rating">7000+</p>
            <p className="ratingTitle">Usuarios Activos</p>
          </div>
        </div>
        <div className="ratingContainer">
          <div className="ratingImageContainer ">
            <Image
              src="/icons/starIcon.svg"
              alt="download icon"
              width={53.56}
              height={37.5}
            />
          </div>
          <div className="ratingTextContainer">
            <p className="rating">1200+</p>
            <p className="ratingTitle">Testimonios</p>
          </div>
        </div>
      </div>
      <div id="quienesSomos" />
    </section>
  );
}
