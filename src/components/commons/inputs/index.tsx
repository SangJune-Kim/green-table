import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { breakPoints } from "../../../commons/styles/media";

interface IUserInputProps {
  placeholder?: string | undefined;
  inputSize?: string | undefined;
  disabled?: boolean;
  type?: string;
  defaultValue?: string;
  readOnly?: boolean;
  register?: UseFormRegisterReturn;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input`
  width: ${(props: IUserInputProps) =>
    props?.inputSize === "medium" ? "16.7rem" : "24.75rem"};
  height: 4rem;
  border: 1px solid #bfbfbf;
  border-radius: 2rem;
  padding: 1.7rem;
  @media ${breakPoints.mobile} {
    width: ${(props: IUserInputProps) =>
      props?.inputSize === "medium" ? "10rem" : "16rem"};
    border: 0px;
    border-bottom: 2px solid #bfbfbf;
    border-radius: 0;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
    :focus {
      outline: none;
      border-bottom: 2px solid #0fbaa3;
      transition: 0.5s ease;
    }
  }
`;

export default function UserInput(props: IUserInputProps) {
  return (
    <Input
      placeholder={props?.placeholder}
      inputSize={props?.inputSize}
      onChange={props?.onChange}
      disabled={props.disabled}
      type={props.type}
      defaultValue={props.defaultValue}
      {...props.register}
      readOnly={props.readOnly}
    />
  );
}
