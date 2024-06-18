import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { Nota } from "./types/typesNotas";

export const updateNota = async (nota: Nota) =>
  await useMethods.PATCH<Nota>(
    `${PathServices.NOTA}/${nota._id}`,
    { nota: nota.nota },
    {
      withCredentials: true,
    }
  );
