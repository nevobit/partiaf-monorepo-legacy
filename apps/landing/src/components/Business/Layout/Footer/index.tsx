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
    <footer className="h-auto w-full flex flex-col relative text-accent">
      <div className="bg-secondary flex justify-center items-center pb-4 pt-12 bg-no-repeat bg-co w-full h-auto ">
        <div className="w-11/12 md:w-4/5 h-min md:justify-between flex flex-col  md:flex-row gap-x-7 z-30">
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
                <FacebookIcon />
              </Link>
              <Link href="#">
                <TwitterIcon />
              </Link>
              <Link href="/#">
                <InstagramIcon />
              </Link>
              <Link href="/#">
                <YoutubeIcon />
              </Link>
            </div>
          </section>
          <section className="md:mt-5  md:w-fit">
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
          <section className="md:w-2/5 md:mt-5">
            <p className="text-lg 2xl:text-xl">Newsletter</p>
            <div className="flex items-center">
              <ArrowWhite />
              <p className="text-sm leading-6 my-3 2xl:text-lg ml-1">
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
              <button className="bg-[#C0C0C1] hover:bg-[#9f9f9f] rounded-xl grid place-content-center absolute right-0 top-0 bottom-0 h-full w-[68px]">
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
