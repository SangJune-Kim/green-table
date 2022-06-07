import { gql } from "@apollo/client";

export const FETCH_POPULAR_RECIPES = gql`
  query fetchPopularRecipes($page: Int) {
    fetchPopularRecipes(page: $page) {
      id
      title
      summary
      types
      cookTime
      level
      serve
      scrapCount
      replyCount
      createdAt
      recipesImages {
        mainImage
      }
      recipesScraps {
        scraped
      }
    }
  }
`;

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      user_id
      name
      type
      isPro
    }
  }
`;
