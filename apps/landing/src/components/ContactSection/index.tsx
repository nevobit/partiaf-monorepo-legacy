import { useForm } from "react-hook-form";
import Image from "next/image";
import Women from "/public/images/women.png";
import WomenDeskTop from "/public/images/womenDesktop.png";
import Input from "@/forms/inputs/Input";
import Textarea from "@/forms/inputs/Textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import conctatSchema from "@/forms/schemas/contactShema";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(conctatSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    mode: "onChange",
  });
  const onSubmit = () => console.log("data");

  return (
    <section className="w-11/12 h-full my-28 gap-9 flex flex-col lg:flex lg:flex-row-reverse justify-center items-center z-20">
      <div className="mb-8 max-w-[617px] w-full">
        <div id="contacto" />
        <p className="text-base-300 text-2xl text-left mb-3">CONTACTO</p>
        <form
          className="bg-accent w-full min-h-[564px] h-auto grid-cols-2 grid items-center px-3 py-2 gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="font-bold text-center text-xl col-span-2">
            ENVIANOS UN MENSAJE
          </p>
          <Input
            errorStyle="w-full mb-3 col-span-2 md:col-start-1 md:col-end-2"
            control={control}
            type="text"
            name="firstName"
            placeholder="Primer Nombre"
            className="input rounded-none bg-base-200 focus:outline-none placeholder:text-primary-content w-full h-12 col-span-2 md:col-span-1"
          />
          <Input
            errorStyle="w-full mb-3 md:col-start-2 md:col-end-3 col-span-2"
            control={control}
            type="text"
            name="lastName"
            placeholder="Segundo Nombre"
            className="input  rounded-none bg-base-200 focus:outline-none placeholder:text-primary-content h-12 w-full col-span-2 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 "
          />
          <Input
            errorStyle="w-full mb-3 col-span-2"
            control={control}
            type="email"
            name="email"
            placeholder="Correo Electronico"
            className="input rounded-none bg-base-200 focus:outline-none placeholder:text-primary-content h-12  w-full col-span-2"
          />
          <Textarea
            control={control}
            name="message"
            className="textarea rounded-none focus:outline-none placeholder:text-primary-content h-52  bg-base-200 col-span-2"
            placeholder="Mensaje"
          />
          <button
            disabled={!isValid}
            className="btn btn-primary font-bold text-2xl w-full col-span-2"
          >
            ENVIAR
          </button>
        </form>
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
