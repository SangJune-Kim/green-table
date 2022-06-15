import { MouseEvent } from "react";

export interface IMyPageMainUIProps {
  recentItems: any;
  userData: any;
  userRecipe: any;
  userScrap: any;
  onClickMoveToDetail: (el: any) => (event: MouseEvent<HTMLLIElement>) => void;
}
