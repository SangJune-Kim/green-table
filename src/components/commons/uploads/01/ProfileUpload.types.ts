import { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";

export interface IProfileUploadProps {
  userInputs: {
    nickname: string;
    type: string;
    address: string;
    addressDetail: string;
    phone: string;
    token: string;
    valid: string;
    profilePic: string;
    certImage: string;
    certUrl: string;
  };

  setUserInputs: Dispatch<
    SetStateAction<{
      nickname: string;
      type: string;
      address: string;
      addressDetail: string;
      phone: string;
      token: string;
      valid: string;
      profilePic: string;
      certImage: string;
      certUrl: string;
    }>
  >;
}

export interface IProfileUploadUIProps {
  userInputs: {
    profilePic: string;
  };
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  fileRef: RefObject<HTMLInputElement>;
}
