import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { ReportForDate } from "./types/typesReportes";

export const getReportForDate = async (start: string, end: string) =>
  await useMethods.GET<ReportForDate[]>(
    `${PathServices.DETALLE}/reporte?fechaInicio=${start}&fechaFin=${end}`,
    {
      withCredentials: true,
    }
  );
