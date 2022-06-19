import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 585px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeadText = styled.div`
  & > span {
    padding-right: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
  }

  & > span:last-of-type {
    color: #0fbaa3;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 2.5rem 0;
  border-bottom: 1px solid #c4c4c4;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  word-break: keep-all;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    word-break: keep-all;
    color: #848484;
    padding-bottom: 10px;
  }
`;

export const CommentLeft = styled.div`
  & > span {
    padding-right: 5px;
    margin-right: 5px;
    font-size: 0.75rem;
    border-right: 1px solid #848484;
  }

  & > span:nth-of-type(2) {
    color: #0fbaa3;
  }

  & > span:last-of-type {
    border: none;
  }
`;

export const CommentButton = styled.div`
  button {
    padding: 0 0.5rem;
    line-height: 1.3rem;
    border: 1px solid #efefef;
    border-radius: 1rem;
    background: transparent;
    font-size: 1.2rem;
    color: #848484;
    cursor: pointer;
    transform: scaleX(-1);

    :hover {
      border: 1px solid transparent;
      background: #0fbaa3;
      color: #ffffff;
    }
  }

  button:first-of-type {
    margin-right: 1rem;
  }
`;
