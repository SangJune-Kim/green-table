import { NextRouter } from "next/router";
import { ChangeEvent, RefObject } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IRecipeWriteUIProps {
  formState: FormState<FieldValues>;
  hashArr: string[];
  ingredientArr: {
    name: string;
    amount: string;
    unit: string;
  }[];
  descArr: {
    step: number;
    image: string;
    desc: string;
  }[];
  ingredientTabRef: RefObject<HTMLDivElement>;
  cookOrderTabRef: RefObject<HTMLDivElement>;
  tabActive: string[];
  selectType: {
    types: string;
  };
  router: NextRouter;
  imageUrls: string[];
  descImage: string;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSubmit: (data: any) => Promise<void>;
  onClickDeleteTag: (tag: string) => () => void;
  onClickAddIngredient: () => void;
  onChangeIngredient: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyUpHash: (event: {
    keyCode: number;
    target: {
      value: string;
    };
  }) => void;
  onClickDeleteIngredient: (arg: {
    name: string;
    amount: string;
    unit: string;
  }) => () => void;
  onChangeTextArea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickAddDesc: () => void;
  onClickIngredientTab: () => void;
  onClickCookOrderTab: () => void;
  onClickDeleteDesc: (arg: number) => () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onChangeDescImage: (fileUrl: string) => void;
}
