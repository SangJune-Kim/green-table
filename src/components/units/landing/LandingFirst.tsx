import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
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

  & > div:nth-of-type(1) {
    padding-top: 23px;
    width: 90%;
    max-width: 1664px;
    opacity: 0;
    transition: all 1.5s ease-in-out;

    &.isActive {
      opacity: 1;
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 1.5s ease-in-out;

    span {
      padding-top: 2rem;
      padding-bottom: 3.125rem;
      font-size: 3.125rem;
      font-weight: 500;
      letter-spacing: -0.05em;
      text-align: center;
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

    &.isActive {
      opacity: 1;
    }
  }

  & > img {
    position: absolute;
    z-index: -1;
    transition: all 2s ease;
    opacity: 0;
  }

  & > img:nth-of-type(1) {
    left: 0;
    bottom: 0;
    transition-delay: 0.5s;
    &.isActive {
      opacity: 1;
    }
  }

  & > img:nth-of-type(2) {
    right: 0;
    top: 0;
    transition-delay: 1s;
    &.isActive {
      opacity: 1;
    }
  }

  & > img:nth-of-type(3) {
    right: 0;
    bottom: 0;
    transform: translateX(50%);
    transition-delay: 1.5s;
    &.isActive {
      opacity: 1;
    }
  }
`;

export default function First() {
  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <Container>
      <div ref={ref} className={inView ? "isActive" : ""}>
        <img src="/img/landing/img-landing-logo.svg" alt="" />
      </div>
      <div className={inView ? "isActive" : ""}>
        <img src="/img/landing/img-landing01-logo.svg" alt="" />
        <span>나에게 맞는 채식 레시피로 맛있는 건강밥상</span>
        <img src="/img/landing/img-landing01-preview.png" alt="" />
        <button type="button" onClick={() => router.push("/main")}>
          채식한상 둘러보기
        </button>
      </div>
      <img
        className={inView ? "isActive" : ""}
        src="/img/landing/img-landing01-green.svg"
        alt=""
      />
      <img
        className={inView ? "isActive" : ""}
        src="/img/landing/img-landing01-yellow.svg"
        alt=""
      />
      <img
        className={inView ? "isActive" : ""}
        src="/img/landing/img-landing01-blue.svg"
        alt=""
      />
    </Container>
  );
}
