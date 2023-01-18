import Image from "next/image";
import Women from "/public/images/women.png";
import WomenDeskTop from "/public/images/womenDesktop.png";

export default function ContactSection() {
  return (
    <section className="w-11/12 h-full my-28 gap-9 flex flex-col lg:flex lg:flex-row-reverse justify-center items-center z-20">
      <div className="mb-8 max-w-[617px] w-full">
        <p className="text-base-300 text-2xl text-left mb-3">CONTACTO</p>
        <div className="bg-accent w-full h-[564px] grid-cols-2 grid items-center px-3 py-2 gap-3">
          <p className="font-bold text-center text-xl col-span-2">
            ENVIANOS UN MENSAJE
          </p>
          <input
            type="text"
            placeholder="Primer Nombre"
            className="input rounded-none bg-base-200 focus:outline-none placeholder:text-primary-content w-full h-12 col-span-2 lg:col-span-1"
          />
          <input
            type="text"
            placeholder="Segundo Nombre"
            className="input rounded-none bg-base-200 focus:outline-none placeholder:text-primary-content h-12 w-full col-span-2 lg:col-start-2 lg:col-end-3"
          />
          <input
            type="email"
            placeholder="Correo Electronico"
            className="input rounded-none bg-base-200 focus:outline-none placeholder:text-primary-content h-12  w-full col-span-2 "
          />
          <textarea
            className="textarea rounded-none focus:outline-none placeholder:text-primary-content h-52  bg-base-200 col-span-2"
            placeholder="Mensaje"
          ></textarea>
          <button className="btn btn-primary font-bold text-2xl w-full col-span-2">
            ENVIAR
          </button>
        </div>
      </div>
      <Image src={Women} alt="women" className="lg:hidden" />
      <Image
        src={WomenDeskTop}
        alt="women"
        className="hidden lg:block lg:w-1/2 max-h-[500px]"
      />
    </section>
  );
}
