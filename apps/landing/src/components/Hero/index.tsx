import Image from "next/legacy/image";

export default function Hero() {
  return (
    <section className="h-screen w-full bg-[url('/images/backgroundMobile.jpg')] bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-11/12 h-full relative">
        <h1 className="text-neutral-content uppercase text-center text-3xl absolute top-28">
          CONECTA, COMPRA
          <span className="text-primary"> Y COMPARTE EXPERIENCIAS </span>
          INOLVIDABLES
        </h1>
        <div className="flex flex-col gap-4 w-full items-center absolute bottom-5">
          <div className="flex gap-2 badge bg-transparent border-primary w-64 border h-[75px]">
            <Image
              src="/icons/appleIcon.svg"
              alt="play store icon"
              width={44.84}
              height={49.35}
            />
            <div className="flex-1">
              <p className="text-base">Download on the</p>
              <p className="text-3xl">App Store</p>
            </div>
          </div>
          <div className="flex gap-2 badge bg-transparent border-primary w-64 border h-[75px]">
            <Image
              src="/icons/playStoreIcon.svg"
              alt="play store icon"
              width={44.84}
              height={49.35}
            />
            <div className="flex-1">
              <p className="text-base">Download on the</p>
              <p className="text-3xl">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
