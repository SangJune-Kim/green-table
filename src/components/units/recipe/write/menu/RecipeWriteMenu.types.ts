import { ChangeEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IRecipeWriteMenuProps {
  register: UseFormRegister<FieldValues>;
  onKeyUpHash: (event: {
    keyCode: number;
    target: {
      value: string;
    };
  }) => void;
  onClickDeleteTag: (tag: string) => () => void;
  hashArr: string[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selectType: {
    types: string;
  };
}

export interface IRecipeWriteMenuUIProps {
  register: UseFormRegister<FieldValues>;
  onKeyUpHash: (event: any) => void;
  onClickDeleteTag: (tag: string) => () => void;
  hashArr: string[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selectType: {
    types: string;
  };
}
