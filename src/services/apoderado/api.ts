import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { GetDataApoderado } from "./types/typesApoderado";
import { ApoderadoEdit } from "@/components/GestionPacientes/AddPacientes/FormMenor/inputsPacienteMenor";

export const getDataApoderado = async (dni: string) =>
  await useMethods.GET<GetDataApoderado>(`${PathServices.APODERADO}/${dni}`, {
    withCredentials: true,
  });

export const updateDataApoderado = async (data: ApoderadoEdit) =>
  await useMethods.PATCH<ApoderadoEdit>(`${PathServices.APODERADO}`, data, {
    withCredentials: true,
  });
