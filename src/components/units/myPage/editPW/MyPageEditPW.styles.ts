import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6.25rem 15rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90rem;
`;

export const EditPwWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const PwWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;
  border-bottom: 1px solid #c4c4c4;
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.6rem 0;

  & > span {
    font-weight: 600;
    color: #464646;
  }
`;

export const Label = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  width: 15%;
  color: #464646;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;
