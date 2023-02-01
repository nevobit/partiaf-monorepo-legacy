import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";

interface ArticleProps {
  image: StaticImageData;
  articleText: string;
}

export default function SingleArticleCard({
  image,
  articleText,
}: ArticleProps): JSX.Element {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowbutton] = useState(true);

  const SHOW_MORE = "Leer más";
  const SHOW_LESS = "Leer menos";

  useEffect(() => {
    const CHARACTERS = 229;
    const numberOfCharacters = articleText.split("");
    const show = numberOfCharacters.length > CHARACTERS;
    setShowbutton(show);
  }, [articleText]);

  const showAndHidden = (): void => {
    setShowText((show) => !show);
  };

  return (
    <div className="keen-slider__slide w-11/12">
      <div className="card bg-accent mx-auto my-0 max-w-[350px] 2xl:max-w-[450px] min-h-[517px] 2xl:min-h-[600px] w-full shadow-xl rounded-none">
        <figure className="w-full h-[250px]">
          <Image
            src={image}
            alt="office"
            priority
            className="w-auto h-auto object-cover self-start"
          />
        </figure>
        <div className="card-body p-4 min-h-[267px]">
          <p
            data-show={showText}
            data-button={showButton}
            className="businessDescription data-[show=false]:line-clamp-7 data-[show=true]:line-clamp-none data-[button=false]:line-clamp-none"
          >
            {articleText}
          </p>
          <div className="card-actions justify-end">
            {showButton && (
              <button
                aria-label={`${showText ? SHOW_LESS : SHOW_MORE} text`}
                onClick={showAndHidden}
                className="text-primary text-bold contents text-xl cursor-pointer"
              >
                {showText ? SHOW_LESS : SHOW_MORE}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
