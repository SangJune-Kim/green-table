import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { breakPoints } from "../../../../commons/styles/media";

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

  @media ${breakPoints.tablet} {
    width: ${(props: IUserInputProps) =>
      props?.inputSize === "medium" ? "50%" : "50%"};
  }
`;

export default function UserInput02(props: IUserInputProps) {
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
