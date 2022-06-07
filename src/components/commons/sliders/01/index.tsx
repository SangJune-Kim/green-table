import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  .slick-list {
    width: 600px;
  }

  .slick-dots {
    position: relative;

    & > li {
      margin: 0 0.78rem;
      width: 6.06rem;
      height: 6.06rem;
    }

    & > li > a > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
  }
`;

const SliderItem = styled.div`
  & > img {
    margin: 0 auto;
    height: 559px;
    width: auto;
    object-fit: contain;
    border-radius: 2rem;
  }
`;

export default function Slider01(props) {
  console.log(props.mainImages);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        props.mainImages[i] && (
          <a>
            <img
              src={`https://storage.googleapis.com/${props.mainImages[i]}`}
            />
          </a>
        )
      );
    },
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {props.mainImages?.map((el) => (
          <SliderItem key={uuidv4()}>
            <img src={`https://storage.googleapis.com/${el}`} />
          </SliderItem>
        ))}
      </Slider>
    </Wrapper>
  );
}
