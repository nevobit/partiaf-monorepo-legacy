import Image from "next/image";
import Shape from "/public/shapes/footerShape.png";
import ShapeDeskTop from "/public/shapes/footerShadowDesktop.png";

export default function Footer() {
  return (
    <footer className="h-auto w-full flex flex-col relative text-secondary">
      <Image
        src={Shape}
        alt="shape"
        className="absolute h-full w-full mix-blend-exclusion lg:hidden"
      />
      <Image
        src={ShapeDeskTop}
        alt="shape"
        className="absolute h-full w-full mix-blend-exclusion hidden lg:block"
      />
      <div className="bg-[url('/images/bg_gradient.jpg')] lg:bg-[url('/images/bg_gradient_footer.jpg')] flex justify-center bg-no-repeat bg-co w-full h-[680px] lg:h-[479px]">
        <div className="w-11/12 lg:w-4/5 h-full lg:justify-between flex flex-col items-center lg:flex-row ">
          <section className="mt-12 w-4/12 ">
            <Image
              src="/icons/partiafLogoWhite.svg"
              alt="partiaf icon"
              width={241.6}
              height={52.6}
            />
            <p className="text-lg my-6">
              Suscríbase a nuestro boletín para recibir nuestra última
              actualización y novedades Suscríbase a nuestro boletín para
              recibir.
            </p>
            <div className="flex justify-around mb-11">
              <Image
                src="/icons/facebookIconWhite.svg"
                alt="facebook icon"
                width={13.58}
                height={29.23}
              />
              <Image
                src="/icons/twitterIconWhite.svg"
                alt="facebook icon"
                width={28.91}
                height={23.41}
              />
              <Image
                src="/icons/instagramIconWhite.svg"
                alt="facebook icon"
                width={30.57}
                height={30.57}
              />
              <Image
                src="/icons/youtubeIconWhite.svg"
                alt="facebook icon"
                width={29.41}
                height={20.69}
              />
            </div>
          </section>
          <section className="w-4/12 ">
            <p className="mb-5">Dirección de la oficina</p>
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
                />
                <p className="flex-1">info@partiaf.com</p>
              </div>
            </div>
          </section>
          <section className="w-4/12">
            <p>Newsletter</p>
            <p className="text-[15px] leading-6 my-3">
              Suscríbase a nuestro boletín para recibir nuestra última
              actualización y novedades.
            </p>
            <div className="h-16 relative box overflow-hidden">
              <input
                type="email"
                placeholder="Email address"
                className="w-full h-full overflow-hidden input bg-secondary/10 backdrop-opacity-[0.08] placeholder:text-secondary text-secondary"
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
