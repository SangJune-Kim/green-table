import { gql } from "@apollo/client";

export const UPLOAD_PROFILE_IMAGE = gql`
  mutation uploadProfileImage($file: Upload!) {
    uploadProfileImage(file: $file)
  }
`;
