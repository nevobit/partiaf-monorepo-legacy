import Image from "next/image";

export default function GraphicElements(): JSX.Element {
  return (
    <>
      <Image
        className="absolute left-0 top-0 mix-blend-exclusion md:hidden"
        src="/shapes/shape.svg"
        alt="shape"
        width={328}
        height={900}
      />
      <Image
        className="absolute left-0 top-0 mix-blend-exclusion hidden md:block"
        src="/shapes/shape4.svg"
        alt="shape"
        width={700}
        height={900}
      />
      <Image
        className="absolute right-0 top-[1533px] mix-blend-exclusion"
        src="/shapes/shape2.svg"
        alt="shape"
        width={428}
        height={2056}
      />
      <Image
        className="absolute left-0  bottom-[250px] mix-blend-exclusion"
        src="/shapes/shape3.svg"
        alt="shape"
        width={428}
        height={2056}
      />
    </>
  );
}
