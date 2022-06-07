import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

export interface IFormValues {
  password?: string;
  passwordCheck?: string;
}

export interface IMyPageEditPwUIProps {
  userData: any;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSubmit: (data: IFormValues) => void;
}
