import { gql } from "@apollo/client";

export const FETCH_MY_RECIPE = gql`
  query fetchMyRecipe($user_id: String!) {
    fetchMyRecipe(user_id: $user_id) {
      id
      title
      summary
      recipesImages {
        mainImage
      }
      createdAt
    }
  }
`;
