import { MouseEvent } from "react";

export interface MyWishUIProps {
  data: any;
  onClickMoveToDetail: (el: any) => (event: MouseEvent<HTMLLIElement>) => void;
}

export interface IFetchMyScrapHistory {
  id: string;
  recipesMainImage: any;
  title: string;
  summary: string;
  createdAt: string;
}
