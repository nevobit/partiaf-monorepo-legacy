import Image, { StaticImageData } from "next/image";
import "keen-slider/keen-slider.min.css";

interface ArticleProps {
  image: StaticImageData;
  articleText: string;
}

export default function SingleArticleCard({
  image,
  articleText,
}: ArticleProps): JSX.Element {
  return (
    <div className="keen-slider__slide w-11/12">
      <div className="card mx-auto my-0 max-w-[450px] min-h-[600px] w-full bg-base-100 shadow-xl rounded-none">
        <figure>
          <Image src={image} alt="office" className="w-full" />
        </figure>
        <div className="card-body bg-accent">
          <p className="text-lg leading-7 text-[#676767]">{articleText}</p>
          <div className="card-actions justify-end">
            <p className="text-primary text-bold contents text-xl cursor-pointer">
              Leer mas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}