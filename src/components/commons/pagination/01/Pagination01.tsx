import * as P from "./Pagination01.styles";

export default function Pagination01() {
  return (
    <P.Wrapper>
      <P.PrevNextIcon src="/img/icon/prev.svg" />
      <P.PageNumberWrapper>
        <P.CurrentPageNumber>1</P.CurrentPageNumber>/
        <P.LastPageNumber>2</P.LastPageNumber>
      </P.PageNumberWrapper>
      <P.PrevNextIcon src="/img/icon/next.svg" />
    </P.Wrapper>
  );
}
