import MonthlyRecipeUI from "./MonthlyRecipe.presenter";
import { useState } from "react";
import { FETCH_POPULAR_RECIPES, FETCH_USER } from "./MonthlyRecipe.queries";
import { useQuery } from "@apollo/client";
import { IPickTag } from "./MonthlyRecipe.types";

export default function MonthlyRecipe() {
  const { data: popRecipes } = useQuery(FETCH_POPULAR_RECIPES);
  const { data: userData } = useQuery(FETCH_USER);
  const [pickTag, setPickTag] = useState<{ pickTag: string }>({
    pickTag: "#채식이 처음인 사람들을 위한 쉬운 레시피",
  });
  const handleChange = (event: IPickTag) => {
    setPickTag((pickTag.pickTag = event.target.value));
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <MonthlyRecipeUI
      settings={settings}
      handleChange={handleChange}
      pickTag={pickTag}
      popRecipes={popRecipes}
      userData={userData}
    />
  );
}
