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
                <Subs.TextCategory>
                  {props.data?.fetchMyPayment[0].amount === 29900 &&
                    "베이직 (주 1회 정기구독)"}
                  {props.data?.fetchMyPayment[0].amount === 39900 &&
                    "프리미엄 (주 2회 정기구독)"}
                </Subs.TextCategory>
              </Subs.TextHeader>
              <Subs.TextRow>
                <Subs.TextCategory>결제금액</Subs.TextCategory>
                <Subs.TextContents>
                  {props.data?.fetchMyPayment[0].amount.toLocaleString("ko-KR")}
                </Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>구매일</Subs.TextCategory>
                <Subs.TextContents>
                  {" "}
                  {props.data?.fetchMyPayment[0].user.startDate}
                </Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>이용기간</Subs.TextCategory>
                <Subs.TextContents>
                  {props.data?.fetchMyPayment[0].user.startDate}~
                  {props.data?.fetchMyPayment[0].user.endDate}
                </Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>결제예정일</Subs.TextCategory>
                <Subs.TextContents>
                  {" "}
                  {props.data?.fetchMyPayment[0].user.endDate}
                </Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>채식타입</Subs.TextCategory>
                <Subs.TextContents>
                  {props.data?.fetchMyPayment[0].user.type === "NON_Vegan" &&
                    "채린이"}
                  {props.data?.fetchMyPayment[0].user.type === "Vegan" &&
                    "비건"}
                  {props.data?.fetchMyPayment[0].user.type === "Lacto" &&
                    "락토"}
                  {props.data?.fetchMyPayment[0].user.type === "Ovo" && "오보"}
                  {props.data?.fetchMyPayment[0].user.type === "Lacto_Ovo" &&
                    "락토오보"}
                  {props.data?.fetchMyPayment[0].user.type === "Pesco" &&
                    "페스코"}
                  {props.data?.fetchMyPayment[0].user.type === "Pollo" &&
                    "폴로"}
                </Subs.TextContents>
              </Subs.TextRow>
              <Subs.TextRow>
                <Subs.TextCategory>주소</Subs.TextCategory>
                <Subs.TextContents>
                  {props.data?.fetchMyPayment[0].user.address}{" "}
                  {props.data?.fetchMyPayment[0].user.addressDetail}
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
