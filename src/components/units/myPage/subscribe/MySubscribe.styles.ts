import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6.25rem 15rem;

  @media ${breakPoints.tablet} {
    padding: 3.25rem 3rem;
  }

  @media ${breakPoints.mobile} {
    padding: 3rem 2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90rem;

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;

export const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 1.5rem;
  width: 100%;

  @media ${breakPoints.tablet} {
    border-bottom: none;

    & .title01 {
      display: none;
    }
  }

  @media ${breakPoints.mobile} {
    justify-content: center;
  }
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
  }
`;

export const Unsubscribe = styled.button`
  border: none;
  background-color: #ffffff;
  font-weight: 700;
  color: #848484;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 0.5rem;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MySubscribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.25rem 0;

  & .expert {
    background-color: #bfab87;
  }

  & .common {
    background-color: #c2bfb9;
  }
`;

export const UserGrade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.6875rem;
  height: 1.5rem;
  background-color: #c2bfb9;
  border: none;
  color: #ffffff;
  border-radius: 20px;
`;

export const UserSubs = styled.strong`
  color: #0fbaa3;
  font-size: 2rem;
  padding: 1rem;

  @media ${breakPoints.mobile} {
    font-size: 1.7rem;
  }
`;

export const PayHistory = styled.div``;

export const Pay = styled.div`
  padding: 4.5rem 0;
  font-size: 1.5rem;
  border-bottom: 1px solid #c4c4c4;

  & .means {
    color: #848484;
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
  }
  & > span {
    font-weight: 600;
  }
  & .cardNumber {
    padding-left: 2rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    padding-top: 0;
    align-items: center;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 13.75rem;
  height: 4rem;
  border: none;
  border-radius: 2rem;
  padding: 20px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;

export const ButtonGray = styled(Button)`
  background-color: #c4c4c4;
  color: #737373;
`;
export const ButtonGreen = styled(Button)`
  background-color: #0fbaa3;
  color: #ffffff;
`;

export const Pass = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.5rem 0;
`;

export const Subs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  width: 48.7%;
  height: 27.8125rem;
  border-radius: 1rem;

  &.basic {
    background-image: url("/img/myPage/img-subscribe.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  &.premium {
    background-image: url("/img/myPage/img-subscribe.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  & h1 {
    padding-bottom: 2.6875rem;
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

  & p {
    color: #c4c4c4;
    font-size: 1.5rem;
    letter-spacing: -0.06rem;
    font-weight: 500;
    padding-bottom: 3.3125rem;
  }

  @media ${breakPoints.tablet} {
    width: 48.5%;
    height: 100%;
    padding: 3rem 0;

    & h1 {
      padding-bottom: 1rem;
      font-size: 1.7rem;
    }
    & .month {
      font-size: 1.5rem;
    }

    & .price {
      font-size: 2.5rem;
    }

    & p {
      font-size: 1.3rem;
      padding-bottom: 2rem;
    }
  }

  @media ${breakPoints.mobile} {
    width: 90%;
    height: 100%;
    margin-top: 2rem;
    padding: 2rem;

    & h1 {
      padding-bottom: 1rem;
      font-size: 1.5rem;
    }
    & .month {
      font-size: 1.3rem;
    }

    & .price {
      font-size: 2.2rem;
    }

    & p {
      font-size: 1.2rem;
      padding-bottom: 2rem;
    }
  }
`;
