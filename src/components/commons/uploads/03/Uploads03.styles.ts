import styled from "@emotion/styled";

export const RepImage2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  width: 585px;
  height: 259px;
  background: #ebebeb;
  border-radius: 2rem;
  transition: all 0.5s ease;
  cursor: pointer;

  span {
    padding-top: 1.25rem;
    font-size: 1.25rem;
    font-weight: 400;
  }

  img {
    transition: all 0.5s ease;
  }

  :hover {
    background: #0fbaa3;
    color: #ffffff;
    img {
      filter: brightness(0) invert(1);
    }
  }

  @media (max-width: 991px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
