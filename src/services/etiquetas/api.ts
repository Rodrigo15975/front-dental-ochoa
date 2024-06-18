import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import {
  CreateEtiquetas,
  GetAllEtiquetas,
  Message,
} from "./types/typesEtiquetas";

export const getAllEtiquetas = async () =>
  await useMethods.GET<GetAllEtiquetas[]>(PathServices.ETIQUETAS, {
    withCredentials: true,
  });

export const createEtiquetas = async (data: CreateEtiquetas) =>
  await useMethods.POST<Message, CreateEtiquetas>(
    `${PathServices.ETIQUETAS}/asignar`,
    data,
    {
      withCredentials: true,
    }
  );

export const deleteEtiquetas = async (id: string, idPaciente: string) =>
  await useMethods.DELETE<Message>(
    `${PathServices.ETIQUETAS}/${id}/${idPaciente}`,
    {
      withCredentials: true,
    }
  );
