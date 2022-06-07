import * as S from "./Uploads02.styles";

export default function Uploads02UI(props) {
  return (
    <>
      {props.fileUrl ? (
        <S.ImgBoxWrapper>
          <S.UploadedImageIcon
            src={`https://storage.googleapis.com/${props.fileUrl}`}
            onClick={props.onClickUpload}
          />
        </S.ImgBoxWrapper>
      ) : (
        <S.ImgBoxWrapper>
          <img onClick={props.onClickUpload} src="/img/icon/Add.svg" />
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
