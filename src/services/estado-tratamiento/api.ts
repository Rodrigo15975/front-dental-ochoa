import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { GetAllEstadosServicios } from "./types/types";

export const getAllEstadosServicios = async () =>
  await useMethods.GET<GetAllEstadosServicios[]>(PathServices.ESTADO_SERVICIO, {
    withCredentials: true,
  });
