import { Dispatch, SetStateAction } from "react";

export interface INavigation02Props {
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

export interface IVeganType {
  name: string;
  En: string;
}

export interface INavigation02Style {
  isPicked: boolean;
  hover: string;
  image: string;
}
