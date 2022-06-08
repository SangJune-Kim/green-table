import { ChangeEvent } from "react";

export interface IMonthlyRecipeUIProps {
  settings: {
    dots?: boolean;
    arrows?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
  };
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  pickTag: {
    pickTag: string;
  };
  popRecipes: any;
  userData: any;
}
