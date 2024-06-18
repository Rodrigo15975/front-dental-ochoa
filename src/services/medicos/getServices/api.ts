import { useMethods } from "@/adapters/methods";
import { PathServices } from "@/services/pathServices";
import { GetServices } from "./types/typesServices";

export const getServicesMedicos = async (id: string) =>
  await useMethods.GET<GetServices[]>(
    `${PathServices.MEDICOS}/servicios/${id}`,
    {
      withCredentials: true,
    }
  );
