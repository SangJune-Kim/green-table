import { gql } from "@apollo/client";

export const UPLOAD_RECIPE_IMAGE = gql`
  mutation uploadRecipeImages($file: Upload!) {
    uploadRecipeImages(file: $file)
  }
`;
