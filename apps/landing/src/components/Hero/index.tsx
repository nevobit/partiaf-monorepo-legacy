import Image from "next/legacy/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen w-full bg-[url('/images/backgroundMobile.jpg')] md:bg-[url('/images/DarkPhoneDesktop.jpg')] bg-cover bg-no-repeat flex flex-col items-center md:items-start md:px-20">
      <div className="w-11/12 h-full relative max-w-lg flex flex-col md:justify-center md:items-center">
        <div className="flex flex-col justify-between  h-full mt-28 mb-5 md:justify-center md:gap-6">
          <h1 className="text-neutral-content uppercase text-center text-3xl md:text-4xl ">
            CONECTA, COMPRA
            <span className="text-primary"> Y COMPARTE EXPERIENCIAS </span>
            INOLVIDABLES
          </h1>
          <section className="flex flex-col gap-4 w-full items-center  md:flex-row">
            <div className="flex gap-2 badge bg-transparent border-primary w-60 border h-16">
              <Image
                src="/icons/appleIcon.svg"
                alt="play store icon"
                width={44.84}
                height={49.35}
              />
              <div className="flex-1">
                <p className="text-sm">Download on the</p>
                <p className="text-2xl">App Store</p>
              </div>
            </div>
            <div className="flex gap-2 badge bg-transparent border-primary w-60 border h-16">
              <Image
                src="/icons/playStoreIcon.svg"
                alt="play store icon"
                width={44.84}
                height={49.35}
              />
              <div className="flex-1">
                <p className="text-sm">Download on the</p>
                <p className="text-2xl">App Store</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="justify-center mb-11  w-full hidden md:flex">
        <div className="flex justify-between items-center w-60">
          <Link href="/#">
            <Image
              src="/icons/faceboo_icon.svg"
              alt="facebook icon"
              width={13.58}
              height={29.23}
            />
          </Link>
          <Link href="#">
            <Image
              src="/icons/twitter_icon.svg"
              alt="facebook icon"
              width={28.91}
              height={23.41}
            />
          </Link>
          <Link href="/#">
            <Image
              src="/icons/instagram_icon.svg"
              alt="facebook icon"
              width={30.57}
              height={30.57}
            />
          </Link>
          <Link href="/#">
            <Image
              src="/icons/youtube_icon.svg"
              alt="facebook icon"
              width={29.41}
              height={20.69}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
