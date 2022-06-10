import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Container = styled.div`
  width: 100%;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.5rem 0;
  overflow: hidden;
  @media ${breakPoints.mobile} {
    max-height: 730px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1438px;
  width: 95%;
  display: flex;
  @media ${breakPoints.tablet} {
    flex-direction: column;
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

// 리스트 설명
export const TitleWrapper = styled.div`
  margin-right: 5rem;
  @media (max-width: 1585px) {
    margin-right: auto;
  }
  @media ${breakPoints.tablet} {
    margin: 0 auto;
    width: 90%;
  }
  @media ${breakPoints.mobile} {
    margin: 0 auto;
    width: 90%;
  }
`;

export const TitleBar = styled.div`
  width: 2.8125rem;
  border-top: 5px solid black;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 2.25rem;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  color: #737373;
  margin-bottom: 5px;
  word-break: keep-all;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

// 리스트 부분
export const SliderWrapper = styled.div`
  width: 80%;

  .slick-slide {
    padding-right: 20px;
  }

  .slick-arrow {
    z-index: 3;
    top: 38%;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .slick-prev {
    left: -4.2rem;
  }

  .slick-next {
    right: -3rem;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 2rem;
    color: #000000;
  }

  .slick-prev:before {
    content: "<";
  }
  .slick-next:before {
    content: ">";
  }
  @media (max-width: 1585px) {
    .slick-arrow {
      visibility: hidden;
      left: -1000%;
    }
  }
  @media ${breakPoints.tablet} {
    width: 90%;
    margin: 0 auto;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
    margin: 0 auto;
  }
`;
export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const RecipeBox = styled.div`
  margin-right: 1.5rem;
  height: auto;
  position: relative;
  cursor: pointer;
  width: 100%;
  max-width: 370px;
  height: 370px;
`;

export const RecipeImg = styled.img`
  border-radius: 2rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

export const IconBookmark = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  right: 1rem;
  top: 20px;
  & > span {
    color: #ffffff;
    font-size: 0.75rem;
  }
`;

export const StickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  transform: translateY(-90%);
`;

export const RecipeRecommendSticker = styled.img`
  z-index: 3;
  max-width: 5rem;
  width: 90%;
  height: auto;
`;
export const RecipeRecommendStickerHidden = styled.img`
  visibility: hidden;
  z-index: 3;
  max-width: 5rem;
  width: 90%;
  height: auto;
`;
export const RecipeLevelSticker = styled.img`
  max-width: 5rem;
  width: 90%;
  height: auto;
  transform: translateY(-30%);
`;

export const RecipeTitle = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 21.375rem;
`;

export const RecipeSubtitle = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: rgba(38, 38, 38, 0.6);
  margin-bottom: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 21.375rem;
`;

export const RecipeCommentBox = styled.ul`
  display: flex;
  align-items: center;
`;

export const RecipeCommentIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

export const RecipeCommentsCount = styled.li`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
`;
