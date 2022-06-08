import NormalButton from "../../buttons/normal";
import * as My from "./CertificationUpload.styles";
import { ICertificationUploadUIProps } from "./CertificationUpload.types";
export default function CertificationUploadUI(
  props: ICertificationUploadUIProps
) {
  return (
    <>
      {props.userInputs.certImage ? (
        <NormalButton
          type={"button"}
          title={"등록하기"}
          color={"green"}
          onClick={props.onClickUpload}
        />
      ) : (
        <NormalButton
          type={"button"}
          title={"등록하기"}
          color={"green"}
          onClick={props.onClickUpload}
        />
      )}

      <My.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
