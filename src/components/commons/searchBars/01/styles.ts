import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: 2.8rem 5% 2.8rem 7.8rem;
  width: 95%;
  max-width: 1200px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  transform: translateY(-50%);

  & > img {
    padding-right: 1rem;
    width: 3rem;
  }

  & > input {
    width: 100%;
    border: none;
    font-size: 1.5rem;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #c4c4c4;
    }
  }
`;
