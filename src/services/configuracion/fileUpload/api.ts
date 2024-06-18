import { useMethods } from "@/adapters/methods";
import { PathServices } from "@/services/pathServices";
import { PartialUpload } from "./types/typeFileUpload";

export const fileUpload = async (data: PartialUpload) => {
  const { _id, file } = data;
  return await useMethods.POST<PartialUpload, FormData>(
    `${PathServices.CONSULTORIOFILELOGO}/?id=${_id}`,
    file,
    {
      withCredentials: true,
    }
  );
};

export const fileUploadPortada = async (data: PartialUpload) => {
  const { _id, file } = data;
  return await useMethods.POST<PartialUpload, FormData>(
    `${PathServices.CONSULTORIOFILEPORTADA}/?id=${_id}`,
    file,
    {
      withCredentials: true,
    }
  );
};
