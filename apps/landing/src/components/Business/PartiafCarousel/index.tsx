import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";

export default function PartiafCarousel(): JSX.Element {
  // eslint-disable-next-line
  const [sliderRef, _] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: { perView: 2, spacing: 8 },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 3, spacing: 8 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 5, spacing: 8 },
        },
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <div className="w-full my-10">
      <div ref={sliderRef} className="keen-slider flex w-full lg:w-1">
        <div className="keen-slider__slide">
          <div className="h-16 bg-[#ECECEC]  flex justify-center items-center card">
            <Image
              src="/icons/carouselLogo.svg"
              alt="logo"
              width={200}
              height={45}
              className="w-32 h-10"
            />
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="h-16  bg-[#ECECEC] flex justify-center items-center card">
            <Image
              src="/icons/carouselLogo.svg"
              alt="logo"
              width={200}
              height={45}
              className="w-32 h-10"
            />
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="h-16 bg-[#ECECEC]  flex justify-center items-center card">
            <Image
              src="/icons/carouselLogo.svg"
              alt="logo"
              width={200}
              height={45}
              className="w-32 h-10"
            />
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="h-16 bg-[#ECECEC] flex justify-center items-center card">
            <Image
              src="/icons/carouselLogo.svg"
              alt="logo"
              width={200}
              height={45}
              className="w-32 h-10"
            />
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="h-16 bg-[#ECECEC] flex justify-center items-center card">
            <Image
              src="/icons/carouselLogo.svg"
              alt="logo"
              width={200}
              height={45}
              className="w-32 h-10"
            />
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="h-16 bg-[#ECECEC]  flex justify-center items-center card">
            <Image
              src="/icons/carouselLogo.svg"
              alt="logo"
              width={200}
              height={45}
              className="w-32 h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
