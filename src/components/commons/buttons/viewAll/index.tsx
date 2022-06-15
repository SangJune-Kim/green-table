import styled from "@emotion/styled";
import Link from "next/link";
import { breakPoints } from "../../../../commons/styles/media";

interface IViewAllButtonProps {
  href: string;
  title: string;
}

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

  @media ${breakPoints.mobile} {
    width: 10.5rem;
    height: 3rem;
  }
`;

export default function ViewAllButton(props: IViewAllButtonProps) {
  return (
    <Link href={props?.href}>
      <Button>
        <a>{props.title}</a>
        <img src="/img/bestRecipe/icon-arrow-right-02.svg" />
      </Button>
    </Link>
  );
}
