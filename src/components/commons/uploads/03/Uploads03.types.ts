import { ChangeEvent, RefObject } from "react";

export interface IUploads03Props {
  descImage: string;
  onChangeDescImage: (fileUrl: string) => void;
}

export interface IUploads03UIProps {
  descImage: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  fileRef: RefObject<HTMLInputElement>;
}
