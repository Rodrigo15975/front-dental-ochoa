import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { Message } from "../servicios";
import { CreateHorario, GetHorario } from "./types/typesHorario";

export const getHorario = async () =>
  await useMethods.GET<GetHorario>(PathServices.HORARIO, {
    withCredentials: true,
  });

export const createHorario = async (
  createHorario: CreateHorario,
  id: string
) => {
  if (id)
    return useMethods.PATCH<CreateHorario>(
      `${PathServices.HORARIO}/${id}`,
      createHorario,
      {
        withCredentials: true,
      }
    );

  return useMethods.POST<Message, CreateHorario>(
    `${PathServices.HORARIO}`,
    createHorario,
    {
      withCredentials: true,
    }
  );
};
