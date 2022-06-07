import Link from "next/link";
import OutlineSubmitButton from "../../commons/buttons/outlineSubmit";
import SubmitButton from "../../commons/buttons/submit";
import * as Login from "./Login.styles";

interface IPropsLogin {
  onChangeLoginInputs: (event: string) => any;
  onClickLogin: () => void;
  onClickSignUp: () => void;
}

export default function LoginUI(props: IPropsLogin) {
  const isActive = true;

  return (
    <Login.Container>
      <Login.Wrapper>
        <Login.HeaderWrapper>
          <Login.HeaderTitle>로그인</Login.HeaderTitle>
        </Login.HeaderWrapper>
        <Login.BodyWrapper>
          <Login.BodyContents>
            <Login.BodyContentsInput
              type="text"
              placeholder="아이디"
              onChange={props.onChangeLoginInputs("email")}
            />
            <Login.BodyContentsInput
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangeLoginInputs("password")}
            />
            <SubmitButton
              title={"로그인"}
              isActive={isActive}
              onClick={props.onClickLogin}
            />
            <OutlineSubmitButton
              title={"회원가입"}
              isActive={isActive}
              onClick={props.onClickSignUp}
            />
          </Login.BodyContents>
          <Login.SNSLoginTitleWrapper>
            <Login.SNSLoginTitleCenterLine />
            <Login.SNSLoginTitle>소셜 로그인</Login.SNSLoginTitle>
            <Login.SNSLoginTitleCenterLine />
          </Login.SNSLoginTitleWrapper>
          <Login.SNSLoginWrapper>
            <Link href={"https://itoutsider.shop/kakao"}>
              <a style={{ marginRight: "3rem" }}>
                <Login.SNSIcon src="/img/snsIcon/kakaotalk.svg" />
              </a>
            </Link>
            <Link href={"https://itoutsider.shop/naver"}>
              <a style={{ marginRight: "3rem" }}>
                <Login.SNSIcon src="/img/snsIcon/naver.svg" />
              </a>
            </Link>
            <Link href={"https://itoutsider.shop/google"}>
              <a>
                <Login.SNSIcon src="/img/snsIcon/google.svg" />
              </a>
            </Link>
          </Login.SNSLoginWrapper>
        </Login.BodyWrapper>
      </Login.Wrapper>
    </Login.Container>
  );
}
