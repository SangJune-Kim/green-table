import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.tablet} {
    padding-bottom: 4rem;
  }

  @media ${breakPoints.mobile} {
    padding-bottom: 3rem;
  }
`;

export const Image = styled.img`
  width: 17.125rem;
  height: 17.125rem;
  background-color: transparent;
  border: 1px solid #c4c4c4;
  border-radius: 50%;
  margin: 2rem;

  @media ${breakPoints.mobile} {
    width: 14.125rem;
    height: 14.125rem;
    margin: 0;
    margin-bottom: 2rem;
  }
`;

export const ImageButton = styled.button`
  border: 1px solid #c4c4c4;
  border-radius: 2rem;
  background-color: #ffffff;
  width: 11.25rem;
  height: 2.5rem;
  color: #c4c4c4;
  font-size: 1.25rem;
  letter-spacing: -0.06rem;
  font-weight: 500;
  cursor: pointer;
`;
export const UploadFileHidden = styled.input`
  display: none;
`;
