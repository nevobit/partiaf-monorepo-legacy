import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import SingleReviewCard from "../SingleReviewCard";
import REVIEWS from "@/shared/constants/reviews";
import Arrow from "../Arrow";
import "keen-slider/keen-slider.min.css";

export default function Reviews(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: { perView: 1, spacing: 8 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <div className="relative w-11/12 justify-center flex">
      <div className="w-11/12 pb-16 max-w-3xl ">
        <div className="flex flex-col items-center">
          <div className="w-28 bg-primary h-2 rounded-xl" />
          <p className="font-bold text-3xl leading-[48px] ">Testimonials</p>
        </div>
        <div ref={sliderRef} className="keen-slider flex w-full">
          {REVIEWS.map(({ review, author }, i) => (
            <SingleReviewCard key={i} review={review} author={author} />
          ))}
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
      </div>
    </div>
  );
}
