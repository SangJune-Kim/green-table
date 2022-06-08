import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SetStateAction, useEffect, useState } from "react";
import LayoutBannerUI from "./Banner.presenter";

export default function LayoutBanner() {
  const [slideIndex, setSlideIndex] = useState<number>(3);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    beforeChange: (current: any, next: SetStateAction<number>) =>
      setSlideIndex(next),
  };

  useEffect(() => {
    setSlideIndex(0);
  }, []);

  return <LayoutBannerUI settings={settings} slideIndex={slideIndex} />;
}
