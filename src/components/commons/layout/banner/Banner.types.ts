import { SetStateAction } from "react";

export interface ILayoutBannerUIProps {
  settings: {
    dots: boolean;
    fade: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplaySpeed: number;
    arrows: boolean;
    autoplay: boolean;
    cssEase: string;
    beforeChange: (current: any, next: SetStateAction<number>) => void;
  };
  slideIndex: number;
}

export interface ILayoutBannerStyle {
  num: number;
}
