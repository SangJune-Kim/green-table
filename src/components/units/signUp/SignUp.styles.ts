import styled from "@emotion/styled";

// 회원가입 전체

// 회원가입 전체 컴포넌트
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #e5e5e5;
  @media (max-width: 767px) {
    background-color: white;
  }
`;

// 공통 내용 전체
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.0625rem auto;
  width: 100%;
  max-width: 767px;
`;

// 공통 제목 부분
export const HeaderWrapper = styled.div`
  margin-bottom: 2.1875rem;
  width: 100%;
  max-width: 767px;
  display: flex;
  justify-content: center;
`;
export const HeaderTitle = styled.h1`
  font-size: 3.125rem;
  width: 100%;
  max-width: 767px;
  display: flex;
  justify-content: center;
`;

// 공통 제목 외 내용 부분
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 770px;
  padding: 20px 100px;
  height: 65rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 2rem;
  margin-bottom: 2rem auto;
`;

// form
export const FormWrapper = styled.form`
  width: 100%;
  max-width: 770px;
`;

// 공통 회원가입 단계 부분
export const BodyTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 770px;
`;
export const BodyTitle = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  width: 36rem;
  max-width: 770px;
`;

export const SignUpTitle = styled.li`
  width: 12rem;
  text-align: center;
  font-weight: 400;
`;

export const SignUpTitleOn = styled.li`
  width: 12rem;
  text-align: center;
  font-weight: 600;
`;

export const SignUpTitleUnderBarWrapper = styled.ul`
  max-width: 36rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpTitleUnderBar = styled.li`
  border-bottom: 4px solid #c4c4c4;
  min-width: 12rem;
`;
export const SignUpTitleUnderBarOn = styled.li`
  border-bottom: 6px solid #0fbaa3;
  min-width: 12rem;
`;

// 약관 동의 부분
export const BodyContents = styled.ul`
  width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

export const PolicyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 36rem;
`;

export const PolicyTitleEssential = styled.span`
  font-weight: 700;
  color: #0fbaa3;
  margin-right: 0.2rem;
  margin-bottom: 2px;
`;

export const PolicyTitle = styled.span`
  font-weight: 500;
  margin-bottom: 2px;
`;

export const PolicyContents = styled.div`
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  width: 36rem;
  height: 17rem;
  margin-bottom: 10px;
`;

// 정보 입력 내용 전체 부분
export const InputContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  width: 36rem;
`;

// 정보 입력 row 하나
export const InputContents = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 36rem;
`;

// 정보 입력 카테고리 부분
export const InputTitleWrapper = styled.li`
  display: flex;
  width: 8rem;
  min-width: 8rem;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 10px;
  margin-right: 2rem;
`;

// 정보 입력 인풋 부분
export const InputWrapper = styled.li`
  display: flex;
  width: 26rem;
`;

export const InputError = styled.div`
  color: red;
  height: 1rem;
  display: flex;
  margin-left: 11rem;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 0.8rem;
`;

// 성별 선택
export const SelectWrapper = styled.div`
  width: 8rem;
  display: flex;
  align-items: center;
`;

export const GenderSelect = styled.select`
  width: 7rem;
  height: 4rem;
  padding: 20px;
  margin-left: 0.8rem;
  border-radius: 2rem;
  border: 1px solid #bfbfbf;
  color: #848484;
`;

interface IPropsButton {
  isReady: boolean;
}

// 휴대폰 인증 버튼
export const PhoneNumberCertify = styled.button`
  width: 7.56rem;
  height: 3.93rem;
  border: 0;
  border-radius: 2rem;
  background-color: ${(props: IPropsButton) =>
    props.isReady ? "#0FBAA3" : "#c4c4c4"};
  color: white;
  margin-left: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 정보성 메일 체크박스 부분
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CheckboxLabel = styled.label`
  font-weight: 500;
  cursor: pointer;
`;

// 회원가입 완료 부분
export const CompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.75rem;
  height: 43.75rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 2rem;
  margin-bottom: 2rem;
`;

export const CheckIcon = styled.img`
  position: relative;
  margin-bottom: 1rem;
`;

export const Cake = styled.img`
  margin-bottom: 2rem;
`;
export const FlowerShower = styled.img`
  position: absolute;
  top: 18rem;
  animation-duration: 3s;
`;

export const CompleteTitle = styled.h2`
  margin-bottom: 3rem;
  font-weight: 500;
`;
