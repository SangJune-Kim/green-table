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
      recipesMainImage {
        mainUrl
      }
      recipesContentsImage {
        contentsUrl
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

export const DELETE_RECIPE = gql`
  mutation deleteRecipe($recipe_id: String!) {
    deleteRecipe(recipe_id: $recipe_id)
  }
`;
