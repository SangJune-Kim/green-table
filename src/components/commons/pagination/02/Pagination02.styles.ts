import styled from "@emotion/styled";

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
  &:first-of-type {
    margin-left: 0;
    margin-right: 0;
  }
  /* color: ${(props) => (props.isPrevActive ? "black" : "white")}; */
`;

export const PageNextButton = styled.li`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 0px;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
  /* display: ${(props) => (props.isNextActive ? "y" : "none")}; */
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
  background-color: ${(props) => (props.currentPage ? "#0FBAA3" : "white")};
  color: ${(props) => (props.currentPage ? "white" : "rgba(0, 0, 0, 0.5)")};
  /* font-weight: ${(props) => (props.currentPage ? "bold" : "normal")}; */
`;
