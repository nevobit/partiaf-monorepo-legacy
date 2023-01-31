import HomeIcon from "public/icons/homeIcon.svg";
import Image from "next/image";
import analytics from "public/images/analytics.jpg";
import MessageIcon from "public/icons/messagesIcon.svg";
import CoverIcon from "public/icons/coverIcon.svg";
import ExpenseIcon from "public/icons/expensesIcon.svg";
import InventoryIcon from "public/icons/inventoryIcon.svg";
import PayrollIcon from "public/icons/payrollIcon.svg";
import ReserveIcon from "public/icons/reservesIcon.svg";

export default function ManagementSection(): JSX.Element {
  return (
    <div className="py-12 w-11/12">
      <div className="bussinesTitles">
        <div className="lineYellow" />
        <p>GESTIONA DESDE UN SOLO LUGAR</p>
      </div>
      <div className="grid gap-y-9 md:grid-cols-2 gap-x-5 justify-items-center">
        <div className="grid grid-cols-4  gap-x-4 gap-y-3 w-full justify-items-center md:justify-items-start self-end">
          <div className="bg-primary h-20 w-20 lg:h-28 lg:w-28 grid place-content-center justify-items-center gap-2">
            <HomeIcon />
            <p className="font-medium text-xs">Analiticas</p>
          </div>
          <div className="bg-[#E1E1E1] h-20 w-20 lg:h-28 lg:w-28 grid place-content-center justify-items-center gap-2">
            <ExpenseIcon />
            <p className="font-medium text-xs">Gastos</p>
          </div>
          <div className="bg-[#E1E1E1] h-20 w-20 lg:h-28 lg:w-28 grid place-content-center justify-items-center gap-2">
            <InventoryIcon />
            <p className="font-medium text-xs">Inventario</p>
          </div>{" "}
          <div className="bg-[#E1E1E1] h-20 w-20 lg:h-28 lg:w-28 grid place-content-center justify-items-center gap-2">
            <ReserveIcon />
            <p className="font-medium text-xs">Reservas</p>
          </div>{" "}
          <div className="bg-[#E1E1E1] h-20 w-20 lg:h-28 lg:w-28 grid place-content-center justify-items-center gap-2">
            <HomeIcon />
            <p className="font-medium text-xs">Mensajeria</p>
          </div>{" "}
          <div className="bg-[#E1E1E1] h-20 w-20 lg:h-28 lg:w-28 grid place-content-center justify-items-center gap-2">
            <MessageIcon />
            <p className="font-medium text-xs">Contactos</p>
          </div>{" "}
          <div className="bg-[#E1E1E1] h-20 w-20 lg:h-28 lg:w-28 grid place-content-center justify-items-center gap-2">
            <PayrollIcon />
            <p className="font-medium text-xs">Nomina</p>
          </div>{" "}
          <div className="bg-[#E1E1E1] h-20 w-20 lg:h-28 lg:w-28 grid place-content-center justify-items-center gap-2">
            <CoverIcon />
            <p className="font-medium text-xs">Cover</p>
          </div>
        </div>
        <div className="md:col-start-1 md:row-start-1 md:row-end-3 justify-self-center md:justify-self-start ">
          <Image src={analytics} alt="analytics" className="bussinesImages" />
        </div>
        <div>
          <p className="businessDescription">
            ¡Una solución segura y exclusiva donde lo conectamos con los sitios
            de "Bares y Clubes" que están vinculados a sus intereses!
          </p>
        </div>
      </div>
    </div>
  );
}
