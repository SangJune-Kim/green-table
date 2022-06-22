import * as My from "./ProfileUpload.styles";
import { IProfileUploadUIProps } from "./ProfileUpload.types";
export default function ProfileUploadUI(props: IProfileUploadUIProps) {
  return (
    <>
      <My.ImageWrapper>
        {props.userInputs.profilePic !== " " ? (
          <My.Image
            src={`https://storage.googleapis.com/${props.userInputs.profilePic}`}
          />
        ) : (
          <My.Image src="/img/myPage/icon-myProfile.svg" />
        )}
        <My.ImageButton type="button" onClick={props.onClickUpload}>
          프로필 사진 변경
        </My.ImageButton>
      </My.ImageWrapper>

      <My.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
