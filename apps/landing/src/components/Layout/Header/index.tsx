import { useCallback, useEffect, useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import MenuMobile from "@/components/MenuMobile";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const disableScroll = useCallback(() => {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  }, []);

  const enableScroll = useCallback(() => {
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  }, []);

  const handledModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    showModal ? disableScroll() : enableScroll();
  }, [showModal]);

  return (
    <>
      {showModal && <MenuMobile onMenuClick={handledModal} />}
      <div className="flex flex-col items-center justify-center absolute w-full z-10">
        <div className="navbar bg-transparent w-11/12 h-28">
          <div className="flex-1 lg:flex-none">
            <Image
              src="/icons/logo-partiaf.svg"
              width={179.14}
              height={39}
              alt="Partiaf icon"
            />
          </div>
          <div className="flex-1 justify-end  hidden lg:flex">
            <ul className="flex text-secondary text-base gap-24">
              <li>
                <Link href="/">INICIO</Link>
              </li>
              <li>
                <Link href="#queHacemos" scroll={false}>
                  QUE HACEMOS
                </Link>
              </li>
              <li>
                <Link href="#quienesSomos" scroll={false}>
                  QUIENES SOMOS
                </Link>
              </li>
              <li>
                <Link href="#contacto" scroll={false}>
                  CONTACTO
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-none z-50 lg:hidden">
            <button onClick={() => setShowModal((prev) => !prev)}>
              <Image
                src="/icons/burguerIcon.svg"
                width={19.17}
                height={13}
                alt="Menu icon"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
