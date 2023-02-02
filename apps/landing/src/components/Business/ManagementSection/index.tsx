import Image from "next/image";
import analytics from "public/images/analytics.jpg";
import PARTIAF_SERVICES from "@/shared/constants/partiafServices";
import { useState } from "react";

export default function ManagementSection(): JSX.Element {
  const [description, setDescription] = useState("");

  const handledService = (description: string): void => {
    setDescription(description);
  };
  return (
    <div className="pt-12 pb-16 w-11/12">
      <div className="businessTitles">
        <div className="lineYellow" />
        <p>GESTIONA DESDE UN SOLO LUGAR</p>
      </div>
      <div className="grid gap-y-10 md:grid-cols-2 gap-x-3 justify-items-center">
        <div className="grid grid-cols-4  gap-x-4 gap-y-3 w-full justify-items-center md:justify-items-start self-end">
          {PARTIAF_SERVICES.map(({ name, active, icon, description }) => {
            return (
              <button
                key={name}
                disabled={!active}
                data-active={active}
                onClick={() => {
                  handledService(description);
                }}
                className="data-[active=true]:bg-[#E1E1E1] data-[active=true]:active:scale-90 duration-200 transition-colors bg-[#6c6c6c] data-[active=true]:hover:bg-primary managementIconCard"
              >
                <Image
                  src={icon}
                  alt={`${name} icon`}
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                />
                <p className="font-medium text-xs">{name}</p>
              </button>
            );
          })}
        </div>
        <div className="md:col-start-1 md:row-start-1 md:row-end-3 justify-self-center md:justify-self-start ">
          <Image src={analytics} alt="analytics" className="businessImages" />
        </div>
        <div>
          <p className="businessDescription min-h-[80px]">{description}</p>
        </div>
      </div>
    </div>
  );
}
