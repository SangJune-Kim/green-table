import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.div`
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 120rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
`;

export const SubTitle = styled.p`
  font-size: 2.25rem;
`;
export const Contents = styled.p`
  font-size: 1.2rem;

  @media ${breakPoints.tablet} {
    display: flex;
  }
`;

export const IntroTop1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 7.6875rem;
  padding-bottom: 5.75rem;

  & > img {
    position: relative;
    left: 10%;
    z-index: -1;
  }

  @media ${breakPoints.tablet} {
    flex-direction: column;
    padding-top: 8.6875rem;
    padding-bottom: 15.75rem;

    & > img {
      width: 40%;
      position: relative;
      z-index: -1;
      left: 0;
    }
  }
`;

export const TopText1 = styled.div`
  position: relative;
  left: 14.8125rem;
  width: 100%;

  & > h1 {
    padding-bottom: 0;
  }

  @media ${breakPoints.tablet} {
    left: 35%;
    padding-bottom: 2%;
  }
`;

export const IntroTop2 = styled.div`
  position: relative;

  & .img-01 {
    position: relative;
    left: -5%;
  }

  & .img-02 {
    position: relative;
    left: 20%;
  }

  @media ${breakPoints.tablet} {
    & .img-01 {
      width: 23%;
      left: 30%;
    }

    & .img-02 {
      width: 15%;
      left: 32%;
    }
  }
`;

export const TopText2 = styled.div`
  position: absolute;
  left: 15%;
  bottom: -10.5%;

  & > h1 {
    padding-bottom: 1.1875rem;
  }

  @media ${breakPoints.tablet} {
    left: 30%;
    bottom: -31.5%;
  }
`;

export const IntroTop3 = styled.div`
  position: relative;
  padding-top: 14.625rem;

  & .img-03 {
    position: relative;
    left: 10%;
    bottom: 13rem;
    top: 30%;
  }

  & .img-04 {
    position: relative;
    left: 35%;
  }

  @media ${breakPoints.tablet} {
    padding-top: 23.75rem;

    & .img-03 {
      width: 10%;
      left: 30%;
      bottom: 2rem;
      top: 30%;
    }

    & .img-04 {
      width: 25%;
      left: 35%;
    }
  }
`;

export const TopText3 = styled.div`
  position: absolute;
  right: 26%;
  bottom: -8%;
  text-align: right;

  & > h1 {
    padding-bottom: 1.1875rem;
  }

  @media ${breakPoints.tablet} {
    right: 30%;
    bottom: -18%;
  }
`;

export const IntroMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 17.8125rem 0;
  text-align: center;

  & > img {
    padding: 5.5rem 0;
  }

  @media ${breakPoints.tablet} {
    padding-top: 23.8125rem;

    & > img {
      width: 35%;
    }
  }
`;

export const IntroBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    padding-bottom: 11rem;
  }

  @media ${breakPoints.tablet} {
    & > img {
      width: 40%;
    }
  }
`;

export const Delivery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.25rem 0;
  width: 70.1875rem;

  @media ${breakPoints.tablet} {
    display: none;
  }
`;

export const TabletDelivery = styled.div`
  display: none;

  @media ${breakPoints.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    padding: 5.25rem 0;

    row-gap: 4rem;
    column-gap: 3rem;
  }
`;

export const ReviewWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50.4375rem;
  background-color: #f7f9f3;
  text-align: center;

  & > h1 {
    padding-bottom: 1.5rem;
  }

  @media ${breakPoints.tablet} {
    justify-content: unset;
    padding-top: 3.5rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 120rem;

  & .img-05 {
    position: absolute;
    left: 20%;
    bottom: -2rem;
  }

  & .img-06 {
    position: absolute;
    right: 20%;
    bottom: -16rem;
  }

  @media ${breakPoints.tablet} {
    & .img-05 {
      position: absolute;
      left: 28%;
      top: 4rem;
    }

    & .img-06 {
      position: absolute;
      right: 28%;
      top: 4rem;
    }
  }
`;

export const PassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120rem;
  padding: 5.5rem 0;

  & > h1 {
    padding-bottom: 1.5rem;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  width: 74.75rem;
  justify-content: space-between;
  padding-top: 2.625rem;

  @media ${breakPoints.tablet} {
    width: 43%;
  }
`;

export const Pass = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 49.5%;
  height: 27.8125rem;
  border-radius: 2rem;
  border: 4px solid #0fbaa3;

  & > h2 {
    padding-bottom: 2.6875rem;
    font-size: 2.25rem;
  }
  & .month {
    color: #737373;
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 0.8rem;
  }

  & .price {
    color: #262626;
    font-size: 3rem;
    font-weight: 700;
  }

  & > p {
    color: #c4c4c4;
    font-size: 1.5rem;
    letter-spacing: -0.06rem;
    font-weight: 500;
    padding-bottom: 3.3125rem;
  }

  @media ${breakPoints.tablet} {
    height: 100%;
    padding: 2.6rem 0;

    & > h2 {
      padding-bottom: 2rem;
      font-size: 2rem;
    }

    & .month {
      font-size: 1.5rem;
      padding-bottom: 0.8rem;
    }

    & .price {
      font-size: 2.5rem;
    }

    & p {
      font-size: 1.3rem;
      padding-bottom: 2rem;
    }
  }
`;
