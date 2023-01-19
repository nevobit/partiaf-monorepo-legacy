import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  onMenuClick?: () => void;
}

export default function MenuMobile({ onMenuClick }: MenuProps) {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#030303ED] z-40 flex justify-center px-6">
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
          <li
            className="hover:text-primary focus:text-primary"
            onClick={onMenuClick}
          >
            <Link href="/" scroll={false}>
              INICIO
            </Link>
          </li>
          <li
            className="hover:text-primary focus:text-primary"
            onClick={onMenuClick}
          >
            <Link href="#queHacemos" scroll={false}>
              QUE HACEMOS
            </Link>
          </li>
          <li
            className="hover:text-primary focus:text-primary"
            onClick={onMenuClick}
          >
            <Link href="#quienesSomos" scroll={false}>
              QUIENES SOMOS
            </Link>
          </li>
          <li
            className="hover:text-primary focus:text-primary"
            onClick={onMenuClick}
          >
            <Link href="#contacto" scroll={false}>
              CONTACTO
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
