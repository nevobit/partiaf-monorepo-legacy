import { useEffect, useState } from "react";
import MenuMobile from "../MenuMobile";
import { PEOPLE_NAVIGATION } from "@/shared/constants/navigation";
import { enableScroll, disableScroll } from "@/utils/enableScroll";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import Logo from "public/icons/logo-partiaf.svg";
import BurgueIcon from "public/icons/burguerIcon.svg";

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
            <Logo />
          </div>
          <div className="flex-1 justify-end  hidden lg:flex">
            <ul className="flex text-accent text-sm 2xl:text-xl gap-24">
              {PEOPLE_NAVIGATION.map(({ name, router }) => {
                return (
                  <li key={router}>
                    <Link href={router} scroll={false} className="uppercase">
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-none z-50 lg:hidden">
            <button
              aria-label="open menu"
              onClick={() => {
                setShowModal((prev) => !prev);
              }}
            >
              <BurgueIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
