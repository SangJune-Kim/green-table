import * as My from "./ProfileUpload.styles";
export default function ProfileUploadUI(props) {
  return (
    <>
      {props.userInputs.profilePic !== " " ? (
        <My.ImageWrapper>
          <My.Image
            src={`https://storage.googleapis.com/${props.userInputs.profilePic}`}
          />
          <My.ImageButton type="button" onClick={props.onClickUpload}>
            프로필 사진 변경
          </My.ImageButton>
        </My.ImageWrapper>
      ) : (
        <My.ImageWrapper>
          <My.Image src="/img/myPage/icon-myProfile.svg" />
          <My.ImageButton type="button" onClick={props.onClickUpload}>
            프로필 사진 변경
          </My.ImageButton>
        </My.ImageWrapper>
      )}

      <My.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
