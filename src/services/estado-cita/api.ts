import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { GetAllEstadosCitas } from "./types/typeEstadoCita";

export const getAllEstadosCitas = async () =>
  await useMethods.GET<GetAllEstadosCitas[]>(PathServices.ESTADO_CITA, {
    withCredentials: true,
  });
