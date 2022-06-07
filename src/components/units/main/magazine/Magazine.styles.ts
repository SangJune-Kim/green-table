import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 1440px;
  padding: 4.25rem 0;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const MagazineHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 3.5rem;
  width: 100%;
`;
export const HeadText = styled.div`
  & > span {
    font-size: 1.375rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #0fbaa3;
  }
  & > h1 {
    padding-top: 8px;
    font-size: 2.25rem;
    font-weight: 600;
  }
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  color: #ffffff;
`;

const ItemOpacity = keyframes`
to{
  background: none
}
`;

export const Item = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2rem;
  height: 530px;

  :hover {
    & > div {
      animation: ${ItemOpacity} 1s ease;
      animation-fill-mode: forwards;
      height: 100%;
    }
    & > img {
      transition: all 1s ease;
      transform: scale(1.2);
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    text-align: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    letter-spacing: -0.05em;
    font-weight: 700;

    p {
      padding-top: 1.14rem;
      word-break: keep-all;
      font-size: 1.5rem;
    }
  }

  &:nth-of-type(1) > div {
    background: rgba(207, 232, 105, 0.7);
  }

  &:nth-of-type(2) > div {
    background: rgba(247, 209, 52, 0.7);
  }

  &:nth-of-type(3) > div {
    background: rgba(232, 142, 81, 0.7);
  }

  &:nth-of-type(4) > div {
    background: rgba(65, 191, 237, 0.5);
  }
  @media (max-width: 1470px) {
    width: calc(25% - 10px);
  }
  @media ${breakPoints.tablet} {
    margin-bottom: 10px;
    width: calc(50% - 10px);
    height: 400px;
    & > div {
      margin-top: 0;
    }
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 10px;
    width: calc(50% - 10px);
    height: 300px;
    & > div {
      margin-top: 0;
    }
  }
`;
