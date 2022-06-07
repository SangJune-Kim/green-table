import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2.5rem;
  padding-top: 1.5rem;
`;

interface INavigation02Props {
  hover: string;
  image: string;
}

// prettier-ignore
export const VeganType = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6.125rem;

  & > div {
    border: 2px solid  #7f7f7f ;
    &.type {
      border: 2px solid  #0fbaa3 ;

    }
  }

  & > div > div {
    background-image: url(${(props: INavigation02Props) => props.image});
    &.type {
      background-image: url(${(props: INavigation02Props) => props.hover});

    }
  }

  & > p {
    color:   #464646 ;
    &.type {
      color: #0fbaa3;
    }
  }


`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6.125rem;
  border: 2px solid #7f7f7f;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const VeganTypeImg = styled.div`
  width: 3.3rem;
  height: 3.3rem;
`;

export const VeganTypeName = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
`;

export const VeganTypeEnName = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #c4c4c4;
`;
