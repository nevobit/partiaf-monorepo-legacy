import Lamp from "public/icons/lamp.svg";
import Cash from "public/icons/cashIcon.svg";
import Evolution from "public/icons/evolutionIcon.svg";

export default function BenefitsSection(): JSX.Element {
  return (
    <div className="bg-secondary w-full  h-40 md:h-72 flex items-center justify-center gap-5 px-2 md:gap-x-20">
      <div className="bg-secondary flex flex-col justify-center items-center md:h-36 md:w-36 h-28 w-28 shadow-3xl rounded-3xl  gap-2">
        <Lamp />
        <p className="font-bold text-xs text-primary">Equi</p>
      </div>
      <div className="bg-secondary flex flex-col justify-center items-center md:h-36 md:w-36  h-28 w-28 shadow-3xl rounded-3xl  gap-2">
        <Evolution />
        <p className="font-bold text-xs text-primary">CRM</p>
      </div>
      <div className="bg-secondary flex flex-col justify-center items-center md:h-36 md:w-36  h-28 w-28 shadow-3xl rounded-3xl gap-2">
        <Cash />
        <p className="font-bold text-xs text-primary">Finanza</p>
      </div>
    </div>
  );
}
