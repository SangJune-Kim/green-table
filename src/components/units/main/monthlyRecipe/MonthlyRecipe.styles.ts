import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 1440px;
  padding: 4.25rem 0;
`;

export const SliderWrapper = styled.div`
  width: 100%;

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

  @media ${breakPoints.tablet} {
    button {
      visibility: hidden;
      position: fixed;
      z-index: -99;
    }
  }
  @media ${breakPoints.mobile} {
    button {
      visibility: hidden;
      position: fixed;
      z-index: -99;
    }
  }
`;

export const HeadText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > span {
    font-size: 1.375rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #0fbaa3;
  }

  & > h1 {
    padding-top: 8px;
    font-size: 2.25rem;
    font-weight: 400;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.625rem 20px 2.625rem 0;
  width: 100%;

  & > input {
    display: none;
  }

  & > label {
    padding: 0.81rem 1rem;
    width: 25%;
    text-align: center;
    margin-right: 1.5rem;
    border-radius: 40px;
    font-weight: 500;
    letter-spacing: -0.05em;
    background: #f0f0f0;
    border: none;
    cursor: pointer;

    &.isActive {
      color: #0fbaa3;
      background: #ffffff;
      border: 1px solid #0fbaa3;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media (max-width: 1120px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 2rem 0;
    & > label {
      width: 46%;
      margin-bottom: 10px;
    }
  }
`;

export const RecommendRecipeItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const RecipeItem = styled.div`
  padding-right: 1.68rem;
  &:last-of-type {
    padding-right: 0;
  }

  h1 {
    font-weight: 600;
  }

  p {
    font-size: 0.85rem;
    color: #262626;
  }
`;

export const RecipeItemImageWrapper = styled.div`
  position: relative;
  height: 342px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
  }
`;

export const IconBookmark = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  right: 0;
  transform: translate(-50%, 50%);

  & > span {
    color: #ffffff;
    font-size: 0.75rem;
  }
`;

// 태그 : 비건 타입 [start]
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 2px 0;
  border-radius: 1rem;
  margin-right: 4px;
  margin-top: 1.25rem;
  color: #ffffff;
  font-size: 0.875rem;
  width: 5.125rem;
  display: flex;
  justify-content: center;
`;

export const TagVegan = styled(Tag)`
  background: #0fbaa3;
`;
export const TagLacto = styled(Tag)`
  background: #cee135;
`;
export const TagOvo = styled(Tag)`
  background: #fcd921;
`;
export const TagLactoOvo = styled(Tag)`
  background: #b991fa;
`;
export const TagPesco = styled(Tag)`
  background: #ef7c90;
`;
export const TagPollo = styled(Tag)`
  background: #fe974d;
`;
// 태그 : 비건 타입 [end]

export const RecipeItemTextWrapper = styled.div`
  & > h1 {
    font-weight: 500;
    padding-top: 2rem;
  }

  & > p {
    padding-top: 0.5rem;
  }
`;
