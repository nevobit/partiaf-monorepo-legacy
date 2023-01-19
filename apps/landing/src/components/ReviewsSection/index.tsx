import { useKeenSlider } from "keen-slider/react";
import ReviewCard from "../ReviewCard";
import Arrow from "../Arrow";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

export default function ReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      slides: { perView: 1, spacing: 8 },
    },
    [
      // add plugins here
    ]
  );
  return (
    <section className="container relative  w-11/12  md:w-4/5 h-full grid justify-items-center items-center my-11 md:gap-9">
      <div className="w-full h-full overflow-hidden">
        <p className="text-base-300 text-2xl text-center">CLIENTES</p>
        <p className="text-3xl font-medium leading-[48px] md:text-center">
          Reseñas de clientes sobre nuestra
        </p>
        <>
          <div ref={sliderRef} className="keen-slider w-full relative">
            <div className="keen-slider__slide  flex justify-center max-w-full">
              <ReviewCard />
            </div>
            <div className="keen-slider__slide flex justify-center max-w-full">
              <ReviewCard />
            </div>
            <div className="keen-slider__slide flex justify-center max-w-full">
              <ReviewCard />
            </div>
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </>
      </div>
    </section>
  );
}
