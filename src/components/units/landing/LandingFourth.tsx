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
`;
const Right = styled.div`
  display: flex;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  border: 4px solid #0fbaa3;
  border-radius: 2rem;
  background: #ffffff;
  filter: drop-shadow(5px 4px 12px rgba(0, 0, 0, 0.25));
  opacity: 0;
  transition: all 1.5s ease-in-out;

  &:nth-of-type(1) {
    z-index: 3;
    transform: translateX(-70%);

    &.isActive {
      opacity: 1;
      transform: translateX(10%);
    }
  }

  &:nth-of-type(2) {
    transform: translateX(100%);
    &.isActive {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  & > span:nth-of-type(1) {
    padding-bottom: 3.43rem;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #262626;
  }
  & > span:nth-of-type(2) {
    padding-bottom: 1.5rem;
    font-size: 2.25rem;
    color: #737373;
    b {
      font-size: 3.125rem;
      color: #000000;
    }
    span {
      color: #000000;
    }
  }
  & > span:nth-of-type(3) {
    padding-bottom: 3.125rem;
    font-size: 1.5rem;
    color: #c4c4c4;
    letter-spacing: -0.05em;
  }
  & > button {
    padding: 1.25rem 3.75rem;
    background: #0fbaa3;
    border: 1px solid transparent;
    border-radius: 2rem;
    color: #ffffff;
    letter-spacing: -0.05em;
    font-size: 1rem;
  }
`;

export default function Fourth() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <Container>
      <Wrapper>
        <Left>
          <span>03</span>
          <span>
            원하는 기간 원하는 만큼만
            <br />
            <strong>맞춤 정기 구독 서비스</strong>
          </span>
          <p>
            장기 구독이 아닌 원하는 기간과 만큼만 구독 가능한
            <br />
            맞춤 구독 서비스로 언제든지 간편하게 변경할 수 있습니다.
          </p>
        </Left>
        <Right ref={ref}>
          <Card className={inView ? "isActive" : ""}>
            <span>베이직</span>
            <span>
              월 <b>29,900</b>
              <span>원</span>
            </span>
            <span>주 1회 밀키트 정기 배송</span>
            <button>구독하기</button>
          </Card>
          <Card className={inView ? "isActive" : ""}>
            <span>프리미엄</span>
            <span>
              월 <b>39,900</b>
              <span>원</span>
            </span>
            <span>주 2회 밀키트 정기 배송</span>
            <button>구독하기</button>
          </Card>
        </Right>
      </Wrapper>
    </Container>
  );
}
