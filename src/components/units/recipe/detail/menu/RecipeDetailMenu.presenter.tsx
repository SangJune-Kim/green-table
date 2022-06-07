import * as DetailMenu from "./RecipeDetailMenu.styles";
import { v4 as uuidv4 } from "uuid";

export default function RecipeDetailMenuUI(props) {
  return (
    <DetailMenu.Container>
      <DetailMenu.Wrapper>
        <DetailMenu.MenuTitle>
          {props.recipeData?.fetchRecipe?.title}
        </DetailMenu.MenuTitle>
        <DetailMenu.MenuRemarks>
          {props.recipeData?.fetchRecipe?.summary}
        </DetailMenu.MenuRemarks>

        <DetailMenu.Tags>
          {props.recipeData?.fetchRecipe?.types === "VEGAN" && (
            <DetailMenu.TagVegan>비건</DetailMenu.TagVegan>
          )}
          {props.recipeData?.fetchRecipe?.types === "LACTO" && (
            <DetailMenu.TagLacto>락토</DetailMenu.TagLacto>
          )}
          {props.recipeData?.fetchRecipe?.types === "OVO" && (
            <DetailMenu.TagOvo>오보</DetailMenu.TagOvo>
          )}
          {props.recipeData?.fetchRecipe?.types === "LACTO_OVO" && (
            <DetailMenu.TagLactoOvo>락토오보</DetailMenu.TagLactoOvo>
          )}
          {props.recipeData?.fetchRecipe?.types === "PESCO" && (
            <DetailMenu.TagPesco>페스코</DetailMenu.TagPesco>
          )}
          {props.recipeData?.fetchRecipe?.types === "POLLO" && (
            <DetailMenu.TagPollo>폴로</DetailMenu.TagPollo>
          )}
        </DetailMenu.Tags>

        <DetailMenu.RecipeInfoWrapper>
          <DetailMenu.RecipeInfoItem>
            <DetailMenu.RecipeInfoTop>
              <img src="/img/recipeDetail/icon-stopwatch.svg" alt="" />
              <span>조리시간</span>
            </DetailMenu.RecipeInfoTop>
            <DetailMenu.RecipeInfoBottom>
              {props.recipeData?.fetchRecipe?.cookTime}분
            </DetailMenu.RecipeInfoBottom>
          </DetailMenu.RecipeInfoItem>

          <DetailMenu.RecipeInfoItem>
            <DetailMenu.RecipeInfoTop>
              <img src="/img/recipeDetail/icon-star.svg" alt="" />
              <span>난이도</span>
            </DetailMenu.RecipeInfoTop>
            <DetailMenu.RecipeInfoBottom>
              {props.recipeData?.fetchRecipe?.level === "SIMPLE" && "쉬움"}
              {props.recipeData?.fetchRecipe?.level === "NORMAL" && "보통"}
              {props.recipeData?.fetchRecipe?.level === "DIFFICULT" && "어려움"}
            </DetailMenu.RecipeInfoBottom>
          </DetailMenu.RecipeInfoItem>

          <DetailMenu.RecipeInfoItem>
            <DetailMenu.RecipeInfoTop>
              <img src="/img/recipeDetail/icon-smile.svg" alt="" />
              <span>분량</span>
            </DetailMenu.RecipeInfoTop>
            <DetailMenu.RecipeInfoBottom>
              {props.recipeData?.fetchRecipe?.serve}인분
            </DetailMenu.RecipeInfoBottom>
          </DetailMenu.RecipeInfoItem>
        </DetailMenu.RecipeInfoWrapper>

        <DetailMenu.RecipeTags>
          {props.recipeData?.fetchRecipe?.recipesTags.map((el) => (
            <span key={uuidv4()}>#{el.name}</span>
          ))}
        </DetailMenu.RecipeTags>

        <DetailMenu.RecipeInfoButtons>
          <DetailMenu.PickedButton type="button" onClick={props.onClickScrap}>
            찜하기
          </DetailMenu.PickedButton>
          <DetailMenu.ShareButton>
            <img src="/img/recipeDetail/icon-share.svg" alt="공유하기" />
          </DetailMenu.ShareButton>
        </DetailMenu.RecipeInfoButtons>
      </DetailMenu.Wrapper>
    </DetailMenu.Container>
  );
}
