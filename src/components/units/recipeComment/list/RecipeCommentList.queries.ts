import { gql } from "@apollo/client";

export const FETCH_REPLIES = gql`
  query fetchReplies($id: String!, $page: Int) {
    fetchReplies(id: $id, page: $page) {
      reply_id
      contents
      user {
        user_id
        email
        name
        type
        nickname
      }
      createdAt
    }
  }
`;

export const DELETE_REPLY = gql`
  mutation deleteReply($reply_id: String!, $recipe_id: String!) {
    deleteReply(reply_id: $reply_id, recipe_id: $recipe_id)
  }
`;

export const FETCH_RECIPE = gql`
  query fetchRecipe($recipes_id: String!) {
    fetchRecipe(recipes_id: $recipes_id) {
      replyCount
    }
  }
`;
