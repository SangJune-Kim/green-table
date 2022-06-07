import { gql } from "@apollo/client";

export const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      user_id
      email
      name
      type
    }
  }
`;
