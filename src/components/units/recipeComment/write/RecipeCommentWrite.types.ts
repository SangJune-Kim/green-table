import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IRecipeCommentWriteProps {
  fetchUser: any;
  replyCount: number;
}
export interface IRecipeCommentWriteUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSubmit: (data: any) => Promise<void>;
}
