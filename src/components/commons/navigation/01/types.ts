import { Dispatch, SetStateAction } from "react";

export interface INavigation01Props {
  selectedTypes: SetStateAction<string>;
  setSelectedTypes: Dispatch<SetStateAction<string>>;
}

export interface IVeganType {
  type: string;
}

export interface INavigation01Style {
  isPicked: boolean;
  hover: string;
  image?: string;
}
