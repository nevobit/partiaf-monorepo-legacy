import { BUSINESS_NAVIGATION } from "@/shared/constants/navigation";
import Link from "next/link";
import Logo from "public/icons/logoGray.svg";
import BurgueIcon from "public/icons/burguerDark.svg";

export default function Header(): JSX.Element {
  return (
    <div className="h-16 2xl:h-20 bg-[#F1F1F1] justify-center drop-shadow-3xl sticky top-0 flex flex-col items-center z-40">
      <div className="navbar w-11/12 h-full p-0">
        <div className="flex-1 lg:flex-none">
          <Logo />
        </div>
        <div className="flex-1 justify-end  hidden lg:flex h-full">
          <ul className="flex text-[#201300] font-medium text-sm 2xl:text-xl gap-24 h-full">
            {BUSINESS_NAVIGATION.map(({ name, router }) => {
              return (
                <li key={router} className="menu relative">
                  <div className="lineYellow bg-transparent absolute top-1" />
                  <Link
                    href={router}
                    scroll={false}
                    className="uppercase self-center"
                  >
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
