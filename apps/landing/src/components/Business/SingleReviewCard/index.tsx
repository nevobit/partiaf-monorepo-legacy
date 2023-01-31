import Quote from "public/icons/quoteIcon.svg";

interface ReviewProps {
  review: string;
  author: string;
}

export default function SingleReviewCard({
  review,
  author,
}: ReviewProps): JSX.Element {
  return (
    <div className="keen-slider__slide">
      <div className="bg-[#EEEEEE] h-[305px] w-full grid  items-center px-3 pt-3 pb-10">
        <div className="w-full flex justify-end">
          <Quote />
        </div>
        <p className="text-base leading-6 text-[#676767]">{review}</p>
        <Quote className="rotate-180" />
        <p className="font-bold text-lg flex justify-self-end">{author}</p>
      </div>
    </div>
  );
}
