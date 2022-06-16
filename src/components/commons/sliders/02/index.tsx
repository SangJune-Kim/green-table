import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { FETCH_USER } from "../../../units/myPage/main/MyPageMain.queries";
import { useQuery } from "@apollo/client";
import { breakPoints } from "../../../../commons/styles/media";

const Wrapper = styled.div`
  width: 74.5625rem;
  height: 10.5625rem;
  padding-top: 1.5rem;

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    width: 100%;
    text-align: center;
  }

  .slick-slide {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & div {
    outline: none;
    cursor: pointer;
  }
`;

const SubsHistory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  width: 97%;
  height: 9.625rem;
  background-color: #f5f5f5;
  border-radius: 20px;
  font-size: 1.3rem;
  font-weight: 500;

  & > span > span {
    color: #c4c4c4;
  }

  & > p {
    color: #737373;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export default function Slider02() {
  const { data } = useQuery(FETCH_USER);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SubsHistory>
            <span>
              {/* {data?.fetchUser.startDate} <span>|</span>{" "} */}
              {data?.fetchUser.isSubs !== "NON_SUB" ? 2 : 1}
              회차 결제예정
            </span>
            <br />
            <p>
              {data?.fetchUser.isSubs === "BASIC" && "베이직"}
              {data?.fetchUser.isSubs === "PREMIUM" && "프리미엄"} 정기구독
              서비스
            </p>
            <p>
              {data?.fetchUser.isSubs === "NON_SUB" && ""}
              {data?.fetchUser.isSubs === "BASIC" && "월 29,900 원"}
              {data?.fetchUser.isSubs === "PREMIUM" && "월 39,900 원"}
            </p>
          </SubsHistory>
        </div>
        {data?.fetchUser.isSubs !== "NON_SUB" ? (
          <div>
            <SubsHistory>
              <span>
                {/* {data?.fetchUser.startDate} <span>|</span>{" "} */}
                1회차 결제완료
              </span>
              <br />
              <p>
                {data?.fetchUser.isSubs === "BASIC" && "베이직"}
                {data?.fetchUser.isSubs === "PREMIUM" && "프리미엄"} 정기구독
                서비스
              </p>
              <p>
                {data?.fetchUser.isSubs === "BASIC" && "월 29,900 원"}
                {data?.fetchUser.isSubs === "PREMIUM" && "월 39,900 원"}
              </p>
            </SubsHistory>
          </div>
        ) : (
          <div>
            <SubsHistory></SubsHistory>
          </div>
        )}

        <div>
          <SubsHistory></SubsHistory>
        </div>
        <div>
          <SubsHistory></SubsHistory>
        </div>
        <div>
          <SubsHistory></SubsHistory>
        </div>
        <div>
          <SubsHistory></SubsHistory>
        </div>
      </Slider>
    </Wrapper>
  );
}
