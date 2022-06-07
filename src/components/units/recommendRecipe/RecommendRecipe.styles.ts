import styled from "@emotion/styled";

export const Container = styled.div`
  background: #f0f0f0;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 6.25rem 0;
  width: 100%;
  max-width: 952px;

  & > button {
    padding: 1.75rem 7.375rem;
    background: #0fbaa3;
    border-radius: 4rem;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;
export const Title = styled.h1`
  padding-bottom: 63px;
  width: 100%;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 600;
  letter-spacing: -0.05em;
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    padding-bottom: 63px;

    &:nth-of-type(n + 2) {
      padding-left: 24px;
    }
    div {
      height: 237.2px;
      width: 220px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 2rem;
    }

    h1 {
      padding-top: 25px;
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: -0.05em;
    }
  }
`;
