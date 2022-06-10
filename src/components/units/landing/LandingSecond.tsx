import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f9f3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 90%;
  max-width: 1440px;

  @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;

  & > span:nth-of-type(1) {
    padding-bottom: 10px;
    font-size: 1.375rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: #0fbaa3;
  }

  & > span:nth-of-type(2) {
    font-size: 3.125rem;
    font-weight: 500;
    line-height: 4.375rem;
    letter-spacing: -0.05em;
  }

  & > p {
    padding-top: 2.375rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.68rem;
    letter-spacing: -0.05em;
  }
  @media (max-width: 1250px) {
    transform: translateY(-80%);
  }
`;
const Right = styled.div`
  position: absolute;
  top: 0;
  right: 40%;

  @media (max-width: 1400px) {
    right: 50%;
  }
  @media (max-width: 1250px) {
    width: 220px;
    top: 85%;
    transform: translateX(50%);
  }
  @media (max-width: 650px) {
    width: 200px;
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  text-align: center;
  width: 403px;
  height: 403px;
  border: 2px solid #0fbaa3;
  border-radius: 50%;
  opacity: 0;
  word-break: keep-all;
  transition: all 2s ease;

  & > span {
    font-size: 1.375rem;
    font-weight: 500;
    line-height: 2.18rem;
    color: #0fbaa3;
    letter-spacing: -0.05em;
  }

  &:nth-of-type(1) {
    &.isActive {
      opacity: 1;
      transform: translate(0%, -50%);
    }
  }
  &:nth-of-type(2) {
    &.isActive {
      opacity: 1;
      transform: translate(-40%, 20%);
    }
  }
  &:nth-of-type(3) {
    &.isActive {
      opacity: 1;
      transform: translate(40%, 20%);
    }
  }
  @media (max-width: 1250px) {
    width: 220px;
    height: 220px;

    & > span {
      font-size: 1rem;
    }
  }
  @media (max-width: 650px) {
    width: 200px;
    height: 200px;
  }
`;

export default function Second() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <Container>
      <Wrapper>
        <Left>
          <span>01</span>
          <span>
            다양한 <strong>채식 레시피</strong>와 <br />
            <strong>밀키트 정기구독</strong> 서비스
          </span>
          <p>
            채식을 시작하는 사람들을 위한 채식주의 레시피를 소개하고
            <br />
            레시피 그대로 간편하게 만들어볼 수 있도록
            <br />
            밀키트 정기구독으로 배송 받아보는 서비스입니다.
          </p>
        </Left>
        <Right ref={ref}>
          <Circle className={inView ? "isActive" : ""}>
            <span>
              채식주의자의 식단을 책임지는
              <br />
              채식 맞춤 사이트
            </span>
          </Circle>
          <Circle className={inView ? "isActive" : ""}>
            <span>
              검증 받은 전문가의
              <br />
              채식 레시피 제공
            </span>
          </Circle>
          <Circle className={inView ? "isActive" : ""}>
            <span>
              레시피를 바탕으로 한
              <br />
              간편 밀키트 정기 구독
            </span>
          </Circle>
        </Right>
      </Wrapper>
    </Container>
  );
}
