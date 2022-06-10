import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  padding-right: 7rem;

  @media ${breakPoints.tablet} {
    padding-right: 0;
    padding-bottom: 3rem;
    border-bottom: 1px solid #c4c4c4;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 6.6875rem;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const MenuWrapper = styled.ul`
  @media ${breakPoints.tablet} {
    display: none;
  }
`;

export const MenuItem1 = styled.li`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.06rem;
  padding: 1rem 0;
  cursor: pointer;
  word-break: keep-all;

  &.isActive {
    color: #0fbaa3;
  }
`;

export const MenuItem2 = styled.li`
  font-weight: 500;
  letter-spacing: -0.06rem;
  color: #848484;
  padding: 0.9rem 0;
  word-break: keep-all;
  cursor: pointer;

  &.isActive {
    color: #0fbaa3;
  }
`;

export const MobileMenuWrapper = styled.ul`
  display: none;

  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: space-around;
    word-break: keep-all;
  }
`;

export const MobileMenuItem1 = styled.li`
  @media ${breakPoints.tablet} {
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: -0.06rem;
    padding: 1rem 0;
    cursor: pointer;
    word-break: keep-all;

    &.isActive {
      color: #0fbaa3;
    }
  }
`;

export const MobileMenuItem2 = styled.li`
  @media ${breakPoints.tablet} {
    font-weight: 500;
    letter-spacing: -0.06rem;
    color: #848484;
    padding: 0.9rem 0;
    word-break: keep-all;
    cursor: pointer;

    &.isActive {
      color: #0fbaa3;
    }
  }
`;

export const MobileListWrapper = styled.div`
  display: none;

  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: space-around;
    width: 45%;
    text-align: center;
  }
`;
