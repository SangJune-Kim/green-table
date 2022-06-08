import { Dispatch, SetStateAction } from "react";

export interface INavigation02Props {
  userInputs: {
    type: string;
  };
  setUserInputs: Dispatch<
    SetStateAction<{
      type: string;
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
