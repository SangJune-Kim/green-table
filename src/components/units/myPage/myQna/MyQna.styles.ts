import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6.25rem 15rem;

  @media ${breakPoints.tablet} {
    padding: 3.25rem 3em;
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

export const QnaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
