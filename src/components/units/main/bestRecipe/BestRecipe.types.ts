export interface IBestRecipeUIProps {
  popRecipes: any;
  settings: {
    dots?: boolean;
    arrows?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
  };
  userData: any;
}
