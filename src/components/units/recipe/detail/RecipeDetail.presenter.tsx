import RecipeDetailMenu from "./menu/RecipeDetailMenu.container";
import * as RecipeDetail from "./RecipeDetail.styles";
import Slider01 from "../../../../components/commons/sliders/01";

import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";
import RecipeCommentList from "../../recipeComment/list/RecipeCommentList.container";
import { IRecipeDetailUIProps } from "./RecipeDetail.types";

export default function RecipeDetailUI(props: IRecipeDetailUIProps) {
  const router = useRouter();
  console.log(
    props.recipeData?.fetchRecipe?.recipesMainImage
      .map((el: any) => el.mainUrl)
      .filter((el: any) => el !== " " || el !== "")
  );
  return (
    <>
      <RecipeDetail.Container>
        <RecipeDetail.MenuWrapper>
          <RecipeDetailMenu
            recipeData={props.recipeData}
            onClickScrap={props.onClickScrap}
          />
        </RecipeDetail.MenuWrapper>
        <RecipeDetail.Wrapper>
          <RecipeDetail.TopWrapper>
            <RecipeDetail.BackButton
              type="button"
              onClick={() => router.push("/recipe")}
            >
              <img src="/img/recipeDetail/icon-arrow-left.svg" alt="" />
              목록으로
            </RecipeDetail.BackButton>
            <RecipeDetail.SliderWrapper>
              <Slider01
                mainImages={props.recipeData?.fetchRecipe?.recipesMainImage
                  .map((el: any) => el.mainUrl)
                  .filter((el: any) => el !== "")}
              />
            </RecipeDetail.SliderWrapper>
          </RecipeDetail.TopWrapper>

          <RecipeDetail.Navigation>
            <li
              className={`${props.tabActive[0]}`}
              onClick={props.onClickIngredientTab}
            >
              준비재료
            </li>
            <li
              className={`${props.tabActive[1]}`}
              onClick={props.onClickCookOrderTab}
            >
              요리순서
            </li>
            <li
              className={`${props.tabActive[2]}`}
              onClick={props.onClickReviewTab}
            >
              댓글({props.recipeData?.fetchRecipe?.replyCount})
            </li>
          </RecipeDetail.Navigation>

          <RecipeDetail.Contents>
            <h2 ref={props.ingredientTabRef}>준비재료</h2>
            <RecipeDetail.Ingredient>
              {props.recipeData?.fetchRecipe?.ingredients
                .map((el: any) => el.name)
                .map((el: any) => (
                  <span key={uuidv4()}>{el}</span>
                ))}
            </RecipeDetail.Ingredient>
            <h2 ref={props.cookOrderTabRef}>요리순서</h2>
            {props.recipeData?.fetchRecipe?.recipesContentsImage.map(
              (el: any, index: number) => (
                <RecipeDetail.Order key={uuidv4()}>
                  <span>Step {index + 1}</span>
                  <RecipeDetail.ImageWrapper>
                    {el.contentsUrl !== "" ? (
                      <img
                        src={`https://storage.googleapis.com/${el.contentsUrl}`}
                      />
                    ) : (
                      <div></div>
                    )}
                  </RecipeDetail.ImageWrapper>
                  {typeof window !== "undefined" ? (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(el.description),
                      }}
                    ></p>
                  ) : (
                    <p></p>
                  )}
                </RecipeDetail.Order>
              )
            )}
          </RecipeDetail.Contents>
          <RecipeDetail.RecipeCommentListWrapper ref={props.reviewTabRef}>
            <RecipeCommentList
              fetchUser={props.fetchUser}
              replyCount={props.recipeData?.fetchRecipe?.replyCount}
            />
          </RecipeDetail.RecipeCommentListWrapper>
        </RecipeDetail.Wrapper>
      </RecipeDetail.Container>
    </>
  );
}
