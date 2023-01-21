import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import MenuMobile from "../MenuMobile";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NAVIGATION from "@/shared/constants/navigation";
import { enableScroll, disableScroll } from "@/utils/enableScroll";
import useScroll from "@/hooks/useScroll";

export default function Header(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const isScroll = useScroll();

  useEffect(() => {
    showModal ? disableScroll() : enableScroll();
  }, [showModal]);

  const handledModal = (): void => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {showModal && <MenuMobile onMenuClick={handledModal} />}
      <div
        className={`flex flex-col  items-center justify-center transition-colors duration-500 fixed w-full z-40 ${
          isScroll ? "bg-neutral" : "bg-transparent"
        }`}
      >
        <div className="navbar bg-transparent w-11/12 h-16 2xl:h-24">
          <div className="flex-1 lg:flex-none">
            <Image
              src="/icons/logo-partiaf.svg"
              width={179.14}
              height={39}
              alt="Partiaf icon"
            />
          </div>
          <div className="flex-1 justify-end  hidden lg:flex">
            <ul className="flex text-secondary text-sm 2xl:text-xl gap-24">
              {NAVIGATION.map(({ name, router }) => {
                return (
                  <li key={router}>
                    <AnchorLink href={router} className="uppercase">
                      {name}
                    </AnchorLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-none z-50 lg:hidden">
            <button
              onClick={() => {
                setShowModal((prev) => !prev);
              }}
            >
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
