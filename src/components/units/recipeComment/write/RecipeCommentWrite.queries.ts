import { gql } from "@apollo/client";

export const CREATE_REPLY = gql`
  mutation createReply($contents: String!, $id: String!) {
    createReply(contents: $contents, id: $id)
  }
`;

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
      }
      createdAt
    }
  }
`;

export const FETCH_RECIPE = gql`
  query fetchRecipe($recipes_id: String!) {
    fetchRecipe(recipes_id: $recipes_id) {
      replyCount
    }
  }
`;
