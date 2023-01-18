import Image from "next/image";
import { useState } from "react";

interface MenuProps {
  show: boolean;
}

export default function MenuMobile({ show }: MenuProps) {
  const [showModal, setShowModal] = useState(show);
  //   console.log(showModal, "show");
  return (
    <>
      {showModal && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#030303ED] z-40 flex justify-center">
          <button
            onClick={() => setShowModal(!showModal)}
            className="z-50 absolute top-6 right-5"
          >
            <Image
              src="/icons/burguerIcon.svg"
              width={19.17}
              height={13}
              alt="Menu icon"
            />
          </button>
          <div className="w-full h-full">
            <ul className="text-secondary text-4xl text-right leading-10 mt-20">
              <li className="hover:text-primary focus:text-primary">INICIO</li>
              <li className="hover:text-primary focus:text-primary">
                QUE HACEMOS
              </li>
              <li className="hover:text-primary focus:text-primary">
                QUIENES SOMOS
              </li>
              <li className="hover:text-primary focus:text-primary">
                CONTACTO
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
