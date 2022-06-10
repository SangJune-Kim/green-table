import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6.25rem 15rem;

  @media ${breakPoints.tablet} {
    padding: 4.25rem 2em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90rem;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    width: 90%;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10.5rem;
  background-color: #faf9f9;
  border-radius: 24px;
  padding: 0 4rem;

  @media ${breakPoints.tablet} {
    margin: 3rem 0;
    padding: 0 2.5rem;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  width: 65%;

  & .expert {
    background-color: #bfab87;
  }

  & .common {
    background-color: #c2bfb9;
  }

  @media ${breakPoints.tablet} {
    width: 45%;
    padding-left: 0.4rem;
  }
`;

export const UserIcon = styled.img`
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
  border: 1px solid #c4c4c4;
`;

export const UserGrade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.6875rem;
  height: 1.5rem;
  border: none;
  color: #ffffff;
  border-radius: 20px;
`;

export const UserName = styled.span`
  font-size: 2rem;
  padding-top: 0.5rem;
  word-break: keep-all;

  & > span {
    font-weight: 700;
  }

  @media ${breakPoints.tablet} {
    font-size: 1.8rem;
  }
`;

export const UserInfo = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Info = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #c4c4c4;
  padding-right: 2.5rem;
  word-break: keep-all;

  &:last-of-type {
    border: none;
    padding-right: 0;
    padding-left: 2.5rem;
  }

  @media ${breakPoints.tablet} {
    &:last-of-type {
      border: none;
      padding-right: 0;
    }
  }
`;

export const TypeIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Name = styled.span`
  padding-top: 0.4rem;
  color: #424242;

  @media ${breakPoints.tablet} {
    word-break: keep-all;
    text-align: center;
  }
`;

export const Subscribe = styled.span`
  color: #0fbaa3;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const RecipeWrapper = styled.div`
  width: 100%;
`;
export const Recipe = styled.div`
  padding-top: 2.75rem;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 0.625rem;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  & > span {
    color: #848484;
  }
`;

export const Body = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  padding: 2rem;

  @media ${breakPoints.tablet} {
    display: none;
  }
`;

export const TabletBody = styled.ul`
  display: none;

  @media ${breakPoints.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    padding: 2rem;
  }
`;

export const Menu = styled.li`
  width: 100%;
  margin-right: 0.8rem;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0rem;
  }

  & > img {
    width: 100%;
    height: 207px;
    border-radius: 30px;
  }

  & > h2 {
    padding: 0.4rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${breakPoints.tablet} {
    width: 100%;

    & > img {
      width: 100%;
      border-radius: 30px;
    }
  }
`;
