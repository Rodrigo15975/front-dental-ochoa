import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { Message } from "../servicios";
import { CreatePrescripciones } from "./types/typesPrescripciones";

export const createPrescripciones = async (
  data: CreatePrescripciones,
  id: string
) =>
  await useMethods.POST<Message, CreatePrescripciones>(
    `${PathServices.PRESCRIPCIONES}/${id}`,
    data,
    {
      withCredentials: true,
    }
  );
