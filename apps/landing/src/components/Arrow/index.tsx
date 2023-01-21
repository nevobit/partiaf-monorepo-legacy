import Image from "next/image";

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
      className="btn-primary data-[disabled=true]:bg-primary/80  hidden md:flex rounded-full justify-center items-center w-12 h-12 absolute
      data-[left=true]:left-0 data-[left=false]:right-0 top-1/2 mt-2 data-[left=true]:rotate-180 "
      onClick={onClick}
    >
      <Image
        src="/icons/arrowIcon.svg"
        alt="arrow icon"
        width={14.3}
        height={26.25}
      />
    </button>
  );
}
