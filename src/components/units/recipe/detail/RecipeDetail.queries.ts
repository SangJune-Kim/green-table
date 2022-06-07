import { gql } from "@apollo/client";

export const FETCH_RECIPE = gql`
  query fetchRecipe($recipes_id: String!) {
    fetchRecipe(recipes_id: $recipes_id) {
      id
      title
      summary
      types
      cookTime
      level
      serve
      recipesImages {
        mainImage
        url
        description
      }
      user {
        user_id
        email
        name
        isPro
      }
      ingredients {
        name
      }
      recipesTags {
        name
      }
      scrapCount
      replyCount
      createdAt
    }
  }
`;

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      user_id
      email
      name
      isPro
      type
    }
  }
`;

export const CLICK_SCRAP = gql`
  mutation clickScrap($id: String!) {
    clickScrap(id: $id) {
      scraped
    }
  }
`;
