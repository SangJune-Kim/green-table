import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { useModal } from "../../hooks/useModal";
import CertificationUploadUI from "./CertificationUpload.presenter";
import { UPLOAD_CERTIFICATION_IMAGE } from "./CertificationUpload.queries";
import { ICertificationUploadProps } from "./CertificationUpload.types";
import { checkValidationImage } from "./CertificationUpload.validation";

export default function CertificationUpload(props: ICertificationUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadCertificationImage] = useMutation(UPLOAD_CERTIFICATION_IMAGE);
  const { Info, ModalError } = useModal();

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadCertificationImage({ variables: { file } });
      const url = result.data.uploadCertificationImage.substr(
        40,
        result.data.uploadCertificationImage.length
      );
      props.setUserInputs({
        ...props.userInputs,
        certImage: String(url),
      });

      Info(
        "자격증 이미지 등록",
        "회원정보 수정을 완료해야 성공적으로 등록됩니다."
      );
    } catch (error) {
      if (error instanceof Error) {
        ModalError("업로드 실패", error.message);
      }
    }
  };

  return (
    <CertificationUploadUI
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      userInputs={props.userInputs}
    />
  );
}
