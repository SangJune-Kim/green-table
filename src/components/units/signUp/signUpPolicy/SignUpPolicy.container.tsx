// 회원가입 약관동의
import * as SignUp from "../SignUp.styles";
import { ChangeEvent, useEffect, useState } from "react";
import SubmitButton from "../../../commons/buttons/submit";
import CheckBox01 from "../../../commons/checkboxes/01";
import { IPropsSignUpPolicy } from "../SignUp.types";

export default function SignUpPolicy(props: IPropsSignUpPolicy) {
  const [checked, setChecked] = useState([true, true]);
  const isActive = !checked.includes(false);

  const handleCheck = (i: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newChecked = [...checked];
    newChecked[i] = e.target.checked;
    setChecked(newChecked);
  };

  useEffect(() => {
    setChecked([false, false]);
  }, []);

  const onClickAgree = () => {
    props.setAgreePolicy((prev: any) => !prev);
  };

  return (
    <SignUp.Wrapper>
      <SignUp.HeaderWrapper>
        <SignUp.HeaderTitle>회원가입</SignUp.HeaderTitle>
      </SignUp.HeaderWrapper>
      <SignUp.BodyWrapper>
        <SignUp.BodyTitleWrapper>
          <SignUp.BodyTitle>
            <SignUp.SignUpTitleOn>01 약관동의</SignUp.SignUpTitleOn>
            <SignUp.SignUpTitle>02 정보입력</SignUp.SignUpTitle>
            <SignUp.SignUpTitle>03 가입완료</SignUp.SignUpTitle>
          </SignUp.BodyTitle>
          <SignUp.SignUpTitleUnderBarWrapper>
            <SignUp.SignUpTitleUnderBarOn />
            <SignUp.SignUpTitleUnderBar />
            <SignUp.SignUpTitleUnderBar />
          </SignUp.SignUpTitleUnderBarWrapper>
        </SignUp.BodyTitleWrapper>
        <SignUp.BodyContents>
          <SignUp.PolicyTitleWrapper>
            <CheckBox01 checked={checked[0]} onChange={handleCheck(0)} />
            <SignUp.PolicyTitleEssential>
              [필수]
            </SignUp.PolicyTitleEssential>{" "}
            <SignUp.PolicyTitle>이용약관</SignUp.PolicyTitle>
          </SignUp.PolicyTitleWrapper>
          <SignUp.PolicyContents />
          <SignUp.PolicyTitleWrapper>
            <CheckBox01 checked={checked[1]} onChange={handleCheck(1)} />
            <SignUp.PolicyTitleEssential>
              [필수]
            </SignUp.PolicyTitleEssential>{" "}
            <SignUp.PolicyTitle>개인정보 수집 및 이용 동의</SignUp.PolicyTitle>
          </SignUp.PolicyTitleWrapper>
          <SignUp.PolicyContents />
        </SignUp.BodyContents>
        <SubmitButton
          isActive={isActive}
          title={"회원가입"}
          onClick={onClickAgree}
        />
      </SignUp.BodyWrapper>
    </SignUp.Wrapper>
  );
}
