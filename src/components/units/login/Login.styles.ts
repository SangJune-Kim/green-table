import styled from "@emotion/styled";

// 컴포넌트 전체
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #e5e5e5;
  @media (max-width: 767px) {
    background-color: white;
  }
`;

// 내용 전체
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.0625rem auto;
  width: 100%;
  max-width: 1440px;
`;

// 제목 부분
export const HeaderWrapper = styled.div`
  margin-bottom: 2.1875rem;
  width: 100%;
`;
export const HeaderTitle = styled.h1`
  font-size: 3.125rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

// 제목 외 내용 부분
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40.75rem;
  height: 40.75rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 2rem;
`;

// 아이디 비밀번호 인풋
export const BodyContents = styled.ul`
  width: 29rem;
  display: flex;
  flex-direction: column;
`;

export const BodyContentsInput = styled.input`
  width: 100%;
  height: 3.875rem;
  border: 1px solid #bfbfbf;
  border-radius: 2rem;
  padding: 20px;
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

// 로그인 회원가입 버튼
export const BodyContentsSignUpButton = styled.button`
  width: 100%;
  height: 3.875rem;
  margin-bottom: 1.875rem;
  background-color: white;
  border: 1px solid #0fbaa3;
  border-radius: 2rem;
  color: #0fbaa3;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
`;

// 소셜 로그인 부분
export const SNSLoginTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
export const SNSLoginTitle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  color: rgba(132, 132, 132, 1);
  margin: 0 1rem;
`;
export const SNSLoginTitleCenterLine = styled.div`
  border-bottom: 1px solid gray;
  width: 11rem;
`;

export const SNSLoginWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const SNSIcon = styled.img`
  width: 3.5rem;
  height: auto;
  margin-right: 2.75rem;
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`;
