import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { Message } from "../servicios";
import { CreateReceta } from "./types/typesRecetas";

export const createRecetas = async (data: CreateReceta, id: string) =>
  await useMethods.POST<Message, CreateReceta>(
    `${PathServices.RECETAS}/${id}`,
    data,
    {
      withCredentials: true,
    }
  );
