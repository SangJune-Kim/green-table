import SubmitButton from "../../../commons/buttons/submit";
import UserInput from "../../../commons/inputs";
import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import MyPageTitleBar from "../../../commons/titleBars/01";
import * as My from "./MyPageEditPW.styles";
import { IMyPageEditPwUIProps } from "./MyPageEditPW.types";

export default function MyPageEditPwUI(props: IMyPageEditPwUIProps) {
  return (
    <>
      <My.Container>
        <My.Wrapper>
          <MyPageSidebar />
          <My.EditPwWrapper>
            <MyPageTitleBar title={"비밀번호 변경"} />
            <My.Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
              <My.PwWrapper>
                <My.InputWrapper>
                  <My.Label>비밀번호</My.Label>
                  <UserInput
                    type={"password"}
                    placeholder={"비밀번호"}
                    register={{ ...props.register("password") }}
                  />
                </My.InputWrapper>
                <My.InputWrapper>
                  <My.Label>비밀번호 확인</My.Label>
                  <UserInput
                    type={"password"}
                    placeholder={"비밀번호 확인"}
                    register={{ ...props.register("passwordCheck") }}
                  />
                </My.InputWrapper>
              </My.PwWrapper>
              <My.ButtonWrapper>
                <SubmitButton
                  title={"비밀번호 변경"}
                  isActive={props.watch("password")}
                />
              </My.ButtonWrapper>
            </My.Form>
          </My.EditPwWrapper>
        </My.Wrapper>
      </My.Container>
    </>
  );
}
