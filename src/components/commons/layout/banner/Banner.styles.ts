import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { breakPoints } from "../../../../commons/styles/media";
import { ILayoutBannerStyle } from "./Banner.types";

const MoveY = keyframes`
  from{
		transform: translateY(50%);
	}
	to{
		transform: translateY(0);
	}
`;

const Rotation = keyframes`
  from{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg);
	}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  .slick-dots {
    bottom: 6rem;
    position: absolute;

    button::before {
      color: #0fbaa3;
      padding-top: 1px;
    }

    .slick-active {
      button::before {
        color: #0fbaa3;
      }
    }
  }
`;

export const SliderContainer = styled.div`
  height: 694px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: ${(props: ILayoutBannerStyle) =>
    props.num === 1 ? "#fcf7e1" : props.num === 2 ? "#A5E0E9" : "#F3E3FF"};
  @media ${breakPoints.tablet} {
    height: 494px;
  }
  @media ${breakPoints.mobile} {
    height: 394px;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: #000000;
  white-space: nowrap;

  @media (max-width: 1243px) {
    margin-left: 1rem;
  }
`;

export const ImageGroup = styled.div`
  display: flex;
  position: relative;

  span {
    position: absolute;
  }

  & > div {
    transition: all 2.5s ease;
    filter: blur(12px);

    &.isActive {
      filter: blur(0px);
    }
  }
`;

export const TextTop = styled.div`
  font-size: 2rem;
  font-weight: 500;
  word-break: keep-all;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
  transform: translateY(50%);
  opacity: 0;
  transition: all 1.5s ease;

  & > img {
    transform: translateY(-50%);
  }

  &.isActive {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SliderImage1 = styled.div`
  width: 750px;
  height: auto;
  transform: translate(15%, 10%);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  // 초록색 동그라미
  & > span:nth-of-type(1) {
    top: 15%;
    right: 20%;
    width: 26px;
    height: 26px;
    border: 5px solid #cfe869;
    border-radius: 50%;
    animation: ${MoveY} 3s 1s infinite ease-in-out alternate;
  }
  // 보라색 동그라미
  & > span:nth-of-type(2) {
    top: 0;
    right: 30%;
    width: 16px;
    height: 16px;
    border: 4px solid #b991fa;
    border-radius: 50%;
    animation: ${MoveY} 2s 1s infinite ease-in-out alternate;
  }
  // 보라색 동그라미
  & > span:nth-of-type(3) {
    left: -5%;
    bottom: 30%;
    width: 84px;
    height: 84px;
    border: 4px solid #b991fa;
    border-radius: 50%;
    animation: ${MoveY} 4s 1s infinite ease-in-out alternate;
  }
  // 초록색 동그라미
  & > span:nth-of-type(4) {
    left: -10%;
    bottom: 25%;
    width: 29px;
    height: 29px;
    border: 4px solid #cfe869;
    border-radius: 50%;
    animation: ${MoveY} 3s 1s infinite ease-in-out alternate;
  }

  & > div {
    position: absolute;
  }

  & > div:nth-of-type(1) {
    top: -50%;
    left: -10%;
    width: 300px;
    height: auto;
    animation: ${Rotation} 30s 1s infinite ease-in-out alternate;
  }

  & > div:nth-of-type(2) {
    z-index: -1;
    bottom: -30%;
    right: -60%;
    width: 600px;
    height: auto;
    animation: ${Rotation} 30s 1s infinite ease-in-out alternate;
  }
  @media ${breakPoints.tablet} {
    width: 450px;
    // 초록색 동그라미
    & > span:nth-of-type(1) {
      width: 16px;
      height: 16px;
    }
    // 보라색 동그라미
    & > span:nth-of-type(2) {
      width: 16px;
      height: 16px;
    }
    // 보라색 동그라미
    & > span:nth-of-type(3) {
      width: 44px;
      height: 44px;
    }
    // 초록색 동그라미
    & > span:nth-of-type(4) {
      width: 19px;
      height: 19px;
    }
    & > div:nth-of-type(1) {
      width: 190px;
    }
    & > div:nth-of-type(2) {
      width: 400px;
    }
  }
  @media ${breakPoints.mobile} {
    width: 300px;
    // 초록색 동그라미
    & > span:nth-of-type(1) {
      width: 10px;
      height: 10px;
    }
    // 보라색 동그라미
    & > span:nth-of-type(2) {
      width: 6px;
      height: 6px;
    }
    // 보라색 동그라미
    & > span:nth-of-type(3) {
      width: 25px;
      height: 25px;
    }
    // 초록색 동그라미
    & > span:nth-of-type(4) {
      width: 10px;
      height: 10px;
    }
    & > div:nth-of-type(1) {
      width: 120px;
    }
    & > div:nth-of-type(2) {
      width: 260px;
    }
  }
`;

export const SliderImage2 = styled.div`
  width: 100%;
  img {
    margin-top: -1px;
    height: calc(100% + 2px);
    object-fit: contain;
  }
`;

export const SliderImage3 = styled.div`
  width: 100%;
  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`;

export const TextMiddle = styled.div`
  font-size: 3.43rem;
  font-weight: 700;
  transform: translateY(50%);
  opacity: 0;
  transition: all 1.5s ease;
  transition-delay: 0.5s;
  &.isActive {
    transform: translateY(0);
    opacity: 1;
  }
  & > span {
    color: #0fbaa3;
  }

  @media ${breakPoints.tablet} {
    font-size: 3rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 2.5rem;
  }
`;
