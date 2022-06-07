import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface IUpdateUserInput {
  nickname?: string;
  address?: string;
  addressDetail?: string;
  type?: string;
  profilePic?: string;
  certImage?: string;
  certUrl?: string;
}

export interface IPostcode {
  address: string;
}

export interface IMyPageEditUIProps {
  userData: any;
  isOpen: boolean;
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

  onClickClose: (event: MouseEvent<HTMLDivElement>) => void;
  onCompleteAddressSearch: (postcode: IPostcode) => void;
  onChangeUserInputs(
    id: string
  ): ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
  onClickAddressSearch: () => void;
  onClickUpdateUser: () => void;
  onClickGetToken: () => void;
  onClickCheckValid: () => void;
  onClickSignOut: () => void;
  onClickUrlValid: () => void;
}
