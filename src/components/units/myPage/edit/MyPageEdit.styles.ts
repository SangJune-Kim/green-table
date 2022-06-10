import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6.25rem 15rem;

  @media ${breakPoints.tablet} {
    padding: 3.25rem 2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 90rem;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    width: 90%;
  }
`;

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 1.5rem;
  width: 100%;

  @media ${breakPoints.tablet} {
    border-bottom: none;
  }
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;

  @media ${breakPoints.tablet} {
    display: none;
  }
`;

export const SignOut = styled.button`
  border: none;
  background-color: #ffffff;
  font-weight: 700;
  color: #848484;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 0.5rem;
  }
`;

export const ExpertTitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 3.4375rem;
  width: 100%;

  & p {
    padding-left: 15px;
    color: #848484;
  }

  @media ${breakPoints.tablet} {
    flex-direction: column;
    align-items: center;

    & p {
      padding-left: 0;
      padding-top: 0.5rem;
    }
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  width: 100%;
  border-bottom: 1px solid #c4c4c4;

  @media ${breakPoints.tablet} {
    padding: 2.5rem;

    > div {
      width: 100%;
    }
  }
`;

export const VeganTypeWrapper = styled.div`
  padding-top: 1.5rem;
`;

export const FlexRow = styled.div`
  display: flex;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  @media ${breakPoints.tablet} {
    padding: 0 10%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 0;
  width: 100%;

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
    width: 22%;
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  width: 13.75rem;
  height: 4rem;
  border: 1px solid #bfbfbf;
  border-radius: 2rem;
  padding: 20px;
  margin-bottom: 10px;
  margin-left: 25px;
  font-weight: 500;
  font-size: 1rem;
  color: #464646;
  background-color: #c4c4c4;

  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  width: 100vw;
  height: 100vh;

  .modal-section {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 20px;
    width: 35rem;
  }

  .modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
  }
`;

export const Div = styled.div`
  width: 13.75rem;
  padding: 20px;
  margin: 0 20px;
  visibility: hidden;

  @media ${breakPoints.tablet} {
    width: 33%;
  }
`;
