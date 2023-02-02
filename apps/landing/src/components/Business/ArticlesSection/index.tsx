import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SingleArticleCard from "../SingleArticleCard";
import ARTICLES from "@/shared/constants/articles";

export default function ArticlesSection(): JSX.Element {
  // eslint-disable-next-line
  const [sliderRef, _] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: { perView: 1, spacing: 8 },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 10 },
        },
        "(min-width: 1536px)": {
          slides: { perView: 4, spacing: 10 },
        },
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <div ref={sliderRef} className="pb-16 flex keen-slider min-h-screen">
      {ARTICLES.map(({ image, article, articleUrl }, i) => (
        <SingleArticleCard
          key={i}
          image={image}
          articleText={article}
          articleUrl={articleUrl}
        />
      ))}
    </div>
  );
}
