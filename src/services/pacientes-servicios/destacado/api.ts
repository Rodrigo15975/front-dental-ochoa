import { PathServices } from "@/services/pathServices";
import { FindTopPaciente, FindTopService } from "./types/typeDestacado";
import { useMethods } from "@/adapters/methods";

export const getPacienteDestacado = async () =>
  await useMethods.GET<FindTopPaciente>(`${PathServices.PACIENTES}/destacado`, {
    withCredentials: true,
  });

export const getServiceDestacado = async () =>
  await useMethods.GET<FindTopService>(`${PathServices.SERVICIOS}/destacado`, {
    withCredentials: true,
  });
