import Lamp from "public/icons/lamp.svg";
import Cash from "public/icons/cashIcon.svg";
import Evolution from "public/icons/evolutionIcon.svg";

export default function BenefitsSection(): JSX.Element {
  const CardContainer = ({
    children,
  }: {
    children: React.ReactNode;
  }): JSX.Element => {
    return <div className="BenefitCard">{children}</div>;
  };

  return (
    <div className="bg-secondary w-full  h-40 md:h-72 flex items-center justify-center gap-5 px-2 md:gap-x-20">
      <CardContainer>
        <Lamp />
        <p>Equi</p>
      </CardContainer>
      <CardContainer>
        <Evolution />
        <p>CRM</p>
      </CardContainer>
      <CardContainer>
        <Cash />
        <p>Finanza</p>
      </CardContainer>
    </div>
  );
}
