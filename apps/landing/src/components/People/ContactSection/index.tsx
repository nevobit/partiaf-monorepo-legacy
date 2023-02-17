import Image from "next/image";

// forms
import Input from "@/forms/inputs/Input";
import Textarea from "@/forms/inputs/Textarea";
import conctatSchema from "@/forms/schemas/contactShema";

// hooks
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// images
import Women from "public/images/women.png";
import WomenDeskTop from "public/images/womenDesktop.png";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContactSection(): JSX.Element {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(conctatSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <section className="w-11/12 min-h-screen h-full mb-28 mt-7 gap-9 flex flex-col lg:flex lg:flex-row-reverse justify-center items-center z-20">
      <div className="mb-8 max-w-[617px] w-full">
        <p className="sectionTitle text-left mb-3">CONTACTO</p>
        <form
          className="bg-accent w-full min-h-[564px] h-auto grid-cols-2 grid items-center px-3 py-2 gap-3"
          onSubmit={onSubmit}
        >
          <p className="font-bold text-center text-xl col-span-2">
            ENVIANOS UN MENSAJE
          </p>
          <Input
            errorStyle="w-full mb-3 md:col-start-1 md:col-end-2"
            control={control}
            type="text"
            name="firstName"
            placeholder="Primer Nombre"
            className="input formInput  md:col-span-1"
          />
          <Input
            errorStyle="w-full mb-3 md:col-start-2 md:col-end-3 col-span-2"
            control={control}
            type="text"
            name="lastName"
            placeholder="Segundo Nombre"
            className="input formInput md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 "
          />
          <Input
            errorStyle="w-full mb-3"
            control={control}
            type="email"
            name="email"
            placeholder="Correo Electronico"
            className="input formInput "
          />
          <Textarea
            control={control}
            name="message"
            className="textarea formInput  h-52 "
            placeholder="Mensaje"
          />
          <button
            aria-label="Submit contact information with message"
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
        className="hidden lg:block lg:w-1/2 max-h-[572px] 2xl:w-[822px] 2xl:h-[572px]"
      />
    </section>
  );
}
