import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { DataRuc } from "@/store/storeGetDatRuc/types/typesGetDataRuc";

export const getRucData = async (ruc: string) =>
  await useMethods.GET<DataRuc>(`${PathServices.RUC}${ruc}`, {
    withCredentials: true,
  });
