import { MouseEvent } from "react";

export interface IMyPageMainUIProps {
  recentItems: any;
  userData: any;
  userRecipe: any;
  userScrap: any;
  onClickMoveToDetail: (event: MouseEvent<HTMLLIElement>) => void;
}

export interface IRecipeImage {
  mainImage: string;
}
