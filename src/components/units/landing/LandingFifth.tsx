import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

import { keyframes } from "@emotion/react";

const ZoominOut = keyframes`
  from{
		transform: scale(1);
	}
	to{
		transform: scale(1.05);
	}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 90%;
    max-width: 1664px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);

    & > span:nth-of-type(1) {
      padding-bottom: 2.8rem;
      font-weight: 700;
      font-size: 3.125rem;
      letter-spacing: -0.05em;
    }

    & > span:nth-of-type(2) {
      padding-bottom: 6.5rem;
      font-weight: 400;
      font-size: 2.25rem;
      letter-spacing: -0.05em;
      color: #464646;
    }

    button {
      margin-top: 3.125rem;
      padding: 1.5rem 5.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.05em;
      color: #ffffff;
      background: #0fbaa3;
      border-radius: 5rem;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: ${ZoominOut} 1s 1s infinite ease-in-out alternate;

      :hover {
        color: #0fbaa3;
        background: #ffffff;
        border: 1px solid #0fbaa3;
      }
    }
  }

  & > img {
    z-index: -1;
    position: absolute;
    width: 100%;
    bottom: 0;
    opacity: 0;
    filter: blur(20px);
    transition: all 1.5s ease-in-out;

    &.isActive {
      opacity: 1;
      filter: blur(0px);
    }
  }
`;

export default function Fifth() {
  const router = useRouter();

  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <Container>
      <div ref={ref} className={inView ? "isActive" : ""}>
        <span>채식 레시피의 모든 것, 채식한상과 함께 해보세요</span>
        <span>당신의 맞춤 레시피 채식한상</span>
        <button onClick={() => router.push("/main")}>채식한상 둘러보기</button>
      </div>
      <img
        className={inView ? "isActive" : ""}
        src="/img/landing/img-landing05-background.svg"
        alt=""
      />
    </Container>
  );
}
