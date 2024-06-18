import { useMethods } from "@/adapters/methods";
import { CreateHistorialClinica } from "./types/typesHistorialClinica";
import { Message } from "../servicios";
import { PathServices } from "../pathServices";

export const createHistorialClinica = async (
  data: CreateHistorialClinica,
  id: string
) =>
  await useMethods.POST<Message, CreateHistorialClinica>(
    `${PathServices.HISTORIAL_CLINICA}/${id}`,
    data,
    {
      withCredentials: true,
    }
  );
