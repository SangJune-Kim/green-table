import { gql } from "@apollo/client";

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($user_id: String!, $password: String!) {
    updatePassword(user_id: $user_id, password: $password) {
      user_id
      name
    }
  }
`;
