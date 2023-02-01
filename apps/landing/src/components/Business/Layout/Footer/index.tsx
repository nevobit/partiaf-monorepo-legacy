import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "public/icons/facebookIconWhite.svg";
import TwitterIcon from "public/icons/twitterIconWhite.svg";
import InstagramIcon from "public/icons/instagramIconWhite.svg";
import YoutubeIcon from "public/icons/youtubeIconWhite.svg";
import ArrowIcon from "public/icons/arrowIcon.svg";
import EmailIcon from "public/icons/emailIcon.svg";
import AdressIcon from "public/icons/locationIcon.svg";
import PhoneIcon from "public/icons/phoneIcon.svg";
import ArrowWhite from "public/icons/arrowWhite.svg";

export default function Footer(): JSX.Element {
  return (
    <footer id="contactanos" className="footerContainer">
      <div className="bg-secondary footerGridContainer">
        <div className="h-7 w-7 2xl:w-12 2xl:h-12 rounded-full bg-primary absolute top-3 left-10 2xl:left-28" />
        <div className="h-12 w-12 2xl:h-24 2xl:w-24  rounded-full bg-primary absolute left-0" />
        <div className="footerGrid">
          <section className="flex flex-col">
            <Image
              src="/icons/partiafLogoWhite.svg"
              alt="partiaf icon"
              width={241.6}
              height={52.6}
              className="self-center lg:self-start 2xl:h-16 2xl:w-72"
            />
            <p className="text-lg my-7">
              Suscríbase a nuestro boletín para recibir nuestra última
              actualización y novedades Suscríbase a nuestro boletín para
              recibir.
            </p>
            <div className="flex justify-around  lg:justify-between items-center mb-11 lg:mb-2 lg:mt-16 z-30 pr-5">
              <Link href="/#" aria-label="See facebook">
                <FacebookIcon />
              </Link>
              <Link href="#" aria-label="See twitter">
                <TwitterIcon />
              </Link>
              <Link href="/#" aria-label="See instagram">
                <InstagramIcon />
              </Link>
              <Link href="/#" aria-label="See youtube">
                <YoutubeIcon />
              </Link>
            </div>
          </section>
          <section className="lg:col-start-3 lg:self-center">
            <p className="mb-5 text-lg 2xl:text-xl">Dirección de la oficina</p>
            <div className="flex flex-col gap-5 mb-7">
              <div className="flex items-center gap-2 ">
                <ArrowWhite />
                <div className="flex gap-2 items-center">
                  <PhoneIcon />
                  <p className="flex-1 text-sm 2xl:text-lg">+57-321-534345</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ArrowWhite />
                <div className="flex gap-2 items-center">
                  <AdressIcon />
                  <p className="flex-1 text-sm 2xl:text-lg">
                    Calle 23 Carrera 20 Floresta{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ArrowWhite />
                <div className="flex gap-2 items-center">
                  <EmailIcon />
                  <p className="flex-1 text-sm 2xl:text-lg">info@partiaf.com</p>
                </div>
              </div>
            </div>
          </section>
          <section className="lg:self-center">
            <p className="text-lg 2xl:text-xl ">Newsletter</p>
            <div className="flex py-3">
              <ArrowWhite className="w-8 mt-1" />
              <p className="text-sm leading-6  2xl:text-lg">
                Suscríbase a nuestro boletín para recibir nuestra última
                actualización y novedades.
              </p>
            </div>

            <div className="h-16 relative box overflow-hidden max-w-[280px] md:max-w-[366px]">
              <input
                type="email"
                placeholder="Email address"
                className="w-full text-base font-light h-full overflow-hidden input bg-accent/10 backdrop-opacity-[0.08] placeholder:text-accent placeholder:font-light text-accent pr-20"
              />
              <button
                aria-label="Submit email"
                className="bg-[#C0C0C1] hover:bg-[#9f9f9f] rounded-xl grid place-content-center absolute right-0 top-0 bottom-0 h-full w-[68px]"
              >
                <ArrowIcon />
              </button>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-secondary border-t border-accent h-[72px] z-20 text-accent flex justify-center items-center text-lg">
        <p>© 2023 Partiaf. All rights reserved</p>
      </div>
    </footer>
  );
}
