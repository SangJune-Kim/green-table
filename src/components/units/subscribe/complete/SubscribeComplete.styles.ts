import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const MoveX = keyframes`
  0%{
    transform: translateX(400%);
  }
  50%{
    transform: translateX(0) ;
  }
  70%{
    transform: translateX(20%) ;
  }
  100%{
    transform: translateX(0) ;
  }
`;

const MoveY = keyframes`
  from{
    transform: translateY(20%);
  }
  to{
    transform: translateY(0);
  }

`;

const FadeIn = keyframes`
from{
opacity: 0;
}
to{
opacity: 1;
}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #e5e5e5;
  overflow-x: hidden;
  overflow-y: hidden;
`;

// 공통 내용 전체
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.0625rem auto;
`;

// 구독 완료 메세지 부분
export const HeaderWrapper = styled.div`
  width: 47.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 13rem;
  transition: all 3s ease;
  animation: ${FadeIn} 3s ease;
`;

export const HeaderCompleteIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 1rem;
`;

export const HeaderCompleteNotice = styled.p`
  opacity: 1;
  font-size: 1.5rem;
  font-weight: 500;
  @media ${breakPoints.mobile} {
    font-size: 1.3rem;
  }
`;

// 메인 내용부분
export const BodyWrapper = styled.div`
  width: 47.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeliveryMan = styled.img`
  width: 19.25rem;
  position: absolute;
  z-index: 100;
  top: -150px;
  animation: ${MoveX} 1s ease-in-out;
  @media ${breakPoints.mobile} {
    width: 16.25rem;
  }
`;

export const Receipt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 47.25rem;
  height: 60rem;
  z-index: 3;
  background-image: url("/img/subscribe/img-complete-03.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  animation: ${MoveY} 1s ease;
  @media ${breakPoints.mobile} {
    width: 40rem;
    height: 53rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 37rem;
  margin-top: 12rem;
  @media ${breakPoints.mobile} {
    width: 32rem;
    margin-top: 8rem;
  }
`;

export const TextHeader = styled.div`
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid black;
  margin-bottom: 2rem;
`;

export const TextRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  &:last-of-type {
    border-bottom: 2px solid #c4c4c4;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }
  &:nth-of-type(5) {
    border-bottom: 2px solid #c4c4c4;
    padding-bottom: 2rem;
  }
`;

export const TextCategory = styled.p``;

export const TextContents = styled.p``;

export const DetailGuide = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: #c4c4c4;
  letter-spacing: -0.05em;
  margin-bottom: 2rem;
`;
