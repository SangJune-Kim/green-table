import { ChangeEvent, RefObject } from "react";

export interface IUploads02Props {
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  index: number;
  fileUrl: string;
}

export interface IUploads02UIProps {
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  fileRef: RefObject<HTMLInputElement>;
}
