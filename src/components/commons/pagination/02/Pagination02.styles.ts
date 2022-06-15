import styled from "@emotion/styled";
import { IPropsPaginationStyled } from "./Pagination02.types";

export const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const PagePrevButton = styled.li`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 0px;
  margin-left: 1rem;
  margin-right: 2rem;
  display: ${(props: IPropsPaginationStyled) =>
    props.isPrevActive ? "y" : "none"};
`;

export const PageNextButton = styled.li`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 0px;
  margin-right: 1rem;
  display: ${(props: IPropsPaginationStyled) =>
    props.isNextActive ? "y" : "none"};
`;

export const PageNumber = styled.li`
  width: 2.3125rem;
  height: 2.3125rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: 500;
  margin-right: 2rem;
  background-color: ${(props: IPropsPaginationStyled) =>
    props.currentPage ? "#0FBAA3" : "white"};
  color: ${(props: IPropsPaginationStyled) =>
    props.currentPage ? "white" : "rgba(0, 0, 0, 0.5)"};
`;
