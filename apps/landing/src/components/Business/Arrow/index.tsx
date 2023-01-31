import ArrowIcon from "public/icons/ArrowGrayLight.svg";

interface ArrowProps {
  disabled: boolean;
  left?: boolean;
  onClick: () => void;
}

export default function Arrow({
  disabled,
  left = false,
  onClick,
}: ArrowProps): JSX.Element {
  return (
    <button
      disabled={disabled}
      data-left={left}
      data-disabled={disabled}
      className="hidden md:flex absolute
      data-[left=true]:left-0 data-[left=false]:right-0 top-1/2 -mt-5 data-[left=true]:rotate-180 2xl:w-16 2xl:h-16"
      onClick={onClick}
    >
      <ArrowIcon />
    </button>
  );
}
