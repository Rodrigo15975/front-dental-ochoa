import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { Alergia } from "./types/typeAlergias";

export const updateAlergia = async (data: Alergia) =>
  await useMethods.PATCH<Alergia>(
    `${PathServices.ALERGIA}/${data._id}`,
    { alergias: data.alergias },
    {
      withCredentials: true,
    }
  );
