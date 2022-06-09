import { RefObject } from "react";

export interface IRecipeDetailUIProps {
  recipeData: any;
  fetchUser: any;
  ingredientTabRef: RefObject<HTMLDivElement>;
  cookOrderTabRef: RefObject<HTMLDivElement>;
  reviewTabRef: RefObject<HTMLDivElement>;
  tabActive: string[];
  onClickIngredientTab: () => void;
  onClickCookOrderTab: () => void;
  onClickReviewTab: () => void;
  onClickScrap: () => Promise<void>;
}
