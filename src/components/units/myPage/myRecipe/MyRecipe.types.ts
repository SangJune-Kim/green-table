import { MouseEvent } from "react";

export interface IMyRecipeUIProps {
  data: any;
  onClickMoveToDetail: (el: any) => (event: MouseEvent<HTMLLIElement>) => void;
}

export interface IFetchMyRecipe {
  id: string;
  recipesMainImage: any;
  title: string;
  summary: string;
}
