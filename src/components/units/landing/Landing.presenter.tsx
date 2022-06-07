import * as S from "./Landing.styles";
import First from "./LandingFirst";
import Second from "./LandingSecond";
import Third from "./LandingThird";
import Fourth from "./LandingFourth";
import Fifth from "./LandingFifth";

export default function LandingUI() {
  return (
    <>
      <S.Main className="scroll-container">
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
      </S.Main>
    </>
  );
}
