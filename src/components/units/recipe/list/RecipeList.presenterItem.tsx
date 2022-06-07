import * as List from "./RecipeList.styles";
import { IPropsRecipeListItem } from "./RecipeList.types";

export default function RecipeListItem(props: IPropsRecipeListItem) {
  const el = props.el;

  return (
    <List.RecipeBox id={el.id} onClick={props?.onClickMoveToDetail}>
      <List.RecipeImg
        src={
          el.recipesImages
            ? el.recipesImages.filter((e: any) => e.mainImage !== " ")
                .length === 0
              ? "/img/bestRecipe/img-recipe-01.png"
              : `https://storage.googleapis.com/${el.recipesImages[0].mainImage}`
            : "/img/bestRecipe/img-recipe-01.png"
        }
      />
      <List.IconBookmark>
        {props.myScraps?.includes(el.id) ? (
          <img src="/img/bestRecipe/icon-bookmark-on.svg" />
        ) : (
          <img src="/img/bestRecipe/icon-bookmark-off.svg" />
        )}
        <span>{el.scrapCount}</span>
      </List.IconBookmark>
      <List.StickerWrapper>
        {el.scrapCount >= 1 && (
          <List.RecipeRecommendSticker src="/img/icon/recommend.svg" />
        )}
        {el.level === "SIMPLE" && (
          <List.RecipeLevelSticker src="/img/icon/level1.svg" />
        )}
        {el.level === "NORMAL" && (
          <List.RecipeLevelSticker src="/img/icon/level2.svg" />
        )}
        {el.level === "DIFFICULT" && (
          <List.RecipeLevelSticker src="/img/icon/level3.svg" />
        )}
      </List.StickerWrapper>
      <List.RecipeTitle>{el.title}</List.RecipeTitle>
      <List.RecipeSummary>{el.summary}</List.RecipeSummary>
      <List.RecipeCommentBox>
        <List.RecipeCommentIcon src="/img/icon/comment.svg" />
        <List.RecipeCommentsCount>{el.replyCount}</List.RecipeCommentsCount>
      </List.RecipeCommentBox>
    </List.RecipeBox>
  );
}
