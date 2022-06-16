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

export const RecentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RecipeWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.3rem;
  padding: 2.5rem 5rem;

  @media ${breakPoints.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 0.5rem;
    padding: 2rem 0;
  }

  @media ${breakPoints.mobile} {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 0.5rem;
    padding: 1rem 0;
  }
`;

export const Menu = styled.li`
  width: 14.5rem;
  cursor: pointer;

  & img {
    width: 15.5rem;
    height: 15.5rem;
    object-fit: cover;
    border-radius: 30px;
  }
  & h2 {
    padding: 0.4rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & p {
    padding-left: 0.4rem;
    padding-bottom: 0.4rem;
    color: #848484;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & .date {
    font-size: 0.875rem;
  }

  @media ${breakPoints.tablet} {
    width: 100%;

    & img {
      width: 100%;
      height: 15.5rem;
      border-radius: 30px;
    }
  }

  @media ${breakPoints.mobile} {
    width: 100%;

    & img {
      width: 100%;
      height: 9rem;
      border-radius: 20px;
    }

    & h2 {
      font-size: 1.1rem;
    }

    & p {
      font-size: 0.9rem;
    }
  }
`;
