import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 13.75rem;
  display: flex;
  align-items: center;
`;

export const PrevNextIcon = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  cursor: pointer;
`;

export const PageNumberWrapper = styled.div`
  font-size: 1.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const LastPageNumber = styled.span`
  font-weight: 600;
  margin-left: 0.5rem;
`;
export const CurrentPageNumber = styled.span`
  font-weight: 400;
  margin-right: 0.5rem;
`;
// export const PagePrevButton = styled.span`
//   width: 10%;
//   display: flex;
//   justify-content: center;
//   cursor: pointer;
//   border: 0px;
//   background-color: white;
//   color: ${(props) => (props.isPrevActive ? "black" : "white")};
// `;

// export const PageNextButton = styled.span`
//   display: flex;
//   justify-content: center;
//   width: 10%;
//   cursor: pointer;
//   border: 0px;
//   background-color: white;
//   display: ${(props) => (props.isNextActive ? "y" : "none")};
// `;

// export const PageNumber = styled.span`
//   display: flex;
//   justify-content: center;
//   width: 8%;
//   font-size: 15px;
//   cursor: pointer;
//   color: ${(props) => (props.currentPage ? "orange" : "black")};
//   font-weight: ${(props) => (props.currentPage ? "bold" : "normal")};
// `;
