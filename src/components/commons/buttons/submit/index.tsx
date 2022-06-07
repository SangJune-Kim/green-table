import styled from "@emotion/styled";

interface ISubmitButtonProps {
  isActive?: Boolean | String;
  title?: String;
  onClick?: () => void;
  type?: (String & ("button" | "submit" | "reset")) | undefined;
}

const Button = styled.button`
  width: 29rem;
  height: 3.875rem;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#0fbaa3" : "#c4c4c4"};
  border: none;
  border-radius: 2rem;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export default function SubmitButton(props: ISubmitButtonProps) {
  return (
    <Button
      isActive={props.isActive}
      disabled={!props.isActive}
      onClick={props.onClick}
      type={props.type}
    >
      {props.title}
    </Button>
  );
}

// title 은 원하는걸로 바꿔서 각 컴포넌트에서 쓰세용
