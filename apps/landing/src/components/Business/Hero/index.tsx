import Image from "next/image";
import Link from "next/link";
import Businessman from "public/images/businessman.png";
import Facebook from "public/icons/facebookGray.svg";
import Twitter from "public/icons/twitterDark.svg";
import Instagram from "public/icons/instagramDark.svg";
import Youtube from "public/icons/youtubeDark.svg";
import backGround from "public/images/BackgroundForBusiness.png";

export default function Hero(): JSX.Element {
  return (
    <div
      id="inicio"
      className="hero min-h-screen w-full relative flex flex-col justify-center"
    >
      <Image
        src={backGround}
        alt="background"
        className="h-full w-full absolute top-0 bottom-0 left-0 right-0 object-cover"
      />
      <div className="w-11/12 p-4 gap-4 grid place-content-center relative lg:mt-20">
        <div className="grid md:grid-cols-2 justify-center justify-items-center">
          <p className="font-bold text-[34px] 2xl:text-[58px] leading-[51px] 2xl:leading-[70px]  md:self-end">
            Conecta con tus clientes y mejora su experiencia
          </p>
          <div>
            <p className="businessDescription md:py-10">
              Somos una plataforma que facilita la conexión entre negocios de
              entretenimiento y personas. Ofrecemos herramientas que permiten a
              las empresas optimizar y automatizar sus procesos diarios,
              mejorando su eficiencia y ayudándoles conocer mejor a sus
              clientes.
            </p>
            <div className="flex justify-center md:justify-start pt-5">
              <button
                aria-label="Start with us"
                className="btn btn-secondary lowercase w-full lg:max-w-[400px] h-[55.85px]"
              >
                Inicia con nosotros
              </button>
            </div>
          </div>
          <div className="self-center row-start-2 row-end-3 md:row-start-1 md:row-end-3 md:col-end-3 ">
            <Image src={Businessman} alt="businessman" />
          </div>
        </div>
        <div className="w-full flex justify-center md:mt-16">
          <div className="w-40 flex justify-between items-center ">
            <Link href="#" aria-label="See facebook">
              <Facebook />
            </Link>
            <Link href="#" aria-label="See twitter">
              <Twitter />
            </Link>
            <Link href="#" aria-label="See instagram">
              <Instagram />
            </Link>
            <Link href="#">
              <Youtube aria-label="See youtube" />
            </Link>
          </div>
          <button
            aria-label="Question button"
            className="btn btn-primary fixed z-40 lg:right-20 lg:bottom-5  bottom-5 right-8 h-16 w-16 2xl:h-24 2xl:w-24 rounded-full grid place-content-center font-bold text-base"
          >
            FAQ
          </button>
        </div>
      </div>
    </div>
  );
}
