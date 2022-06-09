import RecipeDetailMenuUI from "./RecipeDetailMenu.presenter";
import { IRecipeDetailMenuProps } from "./RecipeDetailMenu.types";

export default function RecipeDetailMenu(props: IRecipeDetailMenuProps) {
  return (
    <RecipeDetailMenuUI
      recipeData={props.recipeData}
      onClickScrap={props.onClickScrap}
    />
  );
}
