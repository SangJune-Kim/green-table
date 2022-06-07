import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $name: String!
    $phone: String!
  ) {
    createUser(email: $email, password: $password, name: $name, phone: $phone) {
      user_id
      name
    }
  }
`;

export const SEND_TOKEN_TO_SMS = gql`
  mutation getToken($phone: String!) {
    getToken(phone: $phone)
  }
`;

export const CHECK_VALID_TOKEN = gql`
  mutation checkValidToken($phone: String!, $token: String!) {
    checkValidToken(phone: $phone, token: $token)
  }
`;
