import { gql } from "@apollo/client";

export const CREATE_RECIPE = gql`
  mutation createRecipe($createRecipesInput: CreateRecipesInput!) {
    createRecipe(createRecipesInput: $createRecipesInput) {
      id
    }
  }
`;

export const UPDATE_RECIPE = gql`
  mutation updateRecipe(
    $recipe_id: String!
    $updateRecipesInput: UpdateRecipesInput!
  ) {
    updateRecipe(
      recipe_id: $recipe_id
      updateRecipesInput: $updateRecipesInput
    ) {
      id
    }
  }
`;
