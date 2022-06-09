import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

// 전체
export const Container = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 95%;
  max-width: 1440px;
  height: auto;
  padding: 2rem;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    padding: 1rem;
  }
`;

// Top button
export const TopButton = styled.button`
  z-index: 999;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  right: 0;
  bottom: 0;
  transform: translate(-20%, -20%);
  width: 5.5rem;
  height: 5.5rem;
  background: #0fbaa3;
  border-radius: 50%;
  border: none;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.1em;
  cursor: pointer;

  img {
    height: 1.31rem;
    width: auto;
  }

  span {
    padding-top: 0.5rem;
  }
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    display: none;
    width: 0;
    height: 0;
  }
`;

// logo
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  height: 100%;
`;
export const Logo = styled.img`
  margin-bottom: 20px;
  width: 8.5rem;
  height: auto;
`;
export const LogoCopyWrite = styled.div`
  font-size: 0.7rem;
  color: rgba(196, 196, 196, 1);
  @media (max-width: 1050px) {
    padding-right: 10px;
  }
`;

// Footer Menu
export const MenuInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  word-break: word;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const MenuWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Menu = styled.li`
  margin-right: 20px;
  border-right: 1px solid white;
  padding-right: 20px;
  cursor: pointer;
  &:last-of-type {
    border: none;
  }
  font-weight: 600;
  font-size: 1.1rem;
  @media (max-width: 991px) {
    flex: 0 0 40%;
    padding-right: 0;
    margin-bottom: 0.5rem;
    text-align: center;
    &:nth-of-type(2) {
      border: none;
    }
  }
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

// 기업 정보
export const InfoWrapper = styled.div`
  word-break: word;
  @media ${breakPoints.mobile} {
    margin-left: 1.5rem;
    word-break: keep-all;
  }
`;
export const Info = styled.div`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 0.9rem;
  color: rgba(196, 196, 196, 1);
`;

// Footer 고객센터
export const CSWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: white;
  font-weight: 600;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const CSWrapperMobile = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  & > div {
    margin: 0;
    padding-right: 10px;
  }
  @media ${breakPoints.mobile} {
    display: flex;
  }
`;

export const CSNumber = styled.div`
  margin-bottom: 20px;
`;
export const CSChat = styled.button`
  width: 6rem;
  height: 2rem;
  border: 1px solid white;
  font-size: 1rem;
  font-weight: 600;
  background-color: black;
  border-radius: 2rem;
  color: white;
`;
