import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation UPDATE_USER($user_id: String!, $updateUserInput: UpdateUserInput!) {
    updateUser(user_id: $user_id, updateUserInput: $updateUserInput) {
      user_id
      name
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($user_id: String!) {
    deleteUser(user_id: $user_id) {
      user_id
      name
    }
  }
`;

export const SEND_TOKEN_TO_SMS = gql`
  mutation sendTokenToSMS($phone: String!) {
    getToken(phone: $phone)
  }
`;

export const CHECK_VALID_TOKEN = gql`
  mutation checkValidToken($phone: String!, $token: String!) {
    checkValidToken(phone: $phone, token: $token)
  }
`;
