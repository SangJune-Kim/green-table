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
    beforeChange: (current: number, next: number) => void;
  };
  slideIndex: number;
}

export interface ILayoutBannerStyle {
  num: number;
}
