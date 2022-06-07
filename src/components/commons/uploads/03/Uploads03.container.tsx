import Uploads03UI from "./Uploads03.presenter";
import { ChangeEvent, useRef } from "react";
import { useMutation } from "@apollo/client";
import { checkValidationImage } from "./Uploads03.validations";
import { UPLOAD_PROFILE_IMAGE } from "./Uploads03.queries";
import { useModal } from "../../hooks/useModal";

export default function Uploads03(props) {
  const { ModalError } = useModal();
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_PROFILE_IMAGE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeDescImage(String(result.data.uploadProfileImage));
    } catch (error) {
      if (error instanceof Error) {
        ModalError("업로드 실패", error.message);
      }
    }
  };

  return (
    <Uploads03UI
      fileRef={fileRef}
      descImage={props.descImage}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
