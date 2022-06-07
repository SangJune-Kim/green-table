import Uploads02UI from "./Uploads02.presenter";
import { ChangeEvent, useRef } from "react";
import { useMutation } from "@apollo/client";
import { checkValidationImage } from "./Uploads02.validations";
import { UPLOAD_PROFILE_IMAGE } from "./Uploads02.queries";
import { useModal } from "../../hooks/useModal";

export default function Uploads02(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_PROFILE_IMAGE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const { ModalError } = useModal();

    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(
        String(result.data.uploadProfileImage),
        props.index
      );
    } catch (error) {
      if (error instanceof Error) {
        ModalError("업로드 실패", error.message);
      }
    }
  };

  return (
    <Uploads02UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
