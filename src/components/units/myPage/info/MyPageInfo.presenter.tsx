import UserInput from "../../../commons/inputs";
import Navigation03 from "../../../commons/navigation/03";
import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import MyPageTitleBar from "../../../commons/titleBars/01";
import * as My from "./MyPageInfo.styles";
import { IMyPageInfoUIProps } from "./MyPageInfo.types";

export default function MyPageInfoUI(props: IMyPageInfoUIProps) {
  return (
    <>
      <My.Container>
        <My.Wrapper>
          <MyPageSidebar />

          <My.InfoWrapper>
            <MyPageTitleBar title={"회원정보조회"} />

            <My.ProfileWrapper>
              <My.FlexRow>
                <My.ImageWrapper>
                  {props.userData?.fetchUser.profilePic !== " " ? (
                    <My.Image
                      src={`https://storage.googleapis.com/${props.userData?.fetchUser.profilePic}`}
                    />
                  ) : (
                    <My.Image src="/img/myPage/icon-myProfile.svg" />
                  )}
                  <My.UserProfile>
                    {props.userData?.fetchUser.isPro === "PRO" ? (
                      <My.UserGrade className="expert">전문가</My.UserGrade>
                    ) : (
                      <My.UserGrade className="common">회원</My.UserGrade>
                    )}
                  </My.UserProfile>
                </My.ImageWrapper>

                <My.FlexColumn>
                  <My.InputWrapper>
                    <My.Label>닉네임</My.Label>
                    <UserInput
                      placeholder={"닉네임"}
                      inputSize={"medium"}
                      defaultValue={props.userData?.fetchUser.nickname}
                      disabled={true}
                    />
                  </My.InputWrapper>

                  <My.VeganTypeWrapper>
                    <My.Label>채식타입</My.Label>
                    <Navigation03 />
                  </My.VeganTypeWrapper>
                </My.FlexColumn>
              </My.FlexRow>
            </My.ProfileWrapper>

            <My.ProfileWrapper>
              <div>
                <My.InputWrapper>
                  <My.Label>이름</My.Label>
                  <UserInput
                    defaultValue={props.userData?.fetchUser.name}
                    disabled={true}
                  />
                </My.InputWrapper>

                <My.InputWrapper>
                  <My.Label>이메일</My.Label>
                  <UserInput
                    defaultValue={props.userData?.fetchUser.email}
                    disabled={true}
                  />
                </My.InputWrapper>

                <My.InputWrapper>
                  <My.Label>휴대폰 번호</My.Label>
                  <UserInput
                    placeholder={"-제외"}
                    defaultValue={props.userData?.fetchUser.phone}
                    disabled={true}
                  />
                </My.InputWrapper>

                <My.InputWrapper>
                  <My.Label>주소</My.Label>
                  <UserInput
                    placeholder={"주소"}
                    defaultValue={props.userData?.fetchUser.address}
                    disabled={true}
                  />
                </My.InputWrapper>
                <My.InputWrapper>
                  <My.Label />
                  <UserInput
                    placeholder={"상세주소"}
                    defaultValue={props.userData?.fetchUser.addressDetail}
                    disabled={true}
                  />
                </My.InputWrapper>
              </div>
            </My.ProfileWrapper>
          </My.InfoWrapper>
        </My.Wrapper>
      </My.Container>
    </>
  );
}
