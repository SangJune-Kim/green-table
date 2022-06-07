import Link from "next/link";
import NormalButton from "../../../commons/buttons/normal";
import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import Slider02 from "../../../commons/sliders/02";
import * as My from "./MySubscribe.styles";
import { IMySubscribeUIProps } from "./MySubscribe.types";

export default function MySubscribeUI(props: IMySubscribeUIProps) {
  return (
    <My.Container>
      <My.Wrapper>
        <MyPageSidebar />
        <My.SubscribeWrapper>
          <My.TitleWrapper>
            <My.Title>정기 구독 관리</My.Title>
            <My.Unsubscribe>해지하기</My.Unsubscribe>
          </My.TitleWrapper>

          <My.MySubscribe>
            {props.data?.fetchUser.isPro === "PRO" ? (
              <My.UserGrade className="expert">전문가</My.UserGrade>
            ) : (
              <My.UserGrade className="common">회원</My.UserGrade>
            )}
            {props.data?.fetchUser.isSubs === "NON_SUB" && (
              <>
                <My.UserSubs>미구독</My.UserSubs>
                {/* <p>
                  다음 결제 예정일은 {props.data?.fetchUser.endDate} 입니다.
                </p> */}
              </>
            )}
            {props.data?.fetchUser.isSubs === "BASIC" && (
              <>
                <My.UserSubs>베이직 구독중</My.UserSubs>
                <p>다음 결제 예정일은 22.06.30 입니다.</p>
              </>
            )}
            {props.data?.fetchUser.isSubs === "PREMIUM" && (
              <>
                <My.UserSubs>프리미엄 구독중</My.UserSubs>
                <p>다음 결제 예정일은 22.06.30 입니다.</p>
              </>
            )}
          </My.MySubscribe>

          <My.PayHistory>
            <My.Title>결제 내역</My.Title>
            <Slider02 />
          </My.PayHistory>

          <My.Pay>
            <My.Title>결제 수단</My.Title>
            <My.Contents>
              {props.data?.fetchUser.isSubs !== "NON_SUB" && (
                <>
                  <My.FlexColumn>
                    <p className="means">등록된 결제수단</p>
                    <span>
                      카카오페이
                      <span className="cardNumber">3333******882</span>
                    </span>
                  </My.FlexColumn>
                  <NormalButton title={"카드정보 등록 / 변경"} />
                </>
              )}
            </My.Contents>
          </My.Pay>

          <My.Pass>
            <My.Title>이용권 변경</My.Title>
            <My.FlexRow>
              {props.data?.fetchUser.isSubs === "BASIC" ? (
                <My.Subs className="basic">
                  <h1>베이직</h1>
                  <span className="month">
                    월 <span className="price">29,900</span>원
                  </span>
                  <p>주 1회 밀키트 정기 배송</p>
                  <NormalButton title={"구독중"} color={"green"} />
                </My.Subs>
              ) : (
                <My.Subs>
                  <h1>베이직</h1>
                  <span className="month">
                    월 <span className="price">29,900</span>원
                  </span>
                  <p>주 1회 밀키트 정기 배송</p>
                  <Link href={"/subscribe"}>
                    <NormalButton title={"구독하기"} color={"green"} />
                  </Link>
                </My.Subs>
              )}
              {props.data?.fetchUser.isSubs === "PREMIUM" ? (
                <My.Subs className="premium">
                  <h1>프리미엄</h1>
                  <span className="month">
                    월 <span className="price">39,900</span>원
                  </span>
                  <p>주 2회 밀키트 정기 배송</p>
                  <NormalButton title={"구독중"} color={"green"} />
                </My.Subs>
              ) : (
                <My.Subs>
                  <h1>프리미엄</h1>
                  <span className="month">
                    월 <span className="price">39,900</span>원
                  </span>
                  <p>주 2회 밀키트 정기 배송</p>
                  <Link href={"/subscribe"}>
                    <NormalButton title={"구독하기"} color={"green"} />
                  </Link>
                </My.Subs>
              )}
            </My.FlexRow>
          </My.Pass>
        </My.SubscribeWrapper>
      </My.Wrapper>
    </My.Container>
  );
}
