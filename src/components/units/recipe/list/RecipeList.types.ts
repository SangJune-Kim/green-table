import { MouseEvent } from "react";

export interface IPropsStyles {
  name?: string;
  isPicked?:
    | {
        wholeMenu?: string | undefined;
        selectList?: string | undefined;
      }
    | undefined;
}

export interface IPropsRecipeList {
  __typename?: string;
  newMyScraps?: any;
  id?: string;
}

export interface IPropsRecipeListItem {
  el?: any;
  onClickMoveToDetail?: (e: MouseEvent<any>) => any;
  myScraps?: Array<any>;
  userData?: any;
}

export interface IPropsExpertBestList {
  isProData?: any;
  userData?: any;
  data?: any;
  myScraps?: any;
  popularData?: any;
  onClickMoveToDetail(el: any): (e: MouseEvent<any>) => any;
}
