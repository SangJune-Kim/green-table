import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_RECIPE } from "../../../../src/components/units/recipe/detail/RecipeDetail.queries";
import RecipeWrite from "../../../../src/components/units/recipe/write/RecipeWrite.container";

export default function RecipeEditPage() {
  const router = useRouter();
  const { data: fetchRecipe } = useQuery(FETCH_RECIPE, {
    variables: {
      recipes_id: String(router.query.recipeId),
    },
  });

  return <RecipeWrite isEdit={true} fetchRecipe={fetchRecipe} />;
}
