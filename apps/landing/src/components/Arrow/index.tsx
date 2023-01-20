import Image from "next/image";

interface ArrowProps {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}

export default function Arrow({ disabled, left, onClick }: ArrowProps) {
  return (
    <button
      disabled={disabled}
      className={`hidden md:flex  bg-primary rounded-full justify-center items-center w-14 h-14 absolute ${
        left ? "left-0" : "right-0"
      } top-1/2 mt-2 ${left && "rotate-180"} `}
      onClick={onClick}
    >
      <Image
        src="/icons/arrowIcon.svg"
        alt="arrow icon"
        width={19.3}
        height={31.25}
      />
    </button>
  );
}
