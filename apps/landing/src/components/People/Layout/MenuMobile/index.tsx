import Link from "next/link";
import { PEOPLE_NAVIGATION } from "@/shared/constants/navigation";
import BurgueIcon from "public/icons/burguerIcon.svg";

interface MenuProps {
  onMenuClick?: () => void;
}

export default function MenuMobile({ onMenuClick }: MenuProps): JSX.Element {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#030303ED] z-50 flex justify-center px-6">
      <button onClick={onMenuClick} className="z-50 absolute top-6 right-5">
        <BurgueIcon />
      </button>
      <div className="w-full h-full">
        <ul className="text-accent text-3xl text-right leading-10 mt-20">
          {PEOPLE_NAVIGATION.map(({ name, router }) => {
            return (
              <li
                key={router}
                className="hover:text-primary focus:text-primary"
                onClick={onMenuClick}
              >
                <Link href={router} className="uppercase" scroll={false}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}