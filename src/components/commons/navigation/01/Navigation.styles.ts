import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { INavigation01Style } from "./types";

// 전체
export const Wrapper = styled.ul`
  max-width: 1197px;
  width: 90%;
  height: 130px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.tablet} {
    margin: 2rem auto;
  }
  @media ${breakPoints.mobile} {
    margin: 1rem auto;
  }
`;

// 각 타입
export const VeganType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
  color: ${(props: INavigation01Style) => props.isPicked && "#0fbaa3"};
  :hover {
    color: #0fbaa3;
    & > div {
      background-image: url(${(props) => props.hover});
    }
  }
`;

// prettier-ignore
export const VeganTypeImg = styled.div`
  width: 3.3rem;
  height: 3.3rem;
  margin-bottom: 15px;
  background-image: url(${(props: INavigation01Style) =>    props.isPicked ? props.hover : props.image});
 background-repeat: no-repeat;
  :hover {
    background-image: url(${(props) => props.hover});
  }
`;

export const VeganTypeName = styled.li`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
`;

export const VeganTypeEnName = styled.li`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #c4c4c4;
`;
