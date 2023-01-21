import { useState } from "react";
import Arrow from "../Arrow";
import ReviewCard from "../ReviewCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function ReviewsSection(): JSX.Element {
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
    <section className="relative  w-11/12 md:w-10/12 max-w-7xl h-full grid justify-items-center items-center my-11 md:gap-9">
      <div className="w-full h-full overflow-hidden">
        <p className="sectionTitle text-center">CLIENTES</p>
        <p className="sectionDescription md:text-center">
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
          {loaded && instanceRef.current != null && (
            <>
              <Arrow
                left={true}
                onClick={() => instanceRef.current?.prev()}
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={() => instanceRef.current?.next()}
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </>
      </div>
      <div id="contacto" />
    </section>
  );
}
