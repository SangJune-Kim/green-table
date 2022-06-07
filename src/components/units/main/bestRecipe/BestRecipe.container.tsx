import { useQuery } from "@apollo/client";
import BestRecipeUI from "./BestRecipe.presenter";
import { FETCH_POPULAR_RECIPES, FETCH_USER } from "./BestRecipe.queries";

export default function BestRecipe() {
  const { data: popRecipes } = useQuery(FETCH_POPULAR_RECIPES);
  const { data: userData } = useQuery(FETCH_USER);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <BestRecipeUI
      settings={settings}
      popRecipes={popRecipes}
      userData={userData}
    />
  );
}
