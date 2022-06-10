import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { IDrawerStylesProps } from "./Drawer.types";

export const Container = styled.div`
  background-image: url("/img/drawer/img-drawer-01.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  @media ${breakPoints.mobile} {
    width: 20rem;
  }
`;
export const Wrapper = styled.div`
  padding: 2.68rem 1.875rem;
  width: 20.5rem;
  height: 100vh;
  @media ${breakPoints.mobile} {
    width: 20rem;
  }
`;

export const NonLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 329px;
  @media ${breakPoints.mobile} {
    width: 20rem;
  }
`;

export const DrawerHead = styled.div`
  margin-bottom: 2.56rem;
  & > div:nth-of-type(1) {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      background: #ffffff;
      border: none;
      cursor: pointer;

      img {
        width: 24px;
        height: auto;
      }
    }
  }

  & > div {
    margin-bottom: 1.23rem;
  }

  & > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.6875rem;
    height: 1.5rem;
    background-color: ${(props: IDrawerStylesProps) =>
      props.isPro ? "#bfab87" : "#C2BFB9"};
    border-radius: 1rem;
  }

  & > div:nth-of-type(2) > span {
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 400;
  }

  & > div:nth-of-type(3) > span {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -0.05em;
  }
`;

export const DrawerBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 2.375rem;
`;
export const VeganType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 2.75rem;
  border-right: 1px solid #c4c4c4;

  & > img {
    width: 2.43rem;
    height: 2.43rem;
    margin-bottom: 7px;
  }
  & > span {
    color: #464646;
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const SubsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span:nth-of-type(1) {
    padding-top: 6px;
    padding-bottom: 1rem;
    color: #0fbaa3;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: -0.05em;
  }

  & > span:nth-of-type(2) {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    color: #464646;
  }
`;
export const RegisterButton = styled.button`
  padding: 1rem 5rem;
  border: 1px solid #0fbaa3;
  border-radius: 2rem;
  background: #ffffff;
  color: #0fbaa3;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: -0.05em;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background: #0fbaa3;
    color: #ffffff;
    border: 1px solid transparent;
  }
`;

export const DrawerNav = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 0;

  & > li {
    padding-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: -0.05em;

    a {
      color: #464646;
    }
  }

  & > li:first-of-type a {
    color: #0fbaa3;
  }
`;
