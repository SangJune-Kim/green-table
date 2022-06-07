import { useRouter } from "next/router";
import OutlineSubmitButton from "../../../commons/buttons/outlineSubmit";
import SubmitButton from "../../../commons/buttons/submit";
import * as SignUp from "../SignUp.styles";
import "animate.css";

export default function SignUpComplete() {
  const router = useRouter();

  const isActive = true;

  const onClickMoveVeganType = () => {
    router.push("/typeCheck");
  };
  const onClickMoveHome = () => {
    router.push("/");
  };
  return (
    <SignUp.Wrapper>
      <SignUp.HeaderWrapper>
        <SignUp.HeaderTitle>회원가입</SignUp.HeaderTitle>
      </SignUp.HeaderWrapper>
      <SignUp.CompleteWrapper>
        <SignUp.FlowerShower
          className="animate__animated animate__zoomInUp"
          src="/img/icon/flowerShower.svg"
        />
        <SignUp.CheckIcon
          className="animate__animated animate__heartBeat"
          src="/img/icon/checkIcon.svg"
        />
        <SignUp.CompleteTitle>회원 가입 완료</SignUp.CompleteTitle>
        <SignUp.Cake src="/img/cake.svg" />
        <SubmitButton
          title={"나의 채식유형 체크"}
          isActive={isActive}
          onClick={onClickMoveVeganType}
        />
        <OutlineSubmitButton
          title={"메인으로"}
          isActive={isActive}
          onClick={onClickMoveHome}
        />
      </SignUp.CompleteWrapper>
    </SignUp.Wrapper>
  );
}
