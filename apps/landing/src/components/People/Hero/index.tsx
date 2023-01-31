import Image from "next/image";
import Link from "next/link";

export default function Hero(): JSX.Element {
  return (
    <section
      id="inicio"
      className="h-screen w-full bg-hero-mobile md:bg-hero-desktop bg-cover bg-no-repeat flex flex-col items-center "
    >
      <div className="w-11/12 h-full relative flex flex-col  items-center md:justify-center md:items-start">
        <section className="flex flex-col justify-between max-w-lg 2xl:max-w-2xl h-full mt-28 mb-5 md:justify-center md:gap-6">
          <h1 className="text-neutral-content uppercase text-center text-3xl md:text-4xl 2xl:text-6xl">
            CONECTA, COMPRA
            <span className="text-primary"> Y COMPARTE EXPERIENCIAS </span>
            INOLVIDABLES
          </h1>
          <div className="flex flex-col gap-4 w-full items-center justify-center  md:flex-row">
            <div className="flex gap-2 badge bg-transparent border-primary w-56 border h-16 2xl:w-[313.1px] 2xl:h-[91.69px]">
              <Image
                src="/icons/appleIcon.svg"
                alt="play store icon"
                width={37.84}
                height={42.35}
                className="2xl:w-14 2xl:h-14"
              />
              <div className="flex-1">
                <p className="text-sm 2xl:text-lg">Download on the</p>
                <p className="text-2xl 2xl:text-4xl">App Store</p>
              </div>
            </div>
            <div className="flex gap-2 badge bg-transparent border-primary w-56 border h-16 2xl:w-[313.1px] 2xl:h-[91.69px]">
              <Image
                src="/icons/playStoreIcon.svg"
                alt="play store icon"
                width={37.84}
                height={42.35}
                className="2xl:w-14 2xl:h-14"
              />
              <div className="flex-1">
                <p className="text-sm 2xl:text-lg">Download on the</p>
                <p className="text-2xl 2xl:text-4xl">App Store</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="justify-center mb-11  w-full hidden md:flex">
        <div className="flex justify-between items-center w-60 z-20">
          <Link href="/#">
            <Image
              src="/icons/faceboo_icon.svg"
              alt="facebook icon"
              width={8.58}
              height={24.23}
            />
          </Link>
          <Link href="#">
            <Image
              src="/icons/twitter_icon.svg"
              alt="facebook icon"
              width={23.91}
              height={20.41}
            />
          </Link>
          <Link href="/#">
            <Image
              src="/icons/instagram_icon.svg"
              alt="facebook icon"
              width={25.57}
              height={25.57}
            />
          </Link>
          <Link href="/#">
            <Image
              src="/icons/youtube_icon.svg"
              alt="facebook icon"
              width={24.41}
              height={15.69}
            />
          </Link>
        </div>
      </div>
      <div id="queHacemos" />
    </section>
  );
}
