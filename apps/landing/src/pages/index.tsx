import { Layout } from "@/components";
import Image from "next/image";
import Party from "/public/images/party.png";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout
      title={t("common:home")}
      description={t("common:banner-description")}
    >
      <div className="w-full h-auto relative flex flex-col items-center">
        <Image
          className="absolute left-0 top-0  mix-blend-exclusion"
          src="/shapes/shape.svg"
          alt="shape"
          width={428}
          height={2056}
        />
        <Image
          className="absolute right-0 top-[1533px] mix-blend-exclusion"
          src="/shapes/shape2.svg"
          alt="shape"
          width={428}
          height={2056}
        />
        <section className="h-screen w-full bg-[url('/images/backgroundMobile.jpg')] bg-cover bg-no-repeat flex flex-col items-center">
          <div className="w-11/12 h-full relative">
            <h1 className="text-neutral-content uppercase text-center text-3xl absolute top-28">
              CONECTA, COMPRA
              <span className="text-primary"> Y COMPARTE EXPERIENCIAS </span>
              INOLVIDABLES
            </h1>
            <div className="flex flex-col gap-4 w-full items-center absolute bottom-5">
              <div className="flex gap-2 badge bg-transparent border-primary w-64 border h-[75px]">
                <Image
                  src="/icons/appleIcon.svg"
                  alt="play store icon"
                  width={44.84}
                  height={49.35}
                />
                <div className="flex-1">
                  <p className="text-base">Download on the</p>
                  <p className="text-3xl">App Store</p>
                </div>
              </div>
              <div className="flex gap-2 badge bg-transparent border-primary w-64 border h-[75px]">
                <Image
                  src="/icons/playStoreIcon.svg"
                  alt="play store icon"
                  width={44.84}
                  height={49.35}
                />
                <div className="flex-1">
                  <p className="text-base">Download on the</p>
                  <p className="text-3xl">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-11/12 h-full grid justify-items-center items-center my-28 gap-9">
          <div>
            <p className="text-base-300 text-2xl">QUE HACEMOS</p>
            <p className="text-3xl font-medium leading-[48px]">
              <span className="bg-primary">Conecta </span>con las personas que
              están cerca y hacen parte de la comunidad partiaf
            </p>
          </div>
          <div>
            <Image src={Party} alt="party" />
          </div>
          <div className="text-2xl">
            <div className="flex items-center gap-1">
              <Image
                src="/icons/checkIcon.svg"
                alt="check icon"
                width={25.31}
                height={18.88}
              />
              <p className="flex-1">Reservas</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="/icons/checkIcon.svg"
                alt="check icon"
                width={25.31}
                height={18.88}
              />
              <p className="flex-1">Compra</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="/icons/checkIcon.svg"
                alt="check icon"
                width={25.31}
                height={18.88}
              />
              <p className="flex-1">Comparte</p>
            </div>
          </div>
        </section>
        <section className="w-full h-[487px] bg-gradient-to-b from-[#221B00] to-[#4E3D00] z-10">
          <div className="w-full h-full grid grid-cols-autoColumn gap-6 items-center justify-center px-1">
            <div className="flex flex-col gap-4">
              <div className="bg-accent h-24 w-24 rounded-full flex justify-center items-center self-center">
                <Image
                  src="/icons/downloadIcon.svg"
                  alt="download icon"
                  width={53.56}
                  height={37.5}
                />
              </div>
              <div className="text-white text-left">
                <p className="font-bold text-4xl mb-2">1800+</p>
                <p className="text-xl font-light leading-5">Descargas</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-accent h-24 w-24 rounded-full flex justify-center items-center self-center">
                <Image
                  src="/icons/heartIcon.svg"
                  alt="download icon"
                  width={53.56}
                  height={37.5}
                />
              </div>
              <div className="text-white text-left">
                <p className="font-bold text-4xl mb-2">1500+</p>
                <p className="text-xl font-light leading-5">Clientes Felices</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-accent h-24 w-24 rounded-full flex justify-center items-center self-center">
                <Image
                  src="/icons/usersIcon.svg"
                  alt="download icon"
                  width={53.56}
                  height={37.5}
                />
              </div>
              <div className="text-white text-left">
                <p className="font-bold text-4xl mb-2">7000+</p>
                <p className="text-xl font-light leading-5">Usuarios Activos</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-accent h-24 w-24 rounded-full flex justify-center items-center self-center">
                <Image
                  src="/icons/starIcon.svg"
                  alt="download icon"
                  width={53.56}
                  height={37.5}
                />
              </div>
              <div className="text-white text-left">
                <p className="font-bold text-4xl mb-2">1200+</p>
                <p className="text-xl font-light leading-5">Testimonios</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
