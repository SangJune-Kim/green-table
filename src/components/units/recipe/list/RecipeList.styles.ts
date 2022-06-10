import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { IPropsStyles } from "./RecipeList.types";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BannerWrapper = styled.div`
  background-image: url("/img/banner/img-recipeList-banner.jpeg");
  background-repeat: none;
  background-position: center;
  background-size: cover;

  width: 100%;
  height: 538px;
  position: relative;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 140px;
      height: auto;
      padding-bottom: 2rem;
    }

    h1 {
      font-size: 3.125rem;
      padding-bottom: 2rem;
    }
    span {
      color: rgba(0, 0, 0, 0.6);
      font-weight: 500;
      font-size: 1.5rem;
      word-break: keep-all;
      width: 16rem;
      text-align: center;
    }
  }
  @media ${breakPoints.tablet} {
    height: 338px;
  }
  @media ${breakPoints.mobile} {
    height: 250px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const NavigationWrapper = styled.div`
  max-width: 1440px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavigationTitle = styled.h2`
  width: 100%;
  display: flex;
  font-weight: 600;
  font-size: 2.25rem;
`;

// 전체 리스트 부분
export const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 4rem;
  font-size: 1.3rem;
`;

export const WholeListBox = styled.ul`
  display: flex;
`;

export const WholeList = styled.li`
  font-weight: 500;
  cursor: pointer;
  border-right: 1px solid black;
  padding-right: 1rem;
  margin-right: 1rem;
  color: ${(props: IPropsStyles) =>
    props?.name === props.isPicked?.wholeMenu ? "#0FBAA3" : "black"};
  &:last-of-type {
    border-right: 0;
    margin-right: 0;
  }
`;

export const ListSelectBox = styled.ul`
  display: flex;
`;

export const ListSelect = styled.li`
  border-right: 1px solid #c4c4c4;
  padding-right: 1rem;
  margin-right: 1rem;
  font-weight: 500;
  color: ${(props: IPropsStyles) =>
    props?.name === props.isPicked?.selectList
      ? "#0FBAA3"
      : "rgba(0, 0, 0, 0.5)"};
  cursor: pointer;
  &:last-of-type {
    border-right: 0;
    margin-right: 0;
  }
`;
// 리스트 부분
export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 3rem;
  @media ${breakPoints.mobile} {
    justify-content: center;
  }
`;

export const RecipeBox = styled.div`
  height: auto;
  position: relative;
  padding-right: 10px;
  margin-bottom: 3rem;
  cursor: pointer;
`;

export const RecipeImg = styled.img`
  border-radius: 2rem;
  width: 21.375rem;
  height: 21.375rem;
  margin-bottom: 1.5rem;
  object-fit: cover;
  overflow: hidden;
  @media ${breakPoints.tablet} {
    width: 20rem;
    height: 20rem;
  }
  @media ${breakPoints.mobile} {
    width: 12rem;
    height: 12rem;
  }
`;

export const IconBookmark = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  right: 2rem;
  top: 18px;
  & > span {
    color: #ffffff;
    font-size: 0.75rem;
  }
  img {
    @media ${breakPoints.mobile} {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const StickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  transform: translateY(-90%) translateX(-10%);
`;

export const RecipeRecommendSticker = styled.img`
  z-index: 3;
  max-width: 5rem;
  width: 90%;
  height: auto;
  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;
export const RecipeLevelSticker = styled.img`
  max-width: 5rem;
  width: 90%;
  height: auto;
  transform: translateY(-30%);
  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export const RecipeTitle = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 21.375rem;
  @media ${breakPoints.mobile} {
    font-size: 1.7rem;
  }
`;

export const RecipeSummary = styled.p`
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
  @media ${breakPoints.mobile} {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const RecipeCommentsCount = styled.li`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
`;
