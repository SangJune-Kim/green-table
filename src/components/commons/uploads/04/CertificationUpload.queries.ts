import { gql } from "@apollo/client";

export const UPLOAD_CERTIFICATION_IMAGE = gql`
  mutation uploadCertificationImage($file: Upload!) {
    uploadCertificationImage(file: $file)
  }
`;
