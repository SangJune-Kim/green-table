// 회원가입 전체
import { ChangeEvent, useEffect, useState } from "react";
import SubmitButton from "../../commons/buttons/submit";
import UserInput from "../../commons/inputs";
import * as SignUp from "./SignUp.styles";
import SignUpComplete from "./signUpComplete/SignUpComplete.container";
import SignUpPolicy from "./signUpPolicy/SignUpPolicy.container";
import CheckBox01 from "../../commons/checkboxes/01";
import { IPropsSignUp } from "./SignUp.types";

export default function SignUpUI(props: IPropsSignUp) {
  const [checked, setChecked] = useState(true);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    setChecked(false);
  }, []);

  const [agreePolicy, setAgreePolicy] = useState(false);

  return (
    <SignUp.Container>
      {!agreePolicy && (
        <SignUpPolicy
          setAgreePolicy={setAgreePolicy}
          setIsSubmit={props.setIsSubmit}
        />
      )}
      {agreePolicy && !props.isSubmit && (
        <SignUp.Wrapper>
          <SignUp.HeaderWrapper>
            <SignUp.HeaderTitle>회원가입</SignUp.HeaderTitle>
          </SignUp.HeaderWrapper>
          <SignUp.FormWrapper
            onSubmit={props.handleSubmit(props.onClickSubmit)}
          >
            <SignUp.BodyWrapper>
              <SignUp.BodyTitleWrapper>
                <SignUp.BodyTitle>
                  <SignUp.SignUpTitle>01 약관동의</SignUp.SignUpTitle>
                  <SignUp.SignUpTitleOn>02 정보입력</SignUp.SignUpTitleOn>
                  <SignUp.SignUpTitle>03 가입완료</SignUp.SignUpTitle>
                </SignUp.BodyTitle>
                <SignUp.SignUpTitleUnderBarWrapper>
                  <SignUp.SignUpTitleUnderBar />
                  <SignUp.SignUpTitleUnderBarOn />
                  <SignUp.SignUpTitleUnderBar />
                </SignUp.SignUpTitleUnderBarWrapper>
              </SignUp.BodyTitleWrapper>
              <SignUp.InputContentsWrapper>
                <SignUp.InputContents>
                  <SignUp.InputTitleWrapper>이름</SignUp.InputTitleWrapper>
                  <SignUp.InputWrapper>
                    <UserInput
                      placeholder={"이름"}
                      type={"text"}
                      register={props.register("name")}
                    />
                  </SignUp.InputWrapper>
                </SignUp.InputContents>
                <SignUp.InputError>
                  {props.formState.errors.name?.message}
                </SignUp.InputError>
                <SignUp.InputContents>
                  <SignUp.InputTitleWrapper>
                    생년월일 / 성별
                  </SignUp.InputTitleWrapper>
                  <SignUp.InputWrapper>
                    <UserInput
                      placeholder={"생년월일 6글자"}
                      inputSize={"medium"}
                      type={"text"}
                      register={props.register("birth")}
                    />
                    <SignUp.SelectWrapper>
                      <SignUp.GenderSelect
                        onChange={props.onChangeUserInputs("gender")}
                        defaultValue={""}
                      >
                        <option value={""} disabled={true}>
                          성별
                        </option>
                        <option value={"male"}>남자</option>
                        <option value={"female"}>여자 </option>
                      </SignUp.GenderSelect>
                    </SignUp.SelectWrapper>
                  </SignUp.InputWrapper>
                </SignUp.InputContents>
                <SignUp.InputError>
                  {props.formState.errors.birth?.message}
                  {props.userInputsErrors?.genderError}
                </SignUp.InputError>
                <SignUp.InputContents>
                  <SignUp.InputTitleWrapper>이메일</SignUp.InputTitleWrapper>
                  <SignUp.InputWrapper>
                    <UserInput
                      placeholder={"이메일"}
                      type={"text"}
                      register={props.register("email")}
                    />
                  </SignUp.InputWrapper>
                </SignUp.InputContents>
                <SignUp.InputError>
                  {props.formState.errors.email?.message}
                </SignUp.InputError>
                <SignUp.InputContents>
                  <SignUp.InputTitleWrapper>비밀번호</SignUp.InputTitleWrapper>
                  <SignUp.InputWrapper>
                    <UserInput
                      placeholder={"비밀번호"}
                      type={"password"}
                      register={props.register("password")}
                    />
                  </SignUp.InputWrapper>
                </SignUp.InputContents>
                <SignUp.InputError>
                  {props.formState.errors.password?.message}
                </SignUp.InputError>
                <SignUp.InputContents>
                  <SignUp.InputTitleWrapper>
                    비밀번호 확인
                  </SignUp.InputTitleWrapper>
                  <SignUp.InputWrapper>
                    <UserInput
                      placeholder={"비밀번호 확인"}
                      type={"password"}
                      register={props.register("passwordCheck")}
                    />
                  </SignUp.InputWrapper>
                </SignUp.InputContents>
                <SignUp.InputError>
                  {props.formState.errors.passwordCheck?.message}
                </SignUp.InputError>
                <SignUp.InputContents>
                  <SignUp.InputTitleWrapper>
                    휴대폰번호
                  </SignUp.InputTitleWrapper>
                  <SignUp.InputWrapper>
                    <UserInput
                      type="text"
                      placeholder={"-제외"}
                      inputSize={"medium"}
                      onChange={props.onChangeUserInputs("phone")}
                    />
                    <SignUp.PhoneNumberCertify
                      type="button"
                      onClick={props.onClickGetToken}
                      isReady={props.userInputs?.phone !== ""}
                      disabled={props.userInputs?.phone === ""}
                    >
                      인증번호전송
                    </SignUp.PhoneNumberCertify>
                  </SignUp.InputWrapper>
                </SignUp.InputContents>
                <SignUp.InputContents>
                  <SignUp.InputTitleWrapper></SignUp.InputTitleWrapper>
                  <SignUp.InputWrapper>
                    <UserInput
                      placeholder={"인증번호"}
                      inputSize={"medium"}
                      onChange={props.onChangeUserInputs("token")}
                    />
                    <SignUp.PhoneNumberCertify
                      type="button"
                      onClick={props.onClickCheckValid}
                      isReady={props.userInputs?.token !== ""}
                      disabled={props.userInputs?.token === ""}
                    >
                      인증하기
                    </SignUp.PhoneNumberCertify>
                  </SignUp.InputWrapper>
                </SignUp.InputContents>
                <SignUp.InputError>
                  {props.userInputsErrors?.tokenError}
                </SignUp.InputError>
              </SignUp.InputContentsWrapper>
              <SignUp.CheckboxWrapper>
                <CheckBox01
                  id="checkbox"
                  checked={checked}
                  onChange={handleCheck}
                />
                <SignUp.CheckboxLabel htmlFor="checkbox">
                  정보성 메일 수신에 동의합니다.
                </SignUp.CheckboxLabel>
              </SignUp.CheckboxWrapper>
              <SubmitButton
                type="submit"
                title={"가입하기"}
                isActive={
                  props.formState.isValid &&
                  checked &&
                  props.userInputs?.isValid
                }
              />
            </SignUp.BodyWrapper>
          </SignUp.FormWrapper>
        </SignUp.Wrapper>
      )}
      {props.isSubmit && <SignUpComplete />}
    </SignUp.Container>
  );
}
