import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  @media (max-width: 1250px) {
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
  right: 0;
  bottom: 0;
  transform: translateY(90%);
  filter: blur(20px);
  transition: all 1.5s ease;

  &.isActive {
    filter: blur(0px);
    transform: translateY(0.5%);
  }

  @media (max-width: 1543px) {
    transform: translate(100%, 0%);
    img {
      width: 50vw;
    }
    &.isActive {
      transform: translate(0%, 1%);
    }
  }

  @media (max-width: 1250px) {
    transform: translate(-50%, 90%);
    img {
      width: 50vw;
    }
    &.isActive {
      transform: translate(-50%, 1%);
    }
  }
`;

export default function Third() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <Container>
      <Wrapper>
        <Left>
          <span>02</span>
          <span>
            채식 유형에 맞는
            <br />
            <strong>고객 맞춤 레시피</strong>
            제공
          </span>
          <p>
            6가지의 채식주의자 유형으로 세분화된 카테고리를 통해
            <br />
            쉽게 자신에게 맞는 레시피를 찾아 요리할 수 있습니다.
          </p>
        </Left>
        <Right ref={ref} className={inView ? "isActive" : ""}>
          <img src="/img/landing/img-landing03-preview.png" alt="" />
        </Right>
      </Wrapper>
    </Container>
  );
}
