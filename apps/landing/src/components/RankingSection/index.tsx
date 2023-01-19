import Image from "next/legacy/image";

export default function RankingSection() {
  return (
    <section className="w-full h-[487px] bg-gradient-to-b from-[#221B00] to-[#4E3D00] z-10">
      <div className="container w-full h-full grid grid-cols-autoColumn gap-6 items-center justify-center px-1">
        <div className="flex flex-col gap-4">
          <div className="bg-accent h-24 w-24 rounded-full flex justify-center items-center self-center">
            <Image
              src="/icons/downloadIcon.svg"
              alt="download icon"
              width={53.56}
              height={37.5}
            />
          </div>
          <div className="text-white text-left">
            <p className="font-bold text-4xl mb-2">1800+</p>
            <p className="text-xl font-light leading-5">Descargas</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-accent h-24 w-24 rounded-full flex justify-center items-center self-center">
            <Image
              src="/icons/heartIcon.svg"
              alt="download icon"
              width={53.56}
              height={37.5}
            />
          </div>
          <div className="text-white text-left">
            <p className="font-bold text-4xl mb-2">1500+</p>
            <p className="text-xl font-light leading-5">Clientes Felices</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-accent h-24 w-24 rounded-full flex justify-center items-center self-center">
            <Image
              src="/icons/usersIcon.svg"
              alt="download icon"
              width={53.56}
              height={37.5}
            />
          </div>
          <div className="text-white text-left">
            <p className="font-bold text-4xl mb-2">7000+</p>
            <p className="text-xl font-light leading-5">Usuarios Activos</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-accent h-24 w-24 rounded-full flex justify-center items-center self-center">
            <Image
              src="/icons/starIcon.svg"
              alt="download icon"
              width={53.56}
              height={37.5}
            />
          </div>
          <div className="text-white text-left">
            <p className="font-bold text-4xl mb-2">1200+</p>
            <p className="text-xl font-light leading-5">Testimonios</p>
          </div>
        </div>
      </div>
    </section>
  );
}
