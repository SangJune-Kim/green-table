import { MouseEvent } from "react";

export interface IMyRecentUIProps {
  recentItems: any;
  onClickMoveToDetail: (el: any) => (event: MouseEvent<HTMLLIElement>) => void;
}
