import styled from "@emotion/styled";

export const Main = styled.main`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }

  & > div {
    scroll-snap-align: start;
    height: 100vh;
  }
`;
