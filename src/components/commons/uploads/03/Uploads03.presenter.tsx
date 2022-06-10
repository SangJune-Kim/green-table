import * as S from "./Uploads03.styles";
import { IUploads03UIProps } from "./Uploads03.types";

export default function Uploads03UI(props: IUploads03UIProps) {
  return (
    <>
      {props.descImage ? (
        <S.RepImage2 onClick={props.onClickUpload}>
          <S.UploadedImage
            src={`https://storage.googleapis.com/${props.descImage}`}
          />
        </S.RepImage2>
      ) : (
        <S.RepImage2 onClick={props.onClickUpload}>
          <img src="/img/icon/icon-upload-image.svg" />
          <span>사진을 넣어주세요</span>
        </S.RepImage2>
      )}

      <input
        style={{ display: "none" }}
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
      />
    </>
  );
}
