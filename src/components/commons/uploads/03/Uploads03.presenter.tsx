import * as S from "./Uploads03.styles";

export default function Uploads03UI(props) {
  return (
    <>
      {props.descImage ? (
        <S.RepImage2>
          <S.UploadedImage
            onClick={props.onClickUpload}
            src={`https://storage.googleapis.com/${props.descImage}`}
          />
        </S.RepImage2>
      ) : (
        <S.RepImage2>
          <img
            onClick={props.onClickUpload}
            src="/img/icon/icon-upload-image.svg"
          />
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
