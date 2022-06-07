import * as Foot from "./Footer.styles";
// 수정
export default function LayoutFooter() {
  const onClickTopButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Foot.Container>
      <Foot.Wrapper>
        <Foot.TopButton type="button" onClick={onClickTopButton}>
          <img src="/img/footer/icon-top-arrow.svg" />
          <span>TOP</span>
        </Foot.TopButton>
        <Foot.LogoWrapper>
          <Foot.Logo src="/img/footer/logo.png" />
          <Foot.LogoCopyWrite>
            @ GREEN TABLE ALL RIGHTS RESERVED
          </Foot.LogoCopyWrite>
        </Foot.LogoWrapper>
        <Foot.MenuInfoWrapper>
          <Foot.MenuWrapper>
            <Foot.Menu>이용약관</Foot.Menu>
            <Foot.Menu>개인정보처리 방침</Foot.Menu>
            <Foot.Menu>법적고지</Foot.Menu>
            <Foot.Menu>사업자정보 확인</Foot.Menu>
          </Foot.MenuWrapper>
          <Foot.InfoWrapper>
            <Foot.Info>(주)채식한상 | 대표자: 홍예원</Foot.Info>
            <Foot.Info>
              주소: 서울 중구 동호로 330 CJ제일제당 센터 (우) 04560 |
              사업자등록번호: 000-00-00000
            </Foot.Info>
            <Foot.Info>
              통신판매업신고 중구 제00000호 | 개인정보보호책임자:오창모
            </Foot.Info>
          </Foot.InfoWrapper>
          <Foot.CSWrapperMobile>
            <Foot.CSNumber>고객센터 1688-1688</Foot.CSNumber>
            <Foot.CSChat>1:1문의</Foot.CSChat>
          </Foot.CSWrapperMobile>
        </Foot.MenuInfoWrapper>
        <Foot.CSWrapper>
          <Foot.CSNumber>고객센터 1688-1688</Foot.CSNumber>
          <Foot.CSChat>1:1문의</Foot.CSChat>
        </Foot.CSWrapper>
      </Foot.Wrapper>
    </Foot.Container>
  );
}
