import ViewAllButton from "../../../commons/buttons/viewAll";
import * as BestRecipe from "./BestRecipe.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";

export default function BestRecipeUI(props) {
  console.log(props.popRecipes?.fetchPopularRecipes);

  return (
    <BestRecipe.Container>
      <BestRecipe.Wrapper>
        <BestRecipe.RecommendRecipeHead>
          <BestRecipe.HeadText>
            <span>BEST RECIPE</span>
            <h1>
              채식한상이 추천하는 <b>레시피</b>
            </h1>
          </BestRecipe.HeadText>
          <ViewAllButton href={"/recipe"} title="전체보기" />
        </BestRecipe.RecommendRecipeHead>
        <BestRecipe.RecommendRecipeItems>
          <BestRecipe.SliderWrapper>
            <Slider {...props.settings}>
              {props.popRecipes?.fetchPopularRecipes?.slice(0, 12).map((el) => (
                <BestRecipe.RecipeItem key={uuidv4()}>
                  <BestRecipe.RecipeItemImageWrapper>
                    <BestRecipe.IconBookmark>
                      {el.recipesScraps?.user?.user_id?.includes(
                        props.userData.fetchUser.user_id
                      ) ? (
                        <img src="/img/bestRecipe/icon-bookmark-on.svg" />
                      ) : (
                        <img src="/img/bestRecipe/icon-bookmark-off.svg" />
                      )}
                      <span>{el.scrapCount}</span>
                    </BestRecipe.IconBookmark>
                    <img
                      src={`https://storage.googleapis.com/${el.recipesImages[0].mainImage}`}
                    />
                  </BestRecipe.RecipeItemImageWrapper>
                  <BestRecipe.RecipeItemTextWrapper>
                    <h1>{el.title}</h1>
                    <p>{el.summary}</p>
                    <BestRecipe.Tags>
                      {el.types === "VEGAN" && (
                        <BestRecipe.TagVegan>비건</BestRecipe.TagVegan>
                      )}
                      {el.types === "LACTO" && (
                        <BestRecipe.TagLacto>락토</BestRecipe.TagLacto>
                      )}
                      {el.types === "OVO" && (
                        <BestRecipe.TagOvo>오보</BestRecipe.TagOvo>
                      )}
                      {el.types === "LACTO_OVO" && (
                        <BestRecipe.TagLactoOvo>
                          락토오보
                        </BestRecipe.TagLactoOvo>
                      )}
                      {el.types === "PESCO" && (
                        <BestRecipe.TagPesco>페스코</BestRecipe.TagPesco>
                      )}
                      {el.types === "POLLO" && (
                        <BestRecipe.TagPollo>폴로</BestRecipe.TagPollo>
                      )}
                    </BestRecipe.Tags>
                  </BestRecipe.RecipeItemTextWrapper>
                </BestRecipe.RecipeItem>
              ))}
            </Slider>
          </BestRecipe.SliderWrapper>
        </BestRecipe.RecommendRecipeItems>
      </BestRecipe.Wrapper>
    </BestRecipe.Container>
  );
}
