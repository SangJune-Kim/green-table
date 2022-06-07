import { useRouter } from "next/router";
import * as Recommend from "./RecommendRecipe.styles";

export default function RecommendRecipeUI() {
  const router = useRouter();
  return (
    <Recommend.Container>
      <Recommend.Wrapper>
        <Recommend.Title>이런 레시피는 어떠세요?</Recommend.Title>
        <Recommend.Contents>
          {[1, 2, 3, 4].map((e) => (
            <div key={e}>
              <div>
                <img src="/img/bestRecipe/img-recipe-01.png" alt="" />
              </div>
              <h1>메뉴 01</h1>
            </div>
          ))}
        </Recommend.Contents>
        <button onClick={() => router.push("/recipe")}>목록으로</button>
      </Recommend.Wrapper>
    </Recommend.Container>
  );
}
