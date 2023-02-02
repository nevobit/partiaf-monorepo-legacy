import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";

interface ArticleProps {
  image: StaticImageData;
  articleText: string;
  articleUrl: string;
}

export default function SingleArticleCard({
  image,
  articleText,
  articleUrl,
}: ArticleProps): JSX.Element {
  const SHOW_MORE = "Leer más";

  return (
    <div className="keen-slider__slide w-11/12">
      <div className="card bg-accent mx-auto my-0 max-w-[350px] 2xl:max-w-[450px] min-h-[517px] 2xl:min-h-[600px] w-full shadow-xl rounded-none">
        <figure className="w-full h-[250px]">
          <Image
            src={image}
            alt="office"
            priority
            className="w-full h-full object-cover self-start"
          />
        </figure>
        <div className="card-body p-4 min-h-[267px]">
          <p className="businessDescription line-clamp-7">{articleText}</p>
          <div className="card-actions justify-end">
            <Link
              href={articleUrl}
              aria-label="See more about article"
              className="text-primary text-bold contents text-xl cursor-pointer"
            >
              {SHOW_MORE}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
