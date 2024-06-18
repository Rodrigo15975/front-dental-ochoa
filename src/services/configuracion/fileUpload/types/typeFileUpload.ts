interface Upload {
  file: FormData;
  _id: string;
  message: string;
}

export type PartialUpload = Partial<Upload>;
