import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      user_id
      email
      name
      phone
      address
      addressDetail
      type
      nickname
      isPro
      isSubs
      profilePic
      certImage
      certUrl
    }
  }
`;
