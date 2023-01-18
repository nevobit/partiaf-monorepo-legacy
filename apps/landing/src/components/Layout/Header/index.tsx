import { useState } from "react";
import Image from "next/legacy/image";
import MenuMobile from "@/components/MenuMobile";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal, "show");
  return (
    <>
      <MenuMobile show={showModal} />
      <div className="flex flex-col items-center justify-center absolute w-full z-10">
        <div className="navbar bg-transparent w-11/12">
          <div className="flex-1">
            <Image
              src="/icons/logo-partiaf.svg"
              width={179.14}
              height={39}
              alt="Partiaf icon"
            />
          </div>
          <div className="flex-none z-50">
            <button onClick={() => setShowModal(!showModal)}>
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
