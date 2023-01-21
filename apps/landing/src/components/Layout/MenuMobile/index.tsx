import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NAVIGATION from "@/shared/constants/navigation";

interface MenuProps {
  onMenuClick?: () => void;
}

export default function MenuMobile({ onMenuClick }: MenuProps): JSX.Element {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#030303ED] z-50 flex justify-center px-6">
      <button onClick={onMenuClick} className="z-50 absolute top-6 right-5">
        <Image
          src="/icons/burguerIcon.svg"
          width={19.17}
          height={13}
          alt="Menu icon"
        />
      </button>
      <div className="w-full h-full">
        <ul className="text-secondary text-3xl text-right leading-10 mt-20">
          {NAVIGATION.map(({ name, router }) => {
            return (
              <li
                key={router}
                className="hover:text-primary focus:text-primary"
                onClick={onMenuClick}
              >
                <AnchorLink href={router} className="uppercase">
                  {name}
                </AnchorLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
