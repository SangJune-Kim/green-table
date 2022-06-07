import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 585px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding: 2.5rem 0;
  border-bottom: 1px solid #c4c4c4;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  word-break: keep-all;

  & > div {
    display: flex;
    align-items: center;
    word-break: keep-all;
    color: #848484;
    padding-bottom: 10px;

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
  }
`;
