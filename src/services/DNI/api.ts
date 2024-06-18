import { useMethods } from "@/adapters/methods";
import { PathServices } from "@/services/pathServices";
import { DataDni } from "./types/typesUsuarios";

export const getDni = async (dni: string) =>
  await useMethods.GET<DataDni>(`${PathServices.DNI}${dni}`, {
    withCredentials: true,
  });
