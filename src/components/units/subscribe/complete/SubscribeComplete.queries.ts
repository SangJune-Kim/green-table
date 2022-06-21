import { gql } from "@apollo/client";

export const FETCH_IMP_UID_WITH_USER_ID = gql`
  query fetchimpUidwithUserid($user_id: String!) {
    fetchimpUidwithUserid(user_id: $user_id) {
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

export const FETCH_MY_PAYMENT = gql`
  query fetchMyPayment {
    id
    impUid
    amount
    user {
      address
      addressDetail
      type
      startDate
      endDate
    }
  }
`;
