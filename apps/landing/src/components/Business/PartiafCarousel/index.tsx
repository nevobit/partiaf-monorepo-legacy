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
  const newArr = new Array(5).fill(1);
  const cardNumber = newArr.map((num: number, i) => (num += i));
  return (
    <div className="w-full my-10">
      <div ref={sliderRef} className="keen-slider flex w-full lg:w-1">
        {cardNumber.map((num) => {
          return (
            <div key={num} className="keen-slider__slide">
              <div className="h-16 2xl:h-20 bg-[#ECECEC]  flex justify-center items-center card">
                <Image
                  src="/icons/carouselLogo.svg"
                  alt="logo"
                  width={200}
                  height={45}
                  className="w-32 h-10"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
