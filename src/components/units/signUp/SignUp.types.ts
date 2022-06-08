import { Dispatch, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IPropsButton {
  isReady: boolean;
}

export interface IPropsSignUp {
  isSubmit: Boolean;
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSubmit: SubmitHandler<FieldValues>;
  onChangeUserInputs: (event: string) => any;
  userInputsErrors: {
    genderError: String;
    tokenError: String;
  };
  userInputs: {
    gender: String;
    phone: String;
    token: String;
    isValid: Boolean;
  };
  onClickGetToken: () => void;
  onClickCheckValid: () => void;
  setIsSubmit: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsSignUpPolicy {
  setAgreePolicy: (prev: any) => void;
  setIsSubmit: (a: boolean) => void;
}
