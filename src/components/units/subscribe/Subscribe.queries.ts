import { gql } from "@apollo/client";

export const CREATE_BASIC_PAYMENT = gql`
  mutation createBasicPayment($impUid: String!, $amount: Float!) {
    createBasicPayment(impUid: $impUid, amount: $amount)
  }
`;

export const CREATE_PREMIUM_PAYMENT = gql`
  mutation createPremiumPayment($impUid: String!, $amount: Float!) {
    createPremiumPayment(impUid: $impUid, amount: $amount)
  }
`;
