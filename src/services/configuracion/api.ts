import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { PartialEmpresa } from "./types/typeEmpresa";

export const createEmpresa = async (data: PartialEmpresa) =>
  await useMethods.POST<PartialEmpresa, PartialEmpresa>(
    `${PathServices.CONSULTORIO}`,
    data,
    {
      withCredentials: true,
    }
  );

export const getEmpresa = async () =>
  await useMethods.GET<PartialEmpresa>(PathServices.CONSULTORIO, {
    withCredentials: true,
  });

export const updateEmpresa = async (data: PartialEmpresa) => {
  const { _id } = data;
  return await useMethods.PATCH<PartialEmpresa>(
    `${PathServices.CONSULTORIO}/${_id}`,
    data,
    {
      withCredentials: true,
    }
  );
};
export const deleteEmpresa = async (data: PartialEmpresa) => {
  const { _id } = data;
  return await useMethods.DELETE<PartialEmpresa>(
    `${PathServices.CONSULTORIO}/${_id}`,
    {
      withCredentials: true,
    }
  );
};
