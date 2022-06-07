import styled from "@emotion/styled";

export const Container = styled.div`
  background: #ffffff;
`;

export const Wrapper = styled.div``;

export const MenuTitle = styled.h1`
  padding-bottom: 0.75rem;
  font-weight: 700;
  font-size: 3.125rem;
  letter-spacing: -0.05em;
  word-break: keep-all;
`;

export const MenuRemarks = styled.p`
  padding-bottom: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.05em;
  color: rgba(38, 38, 38, 0.6);
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 2px 0;
  border-radius: 1rem;
  margin-right: 4px;
  color: #ffffff;
  font-size: 0.875rem;
  width: 5.125rem;
  display: flex;
  justify-content: center;
`;

export const TagVegan = styled(Tag)`
  background: #0fbaa3;
`;

export const TagLacto = styled(Tag)`
  background: #cee135;
`;

export const TagOvo = styled(Tag)`
  background: #fcd921;
`;

export const TagLactoOvo = styled(Tag)`
  background: #b991fa;
`;

export const TagPesco = styled(Tag)`
  background: #ef7c90;
`;

export const TagPollo = styled(Tag)`
  background: #fe974d;
`;

export const RecipeInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #464646;
`;

export const RecipeInfoBottom = styled.div``;

export const RecipeInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
`;

export const RecipeInfoWrapper = styled.div`
  display: flex;

  padding-top: 3.125rem;
`;

export const RecipeTags = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3.25rem;
  flex-wrap: wrap;

  & > span {
    padding: 0.375rem 0.88rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    color: #848484;
    border: 1px solid #848484;
    border-radius: 2rem;
    text-align: center;
  }
`;

export const RecipeInfoButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3.25rem;
`;

export const PickedButton = styled.button`
  margin-right: 2rem;
  width: 289px;
  height: 77px;
  font-size: 1.25rem;
  font-weight: 600;
  background: #0fbaa3;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 64px;
  transition: all 0.3s ease;
  cursor: pointer;

  :hover {
    background: #ffffff;
    border: 1px solid #0fbaa3;
    color: #0fbaa3;
  }
`;

export const ShareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #434343;
  padding: 1.5rem;
  border: none;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
