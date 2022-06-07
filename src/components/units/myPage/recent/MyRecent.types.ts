import { MouseEvent } from "react";

export interface IMyRecentUIProps {
  recentItems: any;
  onClickMoveToDetail: (event: MouseEvent<HTMLLIElement>) => void;
}
