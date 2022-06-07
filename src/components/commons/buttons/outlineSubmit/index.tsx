import styled from "@emotion/styled";

interface ISubmitButtonProps {
  isActive?: Boolean;
  title?: String;
  onClick?: () => void;
  size?: String;
}

const Button = styled.button`
  width: ${(props) => (props.size === "medium" ? "16rem" : "29rem")};
  height: 3.875rem;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "white" : "none"};
  border: 2px solid
    ${(props: ISubmitButtonProps) => (props.isActive ? "#0fbaa3" : "#f9f9f9")};
  border-radius: 2rem;
  color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#0fbaa3" : "#f9f9f9"};
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export default function OutlineSubmitButton(props: ISubmitButtonProps) {
  return (
    <Button
      isActive={props.isActive}
      disabled={!props.isActive}
      onClick={props.onClick}
      size={props.size}
    >
      {props.title}
    </Button>
  );
}

// title 은 원하는걸로 바꿔서 각 컴포넌트에서 쓰세용
