import * as S from "./Uploads02.styles";
import { IUploads02UIProps } from "./Uploads02.types";

export default function Uploads02UI(props: IUploads02UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <S.ImgBoxWrapper onClick={props.onClickUpload}>
          <S.UploadedImageIcon
            src={`https://storage.googleapis.com/${props.fileUrl}`}
          />
        </S.ImgBoxWrapper>
      ) : (
        <S.ImgBoxWrapper onClick={props.onClickUpload}>
          <img src="/img/icon/Add.svg" />
        </S.ImgBoxWrapper>
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
