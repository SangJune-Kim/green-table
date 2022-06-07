import { gql } from "@apollo/client";

export const FETCH_MY_SCRAP_HISTORY = gql`
  query fetchMyScrapHistory($user_id: String!) {
    fetchMyScrapHistory(user_id: $user_id) {
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
