import { gql } from "@apollo/client";

export const FETCH_MY_RECIPE = gql`
  query fetchMyRecipe($user_id: String!, $page: Int) {
    fetchMyRecipe(user_id: $user_id, page: $page) {
      id
      title
      summary
      recipesMainImage {
        mainUrl
      }
      createdAt
    }
  }
`;
