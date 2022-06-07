import { gql } from "@apollo/client";

export const CREATE_RECIPE = gql`
  mutation createRecipe($createRecipesInput: CreateRecipesInput!) {
    createRecipe(createRecipesInput: $createRecipesInput) {
      id
      title
      summary
      types
      cookTime
      level
      user {
        user_id
        email
        name
      }
      ingredients {
        name
      }
      recipesTags {
        name
      }
    }
  }
`;
