import { BUSINESS_NAVIGATION } from "@/shared/constants/navigation";
import Link from "next/link";
import Logo from "public/icons/logoGray.svg";
import BurgueIcon from "public/icons/burguerDark.svg";

export default function Header(): JSX.Element {
  return (
    <div className="h-16 bg-[#F1F1F1] drop-shadow-3xl sticky top-0 flex flex-col items-center z-40">
      <div className="navbar w-11/12">
        <div className="flex-1 lg:flex-none">
          <Logo />
        </div>
        <div className="flex-1 justify-end  hidden lg:flex">
          <ul className="flex text-[#201300] font-medium text-sm gap-24 h-full">
            {BUSINESS_NAVIGATION.map(({ name, router }) => {
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
          <button>
            <BurgueIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
