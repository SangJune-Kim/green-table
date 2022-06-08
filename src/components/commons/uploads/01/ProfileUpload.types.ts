import { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";

export interface IProfileUploadProps {
  userInputs: {
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
  };

  setUserInputs: Dispatch<
    SetStateAction<{
      profilePic: string;
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
