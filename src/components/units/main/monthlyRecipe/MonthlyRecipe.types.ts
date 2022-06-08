import { ChangeEvent, SetStateAction } from "react";

export interface IPickTag {
  target: any;
  setPickTag: (
    value: SetStateAction<{
      pickTag: string;
    }>
  ) => void;
}

export interface IMonthlyRecipeUIProps {
  settings: any;
  popRecipes: any;
  userData: any;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  pickTag: {
    pickTag: string;
  };
}
