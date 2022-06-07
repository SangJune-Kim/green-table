import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row-reverse;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10rem;
  width: 100%;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding-top: 2.18rem;
  width: 100%;
  @media (max-width: 1580px) {
    padding-top: 4rem;
  }
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding-left: 3rem;
  left: 0;
  top: 0;
  transform: translate(100%, 150%);
  font-size: 0.9rem;
  background: transparent;
  border: none;
  cursor: pointer;

  & > img {
    padding-right: 0.5rem;
  }
  @media (max-width: 1580px) {
    padding-right: 0;
    transform: translate(50%, 70%);
  }
  @media ${breakPoints.mobile} {
    transform: translate(50%, 50%);
  }
`;
export const SliderWrapper = styled.div`
  position: relative;
`;

export const MenuWrapper = styled.div`
  display: flex;
  position: sticky;
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  padding: 3rem 1.5rem;
  background: #ffffff;
  z-index: 999;
  width: 600px;
  height: 100vh;
  box-shadow: 0px 6px 11px rgba(0, 0, 0, 0.25);
  @media ${breakPoints.tablet} {
    position: relative;
    width: 100%;
    height: auto;
  }
  @media ${breakPoints.mobile} {
    position: relative;
    width: 100%;
    height: auto;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 9;
  background: #ffffff;
  border: 1px solid #c4c4c4;

  & > li {
    padding: 1rem 1.5rem;
    margin: 0 1rem;
    font-weight: 400;
    color: #262626;
    cursor: pointer;
  }

  .isActive {
    border-bottom: 3px solid #0fbaa3;
  }
`;

export const Contents = styled.div`
  width: 90%;
  max-width: 585px;

  & > h2 {
    padding-top: 4.625rem;
    padding-bottom: 4rem;
    text-align: center;
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: -0.05em;
  }
`;

export const Order = styled.div`
  position: relative;

  & > span {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.31rem 1rem;
    background: #eff18b;
    border-radius: 50%;
  }
  & > p {
    padding: 4rem 3rem 7rem 3rem;
    text-align: center;
  }
`;

export const RecipeCommentListWrapper = styled.div`
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 2rem;
  }
`;

export const Ingredient = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  & > span {
    padding: 0 2rem 1rem 2rem;
  }
`;
