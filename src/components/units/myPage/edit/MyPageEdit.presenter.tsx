import DaumPostcode from "react-daum-postcode";
import NormalButton from "../../../commons/buttons/normal";
import SubmitButton from "../../../commons/buttons/submit";
import UserInput from "../../../commons/inputs";
import Navigation02 from "../../../commons/navigation/02";
import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import ProfileUpload from "../../../commons/uploads/01/ProfileUpload.container";
import CertificationUpload from "../../../commons/uploads/04/CertificationUpload.container";
import * as My from "./MyPageEdit.styles";
import { IMyPageEditUIProps } from "./MyPageEdit.types";

export default function MyPageEditUI(props: IMyPageEditUIProps) {
  return (
    <>
      {props.isOpen && (
        <My.Modal onClick={props.onClickClose}>
          <div className="modal-section">
            <div className="modal-content">
              <DaumPostcode onComplete={props.onCompleteAddressSearch} />
            </div>
          </div>
        </My.Modal>
      )}
      <My.Container>
        <My.Wrapper>
          <MyPageSidebar />

          <My.EditWrapper>
            <My.TitleWrapper>
              <My.Title>회원정보수정</My.Title>
              <My.SignOut type={"button"} onClick={props.onClickSignOut}>
                회원탈퇴
              </My.SignOut>
            </My.TitleWrapper>

            <My.ProfileWrapper>
              <My.FlexRow>
                <ProfileUpload
                  setUserInputs={props.setUserInputs}
                  userInputs={props.userInputs}
                />

                <My.FlexColumn>
                  <My.InputWrapper className="nickname">
                    <My.Label>닉네임</My.Label>
                    <UserInput
                      placeholder={"닉네임"}
                      inputSize={"medium"}
                      defaultValue={props.userData?.fetchUser.nickname}
                      onChange={props.onChangeUserInputs("nickname")}
                    />
                  </My.InputWrapper>

                  <My.VeganTypeWrapper>
                    <My.Label>채식타입</My.Label>
                    <Navigation02
                      setUserInputs={props.setUserInputs}
                      userInputs={props.userInputs}
                    />
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
                  <My.Div />
                </My.InputWrapper>

                <My.InputWrapper>
                  <My.Label>이메일</My.Label>
                  <UserInput
                    defaultValue={props.userData?.fetchUser.email}
                    disabled={true}
                  />
                  <My.Div />
                </My.InputWrapper>

                <My.InputWrapper>
                  <My.Label>휴대폰 번호</My.Label>
                  <UserInput
                    type={"number"}
                    placeholder={"-제외"}
                    defaultValue={props.userData?.fetchUser.phone}
                    onChange={props.onChangeUserInputs("phone")}
                  />
                  <NormalButton
                    type={"button"}
                    title={"인증받기"}
                    onClick={props.onClickGetToken}
                    color={props.userInputs?.phone && "green"}
                    disabled={!props.userInputs?.phone}
                  />
                </My.InputWrapper>
                <My.InputWrapper>
                  <My.Label />
                  <UserInput
                    type={"number"}
                    placeholder={"인증번호"}
                    onChange={props.onChangeUserInputs("token")}
                  />
                  <NormalButton
                    type={"button"}
                    title={"확인"}
                    onClick={props.onClickCheckValid}
                    color={props.userInputs?.token && "green"}
                    disabled={!props.userInputs?.token}
                  />
                </My.InputWrapper>
                <My.InputWrapper>
                  <My.Label>주소</My.Label>
                  <UserInput
                    placeholder={"주소"}
                    defaultValue={
                      props.userInputs?.address ||
                      props.userData?.fetchUser.address
                    }
                    onChange={props.onChangeUserInputs("address")}
                    readOnly
                  />
                  <NormalButton
                    type={"button"}
                    title={"찾기"}
                    onClick={props.onClickAddressSearch}
                    color={"green"}
                  />
                </My.InputWrapper>
                <My.InputWrapper>
                  <My.Label />
                  <UserInput
                    placeholder={"상세주소"}
                    defaultValue={props.userData?.fetchUser.addressDetail}
                    onChange={props.onChangeUserInputs("addressDetail")}
                  />
                  <My.Div />
                </My.InputWrapper>
              </div>
            </My.ProfileWrapper>

            <My.ProfileWrapper>
              <div>
                <My.ExpertTitleWrapper>
                  <My.Title>전문가 등록하기</My.Title>
                  <p>
                    전문가 등록하기를 원하시면 관련 자격증 또는 전문가 인증이
                    가능한 링크를 입력하세요.
                  </p>
                </My.ExpertTitleWrapper>
                <My.InputWrapper>
                  <My.Label>자격증 등록</My.Label>
                  <UserInput
                    placeholder={"이미지 업로드"}
                    defaultValue={
                      props.userInputs.certImage ||
                      props.userData?.fetchUser.certImage
                    }
                    readOnly
                  />
                  <CertificationUpload
                    setUserInputs={props.setUserInputs}
                    userInputs={props.userInputs}
                  />
                </My.InputWrapper>
                <My.InputWrapper>
                  <My.Label>인증 링크 등록</My.Label>
                  <UserInput
                    placeholder={"URL"}
                    defaultValue={
                      props.userInputs.certUrl ||
                      props.userData?.fetchUser.certUrl
                    }
                    onChange={props.onChangeUserInputs("certUrl")}
                  />
                  <NormalButton
                    type={"button"}
                    title={"등록하기"}
                    color={props.userInputs?.certUrl && "green"}
                    disabled={!props.userInputs?.certUrl}
                    onClick={props.onClickUrlValid}
                  />
                </My.InputWrapper>
              </div>
            </My.ProfileWrapper>
            <My.ButtonWrapper>
              <SubmitButton
                title={"회원정보수정"}
                isActive={true}
                onClick={props.onClickUpdateUser}
              />
            </My.ButtonWrapper>
          </My.EditWrapper>
        </My.Wrapper>
      </My.Container>
    </>
  );
}
