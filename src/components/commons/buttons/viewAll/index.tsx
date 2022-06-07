import styled from "@emotion/styled";
import Link from "next/link";

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.2rem;
  font-size: 0.825rem;
  font-weight: 600;
  color: #848484;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  width: 13.75rem;
  height: 3.5rem;
  cursor: pointer;
`;

export default function ViewAllButton(props) {
  return (
    <Link href={props?.href}>
      <Button>
        <a>{props.title}</a>
        <img src="/img/bestRecipe/icon-arrow-right-02.svg" />
      </Button>
    </Link>
  );
}

// title에 쓰고싶은거 넣어서 쓰시면 됩니다.
