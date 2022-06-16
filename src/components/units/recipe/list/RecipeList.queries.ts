import { gql } from "@apollo/client";

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

export const FETCH_RECIPES = gql`
  query fetchRecipes($page: Int) {
    fetchRecipes(page: $page) {
      id
      title
      summary
      types
      level
      scrapCount
      replyCount
      recipesMainImage {
        mainUrl
      }
      recipesContentsImage {
        contentsUrl
      }
      recipesScraps {
        scraped
      }
    }
  }
`;

export const FETCH_RECIPE_TYPES = gql`
  query fetchRecipeTypes($vegan_types: String!, $page: Int) {
    fetchRecipeTypes(vegan_types: $vegan_types, page: $page) {
      id
      title
      summary
      types
      level
      scrapCount
      replyCount
      recipesMainImage {
        mainUrl
      }
      recipesContentsImage {
        contentsUrl
      }
      recipesScraps {
        scraped
      }
    }
  }
`;

export const FETCH_POPULAR_RECIPES = gql`
  query fetchPopularRecipes($page: Int) {
    fetchPopularRecipes(page: $page) {
      id
      title
      summary
      types
      level
      scrapCount
      replyCount
      recipesMainImage {
        mainUrl
      }
      recipesContentsImage {
        contentsUrl
      }
      recipesScraps {
        scraped
      }
    }
  }
`;

export const FETCH_RECIPE_TYPES_POPULAR = gql`
  query fetchRecipeTypesPopular($vegan_types: String!, $page: Int) {
    fetchRecipeTypesPopular(vegan_types: $vegan_types, page: $page) {
      id
      title
      summary
      types
      level
      scrapCount
      replyCount
      recipesMainImage {
        mainUrl
      }
      recipesContentsImage {
        contentsUrl
      }
      recipesScraps {
        scraped
      }
    }
  }
`;

export const FETCH_RECIPES_COUNT = gql`
  query fetchRecipesCount {
    fetchRecipesCount
  }
`;

export const FETCH_RECIPES_TYPES_COUNT = gql`
  query fetchRecipesTypesCount($vegan_types: String!, $page: Int) {
    fetchRecipesTypesCount(vegan_types: $vegan_types, page: $page)
  }
`;

export const FETCH_RECIPE_ISPRO = gql`
  query fetchRecipeIsPro($page: Int) {
    fetchRecipeIsPro(page: $page) {
      id
      title
      summary
      types
      level
      scrapCount
      replyCount
      recipesMainImage {
        mainUrl
      }
      recipesContentsImage {
        contentsUrl
      }
      recipesScraps {
        scraped
      }
    }
  }
`;

export const FETCH_RECIPES_TYPES_ISPRO = gql`
  query fetchRecipesTypeIsPro($vegan_types: String!, $page: Int) {
    fetchRecipesTypeIsPro(vegan_types: $vegan_types, page: $page) {
      id
      title
      summary
      types
      level
      scrapCount
      replyCount
      recipesMainImage {
        mainUrl
      }
      recipesContentsImage {
        contentsUrl
      }
      recipesScraps {
        scraped
      }
      user {
        isPro
      }
    }
  }
`;

export const FETCH_MY_SCRAPS_HISTORY = gql`
  query fetchMyScrapHistory($user_id: String!) {
    fetchMyScrapHistory(user_id: $user_id) {
      id
    }
  }
`;

export const SEARCH_RECIPES = gql`
  query searchRecipes($input: String!, $page: Int) {
    searchRecipes(input: $input, page: $page) {
      id
      title
      summary
      types
      level
      scrapCount
      replyCount
      recipesMainImage {
        mainUrl
      }
      recipesContentsImage {
        contentsUrl
      }
      recipesScraps {
        scraped
      }
      user {
        isPro
      }
    }
  }
`;

export const FETCH_SEARCH_RESULT_COUNT = gql`
  query fetchSearchResultCount($input: String!, $page: Int) {
    fetchSearchResultCount(input: $input, page: $page)
  }
`;
