import * as Subs from "./Subscribe.styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NormalButton from "../../commons/buttons/normal";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import { ISubscribeUIProps } from "./Subscribe.type";

export default function SubscribeUI(props: ISubscribeUIProps) {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, [inView]);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <Subs.Container>
        <Subs.Wrapper>
          <Subs.IntroWrapper>
            <Subs.IntroTop1>
              <Subs.TopText1 data-aos="fade-up">
                <Subs.Title>채식이 어렵다면</Subs.Title>
                <Subs.SubTitle>
                  채식한상 정기 구독으로 시작해 보세요
                </Subs.SubTitle>
              </Subs.TopText1>
              <img
                ref={ref}
                src="/img/subscribe/img-intro-01.png"
                data-aos="fade-zoom-in"
              />
            </Subs.IntroTop1>

            <Subs.IntroTop2>
              <img
                className={"img-01"}
                src="/img/subscribe/img-intro-02.png"
                data-aos="fade-zoom-in"
              />
              <img
                className={"img-02"}
                src="/img/subscribe/img-intro-03.png"
                data-aos="fade-zoom-in"
              />
              <Subs.TopText2 data-aos="fade-up">
                <Subs.Title>
                  가격은 낮추고
                  <br />
                  건강은 더한 퀄리티 높은 음식
                </Subs.Title>
                <Subs.Contents>
                  다양한 채식 음식을 이곳에서 합리적인 가격에 만나보세요
                </Subs.Contents>
              </Subs.TopText2>
            </Subs.IntroTop2>

            <Subs.IntroTop3>
              <img
                className={"img-03"}
                src="/img/subscribe/img-intro-04.png"
                data-aos="fade-zoom-in"
              />
              <img
                className={"img-04"}
                src="/img/subscribe/img-intro-05.png"
                data-aos="fade-zoom-in"
              />
              <Subs.TopText3 data-aos="fade-up">
                <Subs.Title>
                  신선한 재료만을 가지고
                  <br /> 균형잡힌 바른 식단
                </Subs.Title>
                <Subs.Contents>
                  신선한 채소를 채식한상 만의 특별한 레시피와 함께하세요
                </Subs.Contents>
              </Subs.TopText3>
            </Subs.IntroTop3>

            <Subs.IntroMiddle>
              <Subs.Title
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
              >
                나에게 맞는 채식 레시피로
                <br />
                맛있는 건강 밥상
              </Subs.Title>
              <img src="/img/subscribe/img-intro-06.png" />
              <Subs.SubTitle data-aos="fade-up">
                나를 위한, 지구를 위한
                <br />
                채식한상
              </Subs.SubTitle>
            </Subs.IntroMiddle>

            <Subs.IntroBottom>
              <img src="/img/subscribe/img-intro-07.png" />
              <Subs.Title>이용방법</Subs.Title>
              <Subs.Delivery>
                <img src="/img/subscribe/img-delivery-01.png" />
                <img src="/img/subscribe/icon-arrow-right.svg" />
                <img src="/img/subscribe/img-delivery-02.png" />
                <img src="/img/subscribe/icon-arrow-right.svg" />
                <img src="/img/subscribe/img-delivery-03.png" />
                <img src="/img/subscribe/icon-arrow-right.svg" />
                <img src="/img/subscribe/img-delivery-04.png" />
              </Subs.Delivery>

              <Subs.TabletDelivery>
                <img src="/img/subscribe/img-delivery-01.png" />
                <img src="/img/subscribe/img-delivery-02.png" />
                <img src="/img/subscribe/img-delivery-03.png" />
                <img src="/img/subscribe/img-delivery-04.png" />
              </Subs.TabletDelivery>
            </Subs.IntroBottom>
          </Subs.IntroWrapper>

          <Subs.ReviewWrapper>
            <Subs.Title>
              채식한상
              <br />
              고객들의 솔직리뷰
            </Subs.Title>
            <Subs.Contents>
              <p>채식한상을</p>
              <p>먼저 시작하고 계신 고객들의 </p>
              <p>후기를 들어보세요.</p>
            </Subs.Contents>
            <Subs.ImageWrapper>
              <img
                className={"img-05"}
                src="/img/subscribe/img-review-01.png"
                data-aos="fade-down"
                data-aos-duration="1500"
              />
              <img
                className={"img-06"}
                src="/img/subscribe/img-review-02.png"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
            </Subs.ImageWrapper>
          </Subs.ReviewWrapper>

          <Subs.PassWrapper>
            <Subs.Title>이용권</Subs.Title>
            <Subs.Contents>
              맞춤형 구독으로 원하는 횟수만큼만 구독 가능합니다
            </Subs.Contents>
            <Subs.FlexRow>
              <Subs.Pass>
                <h2>베이직</h2>
                <span className="month">
                  월 <span className="price">29,900</span>원
                </span>
                <p>주 1회 밀키트 정기 배송</p>
                <NormalButton
                  title={"구독하기"}
                  color={"green"}
                  onClick={props.onClickPayBasic}
                />
              </Subs.Pass>
              <Subs.Pass>
                <h2>프리미엄</h2>
                <span className="month">
                  월 <span className="price">39,900</span>원
                </span>
                <p>주 2회 밀키트 정기 배송</p>
                <NormalButton
                  title={"구독하기"}
                  color={"green"}
                  onClick={props.onClickPayPremium}
                />
              </Subs.Pass>
            </Subs.FlexRow>
          </Subs.PassWrapper>
        </Subs.Wrapper>
      </Subs.Container>
    </>
  );
}
