import Link from "next/link";
import * as Promotion from "./Promotion.styles";

interface IPromoteUIProps {
  onClickContents: () => void;
}
export default function PromotionUI(props: IPromoteUIProps) {
  return (
    <Promotion.Container>
      <Promotion.Wrapper>
        <Link href={"/subscribe"}>
          <Promotion.Contents>
            <Promotion.Text>
              <a>
                <h1>정기구독 신청</h1>
                <span>채식한상과 늘 함께하세요</span>
              </a>
            </Promotion.Text>
            <Promotion.ImageWrapper>
              <img src="/img/promotion/icon-promotion-01.svg" alt="" />
            </Promotion.ImageWrapper>
          </Promotion.Contents>
        </Link>

        <Promotion.Contents onClick={props.onClickContents}>
          <Promotion.Text>
            <h1>배달 가능 지역</h1>
            <span>채식한상이 더 가까이 다가갑니다</span>
          </Promotion.Text>
          <Promotion.ImageWrapper>
            <img src="/img/promotion/icon-promotion-02.svg" alt="" />
          </Promotion.ImageWrapper>
        </Promotion.Contents>
      </Promotion.Wrapper>
    </Promotion.Container>
  );
}
