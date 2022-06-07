import Slider from "react-slick";
import * as Banner from "./Banner.styles";

export default function LayoutBannerUI(props) {
  return (
    <Banner.Container>
      <Banner.Wrapper>
        <Slider {...props.settings}>
          {[1, 2, 3].map((el, index) => (
            <Banner.SliderContainer key={el} num={el}>
              <Banner.SliderWrapper>
                <Banner.TextGroup>
                  <div>
                    <Banner.TextTop
                      className={index === props.slideIndex ? "isActive" : ""}
                    >
                      {(el === 1 && (
                        <img src="/img/banner/img-banner01-logo.svg" />
                      )) ||
                        (el === 2 && (
                          <img src="/img/banner/img-banner02-logo.svg" />
                        )) ||
                        (el === 3 && (
                          <img src="/img/banner/img-banner03-logo.svg" />
                        ))}
                      <span>
                        {(el === 1 && "체중고민, 건강고민이 늘어난다면?") ||
                          (el === 2 && "채식한상이 함께 합니다") ||
                          (el === 3 && "채식한상 밀키트 탄생")}
                      </span>
                    </Banner.TextTop>
                    <Banner.TextMiddle
                      className={index === props.slideIndex ? "isActive" : ""}
                    >
                      {(el === 1 && "채식한상이 준비한 레시피로") ||
                        (el === 2 && "내게 꼭 맞춘 레시피로") ||
                        (el === 3 && "믿고 주문하는")}
                    </Banner.TextMiddle>
                    <Banner.TextMiddle
                      className={index === props.slideIndex ? "isActive" : ""}
                    >
                      {(el === 1 && "시작하는 건강관리") ||
                        (el === 2 && "가벼운 건강밥상") ||
                        (el === 3 && "밀키트 구독 서비스")}
                    </Banner.TextMiddle>
                  </div>
                </Banner.TextGroup>
                <Banner.ImageGroup
                  num={el}
                  className={index === props.slideIndex ? "isActive" : ""}
                >
                  {(el === 1 && (
                    <Banner.SliderImage1
                      className={index === props.slideIndex ? "isActive" : ""}
                    >
                      <img src="/img/banner/img-banner01-01.png" />
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div>
                        <img src="/img/banner/img-banner01-02.svg" />
                      </div>
                      <div>
                        <img src="/img/banner/img-banner01-03.svg" />
                      </div>
                    </Banner.SliderImage1>
                  )) ||
                    (el === 2 && (
                      <Banner.SliderImage2
                        className={index === props.slideIndex ? "isActive" : ""}
                      >
                        <img src="/img/banner/img-banner02-01.png" />
                      </Banner.SliderImage2>
                    )) ||
                    (el === 3 && (
                      <Banner.SliderImage3
                        className={index === props.slideIndex ? "isActive" : ""}
                      >
                        <img src="/img/banner/img-banner03-01.png" />
                      </Banner.SliderImage3>
                    ))}
                </Banner.ImageGroup>
              </Banner.SliderWrapper>
            </Banner.SliderContainer>
          ))}
        </Slider>
      </Banner.Wrapper>
    </Banner.Container>
  );
}
