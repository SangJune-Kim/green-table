import { MouseEvent } from "react";

export interface IMyRecipeUIProps {
  data: any;
  onClickMoveToDetail: (event: MouseEvent<HTMLLIElement>) => void;
}

export interface IFetchMyRecipe {
  id: string;
  recipesImages: any;
  title: string;
  summary: string;
  createdAt: string;
}
