import Link from "next/link";
import OutlineSubmitButton from "../../../commons/buttons/outlineSubmit";
import * as Subs from "./SubscribeComplete.styles";
import { ISubscribeCompleteUIProps } from "./SubscribeComplete.types";

export default function SubscribeCompleteUI(props: ISubscribeCompleteUIProps) {
  return (
    <Subs.Container>
      <Subs.Wrapper>
        <Subs.HeaderWrapper>
          <Subs.HeaderCompleteIcon>
            <img src="/img/subscribe/img-complete-01.svg" />
          </Subs.HeaderCompleteIcon>
          <Subs.HeaderCompleteNotice>
            구독이 완료 되었습니다
          </Subs.HeaderCompleteNotice>
        </Subs.HeaderWrapper>
        <Subs.BodyWrapper>
          <Subs.Receipt>
            <Subs.DeliveryMan src="/img/subscribe/img-complete-02.png" />
            <Subs.TextWrapper>
              <Subs.TextHeader>
                <Subs.TextCategory>베이직 (주1회 정기 구독)</Subs.TextCategory>
                <Subs.TextContents>카카오페이</Subs.TextContents>
              </Subs.TextHeader>
              <Subs.TextRow>
                <Subs.TextCategory>결제금액</Subs.TextCategory>
                <Subs.TextContents>29,900원</Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>구매일</Subs.TextCategory>
                <Subs.TextContents>2022.05.31</Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>이용기간</Subs.TextCategory>
                <Subs.TextContents>2022.05.31~2022.06.30</Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>결제예정일</Subs.TextCategory>
                <Subs.TextContents>2022.06.30</Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>채식타입</Subs.TextCategory>
                <Subs.TextContents>
                  {props.data?.fetchUser.type === "NON_Vegan" && "채린이"}
                  {props.data?.fetchUser.type === "Vegan" && "비건"}
                  {props.data?.fetchUser.type === "Lacto" && "락토"}
                  {props.data?.fetchUser.type === "Ovo" && "오보"}
                  {props.data?.fetchUser.type === "Lacto_Ovo" && "락토오보"}
                  {props.data?.fetchUser.type === "Pesco" && "페스코"}
                  {props.data?.fetchUser.type === "Pollo" && "폴로"}
                </Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>주소</Subs.TextCategory>
                <Subs.TextContents>
                  서울 중구 동호로 330 CJ제일제당 센터 (우) 04560
                </Subs.TextContents>
              </Subs.TextRow>
              <Subs.DetailGuide>
                해당 내역에 대한 내용은{" "}
                <Link href={"/myPage/subscribe"}>
                  <a
                    style={{
                      color: "#848484",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    정기구독관리
                  </a>
                </Link>{" "}
                페이지에서 보다 자세히 확인하실 수 있습니다.
              </Subs.DetailGuide>
              <OutlineSubmitButton
                isActive={true}
                title={"메인으로"}
                onClick={props.onClickMoveToMain}
              />
            </Subs.TextWrapper>
          </Subs.Receipt>
        </Subs.BodyWrapper>
      </Subs.Wrapper>
    </Subs.Container>
  );
}
