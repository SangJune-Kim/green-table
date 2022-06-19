import { Dispatch, SetStateAction } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IRecipeCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<Boolean>>;
  el?: any;
  fetchUser?: any;
  replyCount?: number;
}
export interface IRecipeCommentWriteUIProps {
  isEdit?: boolean | undefined;
  el?: any;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSubmit: (data: any) => Promise<void>;
  onClickUpdate: (data: any) => Promise<void>;
}
