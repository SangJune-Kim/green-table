import { gql } from "@apollo/client";

export const FETCH_IMP_UID_WITH_USER_ID = gql`
  query fetchImpUidWithUserId($user_id: String!) {
    fetchImpUidWithUserId(user_id: $user_id) {
      id
      impUid
      user {
        address
        addressDetail
        isSubs
        startDate
        endDate
      }
    }
  }
`;
