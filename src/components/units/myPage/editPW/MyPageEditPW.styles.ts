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
`;

export const Wrapper = styled.div`
  display: flex;
  width: 90rem;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

export const EditPwWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const PwWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;
  border-bottom: 1px solid #c4c4c4;
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.6rem 0;

  & > span {
    font-weight: 600;
    color: #464646;
  }
`;

export const Label = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  width: 25%;
  color: #464646;

  @media ${breakPoints.tablet} {
    word-break: keep-all;
    font-size: 1.2rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;
