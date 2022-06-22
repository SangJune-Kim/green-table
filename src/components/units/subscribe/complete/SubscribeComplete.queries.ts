import { gql } from "@apollo/client";

export const FETCH_MY_PAYMENT = gql`
  query fetchMyPayment {
    fetchMyPayment {
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
  }
`;
