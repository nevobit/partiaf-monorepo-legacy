import Image from "next/image";
import Shape from "public/shapes/footerShape.png";
import ShapeDeskTop from "public/shapes/footerShadowDesktop.png";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="h-auto w-full flex flex-col relative text-secondary">
      <Image
        src={Shape}
        alt="shape"
        className="absolute h-full w-full mix-blend-exclusion md:hidden"
      />
      <Image
        src={ShapeDeskTop}
        alt="shape"
        className="absolute h-full w-full mix-blend-exclusion hidden md:block"
      />
      <div className="bg-footer-mobile bg-cover md:bg-footer-destop flex justify-center items-center pb-4 pt-12 bg-no-repeat bg-co w-full h-auto min-h-[680px] md:h-[479px]">
        <div className="w-11/12 md:w-4/5 h-min md:justify-between flex flex-col  md:flex-row gap-x-7  z-30">
          <section className="md:w-4/12 ">
            <Image
              src="/icons/partiafLogoWhite.svg"
              alt="partiaf icon"
              width={241.6}
              height={52.6}
            />
            <p className="text-lg my-7">
              Suscríbase a nuestro boletín para recibir nuestra última
              actualización y novedades Suscríbase a nuestro boletín para
              recibir.
            </p>
            <div className="flex justify-around  md:justify-between items-center mb-11 z-30 pr-5">
              <Link href="/#">
                <Image
                  src="/icons/facebookIconWhite.svg"
                  alt="facebook icon"
                  width={13.58}
                  height={29.23}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/twitterIconWhite.svg"
                  alt="facebook icon"
                  width={28.91}
                  height={23.41}
                />
              </Link>
              <Link href="/#">
                <Image
                  src="/icons/instagramIconWhite.svg"
                  alt="facebook icon"
                  width={30.57}
                  height={30.57}
                />
              </Link>
              <Link href="/#">
                <Image
                  src="/icons/youtubeIconWhite.svg"
                  alt="facebook icon"
                  width={29.41}
                  height={20.69}
                />
              </Link>
            </div>
          </section>
          <section className="md:w-4/12 md:mt-5 text-base">
            <p className="mb-5 text-lg">Dirección de la oficina</p>
            <div className="flex flex-col gap-5 mb-7">
              <div className="flex items-center gap-2 ">
                <Image
                  src="/icons/phoneIcon.svg"
                  alt="phone icon"
                  width={22}
                  height={29}
                />
                <p className="flex-1">+57-321-534345</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/locationIcon.svg"
                  alt="phone icon"
                  className="w-auto h-auto"
                  width={22}
                  height={29}
                />
                <p className="flex-1">Calle 23 Carrera 20 Floresta </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/emailIcon.svg"
                  alt="phone icon"
                  width={22}
                  height={29}
                  className="w-auto h-auto"
                />
                <p className="flex-1 ">info@partiaf.com</p>
              </div>
            </div>
          </section>
          <section className="md:w-4/12 md:mt-5">
            <p className="text-lg">Newsletter</p>
            <p className="text-base leading-6 my-3">
              Suscríbase a nuestro boletín para recibir nuestra última
              actualización y novedades.
            </p>
            <div className="h-16 relative box overflow-hidden">
              <input
                type="email"
                placeholder="Email address"
                className="w-full text-base font-light h-full overflow-hidden input bg-secondary/10 backdrop-opacity-[0.08] placeholder:text-secondary placeholder:font-light text-secondary pr-20"
              />
              <button className="btn btn-primary absolute right-0 top-0 bottom-0 h-full w-[68px]">
                <Image
                  src="/icons/arrowIcon.svg"
                  alt="arrow"
                  width={13}
                  height={20}
                />
              </button>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-[#111000] h-[87px] z-20 text-secondary flex justify-center items-center">
        <p>© 2023 Partiaf. All rights reserved</p>
      </div>
    </footer>
  );
}
