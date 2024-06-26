import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { Message } from "../servicios";
// El message es de serviciso importante, si lo elimnas de servicio habra errores
export const createArchivo = async (
  data: FormData | undefined,
  idPaciente: string
) =>
  await useMethods.POST<Message, FormData>(
    `${PathServices.ARCHIVO}/${idPaciente}`,
    data,
    {
      withCredentials: true,
    }
  );

export const deleteArchivo = async (idDoc: string, idPaciente: string) =>
  await useMethods.DELETE<Message>(
    `${PathServices.ARCHIVO}/${idDoc}/${idPaciente}`,
    {
      withCredentials: true,
    }
  );
