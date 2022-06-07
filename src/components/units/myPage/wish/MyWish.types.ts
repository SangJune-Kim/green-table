import { MouseEvent } from "react";

export interface MyWishUIProps {
  data: any;
  onClickMoveToDetail: (event: MouseEvent<HTMLLIElement>) => void;
}

export interface IFetchMyScrapHistory {
  id: string;
  recipesImages: any;
  title: string;
  summary: string;
  createdAt: string;
}
