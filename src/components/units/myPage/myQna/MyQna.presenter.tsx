import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import MyPageTitleBar from "../../../commons/titleBars/01";
import * as My from "./MyQna.styles";
export default function MyQnaUI() {
  return (
    <My.Container>
      <My.Wrapper>
        <MyPageSidebar />
        <My.QnaWrapper>
          <MyPageTitleBar title={"문의 내역"} />
        </My.QnaWrapper>
      </My.Wrapper>
    </My.Container>
  );
}
