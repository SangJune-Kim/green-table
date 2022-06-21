export interface IRecipeDetailMenuProps {
  recipeData: any;
  onClickScrap: () => Promise<void>;
  onClickUpdateButton: () => void;
  onClickDeleteRecipe: () => void;
  isMyRecipe: boolean;
}
export interface IRecipeDetailMenuUIProps {
  recipeData: any;
  onClickScrap: () => Promise<void>;
  onClickUpdateButton: () => void;
  onClickDeleteRecipe: () => void;
  isMyRecipe: boolean;
}
