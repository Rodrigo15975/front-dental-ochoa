import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { MonthlyStats } from "./types/typesStadisticasPacientesNuevos";

export const getAllStadisticasPacientesNuevos = async () =>
  useMethods.GET<MonthlyStats[]>(
    `${PathServices.PACIENTES}/stadisticasPacientesNuevos`,
    {
      withCredentials: true,
    }
  );
