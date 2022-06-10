import { gql } from "@apollo/client";

export const UPLOAD_MAIN_IMAGE = gql`
  mutation uploadMainImages($file: Upload!) {
    uploadMainImages(file: $file)
  }
`;
