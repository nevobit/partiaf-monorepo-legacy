import Image from "next/image";
import Link from "next/link";
import Businessman from "public/images/businessman.png";
import Facebook from "public/icons/facebookGray.svg";
import Twitter from "public/icons/twitterDark.svg";
import Instragram from "public/icons/instagramDark.svg";
import Youtube from "public/icons/youtubeDark.svg";

export default function Hero(): JSX.Element {
  return (
    <div className="hero min-h-screen w-full bg-heroBusiness-desktop flex flex-col justify-center">
      <div className="hero-content flex flex-col relative">
        <div className="grid md:grid-cols-2 justify-center justify-items-center">
          <p className="font-bold text-[34px] leading-[51px] md:self-end">
            Conecta con tus clientes y mejora su experiencia
          </p>
          <div>
            <p className="text-lg leading-7 text-base-400 md:py-5">
              Somos una plataforma que facilita la conexión entre negocios de
              entretenimiento y personas. Ofrecemos herramientas que permiten a
              las empresas optimizar y automatizar sus procesos diarios,
              mejorando su eficiencia y ayudándoles conocer mejor a sus
              clientes.
            </p>
            <div className="flex justify-center md:justify-start pt-5">
              <button className="btn btn-secondary lowercase w-full lg:max-w-[400px] h-[55.85px]">
                Inicia con nosotros
              </button>
            </div>
          </div>
          <div className="row-start-2 row-end-3 md:row-start-1 md:row-end-3 md:col-end-3 ">
            <Image src={Businessman} alt="businessman" />
          </div>
        </div>
        <div className="w-full flex justify-center md:mt-16">
          <div className="w-40 flex justify-between items-center ">
            <Link href="#">
              <Facebook />
            </Link>
            <Link href="#">
              <Twitter />
            </Link>
            <Link href="#">
              <Instragram />
            </Link>
            <Link href="#">
              <Youtube />
            </Link>
          </div>
          <button className="btn btn-primary absolute lg:right-0 lg:bottom-0  bottom-24 right-5 h-16 w-16 rounded-full grid place-content-center font-bold text-base">
            FAQ
          </button>
        </div>
      </div>
    </div>
  );
}
