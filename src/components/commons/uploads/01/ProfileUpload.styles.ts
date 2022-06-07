import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 17.125rem;
  height: 17.125rem;
  background-color: transparent;
  border: 1px solid #c4c4c4;
  border-radius: 50%;
  margin: 2rem;
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
