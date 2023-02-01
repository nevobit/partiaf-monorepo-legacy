import Image from "next/image";
import Shape from "public/shapes/footerShape.png";
import ShapeDeskTop from "public/shapes/footerShadowDesktop.png";
import Link from "next/link";
import FacebookIcon from "public/icons/facebookIconWhite.svg";
import TwitterIcon from "public/icons/twitterIconWhite.svg";
import InstagramIcon from "public/icons/instagramIconWhite.svg";
import YoutubeIcon from "public/icons/youtubeIconWhite.svg";
import ArrowIcon from "public/icons/arrowIcon.svg";
import EmailIcon from "public/icons/emailIcon.svg";
import AdressIcon from "public/icons/locationIcon.svg";
import PhoneIcon from "public/icons/phoneIcon.svg";

export default function Footer(): JSX.Element {
  return (
    <footer className="footerContainer">
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
      <div className="bg-footer-mobile bg-cover md:bg-footer-destop bg-no-repeat footerGridContainer">
        <div className="footerGrid">
          <section>
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
            <div className="flex justify-around lg:justify-between items-center mb-11 lg:mb-2 lg:mt-16 z-30 pr-5">
              <Link href="/#" aria-label="See facebook">
                <FacebookIcon />
              </Link>
              <Link href="#" aria-label="See twitter">
                <TwitterIcon />
              </Link>
              <Link href="/#" aria-label="See instagram">
                <InstagramIcon />
              </Link>
              <Link href="/#">
                <YoutubeIcon aria-label="See youtube" />
              </Link>
            </div>
          </section>
          <section className="lg:col-start-3 self-center">
            <p className="mb-5 text-lg 2xl:text-xl">Dirección de la oficina</p>
            <div className="flex flex-col gap-5 mb-7">
              <div className="flex items-center gap-2 ">
                <PhoneIcon />
                <p className="flex-1 text-sm 2xl:text-lg">+57-321-534345</p>
              </div>
              <div className="flex items-center gap-2">
                <AdressIcon />
                <p className="flex-1 text-sm 2xl:text-lg">
                  Calle 23 Carrera 20 Floresta{" "}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon />
                <p className="flex-1 text-sm 2xl:text-lg">info@partiaf.com</p>
              </div>
            </div>
          </section>
          <section className="self-center">
            <p className="text-lg 2xl:text-xl">Newsletter</p>
            <p className="text-sm leading-6 my-3 2xl:text-lg">
              Suscríbase a nuestro boletín para recibir nuestra última
              actualización y novedades.
            </p>
            <div className="h-16 relative box overflow-hidden max-w-[280px] md:max-w-[366px]">
              <input
                type="email"
                placeholder="Email address"
                className="w-full text-base font-light h-full overflow-hidden input bg-accent/10 backdrop-opacity-[0.08] placeholder:text-accent placeholder:font-light text-accent pr-20"
              />
              <button
                aria-label="Submit email"
                className="btn btn-primary absolute right-0 top-0 bottom-0 h-full w-[68px]"
              >
                <ArrowIcon />
              </button>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-[#111000] h-[87px] z-20 text-accent flex justify-center items-center text-lg">
        <p>© 2023 Partiaf. All rights reserved</p>
      </div>
    </footer>
  );
}
