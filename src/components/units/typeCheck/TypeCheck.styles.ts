import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { IPropsVeganType } from "./TypeCheck.types";

// 컨테이너 전체
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #e5e5e5;
  @media (max-width: 767px) {
    background-color: white;
  }
`;

// 공통 내용 전체
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.0625rem auto;
  @media ${breakPoints.mobile} {
    width: 28rem;
  }
`;

// 공통 제목 부분
export const HeaderWrapper = styled.div`
  margin-bottom: 2.1875rem;
  @media ${breakPoints.mobile} {
    margin-bottom: 3rem;
  }
`;
export const HeaderTitle = styled.h1`
  font-size: 3.125rem;
  @media ${breakPoints.mobile} {
    font-size: 2.3rem;
  }
`;

// 공통 제목 외 내용 부분
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.75rem;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 2rem;
  margin-bottom: 2rem;
  @media ${breakPoints.mobile} {
    width: 28rem;
  }
`;

// 체크 단계 표시
export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

export const StepCircle = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #e8e8e8;
  border-radius: 50%;
  font-weight: 500;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepCircleOn = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #0fbaa3;
  border-radius: 50%;
  font-weight: 500;
  font-size: 1.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepBar = styled.div`
  width: 10rem;
  height: 5px;
  background-color: #e8e8e8;
`;

export const StepBarOn = styled.div`
  width: 10rem;
  height: 5px;
  background-color: #0fbaa3;
`;

// 단계별 질문
export const StepQuestion = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > span {
    font-weight: 400;
    font-size: 1.2rem;
    margin-top: 1rem;
    color: #848484;
  }
`;

// 각 타입
export const VeganTypeWrapper = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 12.5rem 12.5rem;
  row-gap: 3rem;
  justify-content: center;
  width: 40.75rem;
  margin-bottom: 5rem;
  @media ${breakPoints.mobile} {
    width: 30rem;
    grid-template-columns: 9rem 9rem 9rem;
    row-gap: 2rem;
    margin-bottom: 2rem;
  }
`;

// prettier-ignore
export const VeganType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:last-of-type {
    margin-right: 3rem;
  }
  color: ${(props: IPropsVeganType) => props.isPicked && "#0fbaa3"};

  & > div > div {
    background-image: url(${(props: IPropsVeganType) =>props.isPicked ? props.hover : props.image});
  }

  & > p {
    color: ${(props) => (props.isPicked ? "#0fbaa3" : "white")};
  }

  :hover {
    color: #0fbaa3;
    & > div {
      border: 2px solid #0fbaa3;
    }
    & > div > div {
      background-image: url(${(props) => props.hover});
    }
    & > p {
      color: #0fbaa3;
    }
  }
  @media ${breakPoints.mobile} {
    width: 9rem;
    margin: 0;
  }
`;

export const VeganTypeImgCircle = styled.div`
  width: 6rem;
  height: 6rem;
  border: 2px solid
    ${(props: IPropsVeganType) => (props.isPicked ? "#0fbaa3" : "#7f7f7f")};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const VeganTypeImg = styled.div`
  width: 3.3rem;
  height: 3.3rem;
`;

export const VeganTypeName = styled.li`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
`;

export const VeganTypeEnName = styled.li`
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 400;
  color: #c4c4c4;
`;

export const VeganTypeDetail = styled.p`
  margin-bottom: 5px;
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 관심 키워드 부분
export const VeganKeywordContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.75rem;
  height: 45rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 2rem;
  margin-bottom: 2rem;
  @media ${breakPoints.mobile} {
    width: 30rem;
    height: auto;
  }
`;

export const VeganKeywordWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const VeganKeywordRow = styled.div`
  margin-bottom: 2rem;
`;

export const VeganKeyword = styled.li`
  width: 10rem;
  height: 3.625rem;
  background-color: ${(props: IPropsVeganType) =>
    props.isPicked ? "#EFF18B" : "#f5f5f5"};
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    padding: 0rem;
    width: 9rem;
    margin-right: 0.5rem;
  }
`;

export const VeganKeywordCheckIcon = styled.img`
  margin-right: 0.6rem;
  width: 1rem;
  height: 1rem;
`;

// Q3 알레르기 체크
export const AllergyContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.75rem;
  height: 40rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 2rem;
  margin-bottom: 2rem;
  @media ${breakPoints.mobile} {
    width: 30rem;
    height: auto;
  }
`;

export const AllergyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const AllergyKeywordRow = styled.div`
  margin-bottom: 2rem;
`;

export const AllergyKeyword = styled.li`
  width: 10rem;
  height: 3.625rem;
  background-color: ${(props: IPropsVeganType) =>
    props.isPicked ? "#EFF18B" : "#f5f5f5"};
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    margin-right: 0.5rem;
  }
`;
