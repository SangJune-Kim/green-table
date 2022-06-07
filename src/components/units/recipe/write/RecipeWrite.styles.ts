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

export const RepImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    width: 90%;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const RepImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 585px;
  height: 559px;
  background: #ebebeb;
  border-radius: 2rem;

  span {
    padding-top: 1.25rem;
    font-size: 1.25rem;
    font-weight: 400;
  }
  @media ${breakPoints.tablet} {
    margin: 0 auto;
    width: 400px;
    height: 400px;
  }
  @media ${breakPoints.mobile} {
    margin: 0 auto;
    width: 300px;
    height: 300px;
  }
`;

export const UploadedRepImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TextArea = styled.textarea`
  margin-top: 1.375rem;
  padding: 2rem;
  width: 585px;
  min-height: 114px;
  height: auto;
  background: #ebebeb;
  border: none;
  border-radius: 2rem;
  resize: none;

  :focus {
    outline: none;
  }

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const UploadIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2.25rem;

  & > div {
    width: 6.06rem;
    height: 6.06rem;
    background: #ebebeb;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-of-type(n + 2) {
      margin-left: 1rem;
    }
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
  cursor: pointer;

  & > li {
    padding: 1rem 1.5rem;
    margin: 0 1rem;
    font-weight: 400;
    color: #262626;
  }

  .isActive {
    border-bottom: 3px solid #0fbaa3;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 585px;
  padding: 0 10px;

  & > h2 {
    padding-top: 4.625rem;
    padding-bottom: 4rem;
    text-align: center;
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: -0.05em;
  }
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding-right: 3rem;
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

export const MenuWrapper = styled.div`
  position: sticky;
  overflow-y: auto;
  top: 0;
  padding: 3rem 1.5rem;
  width: 40%;
  height: 100vh;
  box-shadow: 0px 6px 11px rgba(0, 0, 0, 0.25);
  @media (max-width: 991px) {
    position: relative;
    width: 100%;
    height: auto;
    box-shadow: none;
    border: 1px solid #c4c4c4;
  }
`;

export const IngredientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #ebebeb;
  border-radius: 2rem;
  width: 100%;
  @media (max-width: 670px) {
    input {
      width: calc(100% / 5);
    }
  }
`;

export const InputGuideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;

  & > span {
    padding-left: 0.7rem;
  }
`;

export const CookingOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CookingOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  margin-bottom: 5rem;
  width: 585px;
  background: #ebebeb;
  border-radius: 2rem;

  & > span {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    background: #eff18b;
    border-radius: 50%;
    padding: 1.31rem 1rem;
  }

  & > button {
    position: absolute;
    padding: 0.3rem;
    top: 0;
    right: 0;
    border: none;
    border-radius: 50%;
    width: 2.2rem;
    height: 2.2rem;
    background: #464646;
    cursor: pointer;
    transform: translate(-50%, -50%);

    :hover {
      background: #0fbaa3;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  p {
    padding-top: 1rem;
  }
`;

export const IngredientArr = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    margin-left: 1rem;
    cursor: pointer;
  }

  span {
    padding: 0.3rem 1rem;
    background: #0fbaa3;
    color: #ffffff;
    border-radius: 1rem;
  }

  @media (max-width: 670px) {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const IngredientInputs = styled.div`
  div {
    display: flex;
    justify-content: center;
  }

  input {
    margin-right: 1rem;
    padding: 0.3rem 0.7rem;
    border: none;
    border-radius: 1rem;
    font-size: 1rem;

    :focus {
      outline: none;
    }
  }

  p {
    padding-top: 0.5rem;
    text-align: center;
    font-size: 0.8rem;
    color: #848484;
  }

  button {
    background: #0fbaa3;
    border: none;
    border-radius: 1rem;
    font-size: 1rem;
    padding: 0.3rem 1.5rem;
    color: #ffffff;
    word-break: keep-all;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      background: #ffffff;
      color: #0fbaa3;
    }
  }
`;
export const InputAmount = styled.input`
  width: 100px;
`;

export const InputUnit = styled.input`
  width: 100px;
`;

export const InputTipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.75rem;
`;

export const AddContentButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  background: #464646;
  padding: 0.2rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const AddStepWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  border-radius: 2rem;
  padding: 0.3rem 1rem;
  transition: all 0.5s ease;
  cursor: pointer;

  :hover {
    background: #464646;
    color: #ffffff;
  }

  span {
    padding-left: 0.5rem;
  }
`;

export const RegisterButtonWrapper = styled.div`
  padding-top: 200px;
  button {
    padding: 1.7rem 7rem;
    background: #0fbaa3;
    border: none;
    border-radius: 4rem;
    font-size: 1rem;
    color: #ffffff;
    border: 1px solid transparent;
    cursor: pointer;

    :hover {
      background: #ffffff;
      color: #0fbaa3;
      border: 1px solid #0fbaa3;
    }
  }
`;
