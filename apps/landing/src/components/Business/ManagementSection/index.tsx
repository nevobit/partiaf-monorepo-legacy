import Image from "next/image";
import HomeIcon from "public/icons/homeIcon.svg";
import analytics from "public/images/analytics.jpg";
import MessageIcon from "public/icons/messagesIcon.svg";
import CoverIcon from "public/icons/coverIcon.svg";
import ExpenseIcon from "public/icons/expensesIcon.svg";
import InventoryIcon from "public/icons/inventoryIcon.svg";
import PayrollIcon from "public/icons/payrollIcon.svg";
import ReserveIcon from "public/icons/reservesIcon.svg";

export default function ManagementSection(): JSX.Element {
  return (
    <div className="pt-12 pb-16 w-11/12">
      <div className="bussinesTitles">
        <div className="lineYellow" />
        <p>GESTIONA DESDE UN SOLO LUGAR</p>
      </div>
      <div className="grid gap-y-10 md:grid-cols-2 gap-x-3 justify-items-center">
        <div className="grid grid-cols-4  gap-x-4 gap-y-3 w-full justify-items-center md:justify-items-start self-end">
          <div className="bg-primary managementIconCard">
            <HomeIcon />
            <p className="font-medium text-xs">Analiticas</p>
          </div>
          <div className="managementIconCard">
            <ExpenseIcon />
            <p>Gastos</p>
          </div>
          <div className="managementIconCard">
            <InventoryIcon />
            <p>Inventario</p>
          </div>
          <div className="managementIconCard">
            <ReserveIcon />
            <p>Reservas</p>
          </div>
          <div className="managementIconCard">
            <HomeIcon />
            <p>Mensajeria</p>
          </div>
          <div className="managementIconCard">
            <MessageIcon />
            <p>Contactos</p>
          </div>
          <div className="managementIconCard">
            <PayrollIcon />
            <p>Nomina</p>
          </div>
          <div className="managementIconCard">
            <CoverIcon />
            <p>Cover</p>
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
