import * as MonthlyRecipe from "./MonthlyRecipe.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";

export default function MonthlyRecipeUI(props) {
  return (
    <MonthlyRecipe.Container>
      <MonthlyRecipe.HeadText>
        <span>MONTHLY RECIPE</span>
        <h1>
          이달의 인기 레시피 <b>P!ck</b>
        </h1>
        <MonthlyRecipe.TagsWrapper>
          <input
            type="radio"
            name="pickTag"
            value="#채식이 처음인 사람들을 위한 쉬운 레시피"
            id="tag1"
            checked={
              props.pickTag.pickTag ===
              "#채식이 처음인 사람들을 위한 쉬운 레시피"
            }
            onChange={props.handleChange}
          />
          <input
            type="radio"
            name="pickTag"
            value="#집들이날 대접 할 만한 채식 차림상"
            id="tag2"
            checked={
              props.pickTag.pickTag === "#집들이날 대접 할 만한 채식 차림상"
            }
            onChange={props.handleChange}
          />
          <input
            type="radio"
            name="pickTag"
            value="#특별한 날 채식 생일상"
            id="tag3"
            checked={props.pickTag.pickTag === "#특별한 날 채식 생일상"}
            onChange={props.handleChange}
          />
          <input
            type="radio"
            name="pickTag"
            value="#스트레스 날려 줄 매운맛 채식 야식"
            id="tag4"
            checked={
              props.pickTag.pickTag === "#스트레스 날려 줄 매운맛 채식 야식"
            }
            onChange={props.handleChange}
          />
          <label
            htmlFor="tag1"
            className={
              props.pickTag.pickTag ===
              "#채식이 처음인 사람들을 위한 쉬운 레시피"
                ? "isActive"
                : ""
            }
          >
            #채식이 처음인 사람들을 위한 쉬운 레시피
          </label>
          <label
            htmlFor="tag2"
            className={
              props.pickTag.pickTag === "#집들이날 대접 할 만한 채식 차림상"
                ? "isActive"
                : ""
            }
          >
            #집들이날 대접 할 만한 채식 차림상
          </label>
          <label
            htmlFor="tag3"
            className={
              props.pickTag.pickTag === "#특별한 날 채식 생일상"
                ? "isActive"
                : ""
            }
          >
            #특별한 날 채식 생일상
          </label>
          <label
            htmlFor="tag4"
            className={
              props.pickTag.pickTag === "#스트레스 날려 줄 매운맛 채식 야식"
                ? "isActive"
                : ""
            }
          >
            #스트레스 날려 줄 매운맛 채식 야식
          </label>
        </MonthlyRecipe.TagsWrapper>
      </MonthlyRecipe.HeadText>
      <MonthlyRecipe.RecommendRecipeItems>
        <MonthlyRecipe.SliderWrapper>
          <Slider {...props.settings}>
            {props.popRecipes?.fetchPopularRecipes?.slice(13, 24).map((el) => (
              <MonthlyRecipe.RecipeItem key={uuidv4()}>
                <MonthlyRecipe.RecipeItemImageWrapper>
                  <MonthlyRecipe.IconBookmark>
                    {el.recipesScraps?.user?.user_id?.includes(
                      props.userData.fetchUser.user_id
                    ) ? (
                      <img src="/img/bestRecipe/icon-bookmark-on.svg" />
                    ) : (
                      <img src="/img/bestRecipe/icon-bookmark-off.svg" />
                    )}
                    <span>{el.scrapCount}</span>
                  </MonthlyRecipe.IconBookmark>
                  <img
                    src={`https://storage.googleapis.com/${el.recipesImages[0]?.mainImage}`}
                  />
                </MonthlyRecipe.RecipeItemImageWrapper>
                <MonthlyRecipe.RecipeItemTextWrapper>
                  <h1>{el.title}</h1>
                  <p>{el.summary}</p>
                  <MonthlyRecipe.Tags>
                    {el.types === "VEGAN" && (
                      <MonthlyRecipe.TagVegan>비건</MonthlyRecipe.TagVegan>
                    )}
                    {el.types === "LACTO" && (
                      <MonthlyRecipe.TagLacto>락토</MonthlyRecipe.TagLacto>
                    )}
                    {el.types === "OVO" && (
                      <MonthlyRecipe.TagOvo>오보</MonthlyRecipe.TagOvo>
                    )}
                    {el.types === "LACTO_OVO" && (
                      <MonthlyRecipe.TagLactoOvo>
                        락토오보
                      </MonthlyRecipe.TagLactoOvo>
                    )}
                    {el.types === "PESCO" && (
                      <MonthlyRecipe.TagPesco>페스코</MonthlyRecipe.TagPesco>
                    )}
                    {el.types === "POLLO" && (
                      <MonthlyRecipe.TagPollo>폴로</MonthlyRecipe.TagPollo>
                    )}
                  </MonthlyRecipe.Tags>
                </MonthlyRecipe.RecipeItemTextWrapper>
              </MonthlyRecipe.RecipeItem>
            ))}
          </Slider>
        </MonthlyRecipe.SliderWrapper>
      </MonthlyRecipe.RecommendRecipeItems>
    </MonthlyRecipe.Container>
  );
}
