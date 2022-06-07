import styled from "@emotion/styled";

export const Container = styled.div``;

export const MenuName = styled.div`
  display: flex;
  align-items: center;
  background: #f4f4f4;
  border-radius: 8px;
  padding: 0.93rem;
  margin-bottom: 13px;

  & > img {
    width: 1.5rem;
    height: auto;
    padding-right: 7px;
  }

  & > input {
    border: none;
    font-size: 2.25rem;
    letter-spacing: -0.05em;
    font-weight: 600;
    background: transparent;
    width: 100%;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: #848484;
    }
  }
`;

export const Summary = styled.div`
  display: flex;
  align-items: center;
  background: #f4f4f4;
  border-radius: 8px;
  padding: 0.93rem;
  margin-bottom: 15px;

  & > img {
    width: 1.5rem;
    height: auto;
    padding-right: 7px;
  }

  & > input {
    border: none;
    letter-spacing: -0.05em;
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    background: transparent;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: #848484;
    }
  }
`;

export const Vegan = styled.div`
  padding: 0.93rem;
  background: #f4f4f4;
  border-radius: 8px;
`;

export const VeganTypeHead = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  & > img {
    width: 1.5rem;
    height: auto;
    padding-right: 7px;
  }

  & > span {
    color: #848484;
    font-weight: 400;
    letter-spacing: -0.05em;
  }
`;

export const VeganTypeRadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  & > input {
    display: none;
  }
  & > label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 0;
    margin-bottom: 0.5rem;
    width: calc(100% / 3.5);
    color: #848484;
    border-radius: 2rem;
    border: 1px solid #848484;
    cursor: pointer;

    &.isActive {
      border: 1px solid transparent;
      color: #ffffff;
    }
  }
  & > label:nth-of-type(1) {
    background: ${(props) => (props.types === "Vegan" ? "#0FBAA3" : "")};
  }
  & > label:nth-of-type(2) {
    background: ${(props) => (props.types === "Ovo" ? "#FCD921" : "")};
  }
  & > label:nth-of-type(3) {
    background: ${(props) => (props.types === "Lacto" ? "#CEE135" : "")};
  }
  & > label:nth-of-type(4) {
    background: ${(props) => (props.types === "Lacto_Ovo" ? "#B991FA" : "")};
  }
  & > label:nth-of-type(5) {
    background: ${(props) => (props.types === "Pesco" ? "#EF7C90" : "")};
  }
  & > label:nth-of-type(6) {
    background: ${(props) => (props.types === "Pollo" ? "#FE974D" : "")};
  }
`;

export const RecipeInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
`;
export const RecipeInfoItem = styled.div`
  flex: 0 0 30%;
  word-break: keep-all;
`;
export const RecipeInfoTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 2px solid #464646;

  & > span {
    padding-left: 0.5rem;
  }
`;
export const RecipeInfoBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > select {
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    width: 80%;
    :focus {
      outline: none;
    }
  }
`;

export const RecipeInfoInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;

  & > input {
    border: none;
    width: 40px;
    :focus {
      outline: none;
    }
  }
`;

export const TagsWrapper = styled.div`
  padding: 0.93rem;
  background: #f4f4f4;
  border-radius: 8px;
`;
export const TagHead = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  & > img {
    width: 1.5rem;
    height: auto;
    padding-right: 7px;
  }

  & > input {
    border: none;
    background: transparent;
    width: 100%;
    :focus {
      outline: none;
    }
  }
`;
export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const Tag = styled.span`
  border: 1px solid #848484;
  border-radius: 2rem;
  font-size: 0.875rem;
  color: #848484;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  :hover {
    background: #848484;
    color: #ffffff;
  }
`;
