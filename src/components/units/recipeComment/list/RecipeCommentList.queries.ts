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
