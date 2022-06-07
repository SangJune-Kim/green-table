import RecipeDetailMenuUI from "./RecipeDetailMenu.presenter";

export default function RecipeDetailMenu(props) {
  return (
    <RecipeDetailMenuUI
      recipeData={props.recipeData}
      onClickScrap={props.onClickScrap}
    />
  );
}
