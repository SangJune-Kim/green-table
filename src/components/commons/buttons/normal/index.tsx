import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface INormalButtonProps {
  title?: String;
  color?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;

  onClick?: () => void;
}

export const Button = styled.button`
  width: 13.75rem;
  height: 4rem;
  border: none;
  border-radius: 2rem;
  padding: 20px;
  margin: 0 15px;
  font-weight: 500;
  font-size: 1rem;
  color: ${(props: INormalButtonProps) =>
    props.color === "green" ? "#ffffff" : "#464646"};
  background-color: ${(props: INormalButtonProps) =>
    props.color === "green" ? "#0fbaa3" : "#c4c4c4"};
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 35%;
  }
`;

export default function NormalButton(props: INormalButtonProps) {
  return (
    <Button
      onClick={props.onClick}
      color={props.color}
      type={props.type}
      disabled={props.disabled}
    >
      {props.title}
    </Button>
  );
}
