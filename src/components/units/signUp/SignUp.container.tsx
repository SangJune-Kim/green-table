import SignUpUI from "./SignUp.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "../../../commons/libraries/validation";
import { useMutation } from "@apollo/client";
import {
  CHECK_VALID_TOKEN,
  CREATE_USER,
  SEND_TOKEN_TO_SMS,
} from "./SignUp.queries";
import { ChangeEvent, useState } from "react";
import { useModal } from "../../commons/hooks/useModal";
import { LOG_IN } from "../login/Login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function SignUp() {
  const [createUser] = useMutation(CREATE_USER);
  // form 부분
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignUpSchema),
    mode: "onChange",
  });

  // form에서 검증하지 않는 state
  const [userInputs, setUserInputs] = useState({
    gender: "",
    phone: "",
    token: "",
    isValid: false,
  });

  // form에서 검증하지 않는 state errors
  const [userInputsErrors, setUserInputsErrors] = useState({
    genderError: "",
    tokenError: "",
  });

  // 가입완료로 넘어가는 state
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeUserInputs =
    (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setUserInputs((prev) => ({
        ...userInputs,
        [id]: e.target.value,
      }));
      if (userInputs.gender !== "")
        setUserInputsErrors({ ...userInputsErrors, genderError: "" });
    };

  // 모달 부분
  const { Success, Warning, ModalError } = useModal();

  // 핸드폰 인증 부분
  const [getToken] = useMutation(SEND_TOKEN_TO_SMS);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);

  // 로그인 mutation
  const [login] = useMutation(LOG_IN);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onClickGetToken = async () => {
    try {
      await getToken({
        variables: {
          phone: String(userInputs.phone),
        },
      });
      Success("발송 성공", "인증번호를 발송하였습니다.");
    } catch (error) {
      if (error instanceof Error) Warning("발송 실패", error.message);
    }
  };

  // 인증된 번호 체크 뮤테이션
  const onClickCheckValid = async () => {
    try {
      const result = await checkValidToken({
        variables: {
          phone: String(userInputs.phone),
          token: String(userInputs.token),
        },
      });
      const CheckValid = result.data?.checkValidToken;
      if (CheckValid === "false") {
        setUserInputsErrors({
          ...userInputsErrors,
          tokenError: "인증번호가 일치하지 않습니다.",
        });
        setUserInputs({ ...userInputs, isValid: false });
        ModalError("인증 실패", "인증번호가 일치하지 않습니다.");
      } else if (CheckValid === "true") {
        setUserInputsErrors({
          ...userInputsErrors,
          tokenError: "",
        });
        setUserInputs({ ...userInputs, isValid: true });
        Success("인증 성공", "인증번호가 일치합니다.");
      }
    } catch (error) {
      if (error instanceof Error) ModalError("인증 실패", error.message);
    }
  };

  // 회원가입 mutation
  const onClickSubmit = async (data: any) => {
    if (userInputs.gender === "") {
      return setUserInputsErrors({
        ...userInputsErrors,
        genderError: "성별을 선택해주세요.",
      });
    }
    try {
      await createUser({
        variables: {
          email: String(data.email),
          password: String(data.password),
          name: String(data.name),
          phone: String(userInputs.phone),
        },
      });
      const loginResult = await login({
        variables: {
          email: String(data.email),
          password: String(data.password),
        },
      });
      const myAccessToken = loginResult.data?.login;
      setAccessToken(myAccessToken);
      setIsSubmit(true);
    } catch (error) {
      if (error instanceof Error) ModalError("회원가입 실패", error.message);
    }
  };

  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      isSubmit={isSubmit}
      userInputs={userInputs}
      userInputsErrors={userInputsErrors}
      onChangeUserInputs={onChangeUserInputs}
      // 폰 인증 부분
      onClickGetToken={onClickGetToken}
      onClickCheckValid={onClickCheckValid}
      // 완료페이지로 가는 버튼
      setIsSubmit={setIsSubmit}
    />
  );
}
